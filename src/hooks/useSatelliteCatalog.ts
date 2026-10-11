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
import type { PublisherState } from "../utils/dataFreshness";

const CUSTOM_CATALOG_URL = import.meta.env.VITE_CATALOG_URL as
  string | undefined;
const CATALOG_URL =
  CUSTOM_CATALOG_URL ?? `${import.meta.env.BASE_URL}data/catalog.json`;
const CATALOG_STATUS_URL =
  (import.meta.env.VITE_CATALOG_STATUS_URL as string | undefined) ??
  (CUSTOM_CATALOG_URL
    ? ""
    : `${import.meta.env.BASE_URL}data/catalog-status.json`);
const PUBLISHER_STATUS_REFRESH_MS = 60 * 60 * 1000;
const DEFAULT_NORAD_ID = 25544;

export type CatalogPublisherStatus = {
  state?: PublisherState;
  message?: string;
  retryAt?: string | null;
  manualProbeRequired?: boolean;
  fetchedAt?: string | null;
};

const normalizePublisherState = (value: unknown): PublisherState | undefined =>
  value === "ready" ||
  value === "paused" ||
  value === "error" ||
  value === "stale"
    ? value
    : undefined;

const readPublisherStatus =
  async (): Promise<CatalogPublisherStatus | null> => {
    if (!CATALOG_STATUS_URL) return null;
    try {
      const response = await fetch(CATALOG_STATUS_URL, { cache: "no-cache" });
      if (!response.ok) return null;
      const value = (await response.json()) as Record<string, unknown>;
      if (!value || typeof value !== "object") return null;
      return {
        state: normalizePublisherState(value.state),
        message: typeof value.message === "string" ? value.message : undefined,
        retryAt: typeof value.retryAt === "string" ? value.retryAt : null,
        manualProbeRequired:
          typeof value.manualProbeRequired === "boolean"
            ? value.manualProbeRequired
            : undefined,
        fetchedAt:
          typeof value.fetchedAt === "string" &&
          !Number.isNaN(Date.parse(value.fetchedAt))
            ? value.fetchedAt
            : null,
      };
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
  const [sourceUpdatedAt, setSourceUpdatedAt] = useState<string | null>(null);
  const [publisherStatus, setPublisherStatus] =
    useState<CatalogPublisherStatus | null>(null);
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
      const sourceUpdatedAt = sourceTimestamp ?? readCacheSourceTimestamp();
      try {
        cachedAt = localStorage.getItem(SATELLITE_CACHE_TIMESTAMP_KEY);
      } catch {
        /* Storage can be disabled. */
      }
      setSourceUpdatedAt(sourceUpdatedAt);
      setLastUpdated(sourceUpdatedAt ?? cachedAt ?? new Date().toISOString());
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
      if (status) setPublisherStatus(status);
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

  useEffect(() => {
    if (!CATALOG_STATUS_URL) return;
    const refreshStatus = () => {
      void readPublisherStatus().then((status) => {
        if (status) setPublisherStatus(status);
      });
    };
    const interval = window.setInterval(
      refreshStatus,
      PUBLISHER_STATUS_REFRESH_MS,
    );
    const onVisibilityChange = () => {
      if (!document.hidden) refreshStatus();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

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
    sourceUpdatedAt,
    publisherStatus,
    getSelectedSatellite,
    selectSatellite,
    clearSelection,
    refreshCatalog,
  };
};
