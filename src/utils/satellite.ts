import * as satellite from "satellite.js";

export const EARTH_RADIUS_KM = 6371;

export type SatelliteTle = {
  noradId: number;
  name: string;
  line1: string;
  line2: string;
};

export type TrackedSatellite = SatelliteTle & {
  satrec: satellite.SatRec;
  periodSeconds: number;
};

export type OrbitPoint = { lat: number; lng: number; alt: number };

export type SatellitePosition = OrbitPoint & {
  noradId: number;
  name: string;
  altitudeKm: number;
  velocityKph: number | null;
  color: string;
};

export type LocationPoint = { lat: number; lng: number; name: string };

// Featured satellite colors
const FEATURED_COLORS = new Map<number, string>([
  [25544, "#ff4d4f"], // ISS
  [20580, "#7dd3fc"], // Hubble
  [25994, "#34d399"], // Terra
  [33591, "#fbbf24"], // NOAA 19
]);

// Altitude-based colors
const ALTITUDE_COLORS = {
  leo: "#67e8f9",    // < 2000 km (Cyan)
  meo: "#a78bfa",    // < 20000 km (Purple)
  geo: "#f9a8d4",    // >= 20000 km (Pink)
} as const;

export const getSatelliteColor = (noradId: number, altitudeKm: number): string => {
  const featuredColor = FEATURED_COLORS.get(noradId);
  if (featuredColor) return featuredColor;
  if (altitudeKm < 2000) return ALTITUDE_COLORS.leo;
  if (altitudeKm < 20000) return ALTITUDE_COLORS.meo;
  return ALTITUDE_COLORS.geo;
};

export const formatCoordinate = (value: number, positive: string, negative: string): string =>
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

export const buildTrackedSatellite = (tle: SatelliteTle): TrackedSatellite | null => {
  const satrec = satellite.twoline2satrec(tle.line1, tle.line2);
  if (satrec.error) return null;
  return {
    ...tle,
    satrec,
    periodSeconds: ((2 * Math.PI) / satrec.no) * 60,
  };
};

// Estimate altitude from orbital period (simplified)
export const estimateAltitudeFromPeriod = (periodSeconds: number): number => {
  const GM = 3.986e14; // Earth's gravitational parameter in m^3/s^2
  const T = periodSeconds;
  const a = Math.pow((T * T * GM) / (4 * Math.PI * Math.PI), 1/3);
  const altitudeMeters = a - EARTH_RADIUS_KM * 1000;
  return altitudeMeters / 1000; // Convert to km
};

// Classify satellite by altitude
export type AltitudeClass = 'leo' | 'meo' | 'geo';

export const getAltitudeClass = (altitudeKm: number): AltitudeClass => {
  if (altitudeKm < 2000) return 'leo';
  if (altitudeKm < 20000) return 'meo';
  return 'geo';
};

// Altitude filters
export const ALTITUDE_FILTERS = {
  all: { label: 'All', value: 'all' },
  leo: { label: 'LEO (< 2000 km)', value: 'leo' },
  meo: { label: 'MEO (2-20k km)', value: 'meo' },
  geo: { label: 'GEO (20k+ km)', value: 'geo' },
} as const;

export type AltitudeFilter = keyof typeof ALTITUDE_FILTERS;
