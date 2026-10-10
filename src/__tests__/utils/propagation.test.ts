import { describe, expect, it } from "vitest";
import {
  buildTrackedSatellite,
  altitudeToGlobeRadius,
} from "../../utils/satellite";
import { propagatePosition } from "../../utils/propagation";

const tle = {
  noradId: 25544,
  name: "ISS (ZARYA)",
  line1:
    "1 25544U 98067A   19156.50900463  .00003075  00000-0  59442-4 0  9992",
  line2:
    "2 25544  51.6433  59.2583 0008217  16.4489 347.6017 15.51174618173442",
};

describe("orbital propagation units", () => {
  it("keeps satellite.js altitude in km and converts velocity from km/s to km/h", () => {
    const tracked = buildTrackedSatellite(tle);
    expect(tracked).not.toBeNull();
    expect(tracked!.periodSeconds).toBeGreaterThan(5_000);
    expect(tracked!.periodSeconds).toBeLessThan(6_000);

    const position = propagatePosition(
      tracked!,
      new Date("2019-06-05T12:13:00Z"),
    );
    expect(position?.altitudeKm).toBeCloseTo(408, 0);
    expect(position?.velocityKph).toBeGreaterThan(25_000);
    expect(position?.velocityKph).toBeLessThan(30_000);
    expect(position?.altitudeClass).toBe("leo");
  });

  it("propagates equivalent OMM records and accepts catalog IDs above five digits", () => {
    const omm = buildTrackedSatellite({
      noradId: 100972,
      name: "ISS (ZARYA)",
      omm: {
        OBJECT_NAME: "ISS (ZARYA)",
        OBJECT_ID: "1998-067A",
        EPOCH: "2019-06-05T12:12:58.000000",
        MEAN_MOTION: 15.51174618,
        ECCENTRICITY: 0.0008217,
        INCLINATION: 51.6433,
        RA_OF_ASC_NODE: 59.2583,
        ARG_OF_PERICENTER: 16.4489,
        MEAN_ANOMALY: 347.6017,
        EPHEMERIS_TYPE: 0,
        CLASSIFICATION_TYPE: "U",
        NORAD_CAT_ID: 100972,
        ELEMENT_SET_NO: 999,
        REV_AT_EPOCH: 0,
        BSTAR: 0.000059442,
        MEAN_MOTION_DOT: 0.00003075,
        MEAN_MOTION_DDOT: 0,
      },
    });
    expect(omm).not.toBeNull();
    expect(omm!.noradId).toBe(100972);
    const position = propagatePosition(omm!, new Date("2019-06-05T12:13:00Z"));
    const tlePosition = propagatePosition(
      buildTrackedSatellite(tle)!,
      new Date("2019-06-05T12:13:00Z"),
    );
    expect(position?.lat).toBeCloseTo(tlePosition!.lat, 4);
    expect(position?.lng).toBeCloseTo(tlePosition!.lng, 4);
    expect(position?.altitudeKm).toBeCloseTo(tlePosition!.altitudeKm, 3);
  });

  it("maps physical altitude to Earth radius units without scaling it down", () => {
    expect(altitudeToGlobeRadius(400)).toBeCloseTo(400 / 6371, 6);
    expect(altitudeToGlobeRadius(35_786)).toBeCloseTo(35_786 / 6371, 6);
  });
});
