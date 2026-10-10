import { describe, expect, it } from "vitest";
import { getSunDirection } from "../../utils/solar";

describe("Earth solar geometry", () => {
  it("puts the March equinox sun near the equator at Greenwich noon", () => {
    const direction = getSunDirection(new Date("2024-03-20T12:00:00Z"));
    expect(direction.length()).toBeCloseTo(1, 6);
    expect(direction.y).toBeCloseTo(0, 2);
    expect(direction.z).toBeGreaterThan(0.99);
  });

  it("tracks seasonal declination and reverses longitude over a day", () => {
    const noon = getSunDirection(new Date("2024-06-21T12:00:00Z"));
    const midnight = getSunDirection(new Date("2024-06-21T00:00:00Z"));
    expect(noon.y).toBeGreaterThan(0.38);
    expect(noon.y).toBeLessThan(0.42);
    expect(noon.x).toBeCloseTo(-midnight.x, 2);
    expect(noon.z).toBeCloseTo(-midnight.z, 2);
    expect(noon.dot(midnight)).toBeLessThan(-0.65);
  });
});
