import json
import tempfile
import unittest
from datetime import datetime, timezone
from pathlib import Path
from unittest import mock

import numpy as np
from PIL import Image
from io import BytesIO

from refresh_clouds import refresh_cloud_image, render_cloud_texture


class CloudTextureTests(unittest.TestCase):
    def test_rolls_zero_longitude_to_texture_center_boundary(self):
        values = np.zeros((180, 360), dtype=np.float32)
        values[:, 180] = 100
        image = Image.open(BytesIO(render_cloud_texture(values, 360, 180)))
        alpha = np.asarray(image)[..., 3]
        self.assertGreater(alpha[:, 0].mean(), 0)
        self.assertLess(alpha[:, 180].mean(), 1)

    def test_clear_sky_is_transparent_and_overcast_is_white(self):
        values = np.zeros((180, 360), dtype=np.float32)
        values[:, 180] = 100
        image = Image.open(BytesIO(render_cloud_texture(values, 360, 180)))
        pixels = np.asarray(image)
        self.assertGreater(int(pixels[0, 0, 3]), 150)
        self.assertEqual(int(pixels[0, 180, 3]), 0)
        self.assertEqual(tuple(pixels[0, 0, :3]), (255, 255, 255))

    def test_rejects_partial_grid(self):
        with self.assertRaises(ValueError):
            render_cloud_texture(np.zeros((2, 2), dtype=np.float32))


class CloudPublisherTests(unittest.TestCase):
    NOW = datetime(2026, 10, 10, 21, tzinfo=timezone.utc)

    def setUp(self):
        self.values = np.full((180, 360), 50, dtype=np.float32)

    def run_publisher(self, root, previous=None, fetch_error=None):
        data_dir = Path(root) / "data"
        data_dir.mkdir(parents=True, exist_ok=True)
        if previous is not None:
            (data_dir / "cloud-status.json").write_text(json.dumps(previous))
        with mock.patch(
            "refresh_clouds.fetch_grib", side_effect=fetch_error
        ) as fetch, mock.patch(
            "refresh_clouds.read_cloud_field",
            return_value=(self.values, 360, 180),
        ):
            result = refresh_cloud_image(root, now=self.NOW)
        return result, fetch, data_dir

    def test_publishes_new_image_and_status(self):
        with tempfile.TemporaryDirectory() as root:
            result, fetch, data_dir = self.run_publisher(root)
            status = json.loads((data_dir / "cloud-status.json").read_text())
            self.assertEqual(result["state"], "ready")
            self.assertTrue(fetch.called)
            self.assertTrue((data_dir / "clouds/latest.png").is_file())
            self.assertEqual(status["sourceId"], "noaa-gfs-tcc")

    def test_skips_fresh_compatible_cache(self):
        fetched_at = "2026-10-10T18:30:00Z"
        previous = {
            "state": "ready",
            "sourceId": "noaa-gfs-tcc",
            "fetchedAt": fetched_at,
        }
        with tempfile.TemporaryDirectory() as root:
            data_dir = Path(root) / "data"
            (data_dir / "clouds").mkdir(parents=True)
            (data_dir / "clouds/latest.png").write_bytes(b"cached")
            result, fetch, _ = self.run_publisher(root, previous=previous)
            self.assertEqual(result, {"queried": False, "state": "ready"})
            fetch.assert_not_called()

    def test_replaces_legacy_metadata(self):
        previous = {"state": "ready", "sourceId": "nasa-modis", "fetchedAt": "old"}
        with tempfile.TemporaryDirectory() as root:
            result, fetch, data_dir = self.run_publisher(root, previous=previous)
            status = json.loads((data_dir / "cloud-status.json").read_text())
            self.assertEqual(result["state"], "ready")
            self.assertTrue(fetch.called)
            self.assertEqual(status["sourceId"], "noaa-gfs-tcc")

    def test_failed_refresh_keeps_valid_cache_stale(self):
        previous = {
            "state": "ready",
            "sourceId": "noaa-gfs-tcc",
            "fetchedAt": "2026-10-10T12:00:00Z",
            "validAt": "2026-10-10T12:00:00Z",
        }
        with tempfile.TemporaryDirectory() as root:
            data_dir = Path(root) / "data"
            (data_dir / "clouds").mkdir(parents=True)
            (data_dir / "clouds/latest.png").write_bytes(b"cached")
            result, _, _ = self.run_publisher(
                root, previous=previous, fetch_error=RuntimeError("offline")
            )
            status = json.loads((data_dir / "cloud-status.json").read_text())
            self.assertEqual(result["state"], "stale")
            self.assertEqual(status["state"], "stale")
            self.assertEqual(status["fetchedAt"], previous["fetchedAt"])

    def test_failed_refresh_without_cache_remains_error(self):
        previous = {
            "state": "ready",
            "sourceId": "noaa-gfs-tcc",
            "fetchedAt": "2026-10-10T12:00:00Z",
        }
        with tempfile.TemporaryDirectory() as root:
            result, _, data_dir = self.run_publisher(
                root, previous=previous, fetch_error=RuntimeError("offline")
            )
            status = json.loads((data_dir / "cloud-status.json").read_text())
            self.assertEqual(result["state"], "error")
            self.assertEqual(status["state"], "error")
            self.assertIsNone(status["fetchedAt"])


if __name__ == "__main__":
    unittest.main()
