import { useState, useCallback, useMemo } from "react";
import { SatellitePosition } from "../utils/satellite";

const MAX_TRACKED = 10; // Maximum number of satellites to track simultaneously

export const useMultipleTracking = (
  satellitePositions: SatellitePosition[],
) => {
  const [trackedNoradIds, setTrackedNoradIds] = useState<number[]>([]);

  // Track a satellite
  const addTracked = useCallback((noradId: number) => {
    setTrackedNoradIds((prev) => {
      if (prev.includes(noradId)) return prev;
      if (prev.length >= MAX_TRACKED) {
        // Remove oldest and add new
        return [...prev.slice(1), noradId];
      }
      return [...prev, noradId];
    });
  }, []);

  // Remove a satellite from tracking
  const removeTracked = useCallback((noradId: number) => {
    setTrackedNoradIds((prev) => prev.filter((id) => id !== noradId));
  }, []);

  // Toggle tracking
  const toggleTracked = useCallback((noradId: number) => {
    setTrackedNoradIds((prev) => {
      if (prev.includes(noradId)) {
        return prev.filter((id) => id !== noradId);
      }
      if (prev.length >= MAX_TRACKED) {
        return [...prev.slice(1), noradId];
      }
      return [...prev, noradId];
    });
  }, []);

  // Clear all tracked satellites
  const clearTracked = useCallback(() => {
    setTrackedNoradIds([]);
  }, []);

  // Check if a satellite is being tracked
  const isTracked = useCallback(
    (noradId: number): boolean => {
      return trackedNoradIds.includes(noradId);
    },
    [trackedNoradIds],
  );

  // Get positions of tracked satellites
  const trackedPositions = useMemo(() => {
    return satellitePositions.filter((pos) =>
      trackedNoradIds.includes(pos.noradId),
    );
  }, [satellitePositions, trackedNoradIds]);

  // Get tracked satellite IDs with their positions
  const trackedWithPositions = useMemo(() => {
    return trackedNoradIds
      .map((id) => {
        const pos = satellitePositions.find((p) => p.noradId === id);
        return pos ? { noradId: id, position: pos } : null;
      })
      .filter(
        (item): item is { noradId: number; position: SatellitePosition } =>
          item !== null,
      );
  }, [satellitePositions, trackedNoradIds]);

  // Get colors for tracked satellites (highlight them)
  const getTrackedColor = useCallback(
    (noradId: number): string => {
      const index = trackedNoradIds.indexOf(noradId);
      if (index === -1) return "";
      // Use different colors for each tracked satellite
      const colors = [
        "#ff4d4f",
        "#7dd3fc",
        "#34d399",
        "#fbbf24",
        "#a78bfa",
        "#f9a8d4",
        "#67e8f9",
        "#10b981",
        "#f59e0b",
        "#8b5cf6",
      ];
      return colors[index % colors.length];
    },
    [trackedNoradIds],
  );

  return {
    trackedNoradIds,
    trackedPositions,
    trackedWithPositions,
    isTracked,
    addTracked,
    removeTracked,
    toggleTracked,
    clearTracked,
    getTrackedColor,
    maxTracked: MAX_TRACKED,
  };
};
