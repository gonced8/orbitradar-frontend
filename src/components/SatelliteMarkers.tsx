import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { GlobeMethods } from "react-globe.gl";
import { SatellitePosition } from "../utils/satellite";
import {
  getSatelliteMarkerScale,
  SELECTED_SATELLITE_COLOR,
} from "../utils/satelliteMarkerScale";
import {
  getMarkerInterpolationDuration,
  getMarkerInterpolationProgress,
  INITIAL_MARKER_INTERPOLATION_MS,
  updateSnapshotInterval,
} from "../utils/satelliteMarkerMotion";

type Props = {
  globe: GlobeMethods | null;
  positions: SatellitePosition[];
  snapshotVersion?: number;
  selectedNoradId: number | null;
  trackedNoradIds: number[];
  getTrackedColor: (noradId: number) => string;
  onSelect: (noradId: number) => void;
};

type MarkerMotion = {
  start: THREE.Vector3;
  target: THREE.Vector3;
};

const interpolationProgress = (startedAt: number, durationMs: number) =>
  getMarkerInterpolationProgress(performance.now() - startedAt, durationMs);

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
  snapshotVersion = 0,
  selectedNoradId,
  trackedNoradIds,
  getTrackedColor,
  onSelect,
}: Props) => {
  const meshRef = useRef<THREE.InstancedMesh | null>(null);
  const capacityRef = useRef(1024);
  const [markerCapacity, setMarkerCapacity] = useState(1024);
  const interpolationStartedAtRef = useRef(performance.now());
  const interpolationDurationRef = useRef(INITIAL_MARKER_INTERPOLATION_MS);
  const snapshotIntervalRef = useRef(1000);
  const lastSnapshotAtRef = useRef<number | null>(null);
  const interpolationUniformRef = useRef({ value: 1 });
  const markerMotionRef = useRef(new Map<number, MarkerMotion>());
  const snapshotVersionRef = useRef(snapshotVersion);
  const hasRenderedSnapshotRef = useRef(false);
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
      transparent: true,
      opacity: 1,
      toneMapped: false,
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
    // Render after the transparent Earth overlays so their darkening never
    // bleeds through the sides of a marker.
    mesh.renderOrder = 10;
    mesh.frustumCulled = false;
    mesh.count = 0;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.onBeforeRender = () => {
      interpolationUniformRef.current.value = interpolationProgress(
        interpolationStartedAtRef.current,
        interpolationDurationRef.current,
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
      const progress = interpolationProgress(
        interpolationStartedAtRef.current,
        interpolationDurationRef.current,
      );
      const camera = globe.camera();
      const earth = new THREE.Sphere(
        new THREE.Vector3(),
        globe.getGlobeRadius(),
      );
      const projected = new THREE.Vector3();
      let closest: { noradId: number; distance: number } | null = null;
      for (const position of latestRef.current.positions) {
        const motion = markerMotionRef.current.get(position.noradId);
        if (!motion) continue;
        const worldPosition = interpolateAroundGlobe(
          motion.start,
          motion.target,
          progress,
        );
        projected.copy(worldPosition).project(camera);
        if (projected.z < -1 || projected.z > 1) continue;
        const screenX = rect.left + ((projected.x + 1) / 2) * rect.width;
        const screenY = rect.top + ((1 - projected.y) / 2) * rect.height;
        const distance = Math.hypot(
          event.clientX - screenX,
          event.clientY - screenY,
        );
        // A generous target makes the tiny visual markers usable on touch screens.
        if (distance > 14 || (closest && distance >= closest.distance))
          continue;
        const ray = new THREE.Ray(
          camera.position,
          worldPosition.clone().sub(camera.position).normalize(),
        );
        const earthHit = ray.intersectSphere(earth, new THREE.Vector3());
        if (
          earthHit &&
          earthHit.distanceTo(camera.position) <
            worldPosition.distanceTo(camera.position) - 0.001
        )
          continue;
        closest = { noradId: position.noradId, distance };
      }
      if (closest) latestRef.current.onSelect(closest.noradId);
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
    const now = performance.now();
    const isNewSnapshot =
      snapshotVersion !== snapshotVersionRef.current ||
      !hasRenderedSnapshotRef.current;
    const oldProgress = interpolationProgress(
      interpolationStartedAtRef.current,
      interpolationDurationRef.current,
    );
    const nextMotion = new Map<number, MarkerMotion>();
    positions.forEach((position, index) => {
      const coords = globe.getCoords(position.lat, position.lng, position.alt);
      const target = new THREE.Vector3(coords.x, coords.y, coords.z);
      const previous = markerMotionRef.current.get(position.noradId);
      const motion =
        previous && !isNewSnapshot
          ? previous
          : {
              start: previous
                ? interpolateAroundGlobe(
                    previous.start,
                    previous.target,
                    oldProgress,
                  )
                : target.clone(),
              target,
            };
      nextMotion.set(position.noradId, motion);
      transform.position.copy(motion.start);
      transform.scale.setScalar(
        getSatelliteMarkerScale(
          globe.getGlobeRadius(),
          position.noradId === selectedNoradId,
          trackedIds.has(position.noradId),
        ),
      );
      transform.updateMatrix();
      mesh.setMatrixAt(index, transform.matrix);
      targetPositions.setXYZ(
        index,
        motion.target.x,
        motion.target.y,
        motion.target.z,
      );
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
    if (isNewSnapshot) {
      if (lastSnapshotAtRef.current !== null) {
        snapshotIntervalRef.current = updateSnapshotInterval(
          snapshotIntervalRef.current,
          now - lastSnapshotAtRef.current,
        );
        interpolationDurationRef.current = getMarkerInterpolationDuration(
          snapshotIntervalRef.current,
        );
      }
      snapshotVersionRef.current = snapshotVersion;
      hasRenderedSnapshotRef.current = true;
      lastSnapshotAtRef.current = now;
      interpolationStartedAtRef.current = now;
      interpolationUniformRef.current.value = 0;
    }
    mesh.count = positions.length;
    mesh.instanceMatrix.needsUpdate = true;
    targetPositions.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [
    globe,
    positions,
    snapshotVersion,
    selectedNoradId,
    trackedIds,
    getTrackedColor,
    markerCapacity,
  ]);

  return null;
};

export default SatelliteMarkers;
