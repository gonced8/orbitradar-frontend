const MIN_SNAPSHOT_INTERVAL_MS = 850;
const MAX_SNAPSHOT_INTERVAL_MS = 1500;
const SNAPSHOT_INTERVAL_WEIGHT = 0.25;
const INTERPOLATION_HEADROOM = 1.2;

export const INITIAL_MARKER_INTERPOLATION_MS = 1200;

export const updateSnapshotInterval = (
  previousIntervalMs: number,
  observedIntervalMs: number,
): number => {
  const boundedObservation = Math.min(
    Math.max(observedIntervalMs, MIN_SNAPSHOT_INTERVAL_MS),
    MAX_SNAPSHOT_INTERVAL_MS,
  );
  return (
    previousIntervalMs * (1 - SNAPSHOT_INTERVAL_WEIGHT) +
    boundedObservation * SNAPSHOT_INTERVAL_WEIGHT
  );
};

export const getMarkerInterpolationDuration = (
  snapshotIntervalMs: number,
): number => snapshotIntervalMs * INTERPOLATION_HEADROOM;

export const getMarkerInterpolationProgress = (
  elapsedMs: number,
  durationMs: number,
): number => Math.min(Math.max(elapsedMs / durationMs, 0), 1);
