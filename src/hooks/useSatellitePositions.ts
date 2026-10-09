import { useState, useEffect, useMemo } from "react";
import * as satellite from "satellite.js";
import {
  SatellitePosition,
  TrackedSatellite,
  getSatelliteColor,
} from "../utils/satellite";

// Performance optimizations
const POSITION_TICK_MS = 1000;
const ORBIT_POINTS = 60;
const ALTITUDE_SCALE = 0.0005;
const MIN_VISUAL_ALTITUDE = 0.005;

// Limit the number of satellites to render for performance
const MAX_RENDERED_SATELLITES = 2000;

// Cache GMST calculation to avoid redundant computations
let cachedGmst: number | null = null;
let cachedGmstTime: number | null = null;

const getCachedGmst = (time: Date): number => {
  if (cachedGmst && cachedGmstTime && time.getTime() === cachedGmstTime) {
    return cachedGmst;
  }
  cachedGmst = satellite.gstime(time);
  cachedGmstTime = time.getTime();
  return cachedGmst;
};

export const useSatellitePositions = (
  trackedSatellites: TrackedSatellite[],
  selectedNoradId: number,
  externalTime?: Date,
) => {
  const [time, setTime] = useState(new Date());
  const [showOrbit, setShowOrbit] = useState(true);
  const [followSelected, setFollowSelected] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(
      () => setTime(new Date()),
      POSITION_TICK_MS,
    );
    return () => window.clearInterval(timer);
  }, []);

  const effectiveTime = useMemo(
    () => externalTime ?? time,
    [externalTime, time],
  );

  const satellitePositions = useMemo<SatellitePosition[]>(() => {
    if (trackedSatellites.length === 0) return [];

    // Use cached GMST for performance
    const gmst = getCachedGmst(effectiveTime);

    // Limit to max rendered satellites for performance
    const satellitesToRender = trackedSatellites.slice(
      0,
      MAX_RENDERED_SATELLITES,
    );

    return satellitesToRender
      .map((tracked) => {
        const propagated = satellite.propagate(tracked.satrec, effectiveTime);
        if (!propagated.position) return null;

        const geodetic = satellite.eciToGeodetic(
          propagated.position as satellite.EciVec3<number>,
          gmst,
        );

        const velocity =
          propagated.velocity && typeof propagated.velocity === "object"
            ? (propagated.velocity as satellite.EciVec3<number>)
            : null;

        const altitudeKm = geodetic.height / 1000; // Convert meters to km
        const visualAlt = altitudeKm * ALTITUDE_SCALE; // Scale for visual representation

        return {
          noradId: tracked.noradId,
          name: tracked.name,
          lat: satellite.degreesLat(geodetic.latitude),
          lng: satellite.degreesLong(geodetic.longitude),
          alt: Math.max(visualAlt, MIN_VISUAL_ALTITUDE),
          altitudeKm,
          velocityKph: velocity
            ? Math.hypot(velocity.x, velocity.y, velocity.z) * 3.6
            : null,
          color: getSatelliteColor(tracked.noradId, altitudeKm),
        };
      })
      .filter((item): item is SatellitePosition => Boolean(item));
  }, [trackedSatellites, effectiveTime]);

  const selectedPosition = useMemo(() => {
    return (
      satellitePositions.find((item) => item.noradId === selectedNoradId) ??
      null
    );
  }, [satellitePositions, selectedNoradId]);

  const orbitPoints = useMemo(() => {
    const selectedSatellite = trackedSatellites.find(
      (s) => s.noradId === selectedNoradId,
    );
    if (!selectedSatellite || !showOrbit) return [];

    const points: { lat: number; lng: number; alt: number }[] = [];
    const halfPeriodMs = (selectedSatellite.periodSeconds * 1000) / 2;
    const stepMs = (selectedSatellite.periodSeconds * 1000) / ORBIT_POINTS;

    for (let offset = -halfPeriodMs; offset <= halfPeriodMs; offset += stepMs) {
      const propagationTime = new Date(effectiveTime.getTime() + offset);
      const propagated = satellite.propagate(
        selectedSatellite.satrec,
        propagationTime,
      );
      if (!propagated.position) continue;
      const geodetic = satellite.eciToGeodetic(
        propagated.position as satellite.EciVec3<number>,
        satellite.gstime(propagationTime),
      );
      const altitudeKm = geodetic.height / 1000;
      points.push({
        lat: satellite.degreesLat(geodetic.latitude),
        lng: satellite.degreesLong(geodetic.longitude),
        alt: Math.max(altitudeKm * ALTITUDE_SCALE, MIN_VISUAL_ALTITUDE),
      });
    }
    return points;
  }, [trackedSatellites, selectedNoradId, showOrbit, effectiveTime]);

  return {
    time,
    satellitePositions,
    selectedPosition,
    orbitPoints,
    showOrbit,
    setShowOrbit,
    followSelected,
    setFollowSelected,
  };
};
