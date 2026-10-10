import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import type { GlobeMethods } from "react-globe.gl";
import { SatellitePosition } from "../utils/satellite";
import { getSatelliteMarkerScale } from "../utils/satelliteMarkerScale";

type Props = {
  globe: GlobeMethods | null;
  positions: SatellitePosition[];
  selectedNoradId: number;
  trackedNoradIds: number[];
  getTrackedColor: (noradId: number) => string;
  onSelect: (noradId: number) => void;
};

const SatelliteMarkers = ({
  globe,
  positions,
  selectedNoradId,
  trackedNoradIds,
  getTrackedColor,
  onSelect,
}: Props) => {
  const meshRef = useRef<THREE.InstancedMesh | null>(null);
  const capacityRef = useRef(1024);
  const [markerCapacity, setMarkerCapacity] = useState(1024);
  const latestRef = useRef({ positions, onSelect });
  latestRef.current = { positions, onSelect };

  useEffect(() => {
    if (!globe) return;
    capacityRef.current = markerCapacity;
    const mesh = new THREE.InstancedMesh(
      new THREE.SphereGeometry(1, 6, 4),
      new THREE.MeshBasicMaterial({ vertexColors: true }),
      markerCapacity,
    );
    mesh.name = "orbitradar-satellite-markers";
    mesh.frustumCulled = false;
    mesh.count = 0;
    globe.scene().add(mesh);
    meshRef.current = mesh;

    let start: { x: number; y: number } | null = null;
    let dragged = false;
    const canvas = globe.renderer().domElement;
    const onPointerDown = (event: PointerEvent) => {
      start = { x: event.clientX, y: event.clientY };
      dragged = false;
    };
    const onPointerMove = (event: PointerEvent) => {
      if (
        start &&
        Math.hypot(event.clientX - start.x, event.clientY - start.y) > 5
      )
        dragged = true;
    };
    const onPointerUp = () => {
      start = null;
      window.setTimeout(() => {
        dragged = false;
      }, 0);
    };
    const onClick = (event: MouseEvent) => {
      if (dragged) {
        dragged = false;
        return;
      }
      const rect = canvas.getBoundingClientRect();
      const pointer = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1,
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(pointer, globe.camera());
      const hit = raycaster.intersectObject(mesh)[0];
      if (hit?.instanceId === undefined) return;
      const earthHit = raycaster.ray.intersectSphere(
        new THREE.Sphere(new THREE.Vector3(), globe.getGlobeRadius()),
        new THREE.Vector3(),
      );
      if (earthHit && earthHit.distanceTo(raycaster.ray.origin) < hit.distance)
        return;
      const position = latestRef.current.positions[hit.instanceId];
      if (position) latestRef.current.onSelect(position.noradId);
    };
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("click", onClick);

    return () => {
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("click", onClick);
      globe.scene().remove(mesh);
      mesh.geometry.dispose();
      if (Array.isArray(mesh.material))
        mesh.material.forEach((material) => material.dispose());
      else mesh.material.dispose();
      if (meshRef.current === mesh) meshRef.current = null;
    };
  }, [globe, markerCapacity]);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!globe || !mesh) return;
    const capacity = 2 ** Math.ceil(Math.log2(Math.max(positions.length, 1)));
    if (capacity > capacityRef.current) {
      capacityRef.current = capacity;
      setMarkerCapacity(capacity);
      return;
    }
    const transform = new THREE.Object3D();
    const color = new THREE.Color();
    positions.forEach((position, index) => {
      const coords = globe.getCoords(position.lat, position.lng, position.alt);
      transform.position.set(coords.x, coords.y, coords.z);
      transform.scale.setScalar(
        getSatelliteMarkerScale(
          globe.getGlobeRadius(),
          position.noradId === selectedNoradId,
          trackedNoradIds.includes(position.noradId),
        ),
      );
      transform.updateMatrix();
      mesh.setMatrixAt(index, transform.matrix);
      mesh.setColorAt(
        index,
        color.set(
          trackedNoradIds.includes(position.noradId)
            ? getTrackedColor(position.noradId)
            : position.color,
        ),
      );
    });
    mesh.count = positions.length;
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [globe, positions, selectedNoradId, trackedNoradIds, getTrackedColor]);

  return null;
};

export default SatelliteMarkers;
