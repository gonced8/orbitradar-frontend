"""Publish a seamless NOAA GFS total-cloud-cover texture for the globe."""

from __future__ import annotations

import argparse
import io
import json
import tempfile
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen

import numpy as np
from PIL import Image, ImageFilter
from eccodes import (
    codes_get,
    codes_get_array,
    codes_grib_new_from_file,
    codes_release,
)

SOURCE_ID = "noaa-gfs-tcc"
SOURCE_LABEL = "NOAA GFS total cloud cover"
UPDATE_INTERVAL = timedelta(hours=6)
WIDTH = 1024
HEIGHT = 512
NOMADS_URL = "https://nomads.ncep.noaa.gov/cgi-bin/filter_gfs_0p25.pl"
USER_AGENT = "OrbitRadar weather cache"


def atomic_write(path: Path, contents: bytes | str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(
        dir=path.parent, prefix=f".{path.name}.", delete=False
    ) as temporary:
        temporary.write(contents.encode() if isinstance(contents, str) else contents)
        temporary_path = Path(temporary.name)
    temporary_path.replace(path)


def read_json(path: Path) -> dict | None:
    try:
        return json.loads(path.read_text())
    except (OSError, json.JSONDecodeError):
        return None


def cycle_candidates(now: datetime) -> list[datetime]:
    current = now.replace(
        hour=(now.hour // 6) * 6, minute=0, second=0, microsecond=0
    )
    return [current - timedelta(hours=6 * offset) for offset in range(6)]


def gfs_url(cycle: datetime) -> str:
    cycle_date = cycle.strftime("%Y%m%d")
    cycle_hour = cycle.strftime("%H")
    params = {
        "file": f"gfs.t{cycle_hour}z.pgrb2.0p25.f000",
        "lev_entire_atmosphere": "on",
        "var_TCDC": "on",
        "dir": f"/gfs.{cycle_date}/{cycle_hour}/atmos",
    }
    return f"{NOMADS_URL}?{urlencode(params)}"


def fetch_grib(cycle: datetime) -> bytes:
    request = Request(gfs_url(cycle), headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=30) as response:
        body = response.read()
    if len(body) < 128 or not body.startswith(b"GRIB"):
        raise ValueError("NOAA returned a non-GRIB response")
    return body


def read_cloud_field(body: bytes) -> tuple[np.ndarray, int, int]:
    with tempfile.NamedTemporaryFile(suffix=".grib2") as temporary:
        temporary.write(body)
        temporary.flush()
        with open(temporary.name, "rb") as source:
            handle = codes_grib_new_from_file(source)
            if handle is None:
                raise ValueError("GRIB file contains no message")
            try:
                metadata = {
                    key: codes_get(handle, key)
                    for key in (
                        "shortName",
                        "name",
                        "typeOfLevel",
                        "gridType",
                        "Ni",
                        "Nj",
                        "latitudeOfFirstGridPointInDegrees",
                        "latitudeOfLastGridPointInDegrees",
                        "longitudeOfFirstGridPointInDegrees",
                        "longitudeOfLastGridPointInDegrees",
                    )
                }
                if metadata["shortName"] != "tcc" or metadata["typeOfLevel"] != "atmosphere":
                    raise ValueError(f"unexpected GRIB field: {metadata}")
                if metadata["gridType"] != "regular_ll":
                    raise ValueError("cloud field is not a regular latitude/longitude grid")
                nlon, nlat = int(metadata["Ni"]), int(metadata["Nj"])
                if (
                    nlon < 360
                    or nlat < 180
                    or metadata["latitudeOfFirstGridPointInDegrees"] != 90
                    or metadata["latitudeOfLastGridPointInDegrees"] != -90
                    or metadata["longitudeOfFirstGridPointInDegrees"] != 0
                    or metadata["longitudeOfLastGridPointInDegrees"] < 359
                ):
                    raise ValueError(f"cloud field does not cover the globe: {metadata}")
                values = np.asarray(codes_get_array(handle, "values"), dtype=np.float32)
            finally:
                codes_release(handle)
    if values.size != nlon * nlat or not np.isfinite(values).all():
        raise ValueError("cloud field contains missing or non-finite values")
    if float(values.min()) < 0 or float(values.max()) > 100:
        raise ValueError("cloud field is outside the expected 0-100% range")
    return values.reshape((nlat, nlon)), nlon, nlat


def render_cloud_texture(values: np.ndarray, output_width: int = WIDTH, output_height: int = HEIGHT) -> bytes:
    """Convert north-to-south 0-100% coverage into a smooth white alpha map."""
    if values.ndim != 2 or values.shape[1] < 360 or values.shape[0] < 180:
        raise ValueError("cloud field is too small")
    # GFS longitudes start at 0E. Move 180E to the left edge expected by the
    # globe's -180..180 equirectangular texture.
    shifted = np.roll(values, values.shape[1] // 2, axis=1)
    normalized = np.clip((shifted - 10.0) / 90.0, 0.0, 1.0)
    alpha = np.round(210.0 * np.power(normalized, 1.25)).astype(np.uint8)
    image = Image.fromarray(alpha, mode="L").resize(
        (output_width, output_height), Image.Resampling.LANCZOS
    )
    image = image.filter(ImageFilter.GaussianBlur(0.45))
    rgba = Image.new("RGBA", image.size, (255, 255, 255, 0))
    rgba.putalpha(image)
    output = io.BytesIO()
    rgba.save(output, format="PNG", optimize=True)
    return output.getvalue()


def status_for_failure(previous: dict | None, now: datetime, message: str) -> dict:
    previous_is_gfs = previous and previous.get("sourceId") == SOURCE_ID
    return {
        "schemaVersion": 2,
        "state": "stale" if previous_is_gfs else "error",
        "sourceId": SOURCE_ID,
        "source": SOURCE_LABEL,
        "attemptedAt": now.isoformat().replace("+00:00", "Z"),
        "fetchedAt": previous.get("fetchedAt") if previous_is_gfs else None,
        "validAt": previous.get("validAt") if previous_is_gfs else None,
        "modelCycle": previous.get("modelCycle") if previous_is_gfs else None,
        "forecastHour": 0,
        "width": WIDTH,
        "height": HEIGHT,
        "message": message,
    }


def refresh_cloud_image(site_dir: str = "site", now: datetime | None = None) -> dict:
    now = now or datetime.now(timezone.utc)
    data_dir = Path(site_dir) / "data"
    image_file = data_dir / "clouds" / "latest.png"
    status_file = data_dir / "cloud-status.json"
    previous = read_json(status_file)
    if (
        previous
        and previous.get("sourceId") == SOURCE_ID
        and previous.get("state") in {"ready", "stale"}
        and previous.get("fetchedAt")
    ):
        try:
            fetched_at = datetime.fromisoformat(previous["fetchedAt"].replace("Z", "+00:00"))
            if fetched_at + UPDATE_INTERVAL > now:
                return {"queried": False, "state": previous["state"]}
        except ValueError:
            pass

    last_error = "NOAA GFS was unavailable."
    for cycle in cycle_candidates(now):
        try:
            body = fetch_grib(cycle)
            values, _, _ = read_cloud_field(body)
            atomic_write(image_file, render_cloud_texture(values))
            fetched_at = now.isoformat().replace("+00:00", "Z")
            atomic_write(
                status_file,
                json.dumps(
                    {
                        "schemaVersion": 2,
                        "state": "ready",
                        "sourceId": SOURCE_ID,
                        "source": SOURCE_LABEL,
                        "attemptedAt": fetched_at,
                        "fetchedAt": fetched_at,
                        "validAt": cycle.isoformat().replace("+00:00", "Z"),
                        "modelCycle": cycle.strftime("%Y%m%dT%HZ"),
                        "forecastHour": 0,
                        "width": WIDTH,
                        "height": HEIGHT,
                        "message": "Seamless global cloud coverage updated successfully.",
                    },
                    indent=2,
                )
                + "\n",
            )
            return {"queried": True, "state": "ready", "modelCycle": cycle.strftime("%Y%m%dT%HZ")}
        except Exception as error:  # noqa: BLE001 - continue to the previous cycle
            last_error = str(error)

    atomic_write(status_file, json.dumps(status_for_failure(previous, now, last_error), indent=2) + "\n")
    return {"queried": True, "state": "stale" if previous and previous.get("sourceId") == SOURCE_ID else "error"}


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--site-dir", default="site")
    args = parser.parse_args()
    result = refresh_cloud_image(args.site_dir)
    print(f"Weather publisher: {result['state']}" + (" (source queried)" if result["queried"] else " (source request skipped)"))


if __name__ == "__main__":
    main()
