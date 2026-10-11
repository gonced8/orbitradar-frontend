export type PublisherState = "ready" | "paused" | "error" | "stale";

export type FreshnessLevel = "fresh" | "delayed" | "stale" | "unavailable";

export type FreshnessStatus = {
  level: FreshnessLevel;
  label: string;
  relativeAge: string;
  localTime: string | null;
  sourceTimestamp: string | null;
  publishedAt?: string | null;
  modelCycle?: string | null;
  publisherState?: PublisherState;
};

const formatLocalTime = (timestamp: string): string =>
  new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(timestamp));

export const formatRelativeAge = (
  timestamp: string | null,
  now = Date.now(),
): string => {
  if (!timestamp) return "unavailable";
  const parsed = Date.parse(timestamp);
  if (Number.isNaN(parsed)) return "unavailable";
  const ageMs = Math.max(0, now - parsed);
  const minutes = Math.floor(ageMs / 60_000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

export const classifyFreshness = ({
  timestamp,
  publisherState,
  maxAgeMs,
  now = Date.now(),
  publishedAt = null,
  modelCycle = null,
}: {
  timestamp: string | null;
  publisherState?: PublisherState;
  maxAgeMs: number;
  now?: number;
  publishedAt?: string | null;
  modelCycle?: string | null;
}): FreshnessStatus => {
  const parsed = timestamp ? Date.parse(timestamp) : Number.NaN;
  const validTimestamp = timestamp && !Number.isNaN(parsed) ? timestamp : null;
  const degraded = publisherState !== undefined && publisherState !== "ready";
  const ageMs = validTimestamp
    ? Math.max(0, now - Date.parse(validTimestamp))
    : Number.POSITIVE_INFINITY;
  const level: FreshnessLevel = !validTimestamp
    ? "unavailable"
    : degraded
      ? "stale"
      : ageMs <= maxAgeMs
        ? "fresh"
        : "delayed";

  return {
    level,
    label:
      level === "fresh"
        ? "Fresh"
        : level === "delayed"
          ? "Delayed"
          : level === "stale"
            ? "Stale"
            : "Unavailable",
    relativeAge: formatRelativeAge(validTimestamp, now),
    localTime: validTimestamp ? formatLocalTime(validTimestamp) : null,
    sourceTimestamp: validTimestamp,
    publishedAt,
    modelCycle,
    publisherState,
  };
};
