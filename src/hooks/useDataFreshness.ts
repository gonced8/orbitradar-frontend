import { useCallback, useEffect, useMemo, useState } from "react";
import {
  classifyFreshness,
  FreshnessStatus,
  PublisherState,
} from "../utils/dataFreshness";

const STATUS_REFRESH_MS = 60 * 60 * 1000;
const AGE_REFRESH_MS = 60 * 1000;
const CATALOG_STATUS_URL = `${import.meta.env.BASE_URL}data/catalog-status.json`;
const CLOUD_STATUS_URL = `${import.meta.env.BASE_URL}data/cloud-status.json`;

type CatalogStatus = {
  state?: PublisherState;
  fetchedAt?: string | null;
};

type CloudStatus = {
  state?: PublisherState;
  sourceId?: string;
  fetchedAt?: string | null;
  validAt?: string | null;
  modelCycle?: string | null;
};

const normalizeState = (value: unknown): PublisherState | undefined =>
  value === "ready" ||
  value === "paused" ||
  value === "error" ||
  value === "stale"
    ? value
    : undefined;

const normalizeTimestamp = (value: unknown): string | null =>
  typeof value === "string" && !Number.isNaN(Date.parse(value)) ? value : null;

const parseCatalogStatus = (value: unknown): CatalogStatus | null => {
  if (!value || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  return {
    state: normalizeState(record.state),
    fetchedAt: normalizeTimestamp(record.fetchedAt),
  };
};

const parseCloudStatus = (value: unknown): CloudStatus | null => {
  if (!value || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  if (record.sourceId !== "noaa-gfs-tcc") return null;
  return {
    state: normalizeState(record.state),
    sourceId: record.sourceId,
    fetchedAt: normalizeTimestamp(record.fetchedAt),
    validAt: normalizeTimestamp(record.validAt),
    modelCycle:
      typeof record.modelCycle === "string" ? record.modelCycle : null,
  };
};

const readJson = async (url: string): Promise<unknown | null> => {
  try {
    const response = await fetch(url, { cache: "no-cache" });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
};

export type DataFreshness = {
  satellite: FreshnessStatus;
  cloud: FreshnessStatus;
  cloudVersion: string;
};

export const useDataFreshness = (
  satelliteSourceTimestamp: string | null,
): DataFreshness => {
  const [catalogStatus, setCatalogStatus] = useState<CatalogStatus | null>(
    null,
  );
  const [cloudStatus, setCloudStatus] = useState<CloudStatus | null>(null);
  const [now, setNow] = useState(() => Date.now());

  const refreshStatuses = useCallback(async () => {
    const [catalogResponse, cloudResponse] = await Promise.all([
      readJson(CATALOG_STATUS_URL),
      readJson(CLOUD_STATUS_URL),
    ]);
    const catalog = parseCatalogStatus(catalogResponse);
    const cloud = parseCloudStatus(cloudResponse);
    if (catalog) setCatalogStatus(catalog);
    if (cloud) setCloudStatus(cloud);
  }, []);

  useEffect(() => {
    void refreshStatuses();
    const interval = window.setInterval(refreshStatuses, STATUS_REFRESH_MS);
    const onVisibilityChange = () => {
      if (!document.hidden) void refreshStatuses();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [refreshStatuses]);

  useEffect(() => {
    const interval = window.setInterval(
      () => setNow(Date.now()),
      AGE_REFRESH_MS,
    );
    return () => window.clearInterval(interval);
  }, []);

  return useMemo(
    () => ({
      satellite: classifyFreshness({
        timestamp: satelliteSourceTimestamp ?? catalogStatus?.fetchedAt ?? null,
        publisherState: catalogStatus?.state,
        maxAgeMs: 4 * 60 * 60 * 1000,
        now,
      }),
      cloud: classifyFreshness({
        timestamp: cloudStatus?.validAt ?? null,
        publisherState: cloudStatus?.state,
        maxAgeMs: 12 * 60 * 60 * 1000,
        now,
        publishedAt: cloudStatus?.fetchedAt ?? null,
        modelCycle: cloudStatus?.modelCycle ?? null,
      }),
      cloudVersion: cloudStatus?.fetchedAt ?? "",
    }),
    [catalogStatus, cloudStatus, now, satelliteSourceTimestamp],
  );
};
