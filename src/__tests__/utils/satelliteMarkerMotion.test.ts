import { describe, expect, it } from "vitest";
import {
  getMarkerInterpolationDuration,
  getMarkerInterpolationProgress,
  updateSnapshotInterval,
} from "../../utils/satelliteMarkerMotion";

describe("satellite marker motion", () => {
  it("keeps interpolation active beyond a nominal one-second snapshot", () => {
    const duration = getMarkerInterpolationDuration(1000);

    expect(duration).toBe(1200);
    expect(getMarkerInterpolationProgress(1000, duration)).toBeCloseTo(5 / 6);
  });

  it("smooths and bounds irregular worker snapshot intervals", () => {
    expect(updateSnapshotInterval(1000, 1100)).toBe(1025);
    expect(updateSnapshotInterval(1000, 100)).toBe(962.5);
    expect(updateSnapshotInterval(1000, 5000)).toBe(1125);
  });
});
