// utils/cache.ts
// Cache management functions for localStorage

import { SatelliteTle } from "./satellite";

const CACHE_DURATION_MS = 8 * 60 * 60 * 1000; // 8 hours

export const SATELLITE_CACHE_KEY = "orbitradar_active_satellite_tles_v2";
export const SATELLITE_CACHE_TIMESTAMP_KEY =
  "orbitradar_active_satellite_timestamp_v2";

type SatelliteCache = { satellites: SatelliteTle[] };

export const isCacheFresh = (timestamp: string | null): boolean => {
  if (!timestamp) return false;
  const cachedAt = Date.parse(timestamp);
  const age = Date.now() - cachedAt;
  return !Number.isNaN(cachedAt) && age >= 0 && age < CACHE_DURATION_MS;
};

export const readCache = (allowStale = false): SatelliteTle[] | null => {
  try {
    const value = localStorage.getItem(SATELLITE_CACHE_KEY);
    const timestamp = localStorage.getItem(SATELLITE_CACHE_TIMESTAMP_KEY);
    if (!value || (!allowStale && !isCacheFresh(timestamp))) return null;
    const parsed = JSON.parse(value) as SatelliteCache;
    if (!Array.isArray(parsed.satellites)) return null;
    const valid = parsed.satellites.filter(
      (sat) =>
        sat &&
        Number.isSafeInteger(sat.noradId) &&
        typeof sat.name === "string" &&
        typeof sat.line1 === "string" &&
        typeof sat.line2 === "string",
    );
    return valid.length ? valid : null;
  } catch {
    try {
      localStorage.removeItem(SATELLITE_CACHE_KEY);
      localStorage.removeItem(SATELLITE_CACHE_TIMESTAMP_KEY);
    } catch {
      // Storage can be disabled or full.
    }
    return null;
  }
};

export const writeCache = (satellites: SatelliteTle[]): void => {
  try {
    localStorage.setItem(SATELLITE_CACHE_KEY, JSON.stringify({ satellites }));
    localStorage.setItem(
      SATELLITE_CACHE_TIMESTAMP_KEY,
      new Date().toISOString(),
    );
  } catch (error) {
    console.warn("Satellite catalog could not be cached:", error);
  }
};

// Clear cache
export const clearCache = (): void => {
  localStorage.removeItem(SATELLITE_CACHE_KEY);
  localStorage.removeItem(SATELLITE_CACHE_TIMESTAMP_KEY);
};
