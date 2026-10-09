import { useEffect, useMemo, useRef, useState } from "react";
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
  const [orbitPoints, setOrbitPoints] = useState<OrbitPoint[]>([]);
  const [showOrbit, setShowOrbit] = useState(true);
  const [followSelected, setFollowSelected] = useState(false);
  const workerRef = useRef<Worker | null>(null);
  const requestIdRef = useRef(0);
  const effectiveTime = externalTime ?? liveTime;
  const catalogTles = useMemo(
    () =>
      trackedSatellites.map(({ noradId, name, line1, line2 }) => ({
        noradId,
        name,
        line1,
        line2,
      })),
    [trackedSatellites],
  );
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

  useEffect(() => {
    const timer = window.setInterval(
      () => setLiveTime(new Date()),
      POSITION_TICK_MS,
    );
    return () => window.clearInterval(timer);
  }, []);

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
        requestId: number;
        positions: SatellitePosition[];
        orbitPoints: OrbitPoint[];
      }>,
    ) => {
      if (event.data.requestId !== requestIdRef.current) return;
      setSatellitePositions(event.data.positions);
      setOrbitPoints(event.data.orbitPoints);
    };
    worker.onerror = () => {
      // Keep the catalog available if worker creation or propagation fails.
      const {
        trackedSatellites: current,
        selectedNoradId: selectedId,
        time: at,
        showOrbit: orbitVisible,
      } = latestRef.current;
      setSatellitePositions(
        current
          .map((sat) => {
            const tracked = buildTrackedSatellite(sat);
            return tracked ? propagatePosition(tracked, at) : null;
          })
          .filter(
            (position): position is SatellitePosition => position !== null,
          ),
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
  }, []);

  useEffect(() => {
    workerRef.current?.postMessage({
      type: "catalog",
      satellites: catalogTles,
    });
  }, [catalogTles]);

  useEffect(() => {
    const requestId = ++requestIdRef.current;
    const worker = workerRef.current;
    if (worker) {
      worker.postMessage({
        requestId,
        time: effectiveTime.toISOString(),
        selectedNoradId,
        showOrbit,
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
    setSatellitePositions(positions);
    setOrbitPoints(
      selected && showOrbit ? propagateOrbit(selected, effectiveTime) : [],
    );
  }, [
    trackedSatellites,
    effectiveTime,
    selectedNoradId,
    showOrbit,
    catalogTles,
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
    orbitPoints: showOrbit ? orbitPoints : [],
    showOrbit,
    setShowOrbit,
    followSelected,
    setFollowSelected,
  };
};
