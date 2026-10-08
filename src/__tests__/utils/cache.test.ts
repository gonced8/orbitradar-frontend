import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  writeCache,
  readCache,
  clearCache,
  isCacheFresh,
  SATELLITE_CACHE_KEY,
  SATELLITE_CACHE_TIMESTAMP_KEY,
} from "../../utils/cache";

describe("cache utils", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  afterEach(() => {
    // Clean up after each test
    clearCache();
    localStorage.clear();
  });

  describe("writeCache and readCache", () => {
    it("writes and reads cache correctly", () => {
      const testSatellites = [
        { noradId: 25544, name: "ISS", line1: "1 25544U", line2: "2 25544" },
        { noradId: 20580, name: "Hubble", line1: "1 20580U", line2: "2 20580" },
      ];

      writeCache(testSatellites);
      const result = readCache();

      expect(result).toBeDefined();
      expect(result).toHaveLength(2);
      expect(result?.[0].noradId).toBe(25544);
      expect(result?.[1].noradId).toBe(20580);
    });

    it("returns null when cache is empty", () => {
      const result = readCache();
      expect(result).toBeNull();
    });

    it("returns null for stale cache when allowStale is false", () => {
      // Write cache
      const testSatellites = [{ noradId: 25544, name: "ISS", line1: "1", line2: "2" }];
      writeCache(testSatellites);

      // Manually set timestamp to be old (more than 8 hours ago)
      const oldTimestamp = new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString();
      localStorage.setItem(SATELLITE_CACHE_TIMESTAMP_KEY, oldTimestamp);

      // Read without allowing stale
      const result = readCache(false);
      expect(result).toBeNull();
    });

    it("returns stale cache when allowStale is true", () => {
      // Write cache
      const testSatellites = [{ noradId: 25544, name: "ISS", line1: "1", line2: "2" }];
      writeCache(testSatellites);

      // Manually set timestamp to be old (more than 8 hours ago)
      const oldTimestamp = new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString();
      localStorage.setItem(SATELLITE_CACHE_TIMESTAMP_KEY, oldTimestamp);

      // Read with allowing stale
      const result = readCache(true);
      expect(result).toBeDefined();
      expect(result).toHaveLength(1);
    });
  });

  describe("isCacheFresh", () => {
    it("returns true for fresh cache", () => {
      const freshTimestamp = new Date().toISOString();
      expect(isCacheFresh(freshTimestamp)).toBe(true);
    });

    it("returns false for old cache", () => {
      const oldTimestamp = new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString();
      expect(isCacheFresh(oldTimestamp)).toBe(false);
    });

    it("returns false for null timestamp", () => {
      expect(isCacheFresh(null)).toBe(false);
    });

    it("returns false for invalid timestamp", () => {
      expect(isCacheFresh("invalid-date")).toBe(false);
    });
  });

  describe("clearCache", () => {
    it("clears cache from localStorage", () => {
      // Write cache
      const testSatellites = [{ noradId: 25544, name: "ISS", line1: "1", line2: "2" }];
      writeCache(testSatellites);

      // Verify cache exists
      expect(localStorage.getItem(SATELLITE_CACHE_KEY)).not.toBeNull();
      expect(localStorage.getItem(SATELLITE_CACHE_TIMESTAMP_KEY)).not.toBeNull();

      // Clear cache
      clearCache();

      // Verify cache is cleared
      expect(localStorage.getItem(SATELLITE_CACHE_KEY)).toBeNull();
      expect(localStorage.getItem(SATELLITE_CACHE_TIMESTAMP_KEY)).toBeNull();
    });

    it("handles errors gracefully", () => {
      // Clear should not throw even if localStorage is in a bad state
      expect(() => clearCache()).not.toThrow();
    });
  });

  describe("edge cases", () => {
    it("handles empty array cache", () => {
      writeCache([]);
      const result = readCache();
      expect(result).toBeNull();
    });

    it("handles corrupted cache data", () => {
      localStorage.setItem(SATELLITE_CACHE_KEY, "invalid json");
      localStorage.setItem(SATELLITE_CACHE_TIMESTAMP_KEY, new Date().toISOString());

      const result = readCache();
      expect(result).toBeNull();

      // Corrupted cache should be cleaned up
      expect(localStorage.getItem(SATELLITE_CACHE_KEY)).toBeNull();
      expect(localStorage.getItem(SATELLITE_CACHE_TIMESTAMP_KEY)).toBeNull();
    });
  });
});
