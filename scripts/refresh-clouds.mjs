import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import pngjs from "pngjs";

const { PNG } = pngjs;

export const CLOUD_SOURCE_URL =
  "https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi";
export const CLOUD_UPDATE_INTERVAL_MS = 6 * 60 * 60 * 1000;
export const CLOUD_LOOKBACK_DAYS = 3;
const REQUEST_TIMEOUT_MS = 30_000;
const WIDTH = 1024;
const HEIGHT = 512;

const COLOR_STOPS = [
  [0, 102, 0, 119],
  [6, 183, 15, 141],
  [12, 0, 0, 100],
  [19, 0, 0, 170],
  [25, 0, 0, 255],
  [31, 0, 136, 238],
  [38, 0, 80, 0],
  [44, 0, 136, 0],
  [50, 0, 220, 0],
  [57, 255, 255, 0],
  [63, 240, 190, 64],
  [69, 187, 136, 0],
  [75, 122, 90, 3],
  [81, 110, 0, 0],
  [88, 170, 0, 0],
  [95, 255, 0, 0],
];

const timestamp = (date) => date.toISOString();

const observationDate = (date) => date.toISOString().slice(0, 10);

const cloudColor = (fraction) => {
  for (let index = COLOR_STOPS.length - 1; index >= 0; index -= 1) {
    if (fraction >= COLOR_STOPS[index][0]) return COLOR_STOPS[index];
  }
  return COLOR_STOPS[0];
};

const closestCloudFraction = (red, green, blue) => {
  let closest = 0;
  let distance = Number.POSITIVE_INFINITY;
  for (let fraction = 0; fraction <= 100; fraction += 1) {
    const [, stopRed, stopGreen, stopBlue] = cloudColor(fraction);
    const candidateDistance =
      (red - stopRed) ** 2 + (green - stopGreen) ** 2 + (blue - stopBlue) ** 2;
    if (candidateDistance < distance) {
      distance = candidateDistance;
      closest = fraction;
    }
  }
  // WMS errors and map backgrounds can still arrive as valid PNG files.
  // Ignore pixels that are not close to the documented thematic palette.
  return distance <= 40 ** 2 ? closest : null;
};

export const renderCloudTexture = (input, validateDimensions = false) => {
  const source = PNG.sync.read(Buffer.from(input));
  if (
    validateDimensions &&
    (source.width !== WIDTH || source.height !== HEIGHT)
  )
    throw new Error("Cloud image dimensions do not match the requested map.");
  const output = new PNG({ width: source.width, height: source.height });
  let observedPixels = 0;
  for (let offset = 0; offset < source.data.length; offset += 4) {
    const sourceAlpha = source.data[offset + 3];
    const fraction =
      sourceAlpha === 0
        ? null
        : closestCloudFraction(
            source.data[offset],
            source.data[offset + 1],
            source.data[offset + 2],
          );
    if (fraction !== null) observedPixels += 1;
    const alpha =
      fraction === null ? 0 : Math.round(Math.pow(fraction / 100, 0.72) * 210);
    output.data[offset] = 255;
    output.data[offset + 1] = 255;
    output.data[offset + 2] = 255;
    output.data[offset + 3] = Math.min(alpha, sourceAlpha);
  }
  if (observedPixels < source.width * source.height * 0.005)
    throw new Error("Cloud image contains too little observed data.");
  return PNG.sync.write(output);
};

export const cloudImageUrl = (date) => {
  const params = new URLSearchParams({
    SERVICE: "WMS",
    REQUEST: "GetMap",
    VERSION: "1.1.1",
    LAYERS: "MODIS_Terra_Cloud_Fraction_Day",
    STYLES: "",
    FORMAT: "image/png",
    TRANSPARENT: "true",
    SRS: "EPSG:4326",
    WIDTH: String(WIDTH),
    HEIGHT: String(HEIGHT),
    BBOX: "-180,-90,180,90",
    TIME: observationDate(date),
  });
  return `${CLOUD_SOURCE_URL}?${params}`;
};

async function atomicWrite(file, contents) {
  await mkdir(path.dirname(file), { recursive: true });
  const temporary = `${file}.${process.pid}.tmp`;
  await writeFile(temporary, contents);
  await rename(temporary, file);
}

async function readJson(file) {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch {
    return null;
  }
}

const statusForFailure = (previous, now, message) => ({
  schemaVersion: 1,
  state: "error",
  attemptedAt: timestamp(now),
  fetchedAt: previous?.fetchedAt ?? null,
  observationDate: previous?.observationDate ?? null,
  source: "NASA GIBS MODIS Terra cloud fraction",
  message,
});

export async function refreshCloudImage({
  siteDir = "site",
  now = new Date(),
  fetchImpl = fetch,
  validateImageDimensions = true,
} = {}) {
  const dataDir = path.join(siteDir, "data");
  const imageFile = path.join(dataDir, "clouds", "latest.png");
  const statusFile = path.join(dataDir, "cloud-status.json");
  const previous = await readJson(statusFile);
  const nowMs = now.getTime();

  if (
    previous?.state === "ready" &&
    Date.parse(previous.fetchedAt) + CLOUD_UPDATE_INTERVAL_MS > nowMs
  ) {
    return {
      queried: false,
      state: "ready",
      observationDate: previous.observationDate,
    };
  }
  if (
    previous?.state === "error" &&
    Date.parse(previous.attemptedAt) + CLOUD_UPDATE_INTERVAL_MS > nowMs
  ) {
    return { queried: false, state: "error" };
  }

  let lastStatus = null;
  for (let offset = 0; offset <= CLOUD_LOOKBACK_DAYS; offset += 1) {
    const date = new Date(nowMs - offset * 24 * 60 * 60 * 1000);
    try {
      const response = await fetchImpl(cloudImageUrl(date), {
        headers: { "User-Agent": "OrbitRadar weather cache" },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      });
      lastStatus = response.status;
      if (!response.ok) continue;
      const body = await response.arrayBuffer();
      if (body.byteLength < 64) continue;

      let rendered;
      try {
        rendered = renderCloudTexture(body, validateImageDimensions);
      } catch {
        continue;
      }
      await atomicWrite(imageFile, rendered);
      await atomicWrite(
        statusFile,
        `${JSON.stringify({
          schemaVersion: 1,
          state: "ready",
          attemptedAt: timestamp(now),
          fetchedAt: timestamp(now),
          observationDate: observationDate(date),
          source: "NASA GIBS MODIS Terra cloud fraction",
          width: WIDTH,
          height: HEIGHT,
          message: "Shared daily cloud image updated successfully.",
        })}\n`,
      );
      return {
        queried: true,
        state: "ready",
        observationDate: observationDate(date),
      };
    } catch {
      // Try the previous observation date before retaining the last image.
    }
  }

  const message = lastStatus
    ? `NASA GIBS did not provide a usable cloud image (last HTTP status ${lastStatus}). The last valid image is retained.`
    : "NASA GIBS could not be reached. The last valid cloud image is retained.";
  await atomicWrite(
    statusFile,
    `${JSON.stringify(statusForFailure(previous, now, message))}\n`,
  );
  return { queried: true, state: "error" };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
) {
  const siteIndex = process.argv.indexOf("--site-dir");
  const siteDir = siteIndex >= 0 ? process.argv[siteIndex + 1] : "site";
  const result = await refreshCloudImage({ siteDir });
  console.log(
    `Weather publisher: ${result.state}${result.queried ? " (source queried)" : " (source request skipped)"}`,
  );
}
