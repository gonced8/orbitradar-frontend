import { render, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import * as THREE from "three";
import type { GlobeMethods } from "react-globe.gl";
import SatelliteMarkers from "../../components/SatelliteMarkers";
import type { SatellitePosition } from "../../utils/satellite";

describe("SatelliteMarkers", () => {
  it("repopulates a grown mesh and renders bright instance colors", async () => {
    const canvas = document.createElement("canvas");
    const addedMeshes: THREE.InstancedMesh[] = [];
    const scene = {
      add: (object: THREE.Object3D) => {
        addedMeshes.push(object as THREE.InstancedMesh);
      },
      remove: vi.fn(),
    };
    const globe = {
      scene: () => scene,
      renderer: () => ({ domElement: canvas }),
      camera: () => new THREE.PerspectiveCamera(),
      getGlobeRadius: () => 100,
      getCoords: () => ({ x: 101, y: 0, z: 0 }),
    } as unknown as GlobeMethods;
    const positions: SatellitePosition[] = Array.from(
      { length: 1025 },
      (_, index) => ({
        noradId: index + 1,
        name: `Satellite ${index + 1}`,
        lat: 0,
        lng: 0,
        alt: 0.05,
        altitudeKm: 400,
        velocityKph: 27_000,
        color: "#67e8f9",
        altitudeClass: "leo",
      }),
    );

    render(
      <SatelliteMarkers
        globe={globe}
        positions={positions}
        selectedNoradId={1}
        trackedNoradIds={[]}
        getTrackedColor={() => "#fbbf24"}
        onSelect={vi.fn()}
      />,
    );

    await waitFor(() =>
      expect(addedMeshes[addedMeshes.length - 1]?.count).toBe(positions.length),
    );
    const currentMesh = addedMeshes[addedMeshes.length - 1];
    expect(currentMesh).toBeDefined();
    if (!currentMesh) throw new Error("The satellite mesh was not created.");
    expect(currentMesh.geometry).toBeInstanceOf(THREE.BoxGeometry);
    expect((currentMesh.material as THREE.MeshBasicMaterial).toneMapped).toBe(
      false,
    );
    const selectedColor = new THREE.Color();
    currentMesh.getColorAt(0, selectedColor);
    expect(selectedColor.getHex()).toBe(0xffffff);
  });
});
