import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  OrbitPoint,
  SatellitePosition,
  SatelliteCatalogEntry,
  buildTrackedSatellite,
} from "../utils/satellite";
import { propagateOrbit, propagatePosition } from "../utils/propagation";

const POSITION_TICK_MS = 1000;

export const useSatellitePositions = (
  trackedSatellites: SatelliteCatalogEntry[],
  selectedNoradId: number,
  externalTime?: Date,
) => {
  const [liveTime, setLiveTime] = useState(() => new Date());
  const [satellitePositions, setSatellitePositions] = useState<
    SatellitePosition[]
  >([]);
  const [snapshotVersion, setSnapshotVersion] = useState(0);
  const [orbitPoints, setOrbitPoints] = useState<OrbitPoint[]>([]);
  const [showOrbit, setShowOrbit] = useState(true);
  const [followSelected, setFollowSelected] = useState(false);
  const workerRef = useRef<Worker | null>(null);
  const requestIdRef = useRef(0);
  const orbitSelectionRef = useRef(selectedNoradId);
  const catalogVersionRef = useRef(0);
  const snapshotKeyRef = useRef<string | null>(null);
  const usesExternalTime = externalTime !== undefined;
  const effectiveTime = externalTime ?? liveTime;
  const catalogTles = useMemo(() => trackedSatellites, [trackedSatellites]);
  const latestRef = useRef({
    trackedSatellites,
    selectedNoradId,
    time: effectiveTime,
    showOrbit,
  });
  latestRef.current = {
    trackedSatellites,
    selectedNoradId,
    time: effectiveTime,
    showOrbit,
  };

  const acceptPositionSnapshot = useCallback(
    (positions: SatellitePosition[], snapshotKey: string) => {
      setSatellitePositions(positions);
      if (snapshotKeyRef.current === snapshotKey) return;
      snapshotKeyRef.current = snapshotKey;
      setSnapshotVersion((version) => version + 1);
    },
    [],
  );

  useEffect(() => {
    if (usesExternalTime) return;
    const tick = () => {
      if (document.visibilityState !== "hidden") setLiveTime(new Date());
    };
    const timer = window.setInterval(tick, POSITION_TICK_MS);
    document.addEventListener("visibilitychange", tick);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", tick);
    };
  }, [usesExternalTime]);

  useEffect(() => {
    let worker: Worker;
    try {
      worker = new Worker(
        new URL("../workers/positions.worker.ts", import.meta.url),
        { type: "module" },
      );
    } catch {
      return;
    }
    workerRef.current = worker;
    worker.onmessage = (
      event: MessageEvent<{
        type: "positions" | "orbit";
        requestId: number;
        positions?: SatellitePosition[];
        orbitPoints?: OrbitPoint[];
        snapshotKey?: string;
      }>,
    ) => {
      if (event.data.requestId !== requestIdRef.current) return;
      if (event.data.type === "positions" && event.data.positions) {
        acceptPositionSnapshot(
          event.data.positions,
          event.data.snapshotKey ?? `request:${event.data.requestId}`,
        );
      } else if (event.data.type === "orbit" && event.data.orbitPoints) {
        setOrbitPoints(event.data.orbitPoints);
      }
    };
    worker.onerror = () => {
      // Keep the catalog available if worker creation or propagation fails.
      const {
        trackedSatellites: current,
        selectedNoradId: selectedId,
        time: at,
        showOrbit: orbitVisible,
      } = latestRef.current;
      const positions = current
        .map((sat) => {
          const tracked = buildTrackedSatellite(sat);
          return tracked ? propagatePosition(tracked, at) : null;
        })
        .filter((position): position is SatellitePosition => position !== null);
      acceptPositionSnapshot(
        positions,
        `${catalogVersionRef.current}:${at.toISOString()}`,
      );
      const entry = current.find((sat) => sat.noradId === selectedId);
      const selected = entry ? buildTrackedSatellite(entry) : null;
      setOrbitPoints(
        selected && orbitVisible ? propagateOrbit(selected, at) : [],
      );
    };
    return () => {
      worker.terminate();
      workerRef.current = null;
    };
  }, [acceptPositionSnapshot]);

  useEffect(() => {
    catalogVersionRef.current += 1;
    workerRef.current?.postMessage({
      type: "catalog",
      satellites: catalogTles,
    });
  }, [catalogTles]);

  useEffect(() => {
    const requestId = ++requestIdRef.current;
    if (orbitSelectionRef.current !== selectedNoradId) {
      setOrbitPoints([]);
      orbitSelectionRef.current = selectedNoradId;
    }
    const worker = workerRef.current;
    const snapshotKey = `${catalogVersionRef.current}:${effectiveTime.toISOString()}`;
    if (worker) {
      worker.postMessage({
        requestId,
        time: effectiveTime.toISOString(),
        selectedNoradId,
        showOrbit,
        snapshotKey,
      });
      return;
    }
    const positions = trackedSatellites
      .map((sat) => {
        const tracked = buildTrackedSatellite(sat);
        return tracked ? propagatePosition(tracked, effectiveTime) : null;
      })
      .filter((p): p is SatellitePosition => p !== null);
    const entry = trackedSatellites.find(
      (sat) => sat.noradId === selectedNoradId,
    );
    const selected = entry ? buildTrackedSatellite(entry) : null;
    acceptPositionSnapshot(positions, snapshotKey);
    setOrbitPoints(
      selected && showOrbit ? propagateOrbit(selected, effectiveTime) : [],
    );
  }, [
    trackedSatellites,
    effectiveTime,
    selectedNoradId,
    showOrbit,
    catalogTles,
    acceptPositionSnapshot,
  ]);

  const selectedPosition = useMemo(
    () =>
      satellitePositions.find((item) => item.noradId === selectedNoradId) ??
      null,
    [satellitePositions, selectedNoradId],
  );

  return {
    time: liveTime,
    satellitePositions,
    selectedPosition,
    snapshotVersion,
    orbitPoints: showOrbit ? orbitPoints : [],
    showOrbit,
    setShowOrbit,
    followSelected,
    setFollowSelected,
  };
};
