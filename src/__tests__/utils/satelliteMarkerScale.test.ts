import { describe, expect, it } from "vitest";
import {
  getGlobePixelRatio,
  getSatelliteMarkerScale,
} from "../../utils/satelliteMarkerScale";

describe("satellite marker scale", () => {
  it("keeps catalog satellites visible and emphasizes selected or tracked ones", () => {
    const catalog = getSatelliteMarkerScale(100, false, false);
    const tracked = getSatelliteMarkerScale(100, false, true);
    const selected = getSatelliteMarkerScale(100, true, false);

    expect(catalog).toBeGreaterThanOrEqual(0.5);
    expect(tracked).toBeGreaterThan(catalog);
    expect(selected).toBeGreaterThan(tracked);
  });

  it("scales marker size with the globe radius", () => {
    expect(getSatelliteMarkerScale(200, false, false)).toBe(
      getSatelliteMarkerScale(100, false, false) * 2,
    );
  });

  it("caps high-density displays without degrading standard displays", () => {
    expect(getGlobePixelRatio(1)).toBe(1);
    expect(getGlobePixelRatio(1.25)).toBe(1.25);
    expect(getGlobePixelRatio(2)).toBe(1.5);
  });
});
