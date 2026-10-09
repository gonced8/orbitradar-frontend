// utils/cache.ts
// Cache management functions for localStorage

const CACHE_DURATION_MS = 8 * 60 * 60 * 1000; // 8 hours

export const SATELLITE_CACHE_KEY = "orbitradar_active_satellite_tles_v2";
export const SATELLITE_CACHE_TIMESTAMP_KEY =
  "orbitradar_active_satellite_timestamp_v2";

import { SatelliteTle } from "./satellite";

type SatelliteCache = { satellites: SatelliteTle[] };

export const isCacheFresh = (timestamp: string | null): boolean => {
  if (!timestamp) return false;
  const cachedAt = Date.parse(timestamp);
  return !Number.isNaN(cachedAt) && Date.now() - cachedAt < CACHE_DURATION_MS;
};

export const readCache = (allowStale = false): SatelliteTle[] | null => {
  const value = localStorage.getItem(SATELLITE_CACHE_KEY);
  const timestamp = localStorage.getItem(SATELLITE_CACHE_TIMESTAMP_KEY);
  if (!value || (!allowStale && !isCacheFresh(timestamp))) return null;

  try {
    const parsed = JSON.parse(value) as SatelliteCache;
    return Array.isArray(parsed.satellites) && parsed.satellites.length > 0
      ? parsed.satellites
      : null;
  } catch {
    localStorage.removeItem(SATELLITE_CACHE_KEY);
    localStorage.removeItem(SATELLITE_CACHE_TIMESTAMP_KEY);
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
