import { useState, useCallback, useEffect, useRef } from "react";
import axios from "axios";
import { Settings } from "./useSettings";
import {
  SatelliteTle,
  SatelliteCatalogEntry,
  buildCatalogEntry,
  parseTleCatalog,
} from "../utils/satellite";
import {
  readCache,
  writeCache,
  SATELLITE_CACHE_TIMESTAMP_KEY,
  isCacheFresh,
} from "../utils/cache";

const CELESTRAK_ACTIVE_URL =
  "https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=TLE";
const DEFAULT_NORAD_ID = 25544;

export const useSatelliteCatalog = (
  settings?: Pick<Settings, "autoRefresh" | "refreshIntervalHours">,
) => {
  const [trackedSatellites, setTrackedSatellites] = useState<
    SatelliteCatalogEntry[]
  >([]);
  const [selectedNoradId, setSelectedNoradId] =
    useState<number>(DEFAULT_NORAD_ID);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [statusMessage, setStatusMessage] = useState<string>(
    "Loading the active satellite catalog...",
  );
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const refreshInProgressRef = useRef(false);

  // Apply catalog to state
  const applyCatalog = useCallback(
    (catalog: SatelliteTle[], message: string) => {
      const tracked = catalog
        .map(buildCatalogEntry)
        .filter((item): item is SatelliteCatalogEntry => Boolean(item));
      setTrackedSatellites(tracked);
      setStatusMessage(
        message.replace("{count}", tracked.length.toLocaleString()),
      );
      setSelectedNoradId((current) =>
        tracked.some((item) => item.noradId === current)
          ? current
          : (tracked[0]?.noradId ?? DEFAULT_NORAD_ID),
      );
      let timestamp: string | null = null;
      try {
        timestamp = localStorage.getItem(SATELLITE_CACHE_TIMESTAMP_KEY);
      } catch {
        /* Storage can be disabled. */
      }
      setLastUpdated(timestamp ?? new Date().toISOString());
    },
    [],
  );

  // Force refresh catalog
  const refreshCatalog = useCallback(async () => {
    if (refreshInProgressRef.current) return;
    refreshInProgressRef.current = true;
    setIsLoading(true);
    setStatusMessage("Fetching fresh satellite catalog from CelesTrak...");

    try {
      const response = await axios.get<string>(CELESTRAK_ACTIVE_URL);
      const catalog = parseTleCatalog(response.data);
      writeCache(catalog);
      applyCatalog(
        catalog,
        "Tracking {count} active satellites from CelesTrak.",
      );
    } catch (error) {
      console.error("Error fetching active satellite catalog:", error);
      const staleCache = readCache(true);
      if (staleCache) {
        applyCatalog(
          staleCache,
          "CelesTrak is unavailable; tracking {count} satellites from stale cache.",
        );
      } else {
        setStatusMessage(
          "Unable to load the satellite catalog. Check your connection and refresh.",
        );
      }
    } finally {
      refreshInProgressRef.current = false;
      setIsLoading(false);
    }
  }, [applyCatalog]);

  // Load catalog on mount
  useEffect(() => {
    const cached = readCache(true);
    let timestamp: string | null = null;
    try {
      timestamp = localStorage.getItem(SATELLITE_CACHE_TIMESTAMP_KEY);
    } catch {
      /* Storage can be disabled. */
    }

    if (cached && isCacheFresh(timestamp)) {
      applyCatalog(cached, "Tracking {count} active satellites from cache.");
      setLastUpdated(timestamp);
      setIsLoading(false);
      return;
    }

    // Keep stale data visible while refreshing it.
    if (cached) {
      applyCatalog(
        cached,
        "Tracking {count} active satellites from stale cache (updating...)",
      );
      setLastUpdated(timestamp);
    }

    // Fetch update
    refreshCatalog();
  }, [applyCatalog, refreshCatalog]);

  useEffect(() => {
    if (settings?.autoRefresh === false) return;
    let timeout: number | undefined;
    const schedule = () => {
      if (timeout !== undefined) window.clearTimeout(timeout);
      const interval = (settings?.refreshIntervalHours ?? 8) * 60 * 60 * 1000;
      timeout = window.setTimeout(() => {
        void refreshCatalog().finally(schedule);
      }, interval);
    };
    schedule();
    return () => {
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, [refreshCatalog, settings?.autoRefresh, settings?.refreshIntervalHours]);

  // Get selected satellite
  const getSelectedSatellite = useCallback((): SatelliteCatalogEntry | null => {
    return (
      trackedSatellites.find((item) => item.noradId === selectedNoradId) ?? null
    );
  }, [trackedSatellites, selectedNoradId]);

  // Select satellite
  const selectSatellite = useCallback((noradId: number) => {
    setSelectedNoradId(noradId);
  }, []);

  return {
    trackedSatellites,
    selectedNoradId,
    isLoading,
    statusMessage,
    lastUpdated,
    getSelectedSatellite,
    selectSatellite,
    refreshCatalog,
  };
};
