import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import {
  SatelliteTle,
  TrackedSatellite,
  buildTrackedSatellite,
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

export const useSatelliteCatalog = () => {
  const [trackedSatellites, setTrackedSatellites] = useState<
    TrackedSatellite[]
  >([]);
  const [selectedNoradId, setSelectedNoradId] =
    useState<number>(DEFAULT_NORAD_ID);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [statusMessage, setStatusMessage] = useState<string>(
    "Loading the active satellite catalog...",
  );
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  // Apply catalog to state
  const applyCatalog = useCallback(
    (catalog: SatelliteTle[], message: string) => {
      const tracked = catalog
        .map(buildTrackedSatellite)
        .filter((item): item is TrackedSatellite => Boolean(item));
      setTrackedSatellites(tracked);
      setStatusMessage(
        message.replace("{count}", tracked.length.toLocaleString()),
      );
      setSelectedNoradId((current) =>
        tracked.some((item) => item.noradId === current)
          ? current
          : (tracked[0]?.noradId ?? DEFAULT_NORAD_ID),
      );
      setLastUpdated(new Date().toISOString());
    },
    [],
  );

  // Force refresh catalog
  const refreshCatalog = useCallback(async () => {
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
      setIsLoading(false);
    }
  }, [applyCatalog]);

  // Load catalog on mount
  useEffect(() => {
    const cached = readCache();
    const timestamp = localStorage.getItem(SATELLITE_CACHE_TIMESTAMP_KEY);

    if (cached && isCacheFresh(timestamp)) {
      applyCatalog(cached, "Tracking {count} active satellites from cache.");
      setLastUpdated(timestamp);
      setIsLoading(false);
      return;
    }

    // If stale cache exists, use it while fetching update
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

  // Get selected satellite
  const getSelectedSatellite = useCallback((): TrackedSatellite | null => {
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
