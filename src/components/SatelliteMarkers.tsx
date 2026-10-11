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

type PositionBuffer = {
  interleaved: THREE.InstancedInterleavedBuffer;
  start: THREE.InterleavedBufferAttribute;
  target: THREE.InterleavedBufferAttribute;
};

const DEGREES_TO_RADIANS = Math.PI / 180;
const POSITION_BUFFER_COUNT = 2;

const createPositionBuffer = (capacity: number): PositionBuffer => {
  const interleaved = new THREE.InstancedInterleavedBuffer(
    new Float32Array(capacity * 6),
    6,
  );
  interleaved.setUsage(THREE.StreamDrawUsage);
  return {
    interleaved,
    start: new THREE.InterleavedBufferAttribute(interleaved, 3, 0, false),
    target: new THREE.InterleavedBufferAttribute(interleaved, 3, 3, false),
  };
};

const writeGlobeCoordinates = (
  lat: number,
  lng: number,
  altitude: number,
  radius: number,
  output: Float32Array,
  offset: number,
) => {
  const phi = (90 - lat) * DEGREES_TO_RADIANS;
  const theta = (90 - lng) * DEGREES_TO_RADIANS;
  const scaledRadius = radius * (1 + altitude);
  const sinPhi = Math.sin(phi);
  output[offset] = scaledRadius * sinPhi * Math.cos(theta);
  output[offset + 1] = scaledRadius * Math.cos(phi);
  output[offset + 2] = scaledRadius * sinPhi * Math.sin(theta);
};

const writeInterpolatedPosition = (
  start: Float32Array,
  target: Float32Array,
  offset: number,
  progress: number,
  output: Float32Array,
  outputOffset: number,
) => {
  const startX = start[offset];
  const startY = start[offset + 1];
  const startZ = start[offset + 2];
  const targetX = target[offset];
  const targetY = target[offset + 1];
  const targetZ = target[offset + 2];
  const startRadius = Math.hypot(startX, startY, startZ);
  const targetRadius = Math.hypot(targetX, targetY, targetZ);

  if (startRadius === 0 || targetRadius === 0) {
    output[outputOffset] = THREE.MathUtils.lerp(startX, targetX, progress);
    output[outputOffset + 1] = THREE.MathUtils.lerp(startY, targetY, progress);
    output[outputOffset + 2] = THREE.MathUtils.lerp(startZ, targetZ, progress);
    return;
  }

  const directionX = THREE.MathUtils.lerp(
    startX / startRadius,
    targetX / targetRadius,
    progress,
  );
  const directionY = THREE.MathUtils.lerp(
    startY / startRadius,
    targetY / targetRadius,
    progress,
  );
  const directionZ = THREE.MathUtils.lerp(
    startZ / startRadius,
    targetZ / targetRadius,
    progress,
  );
  const directionLength = Math.hypot(directionX, directionY, directionZ);
  const radiusAtProgress = THREE.MathUtils.lerp(
    startRadius,
    targetRadius,
    progress,
  );
  output[outputOffset] = (directionX / directionLength) * radiusAtProgress;
  output[outputOffset + 1] = (directionY / directionLength) * radiusAtProgress;
  output[outputOffset + 2] = (directionZ / directionLength) * radiusAtProgress;
};

const interpolatePackedPosition = (
  start: Float32Array,
  target: Float32Array,
  index: number,
  progress: number,
  output: THREE.Vector3,
) => {
  const offset = index * 3;
  const startX = start[offset];
  const startY = start[offset + 1];
  const startZ = start[offset + 2];
  const targetX = target[offset];
  const targetY = target[offset + 1];
  const targetZ = target[offset + 2];
  const startRadius = Math.hypot(startX, startY, startZ);
  const targetRadius = Math.hypot(targetX, targetY, targetZ);
  if (startRadius === 0 || targetRadius === 0) {
    output.set(
      THREE.MathUtils.lerp(startX, targetX, progress),
      THREE.MathUtils.lerp(startY, targetY, progress),
      THREE.MathUtils.lerp(startZ, targetZ, progress),
    );
    return;
  }
  const directionX = THREE.MathUtils.lerp(
    startX / startRadius,
    targetX / targetRadius,
    progress,
  );
  const directionY = THREE.MathUtils.lerp(
    startY / startRadius,
    targetY / targetRadius,
    progress,
  );
  const directionZ = THREE.MathUtils.lerp(
    startZ / startRadius,
    targetZ / targetRadius,
    progress,
  );
  const directionLength = Math.hypot(directionX, directionY, directionZ);
  const radiusAtProgress = THREE.MathUtils.lerp(
    startRadius,
    targetRadius,
    progress,
  );
  output.set(
    (directionX / directionLength) * radiusAtProgress,
    (directionY / directionLength) * radiusAtProgress,
    (directionZ / directionLength) * radiusAtProgress,
  );
};

const interpolationProgress = (startedAt: number, durationMs: number) =>
  getMarkerInterpolationProgress(performance.now() - startedAt, durationMs);

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
  const markerBufferUniformRef = useRef({ value: 0 });
  const activeBufferRef = useRef(0);
  const positionBuffersRef = useRef<PositionBuffer[]>([]);
  const motionIndexRef = useRef(new Map<number, number>());
  const motionIdsRef = useRef(new Int32Array(0));
  const motionCountRef = useRef(0);
  const motionStartRef = useRef(new Float32Array(0));
  const motionTargetRef = useRef(new Float32Array(0));
  const motionScratchStartRef = useRef(new Float32Array(0));
  const motionScratchTargetRef = useRef(new Float32Array(0));
  const styleIdsRef = useRef(new Int32Array(0));
  const styleColorsRef = useRef<string[]>([]);
  const snapshotVersionRef = useRef(snapshotVersion);
  const hasRenderedSnapshotRef = useRef(false);
  const latestRef = useRef({ positions, onSelect });
  const stylePositionsRef = useRef(positions);
  const [styleRevision, setStyleRevision] = useState(0);
  const trackedIds = useMemo(() => new Set(trackedNoradIds), [trackedNoradIds]);
  latestRef.current = { positions, onSelect };
  stylePositionsRef.current = positions;

  useEffect(() => {
    if (!globe) return;
    capacityRef.current = markerCapacity;
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const positionBuffers = Array.from({ length: POSITION_BUFFER_COUNT }, () =>
      createPositionBuffer(markerCapacity),
    );
    positionBuffersRef.current = positionBuffers;
    geometry.setAttribute("instanceStartPosition0", positionBuffers[0].start);
    geometry.setAttribute("instanceTargetPosition0", positionBuffers[0].target);
    geometry.setAttribute("instanceStartPosition1", positionBuffers[1].start);
    geometry.setAttribute("instanceTargetPosition1", positionBuffers[1].target);
    activeBufferRef.current = 0;
    markerBufferUniformRef.current.value = 0;

    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1,
      toneMapped: false,
    });
    material.onBeforeCompile = (shader) => {
      shader.uniforms.markerInterpolation = interpolationUniformRef.current;
      shader.uniforms.markerBufferIndex = markerBufferUniformRef.current;
      shader.vertexShader = shader.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
#ifdef USE_INSTANCING
attribute vec3 instanceTargetPosition0;
attribute vec3 instanceStartPosition0;
attribute vec3 instanceTargetPosition1;
attribute vec3 instanceStartPosition1;
uniform float markerInterpolation;
uniform float markerBufferIndex;
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
  vec3 markerStart = mix(instanceStartPosition0, instanceStartPosition1, markerBufferIndex);
  vec3 markerTarget = mix(instanceTargetPosition0, instanceTargetPosition1, markerBufferIndex);
  float markerStartRadius = length(markerStart);
  float markerTargetRadius = length(markerTarget);
  vec3 markerPosition = mix(markerStart, markerTarget, markerInterpolation);
  if (markerStartRadius > 0.0 && markerTargetRadius > 0.0) {
    vec3 markerDirection = normalize(mix(
      markerStart / markerStartRadius,
      markerTarget / markerTargetRadius,
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
    material.customProgramCacheKey = () => "orbitradar-marker-interpolation-v2";

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
      const worldPosition = new THREE.Vector3();
      const rayDirection = new THREE.Vector3();
      const earthHit = new THREE.Vector3();
      const ray = new THREE.Ray(camera.position, rayDirection);
      let closest: { noradId: number; distance: number } | null = null;
      for (const position of latestRef.current.positions) {
        const motionIndex = motionIndexRef.current.get(position.noradId);
        if (motionIndex === undefined) continue;
        interpolatePackedPosition(
          motionStartRef.current,
          motionTargetRef.current,
          motionIndex,
          progress,
          worldPosition,
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
        rayDirection.copy(worldPosition).sub(camera.position).normalize();
        const hit = ray.intersectSphere(earth, earthHit);
        if (
          hit &&
          hit.distanceTo(camera.position) <
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
    if (positions.length === 0) {
      mesh.count = 0;
      motionCountRef.current = 0;
      motionIndexRef.current.clear();
      return;
    }
    const positionBuffers = positionBuffersRef.current;
    if (positionBuffers.length !== POSITION_BUFFER_COUNT) return;
    if (motionStartRef.current.length !== markerCapacity * 3) {
      motionStartRef.current = new Float32Array(markerCapacity * 3);
      motionTargetRef.current = new Float32Array(markerCapacity * 3);
      motionScratchStartRef.current = new Float32Array(markerCapacity * 3);
      motionScratchTargetRef.current = new Float32Array(markerCapacity * 3);
      motionIdsRef.current = new Int32Array(markerCapacity);
      styleIdsRef.current = new Int32Array(markerCapacity);
      styleColorsRef.current = new Array(markerCapacity);
      motionCountRef.current = 0;
      motionIndexRef.current.clear();
      hasRenderedSnapshotRef.current = false;
    }
    const now = performance.now();
    const isNewSnapshot =
      snapshotVersion !== snapshotVersionRef.current ||
      !hasRenderedSnapshotRef.current;
    const oldProgress = interpolationProgress(
      interpolationStartedAtRef.current,
      interpolationDurationRef.current,
    );
    const previousIds = motionIdsRef.current;
    let idsChanged = motionCountRef.current !== positions.length;
    if (!idsChanged) {
      for (let index = 0; index < positions.length; index += 1) {
        if (previousIds[index] !== positions[index].noradId) {
          idsChanged = true;
          break;
        }
      }
    }
    const previousStart = motionStartRef.current;
    const previousTarget = motionTargetRef.current;
    const nextStart = motionScratchStartRef.current;
    const nextTarget = motionScratchTargetRef.current;
    const nextBufferIndex = hasRenderedSnapshotRef.current
      ? 1 - activeBufferRef.current
      : 0;
    const gpuArray = positionBuffers[nextBufferIndex].interleaved.array;
    const radius = globe.getGlobeRadius();
    let styleChanged = false;
    for (let index = 0; index < positions.length; index += 1) {
      const position = positions[index];
      const offset = index * 3;
      const previousIndex = motionIndexRef.current.get(position.noradId);
      const previousOffset =
        previousIndex === undefined ? -1 : previousIndex * 3;
      const hasPrevious = previousOffset >= 0;

      if (isNewSnapshot && hasPrevious) {
        writeInterpolatedPosition(
          previousStart,
          previousTarget,
          previousOffset,
          oldProgress,
          nextStart,
          offset,
        );
        writeGlobeCoordinates(
          position.lat,
          position.lng,
          position.alt,
          radius,
          nextTarget,
          offset,
        );
      } else if (isNewSnapshot) {
        writeGlobeCoordinates(
          position.lat,
          position.lng,
          position.alt,
          radius,
          nextTarget,
          offset,
        );
        nextStart[offset] = nextTarget[offset];
        nextStart[offset + 1] = nextTarget[offset + 1];
        nextStart[offset + 2] = nextTarget[offset + 2];
      } else if (hasPrevious) {
        nextStart[offset] = previousStart[previousOffset];
        nextStart[offset + 1] = previousStart[previousOffset + 1];
        nextStart[offset + 2] = previousStart[previousOffset + 2];
        nextTarget[offset] = previousTarget[previousOffset];
        nextTarget[offset + 1] = previousTarget[previousOffset + 1];
        nextTarget[offset + 2] = previousTarget[previousOffset + 2];
      } else {
        writeGlobeCoordinates(
          position.lat,
          position.lng,
          position.alt,
          radius,
          nextTarget,
          offset,
        );
        nextStart[offset] = nextTarget[offset];
        nextStart[offset + 1] = nextTarget[offset + 1];
        nextStart[offset + 2] = nextTarget[offset + 2];
      }

      const gpuOffset = index * 6;
      gpuArray[gpuOffset] = nextStart[offset];
      gpuArray[gpuOffset + 1] = nextStart[offset + 1];
      gpuArray[gpuOffset + 2] = nextStart[offset + 2];
      gpuArray[gpuOffset + 3] = nextTarget[offset];
      gpuArray[gpuOffset + 4] = nextTarget[offset + 1];
      gpuArray[gpuOffset + 5] = nextTarget[offset + 2];
      if (
        styleIdsRef.current[index] !== position.noradId ||
        styleColorsRef.current[index] !== position.color
      )
        styleChanged = true;
      previousIds[index] = position.noradId;
      styleIdsRef.current[index] = position.noradId;
      styleColorsRef.current[index] = position.color;
    }
    motionStartRef.current = nextStart;
    motionTargetRef.current = nextTarget;
    motionScratchStartRef.current = previousStart;
    motionScratchTargetRef.current = previousTarget;
    motionCountRef.current = positions.length;
    if (idsChanged) {
      const nextIndex = new Map<number, number>();
      for (let index = 0; index < positions.length; index += 1)
        nextIndex.set(positions[index].noradId, index);
      motionIndexRef.current = nextIndex;
    }
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
    positionBuffers[nextBufferIndex].interleaved.needsUpdate = true;
    activeBufferRef.current = nextBufferIndex;
    markerBufferUniformRef.current.value = nextBufferIndex;
    if (styleChanged) setStyleRevision((revision) => revision + 1);
  }, [globe, positions, snapshotVersion, markerCapacity]);

  const positionCount = positions.length;

  useEffect(() => {
    const mesh = meshRef.current;
    if (!globe || !mesh || positionCount > capacityRef.current) return;
    const transform = new THREE.Object3D();
    const color = new THREE.Color();
    stylePositionsRef.current.forEach((position, index) => {
      transform.position.set(0, 0, 0);
      transform.scale.setScalar(
        getSatelliteMarkerScale(
          globe.getGlobeRadius(),
          position.noradId === selectedNoradId,
          trackedIds.has(position.noradId),
        ),
      );
      transform.updateMatrix();
      mesh.setMatrixAt(index, transform.matrix);
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
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [
    globe,
    selectedNoradId,
    trackedIds,
    getTrackedColor,
    styleRevision,
    positionCount,
    markerCapacity,
  ]);

  return null;
};

export default SatelliteMarkers;
