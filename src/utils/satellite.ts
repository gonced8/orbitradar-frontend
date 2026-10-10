import * as satellite from "satellite.js";
import type { OMMJsonObject } from "satellite.js";

export const EARTH_RADIUS_KM = 6371;

type SatelliteIdentity = {
  noradId: number;
  name: string;
};

export type SatelliteTle = SatelliteIdentity &
  (
    | { line1: string; line2: string; omm?: never }
    | { omm: OMMJsonObject; line1?: never; line2?: never }
  );

export type SatelliteCatalogSnapshot = {
  schemaVersion: 1;
  fetchedAt: string;
  satellites: OMMJsonObject[];
};

export type OmmSatelliteInput = Record<string, unknown>;

export const normalizeOmmSatellite = (
  input: OmmSatelliteInput,
): SatelliteTle | null => {
  const noradId = Number(input.NORAD_CAT_ID);
  const meanMotion = Number(input.MEAN_MOTION);
  const epoch = typeof input.EPOCH === "string" ? input.EPOCH : "";
  const finiteFields = [
    input.ECCENTRICITY,
    input.INCLINATION,
    input.RA_OF_ASC_NODE,
    input.ARG_OF_PERICENTER,
    input.MEAN_ANOMALY,
  ].map(Number);
  if (
    !Number.isSafeInteger(noradId) ||
    noradId < 1 ||
    !Number.isFinite(meanMotion) ||
    meanMotion <= 0 ||
    Number.isNaN(Date.parse(epoch)) ||
    finiteFields.some((value) => !Number.isFinite(value)) ||
    finiteFields[0] < 0 ||
    finiteFields[0] >= 1 ||
    finiteFields[1] < 0 ||
    finiteFields[1] > 180
  )
    return null;

  const name =
    typeof input.OBJECT_NAME === "string" && input.OBJECT_NAME.trim()
      ? input.OBJECT_NAME.trim()
      : `NORAD ${noradId}`;
  const optionalNumber = (value: unknown) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  };
  const omm = {
    ...input,
    OBJECT_NAME: name,
    OBJECT_ID:
      typeof input.OBJECT_ID === "string" && input.OBJECT_ID
        ? input.OBJECT_ID
        : `NORAD ${noradId}`,
    EPOCH: epoch,
    MEAN_MOTION: meanMotion,
    ECCENTRICITY: finiteFields[0],
    INCLINATION: finiteFields[1],
    RA_OF_ASC_NODE: finiteFields[2],
    ARG_OF_PERICENTER: finiteFields[3],
    MEAN_ANOMALY: finiteFields[4],
    BSTAR: optionalNumber(input.BSTAR),
    MEAN_MOTION_DOT: optionalNumber(input.MEAN_MOTION_DOT),
    MEAN_MOTION_DDOT: optionalNumber(input.MEAN_MOTION_DDOT),
    ELEMENT_SET_NO: optionalNumber(input.ELEMENT_SET_NO),
    NORAD_CAT_ID: noradId,
  } satisfies OMMJsonObject;

  return { noradId, name, omm };
};

export const parseOmmCatalogSnapshot = (
  input: unknown,
): { satellites: SatelliteTle[]; fetchedAt: string } => {
  if (
    !input ||
    typeof input !== "object" ||
    !("schemaVersion" in input) ||
    input.schemaVersion !== 1 ||
    !("fetchedAt" in input) ||
    typeof input.fetchedAt !== "string" ||
    Number.isNaN(Date.parse(input.fetchedAt)) ||
    !("satellites" in input) ||
    !Array.isArray(input.satellites)
  ) {
    throw new Error("The shared satellite catalog has an invalid format.");
  }
  const satellites = input.satellites
    .map((record) =>
      record && typeof record === "object"
        ? normalizeOmmSatellite(record as OmmSatelliteInput)
        : null,
    )
    .filter((record): record is SatelliteTle => Boolean(record));
  if (!satellites.length)
    throw new Error("The shared satellite catalog contains no valid records.");
  return { satellites, fetchedAt: input.fetchedAt };
};

export const isSatelliteTle = (value: unknown): value is SatelliteTle => {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  if (!Number.isSafeInteger(record.noradId) || typeof record.name !== "string")
    return false;
  if (record.omm && typeof record.omm === "object") {
    const normalized = normalizeOmmSatellite(record.omm as OmmSatelliteInput);
    return normalized?.noradId === record.noradId;
  }
  return typeof record.line1 === "string" && typeof record.line2 === "string";
};

export type SatelliteCatalogEntry = SatelliteTle & {
  periodSeconds: number;
};

export type TrackedSatellite = SatelliteCatalogEntry & {
  satrec: satellite.SatRec;
};

export type OrbitPoint = { lat: number; lng: number; alt: number };

export type SatellitePosition = OrbitPoint & {
  noradId: number;
  name: string;
  altitudeKm: number;
  velocityKph: number | null;
  color: string;
  altitudeClass: AltitudeClass;
};

export type LocationPoint = { lat: number; lng: number; name: string };

// Featured satellite colors
const FEATURED_COLORS = new Map<number, string>([
  [25544, "#ff9500"], // ISS
  [20580, "#00f0ff"], // Hubble
  [25994, "#7cff4f"], // Terra
  [33591, "#ffd400"], // NOAA 19
]);

// Altitude-based colors
export const ALTITUDE_COLORS = {
  leo: "#ff3b30", // < 2000 km (Red)
  meo: "#ffd400", // < 20000 km (Yellow)
  geo: "#ff4fdb", // >= 20000 km (Magenta)
} as const;

export const getSatelliteColor = (
  noradId: number,
  altitudeKm: number,
): string => {
  const featuredColor = FEATURED_COLORS.get(noradId);
  if (featuredColor) return featuredColor;
  if (altitudeKm < 2000) return ALTITUDE_COLORS.leo;
  if (altitudeKm < 20000) return ALTITUDE_COLORS.meo;
  return ALTITUDE_COLORS.geo;
};

export const formatCoordinate = (
  value: number,
  positive: string,
  negative: string,
): string =>
  `${Math.abs(value).toFixed(2)}\u00b0 ${value >= 0 ? positive : negative}`;

export const parseTleCatalog = (rawTle: string): SatelliteTle[] => {
  const lines = rawTle
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const catalog: SatelliteTle[] = [];

  for (let index = 0; index < lines.length - 2; index += 1) {
    const name = lines[index];
    const line1 = lines[index + 1];
    const line2 = lines[index + 2];
    if (!line1.startsWith("1 ") || !line2.startsWith("2 ")) continue;

    const noradId = Number.parseInt(line1.slice(2, 7).trim(), 10);
    if (!Number.isFinite(noradId)) continue;
    catalog.push({ noradId, name, line1, line2 });
    index += 2;
  }

  if (catalog.length === 0) {
    throw new Error("CelesTrak returned an unexpected TLE catalog.");
  }
  return catalog;
};

export const buildTrackedSatellite = (
  tle: SatelliteTle,
): TrackedSatellite | null => {
  const satrec = tle.omm
    ? satellite.json2satrec(tle.omm)
    : satellite.twoline2satrec(tle.line1!, tle.line2!);
  if (satrec.error) return null;
  return {
    ...tle,
    satrec,
    periodSeconds: ((2 * Math.PI) / satrec.no) * 60,
  };
};

export const buildCatalogEntry = (
  tle: SatelliteTle,
): SatelliteCatalogEntry | null => {
  const meanMotionRevolutionsPerDay = tle.omm
    ? Number(tle.omm.MEAN_MOTION)
    : Number.parseFloat(tle.line2!.slice(52, 63));
  if (
    !Number.isFinite(meanMotionRevolutionsPerDay) ||
    meanMotionRevolutionsPerDay <= 0
  )
    return null;
  return { ...tle, periodSeconds: 86400 / meanMotionRevolutionsPerDay };
};

// satellite.js mean motion is radians per minute; return altitude in km.
export const estimateAltitudeFromPeriod = (periodSeconds: number): number => {
  const GM = 3.986e14; // Earth's gravitational parameter in m^3/s^2
  const T = periodSeconds;
  const a = Math.pow((T * T * GM) / (4 * Math.PI * Math.PI), 1 / 3);
  const altitudeMeters = a - EARTH_RADIUS_KM * 1000;
  return altitudeMeters / 1000; // Convert to km
};

// Classify satellite by altitude
export type AltitudeClass = "leo" | "meo" | "geo";

export const getAltitudeClass = (altitudeKm: number): AltitudeClass => {
  if (altitudeKm < 2000) return "leo";
  if (altitudeKm < 20000) return "meo";
  return "geo";
};

export const altitudeToGlobeRadius = (altitudeKm: number): number =>
  Math.max(altitudeKm / EARTH_RADIUS_KM, 0.0005);

// Altitude filters
export const ALTITUDE_FILTERS = {
  all: { label: "All", value: "all" },
  leo: { label: "LEO (< 2000 km)", value: "leo" },
  meo: { label: "MEO (2-20k km)", value: "meo" },
  geo: { label: "GEO (20k+ km)", value: "geo" },
} as const;

export type AltitudeFilter = keyof typeof ALTITUDE_FILTERS;
