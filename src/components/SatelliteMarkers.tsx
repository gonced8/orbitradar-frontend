import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { GlobeMethods } from "react-globe.gl";
import { SatellitePosition } from "../utils/satellite";
import {
  getSatelliteMarkerScale,
  SELECTED_SATELLITE_COLOR,
} from "../utils/satelliteMarkerScale";

type Props = {
  globe: GlobeMethods | null;
  positions: SatellitePosition[];
  selectedNoradId: number;
  trackedNoradIds: number[];
  getTrackedColor: (noradId: number) => string;
  onSelect: (noradId: number) => void;
};

type MarkerMotion = {
  start: THREE.Vector3;
  target: THREE.Vector3;
};

const MARKER_INTERPOLATION_MS = 1000;

const interpolationProgress = (startedAt: number) =>
  THREE.MathUtils.clamp(
    (performance.now() - startedAt) / MARKER_INTERPOLATION_MS,
    0,
    1,
  );

const interpolateAroundGlobe = (
  start: THREE.Vector3,
  target: THREE.Vector3,
  progress: number,
) => {
  const startRadius = start.length();
  const targetRadius = target.length();
  if (startRadius === 0 || targetRadius === 0)
    return start.clone().lerp(target, progress);

  return start
    .clone()
    .divideScalar(startRadius)
    .lerp(target.clone().divideScalar(targetRadius), progress)
    .normalize()
    .multiplyScalar(THREE.MathUtils.lerp(startRadius, targetRadius, progress));
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
  const interpolationStartedAtRef = useRef(performance.now());
  const interpolationUniformRef = useRef({ value: 1 });
  const markerMotionRef = useRef(new Map<number, MarkerMotion>());
  const latestRef = useRef({ positions, onSelect });
  const trackedIds = useMemo(() => new Set(trackedNoradIds), [trackedNoradIds]);
  latestRef.current = { positions, onSelect };

  useEffect(() => {
    if (!globe) return;
    capacityRef.current = markerCapacity;
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const targetPositions = new THREE.InstancedBufferAttribute(
      new Float32Array(markerCapacity * 3),
      3,
    );
    targetPositions.setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute("instanceTargetPosition", targetPositions);

    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      toneMapped: false,
      vertexColors: true,
    });
    material.onBeforeCompile = (shader) => {
      shader.uniforms.markerInterpolation = interpolationUniformRef.current;
      shader.vertexShader = shader.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
#ifdef USE_INSTANCING
attribute vec3 instanceTargetPosition;
uniform float markerInterpolation;
#endif`,
        )
        .replace(
          "#include <project_vertex>",
          `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
  mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
  mat4 interpolatedInstanceMatrix = instanceMatrix;
  vec3 markerStart = instanceMatrix[3].xyz;
  float markerStartRadius = length(markerStart);
  float markerTargetRadius = length(instanceTargetPosition);
  vec3 markerPosition = mix(markerStart, instanceTargetPosition, markerInterpolation);
  if (markerStartRadius > 0.0 && markerTargetRadius > 0.0) {
    vec3 markerDirection = normalize(mix(
      markerStart / markerStartRadius,
      instanceTargetPosition / markerTargetRadius,
      markerInterpolation
    ));
    markerPosition = markerDirection * mix(
      markerStartRadius,
      markerTargetRadius,
      markerInterpolation
    );
  }
  interpolatedInstanceMatrix[3].xyz = markerPosition;
  mvPosition = interpolatedInstanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
        );
    };
    material.customProgramCacheKey = () => "orbitradar-marker-interpolation-v1";

    const mesh = new THREE.InstancedMesh(geometry, material, markerCapacity);
    mesh.instanceColor = new THREE.InstancedBufferAttribute(
      new Float32Array(markerCapacity * 3),
      3,
    );
    mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
    mesh.name = "orbitradar-satellite-markers";
    mesh.frustumCulled = false;
    mesh.count = 0;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.onBeforeRender = () => {
      interpolationUniformRef.current.value = interpolationProgress(
        interpolationStartedAtRef.current,
      );
    };
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
    const targetPositions = mesh.geometry.getAttribute(
      "instanceTargetPosition",
    ) as THREE.InstancedBufferAttribute;
    const oldProgress = interpolationProgress(
      interpolationStartedAtRef.current,
    );
    const nextMotion = new Map<number, MarkerMotion>();
    positions.forEach((position, index) => {
      const coords = globe.getCoords(position.lat, position.lng, position.alt);
      const target = new THREE.Vector3(coords.x, coords.y, coords.z);
      const previous = markerMotionRef.current.get(position.noradId);
      const start = previous
        ? interpolateAroundGlobe(previous.start, previous.target, oldProgress)
        : target.clone();
      nextMotion.set(position.noradId, { start, target });
      transform.position.copy(start);
      transform.scale.setScalar(
        getSatelliteMarkerScale(
          globe.getGlobeRadius(),
          position.noradId === selectedNoradId,
          trackedIds.has(position.noradId),
        ),
      );
      transform.updateMatrix();
      mesh.setMatrixAt(index, transform.matrix);
      targetPositions.setXYZ(index, target.x, target.y, target.z);
      mesh.setColorAt(
        index,
        color.set(
          position.noradId === selectedNoradId
            ? SELECTED_SATELLITE_COLOR
            : trackedIds.has(position.noradId)
              ? getTrackedColor(position.noradId)
              : position.color,
        ),
      );
    });
    markerMotionRef.current = nextMotion;
    interpolationStartedAtRef.current = performance.now();
    interpolationUniformRef.current.value = 0;
    mesh.count = positions.length;
    mesh.instanceMatrix.needsUpdate = true;
    targetPositions.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [
    globe,
    positions,
    selectedNoradId,
    trackedIds,
    getTrackedColor,
    markerCapacity,
  ]);

  return null;
};

export default SatelliteMarkers;
