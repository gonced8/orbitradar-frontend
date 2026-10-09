import * as satellite from "satellite.js";
import {
  OrbitPoint,
  SatellitePosition,
  TrackedSatellite,
  altitudeToGlobeRadius,
  getSatelliteColor,
  getAltitudeClass,
  estimateAltitudeFromPeriod,
} from "./satellite";

export const propagatePosition = (
  tracked: TrackedSatellite,
  at: Date,
): SatellitePosition | null => {
  const propagated = satellite.propagate(tracked.satrec, at);
  if (
    !propagated ||
    !propagated.position ||
    typeof propagated.position !== "object"
  ) {
    return null;
  }
  const geodetic = satellite.eciToGeodetic(
    propagated.position as satellite.EciVec3<number>,
    satellite.gstime(at),
  );
  const velocity = propagated.velocity;
  const altitudeKm = geodetic.height;
  const position: SatellitePosition = {
    noradId: tracked.noradId,
    name: tracked.name,
    lat: satellite.degreesLat(geodetic.latitude),
    lng: satellite.degreesLong(geodetic.longitude),
    alt: altitudeToGlobeRadius(altitudeKm),
    altitudeKm,
    velocityKph:
      velocity && typeof velocity === "object"
        ? Math.hypot(velocity.x, velocity.y, velocity.z) * 3600
        : null,
    color: getSatelliteColor(tracked.noradId, altitudeKm),
    altitudeClass: getAltitudeClass(
      estimateAltitudeFromPeriod(tracked.periodSeconds),
    ),
  };
  return Object.values(position).every(
    (value) => typeof value !== "number" || Number.isFinite(value),
  )
    ? position
    : null;
};

export const propagateOrbit = (
  tracked: TrackedSatellite,
  at: Date,
  samples = 120,
): OrbitPoint[] => {
  const points: OrbitPoint[] = [];
  const periodMs = tracked.periodSeconds * 1000;
  for (let index = 0; index <= samples; index += 1) {
    const sampleTime = new Date(
      at.getTime() + (index / samples - 0.5) * periodMs,
    );
    const position = propagatePosition(tracked, sampleTime);
    if (position)
      points.push({ lat: position.lat, lng: position.lng, alt: position.alt });
  }
  return points;
};
