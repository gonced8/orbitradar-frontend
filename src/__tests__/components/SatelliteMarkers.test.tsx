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
      getCoords: (lat: number) => ({ x: 101, y: lat, z: 0 }),
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

    const { rerender } = render(
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
    expect(currentMesh.instanceColor).toBeInstanceOf(
      THREE.InstancedBufferAttribute,
    );
    const selectedColor = new THREE.Color();
    currentMesh.getColorAt(0, selectedColor);
    expect(selectedColor.getHex()).toBe(0xffffff);
    const catalogColor = new THREE.Color();
    currentMesh.getColorAt(1, catalogColor);
    expect(catalogColor.getHex()).toBe(0x67e8f9);

    const targetPositions = currentMesh.geometry.getAttribute(
      "instanceTargetPosition",
    );
    expect(targetPositions).toBeInstanceOf(THREE.InstancedBufferAttribute);
    expect(targetPositions.getX(0)).toBe(101);

    const material = currentMesh.material as THREE.MeshBasicMaterial;
    const shader = {
      uniforms: {} as Record<string, THREE.IUniform>,
      vertexShader: "#include <common>\n#include <project_vertex>",
      fragmentShader: "",
    };
    material.onBeforeCompile(
      shader as Parameters<NonNullable<typeof material.onBeforeCompile>>[0],
      {} as THREE.WebGLRenderer,
    );
    expect(shader.uniforms.markerInterpolation).toBeDefined();
    expect(shader.vertexShader).toContain("instanceTargetPosition");
    expect(shader.vertexShader).toContain("markerDirection");

    const movedPositions = positions.map((position, index) =>
      index === 0 ? { ...position, lat: 10 } : position,
    );
    rerender(
      <SatelliteMarkers
        globe={globe}
        positions={movedPositions}
        selectedNoradId={1}
        trackedNoradIds={[]}
        getTrackedColor={() => "#fbbf24"}
        onSelect={vi.fn()}
      />,
    );
    await waitFor(() => expect(targetPositions.getY(0)).toBe(10));
    const startMatrix = new THREE.Matrix4();
    const startPosition = new THREE.Vector3();
    currentMesh.getMatrixAt(0, startMatrix);
    startPosition.setFromMatrixPosition(startMatrix);
    expect(startPosition.y).toBeCloseTo(0);
  });
});
