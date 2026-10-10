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
        "#ff9500",
        "#00f0ff",
        "#7cff4f",
        "#ffd400",
        "#d7ff3f",
        "#ff70c8",
        "#67e8f9",
        "#2cffb7",
        "#ff9f1c",
        "#ffc857",
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
