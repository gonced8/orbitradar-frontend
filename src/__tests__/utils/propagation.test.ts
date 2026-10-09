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

  it("maps physical altitude to Earth radius units without scaling it down", () => {
    expect(altitudeToGlobeRadius(400)).toBeCloseTo(400 / 6371, 6);
    expect(altitudeToGlobeRadius(35_786)).toBeCloseTo(35_786 / 6371, 6);
  });
});
