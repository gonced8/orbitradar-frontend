import { describe, expect, it } from "vitest";
import {
  classifyFreshness,
  formatRelativeAge,
} from "../../utils/dataFreshness";

const NOW = Date.parse("2026-10-11T12:00:00.000Z");

describe("data freshness", () => {
  it("uses source-specific age limits", () => {
    const fourHoursAgo = "2026-10-11T08:00:00.000Z";
    const twelveHoursAgo = "2026-10-11T00:00:00.000Z";

    expect(
      classifyFreshness({
        timestamp: fourHoursAgo,
        publisherState: "ready",
        maxAgeMs: 4 * 60 * 60 * 1000,
        now: NOW,
      }).level,
    ).toBe("fresh");
    expect(
      classifyFreshness({
        timestamp: twelveHoursAgo,
        publisherState: "ready",
        maxAgeMs: 12 * 60 * 60 * 1000,
        now: NOW,
      }).level,
    ).toBe("fresh");
    expect(
      classifyFreshness({
        timestamp: "2026-10-11T07:59:59.000Z",
        publisherState: "ready",
        maxAgeMs: 4 * 60 * 60 * 1000,
        now: NOW,
      }).level,
    ).toBe("delayed");
  });

  it("marks retained data stale when the publisher is degraded", () => {
    expect(
      classifyFreshness({
        timestamp: "2026-10-11T11:59:00.000Z",
        publisherState: "paused",
        maxAgeMs: 4 * 60 * 60 * 1000,
        now: NOW,
      }).level,
    ).toBe("stale");
  });

  it("handles missing and invalid timestamps without claiming freshness", () => {
    expect(
      classifyFreshness({
        timestamp: null,
        maxAgeMs: 1,
        now: NOW,
      }).level,
    ).toBe("unavailable");
    expect(formatRelativeAge("invalid", NOW)).toBe("unavailable");
  });

  it("never reports a future source as older than just now", () => {
    expect(formatRelativeAge("2026-10-11T13:00:00.000Z", NOW)).toBe("just now");
  });
});
