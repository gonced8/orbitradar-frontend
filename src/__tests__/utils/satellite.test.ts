import { describe, it, expect } from "vitest";
import {
  getSatelliteColor,
  formatCoordinate,
  parseTleCatalog,
  buildTrackedSatellite,
  getAltitudeClass,
  estimateAltitudeFromPeriod,
  ALTITUDE_COLORS,
} from "../../utils/satellite";

// Sample TLE data for testing
const sampleTleData = `
ISS (ZARYA)
1 25544U 98067A   24001.00000000  .00016717  00000-0  30000-3 0  9999
2 25544  51.6400  20.0000 0007000  90.0000 270.0000 15.50000000 20000
HUBBLE
1 20580U 90037B   24001.00000000  .00016717  00000-0  30000-3 0  9999
2 20580  28.4700 100.0000 0001000 180.0000   0.0000 15.00000000 20000
TEST-SAT
1 99999U 00001A   24001.00000000  .00016717  00000-0  30000-3 0  9999
2 99999  51.6400  20.0000 0007000  90.0000 270.0000 15.50000000 20000
`;

describe("satellite utils", () => {
  describe("formatCoordinate", () => {
    it("formats positive latitude correctly", () => {
      expect(formatCoordinate(45.5, "N", "S")).toBe("45.50\u00b0 N");
    });

    it("formats negative latitude correctly", () => {
      expect(formatCoordinate(-30.25, "N", "S")).toBe("30.25\u00b0 S");
    });

    it("formats positive longitude correctly", () => {
      expect(formatCoordinate(120.75, "E", "W")).toBe("120.75\u00b0 E");
    });

    it("formats negative longitude correctly", () => {
      expect(formatCoordinate(-80.5, "E", "W")).toBe("80.50\u00b0 W");
    });

    it("formats zero correctly", () => {
      expect(formatCoordinate(0, "N", "S")).toBe("0.00\u00b0 N");
    });
  });

  describe("getSatelliteColor", () => {
    it("returns featured color for ISS (25544)", () => {
      expect(getSatelliteColor(25544, 400)).toBe("#ff4d4f");
    });

    it("returns featured color for Hubble (20580)", () => {
      expect(getSatelliteColor(20580, 550)).toBe("#7dd3fc");
    });

    it("returns LEO color for altitude < 2000km", () => {
      expect(getSatelliteColor(99999, 500)).toBe(ALTITUDE_COLORS.leo);
    });

    it("returns MEO color for altitude between 2000-20000km", () => {
      expect(getSatelliteColor(99999, 10000)).toBe(ALTITUDE_COLORS.meo);
    });

    it("returns GEO color for altitude >= 20000km", () => {
      expect(getSatelliteColor(99999, 36000)).toBe(ALTITUDE_COLORS.geo);
    });

    it("prioritizes featured colors over altitude colors", () => {
      // ISS is at ~400km (LEO altitude) but should use featured color
      expect(getSatelliteColor(25544, 400)).toBe("#ff4d4f");
    });
  });

  describe("getAltitudeClass", () => {
    it("classifies LEO correctly", () => {
      expect(getAltitudeClass(100)).toBe("leo");
      expect(getAltitudeClass(1999)).toBe("leo");
    });

    it("classifies MEO correctly", () => {
      expect(getAltitudeClass(2000)).toBe("meo");
      expect(getAltitudeClass(10000)).toBe("meo");
      expect(getAltitudeClass(19999)).toBe("meo");
    });

    it("classifies GEO correctly", () => {
      expect(getAltitudeClass(20000)).toBe("geo");
      expect(getAltitudeClass(36000)).toBe("geo");
    });
  });

  describe("parseTleCatalog", () => {
    it("parses valid TLE catalog", () => {
      const result = parseTleCatalog(sampleTleData);
      expect(result.length).toBe(3);
      expect(result[0].noradId).toBe(25544);
      expect(result[0].name).toBe("ISS (ZARYA)");
      expect(result[1].noradId).toBe(20580);
      expect(result[1].name).toBe("HUBBLE");
      expect(result[2].noradId).toBe(99999);
      expect(result[2].name).toBe("TEST-SAT");
    });

    it("throws error for empty catalog", () => {
      expect(() => parseTleCatalog("")).toThrow("CelesTrak returned an unexpected TLE catalog.");
    });

    it("skips invalid TLE entries", () => {
      const invalidTle = `
INVALID-ENTRY
1 25544U 98067A   24001.00000000  .00016717  00000-0  30000-3 0  9999
NOT-A-LINE2
TEST-SAT
1 99999U 00001A   24001.00000000  .00016717  00000-0  30000-3 0  9999
2 99999  51.6400  20.0000 0007000  90.0000 270.0000 15.50000000 20000
`;
      const result = parseTleCatalog(invalidTle);
      expect(result.length).toBe(1); // Only TEST-SAT should be parsed
      expect(result[0].noradId).toBe(99999);
    });
  });

  describe("estimateAltitudeFromPeriod", () => {
    it("returns reasonable altitude for ISS orbital period (~92 minutes)", () => {
      const periodSeconds = 92 * 60; // 92 minutes in seconds
      const altitude = estimateAltitudeFromPeriod(periodSeconds);
      // ISS orbits at ~400km, so altitude should be in that range
      expect(altitude).toBeGreaterThan(300);
      expect(altitude).toBeLessThan(500);
    });

    it("returns higher altitude for longer periods", () => {
      const shortPeriod = 90 * 60; // 90 minutes
      const longPeriod = 1440 * 60; // 24 hours (geostationary)
      
      const shortAltitude = estimateAltitudeFromPeriod(shortPeriod);
      const longAltitude = estimateAltitudeFromPeriod(longPeriod);
      
      expect(longAltitude).toBeGreaterThan(shortAltitude);
    });
  });
});
