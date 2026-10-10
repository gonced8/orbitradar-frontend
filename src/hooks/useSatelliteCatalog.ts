import { useState, useCallback, useEffect, useRef } from "react";
import { Settings } from "./useSettings";
import {
  SatelliteTle,
  SatelliteCatalogEntry,
  SatelliteCatalogSnapshot,
  buildCatalogEntry,
  parseOmmCatalogSnapshot,
} from "../utils/satellite";
import {
  readCache,
  readCacheSourceTimestamp,
  writeCache,
  SATELLITE_CACHE_TIMESTAMP_KEY,
  isCacheFresh,
} from "../utils/cache";

const CATALOG_URL = import.meta.env.VITE_CATALOG_URL ?? "/data/catalog.json";
const CATALOG_STATUS_URL = "/data/catalog-status.json";
const DEFAULT_NORAD_ID = 25544;

type CatalogPublisherStatus = {
  state?: "ready" | "paused" | "error";
  message?: string;
  retryAt?: string | null;
  manualProbeRequired?: boolean;
};

const readPublisherStatus =
  async (): Promise<CatalogPublisherStatus | null> => {
    try {
      const response = await fetch(CATALOG_STATUS_URL, { cache: "no-cache" });
      if (!response.ok) return null;
      return (await response.json()) as CatalogPublisherStatus;
    } catch {
      return null;
    }
  };

export const useSatelliteCatalog = (
  settings?: Pick<Settings, "autoRefresh" | "refreshIntervalHours">,
) => {
  const [trackedSatellites, setTrackedSatellites] = useState<
    SatelliteCatalogEntry[]
  >([]);
  const [selectedNoradId, setSelectedNoradId] = useState<number | null>(
    DEFAULT_NORAD_ID,
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [statusMessage, setStatusMessage] = useState<string>(
    "Loading the shared satellite catalog...",
  );
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const refreshInProgressRef = useRef(false);

  const applyCatalog = useCallback(
    (catalog: SatelliteTle[], message: string, sourceTimestamp?: string) => {
      const tracked = catalog
        .map(buildCatalogEntry)
        .filter((item): item is SatelliteCatalogEntry => Boolean(item));
      setTrackedSatellites(tracked);
      setStatusMessage(
        message.replace("{count}", tracked.length.toLocaleString()),
      );
      setSelectedNoradId((current) => {
        if (current === null) return null;
        return tracked.some((item) => item.noradId === current)
          ? current
          : (tracked[0]?.noradId ?? null);
      });
      let cachedAt: string | null = null;
      try {
        cachedAt = localStorage.getItem(SATELLITE_CACHE_TIMESTAMP_KEY);
      } catch {
        /* Storage can be disabled. */
      }
      setLastUpdated(
        sourceTimestamp ??
          readCacheSourceTimestamp() ??
          cachedAt ??
          new Date().toISOString(),
      );
    },
    [],
  );

  const refreshCatalog = useCallback(async () => {
    if (refreshInProgressRef.current) return;
    refreshInProgressRef.current = true;
    setIsLoading(true);
    setStatusMessage("Checking for the latest shared satellite catalog...");
    let publisherStatus: CatalogPublisherStatus | null = null;

    try {
      const [response, status] = await Promise.all([
        fetch(CATALOG_URL, { cache: "no-cache" }),
        readPublisherStatus(),
      ]);
      publisherStatus = status;
      if (!response.ok)
        throw new Error(`Shared catalog request failed (${response.status}).`);
      const parsed = parseOmmCatalogSnapshot(
        (await response.json()) as SatelliteCatalogSnapshot,
      );
      writeCache(parsed.satellites, parsed.fetchedAt);
      let message = "Tracking {count} satellites from the shared catalog.";
      if (publisherStatus?.state === "paused") {
        message = publisherStatus.message
          ? `${publisherStatus.message} Using the last valid snapshot ({count} satellites).`
          : "Catalog publishing is paused for review; using the last valid snapshot ({count} satellites).";
      } else if (publisherStatus?.state === "error") {
        message =
          "Catalog refresh failed; using the last valid published snapshot ({count} satellites).";
      }
      applyCatalog(parsed.satellites, message, parsed.fetchedAt);
    } catch (error) {
      console.warn("Unable to read shared satellite catalog:", error);
      const staleCache = readCache(true);
      if (staleCache) {
        applyCatalog(
          staleCache,
          publisherStatus?.message
            ? `${publisherStatus.message} Showing the last saved snapshot ({count} satellites).`
            : "Shared catalog is unavailable; showing the last saved snapshot ({count} satellites).",
        );
      } else {
        setStatusMessage(
          publisherStatus?.message ??
            "The shared satellite catalog is not available yet. Try again after it has been published.",
        );
      }
    } finally {
      refreshInProgressRef.current = false;
      setIsLoading(false);
    }
  }, [applyCatalog]);

  useEffect(() => {
    const cached = readCache(true);
    let timestamp: string | null = null;
    try {
      timestamp = localStorage.getItem(SATELLITE_CACHE_TIMESTAMP_KEY);
    } catch {
      /* Storage can be disabled. */
    }

    if (cached && isCacheFresh(timestamp)) {
      applyCatalog(cached, "Tracking {count} satellites from local cache.");
      setIsLoading(false);
      return;
    }

    if (cached) {
      applyCatalog(
        cached,
        "Checking for an update; showing the last saved snapshot ({count} satellites).",
      );
      setLastUpdated(readCacheSourceTimestamp() ?? timestamp);
    }
    void refreshCatalog();
  }, [applyCatalog, refreshCatalog]);

  useEffect(() => {
    if (settings?.autoRefresh === false) return;
    const interval = (settings?.refreshIntervalHours ?? 8) * 60 * 60 * 1000;
    const timeout = window.setInterval(() => {
      void refreshCatalog();
    }, interval);
    return () => window.clearInterval(timeout);
  }, [refreshCatalog, settings?.autoRefresh, settings?.refreshIntervalHours]);

  const getSelectedSatellite = useCallback((): SatelliteCatalogEntry | null => {
    return (
      trackedSatellites.find((item) => item.noradId === selectedNoradId) ?? null
    );
  }, [trackedSatellites, selectedNoradId]);

  const selectSatellite = useCallback((noradId: number | null) => {
    setSelectedNoradId(noradId);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedNoradId(null);
  }, []);

  return {
    trackedSatellites,
    selectedNoradId,
    isLoading,
    statusMessage,
    lastUpdated,
    getSelectedSatellite,
    selectSatellite,
    clearSelection,
    refreshCatalog,
  };
};
