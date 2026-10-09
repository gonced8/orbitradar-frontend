import { useState, useEffect, useMemo } from "react";
import * as satellite from "satellite.js";
import {
  EARTH_RADIUS_KM,
  SatellitePosition,
  TrackedSatellite,
  getSatelliteColor,
} from "../utils/satellite";

const POSITION_TICK_MS = 1000;
const MARKER_ALTITUDE = 0.008;
const ORBIT_POINTS = 60; // Reduced from 100 to 60 for better performance

export const useSatellitePositions = (
  trackedSatellites: TrackedSatellite[],
  selectedNoradId: number,
) => {
  const [time, setTime] = useState(new Date());
  const [showOrbit, setShowOrbit] = useState(true);
  const [followSelected, setFollowSelected] = useState(false);

  // Update time every second
  useEffect(() => {
    const timer = window.setInterval(
      () => setTime(new Date()),
      POSITION_TICK_MS,
    );
    return () => window.clearInterval(timer);
  }, []);

  // Calculate positions for all satellites
  const satellitePositions = useMemo<SatellitePosition[]>(() => {
    if (trackedSatellites.length === 0) return [];

    const gmst = satellite.gstime(time);
    return trackedSatellites
      .map((tracked) => {
        const propagated = satellite.propagate(tracked.satrec, time);
        if (!propagated.position) return null;
        const geodetic = satellite.eciToGeodetic(
          propagated.position as satellite.EciVec3<number>,
          gmst,
        );
        const velocity =
          propagated.velocity && typeof propagated.velocity === "object"
            ? (propagated.velocity as satellite.EciVec3<number>)
            : null;
        const altitudeKm = geodetic.height;
        return {
          noradId: tracked.noradId,
          name: tracked.name,
          lat: satellite.degreesLat(geodetic.latitude),
          lng: satellite.degreesLong(geodetic.longitude),
          alt: Math.max(altitudeKm / EARTH_RADIUS_KM, 0.005),
          altitudeKm,
          velocityKph: velocity
            ? Math.hypot(velocity.x, velocity.y, velocity.z) * 3600
            : null,
          color: getSatelliteColor(tracked.noradId, altitudeKm),
        };
      })
      .filter((item): item is SatellitePosition => Boolean(item));
  }, [trackedSatellites, time]);

  // Get selected satellite position
  const selectedPosition = useMemo(() => {
    return (
      satellitePositions.find((item) => item.noradId === selectedNoradId) ??
      null
    );
  }, [satellitePositions, selectedNoradId]);

  // Calculate orbit points for selected satellite
  const orbitPoints = useMemo(() => {
    const selectedSatellite = trackedSatellites.find(
      (s) => s.noradId === selectedNoradId,
    );
    if (!selectedSatellite || !showOrbit) return [];

    const points: { lat: number; lng: number; alt: number }[] = [];
    const halfPeriodMs = (selectedSatellite.periodSeconds * 1000) / 2;
    const stepMs = (selectedSatellite.periodSeconds * 1000) / ORBIT_POINTS;

    for (let offset = -halfPeriodMs; offset <= halfPeriodMs; offset += stepMs) {
      const propagationTime = new Date(time.getTime() + offset);
      const propagated = satellite.propagate(
        selectedSatellite.satrec,
        propagationTime,
      );
      if (!propagated.position) continue;
      const geodetic = satellite.eciToGeodetic(
        propagated.position as satellite.EciVec3<number>,
        satellite.gstime(propagationTime),
      );
      points.push({
        lat: satellite.degreesLat(geodetic.latitude),
        lng: satellite.degreesLong(geodetic.longitude),
        alt: geodetic.height / EARTH_RADIUS_KM,
      });
    }
    return points;
  }, [trackedSatellites, selectedNoradId, showOrbit, time]);

  return {
    time,
    satellitePositions,
    selectedPosition,
    orbitPoints,
    showOrbit,
    setShowOrbit,
    followSelected,
    setFollowSelected,
    MARKER_ALTITUDE,
  };
};
