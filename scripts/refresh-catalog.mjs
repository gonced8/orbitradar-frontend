import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { json2satrec } from "satellite.js";

export const SOURCE_URL =
  "https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=JSON";
export const UPDATE_INTERVAL_MS = 2 * 60 * 60 * 1000;
const MINIMUM_RECORDS = 1000;
const SOURCE_RETRY_INTERVAL_MS = 4 * 60 * 60 * 1000;
const REQUEST_TIMEOUT_MS = 30_000;

const timestamp = (date) => date.toISOString();

export function normalizeSourceCatalog(
  input,
  fetchedAt,
  minimumRecords = MINIMUM_RECORDS,
) {
  if (!Array.isArray(input))
    throw new Error("Source response was not a catalog array.");

  const seen = new Set();
  const satellites = [];
  for (const record of input) {
    if (!record || typeof record !== "object") continue;
    const id = Number(record.NORAD_CAT_ID);
    if (!Number.isSafeInteger(id) || id < 1 || seen.has(id)) continue;
    const normalized = {
      ...record,
      NORAD_CAT_ID: id,
      OBJECT_NAME:
        typeof record.OBJECT_NAME === "string" && record.OBJECT_NAME.trim()
          ? record.OBJECT_NAME.trim()
          : `NORAD ${id}`,
      OBJECT_ID:
        typeof record.OBJECT_ID === "string" && record.OBJECT_ID
          ? record.OBJECT_ID
          : `NORAD ${id}`,
      EPOCH: record.EPOCH,
      MEAN_MOTION: Number(record.MEAN_MOTION),
      ECCENTRICITY: Number(record.ECCENTRICITY),
      INCLINATION: Number(record.INCLINATION),
      RA_OF_ASC_NODE: Number(record.RA_OF_ASC_NODE),
      ARG_OF_PERICENTER: Number(record.ARG_OF_PERICENTER),
      MEAN_ANOMALY: Number(record.MEAN_ANOMALY),
      BSTAR: Number(record.BSTAR ?? 0),
      MEAN_MOTION_DOT: Number(record.MEAN_MOTION_DOT ?? 0),
      MEAN_MOTION_DDOT: Number(record.MEAN_MOTION_DDOT ?? 0),
      ELEMENT_SET_NO: Number(record.ELEMENT_SET_NO ?? 0),
    };
    if (
      typeof normalized.EPOCH !== "string" ||
      Number.isNaN(Date.parse(normalized.EPOCH)) ||
      !Number.isFinite(normalized.MEAN_MOTION) ||
      normalized.MEAN_MOTION <= 0 ||
      !Number.isFinite(normalized.ECCENTRICITY) ||
      normalized.ECCENTRICITY < 0 ||
      normalized.ECCENTRICITY >= 1 ||
      !Number.isFinite(normalized.INCLINATION) ||
      normalized.INCLINATION < 0 ||
      normalized.INCLINATION > 180 ||
      ![
        normalized.RA_OF_ASC_NODE,
        normalized.ARG_OF_PERICENTER,
        normalized.MEAN_ANOMALY,
        normalized.BSTAR,
        normalized.MEAN_MOTION_DOT,
        normalized.MEAN_MOTION_DDOT,
        normalized.ELEMENT_SET_NO,
      ].every(Number.isFinite)
    )
      continue;
    try {
      if (json2satrec(normalized).error) continue;
    } catch {
      continue;
    }
    seen.add(id);
    satellites.push(normalized);
  }

  if (satellites.length < minimumRecords) {
    throw new Error(
      `Source catalog validation failed (${satellites.length} usable records).`,
    );
  }
  return { schemaVersion: 1, fetchedAt, satellites };
}

async function atomicJson(file, value) {
  await mkdir(path.dirname(file), { recursive: true });
  const temporary = `${file}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value)}\n`, "utf8");
  await rename(temporary, file);
}

async function readJson(file) {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch {
    return null;
  }
}

function safeStatus(previous, fields) {
  return {
    schemaVersion: 1,
    state: "error",
    attemptedAt: timestamp(new Date()),
    fetchedAt: previous?.fetchedAt ?? null,
    retryAt: null,
    recordCount: previous?.recordCount ?? null,
    manualProbeRequired: false,
    message:
      "Catalog refresh encountered an error; the last valid snapshot is retained.",
    ...fields,
  };
}

export async function refreshCatalog({
  siteDir = "site",
  forceProbe = false,
  now = new Date(),
  fetchImpl = fetch,
  minimumRecords = MINIMUM_RECORDS,
} = {}) {
  const dataDir = path.join(siteDir, "data");
  const catalogFile = path.join(dataDir, "catalog.json");
  const statusFile = path.join(dataDir, "catalog-status.json");
  const previous = await readJson(statusFile);
  const nowMs = now.getTime();

  if (
    !forceProbe &&
    previous?.state === "paused" &&
    previous.manualProbeRequired
  ) {
    return { queried: false, state: "paused" };
  }
  if (
    !forceProbe &&
    previous?.state === "ready" &&
    Date.parse(previous.fetchedAt) + UPDATE_INTERVAL_MS > nowMs
  ) {
    return { queried: false, state: "ready" };
  }
  if (
    !forceProbe &&
    previous?.state === "error" &&
    Date.parse(previous.retryAt) > nowMs
  ) {
    return { queried: false, state: previous.state };
  }

  let response;
  try {
    response = await fetchImpl(SOURCE_URL, {
      headers: { "User-Agent": "OrbitRadar catalog publisher" },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      redirect: "manual",
    });
  } catch {
    const status = safeStatus(previous, {
      attemptedAt: timestamp(now),
      retryAt: timestamp(new Date(nowMs + SOURCE_RETRY_INTERVAL_MS)),
      message:
        "Catalog source could not be reached; the last valid snapshot is retained.",
    });
    await atomicJson(statusFile, status);
    return { queried: true, state: status.state };
  }

  if (!response.ok) {
    let body = "";
    try {
      body = await response.text();
    } catch {
      /* Keep diagnostics sanitized. */
    }
    const noUpdate = body.match(
      /GP data has not updated since your last successful download of GROUP=active at ([^\r\n.]+)/i,
    );
    const description =
      response.status === 403 && noUpdate
        ? "CelesTrak reports that the active group has not updated."
        : `CelesTrak returned HTTP ${response.status}.`;
    const status = safeStatus(previous, {
      state: "paused",
      attemptedAt: timestamp(now),
      manualProbeRequired: true,
      message: `${description} Automatic requests are stopped; an operator probe is required.`,
    });
    await atomicJson(statusFile, status);
    return { queried: true, state: status.state };
  }

  try {
    const snapshot = normalizeSourceCatalog(
      await response.json(),
      timestamp(now),
      minimumRecords,
    );
    await atomicJson(catalogFile, snapshot);
    await atomicJson(statusFile, {
      schemaVersion: 1,
      state: "ready",
      attemptedAt: timestamp(now),
      fetchedAt: snapshot.fetchedAt,
      retryAt: null,
      recordCount: snapshot.satellites.length,
      manualProbeRequired: false,
      message: "Shared satellite catalog updated successfully.",
    });
    return {
      queried: true,
      state: "ready",
      recordCount: snapshot.satellites.length,
    };
  } catch {
    const status = safeStatus(previous, {
      attemptedAt: timestamp(now),
      retryAt: timestamp(new Date(nowMs + SOURCE_RETRY_INTERVAL_MS)),
      message:
        "Source catalog failed validation; the last valid snapshot is retained.",
    });
    await atomicJson(statusFile, status);
    return { queried: true, state: status.state };
  }
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
) {
  const siteIndex = process.argv.indexOf("--site-dir");
  const siteDir = siteIndex >= 0 ? process.argv[siteIndex + 1] : "site";
  const forceProbe = process.argv.includes("--force-probe");
  const result = await refreshCatalog({ siteDir, forceProbe });
  console.log(
    `Catalog publisher: ${result.state}${result.queried ? " (source queried)" : " (source request skipped)"}`,
  );
}
