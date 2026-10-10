import { describe, expect, it } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import * as THREE from "three";
import type { GlobeMethods } from "react-globe.gl";
import EarthOverlays from "../../components/EarthOverlays";
import { getSunDirection } from "../../utils/solar";

describe("Earth solar geometry", () => {
  it("applies night shading to the globe material without an overlay sphere", () => {
    const scene = new THREE.Scene();
    const material = new THREE.MeshPhongMaterial();
    const earth = new THREE.Mesh(new THREE.SphereGeometry(100), material) as
      THREE.Mesh | (THREE.Mesh & { __globeObjType: string });
    (earth as THREE.Mesh & { __globeObjType: string }).__globeObjType = "globe";
    scene.add(earth);
    const globe = {
      scene: () => scene,
      getGlobeRadius: () => 100,
    } as unknown as GlobeMethods;

    const view = render(
      React.createElement(EarthOverlays, {
        globe,
        time: new Date("2024-03-20T12:00:00Z"),
        nightEnabled: true,
        cloudsEnabled: false,
      }),
    );

    expect(scene.getObjectByName("orbitradar-night-side")).toBeUndefined();
    expect(material.customProgramCacheKey()).toContain(
      "orbitradar-night-surface",
    );
    view.unmount();
    expect(material.customProgramCacheKey()).not.toContain(
      "orbitradar-night-surface",
    );
  });

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
