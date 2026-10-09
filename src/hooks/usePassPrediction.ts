import { useCallback, useEffect, useRef, useState } from "react";
import { SatelliteCatalogEntry } from "../utils/satellite";

export type SatellitePass = {
  noradId: number;
  name: string;
  riseTime: Date;
  maxElevationTime: Date;
  setTime: Date;
  maxElevationDeg: number;
  durationMinutes: number;
};

type SerializedPass = Omit<
  SatellitePass,
  "riseTime" | "maxElevationTime" | "setTime"
> & { riseTime: number; maxElevationTime: number; setTime: number };
type PassResponse = {
  requestId: number;
  passes: SerializedPass[];
  error?: string;
};

export const usePassPrediction = (
  trackedSatellites: SatelliteCatalogEntry[],
  userLocation: { lat: number; lng: number } | null,
  startTime = new Date(),
) => {
  const [passes, setPasses] = useState<SatellitePass[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const workerRef = useRef<Worker | null>(null);
  const requestIdRef = useRef(0);

  useEffect(() => {
    let worker: Worker;
    try {
      worker = new Worker(
        new URL("../workers/passes.worker.ts", import.meta.url),
        { type: "module" },
      );
    } catch {
      setError("Background workers are unavailable in this browser.");
      return;
    }
    workerRef.current = worker;
    worker.onmessage = (event: MessageEvent<PassResponse>) => {
      if (event.data.requestId !== requestIdRef.current) return;
      setIsCalculating(false);
      if (event.data.error) setError(event.data.error);
      else
        setPasses(
          event.data.passes.map((pass) => ({
            ...pass,
            riseTime: new Date(pass.riseTime),
            maxElevationTime: new Date(pass.maxElevationTime),
            setTime: new Date(pass.setTime),
          })),
        );
    };
    worker.onerror = () => {
      setIsCalculating(false);
      setError("Pass prediction failed. Please try again.");
    };
    return () => {
      worker.terminate();
      workerRef.current = null;
    };
  }, []);

  const calculate = useCallback(
    (noradIds: number[]) => {
      if (!userLocation) {
        setError("Set your location before predicting passes.");
        return;
      }
      const selected = trackedSatellites.filter((sat) =>
        noradIds.includes(sat.noradId),
      );
      if (!selected.length) {
        setError("No satellites are available to predict.");
        return;
      }
      if (!workerRef.current) {
        setError("Background workers are unavailable in this browser.");
        return;
      }
      setPasses([]);
      setError(null);
      setIsCalculating(true);
      const requestId = ++requestIdRef.current;
      workerRef.current?.postMessage({
        requestId,
        location: { lat: userLocation.lat, lng: userLocation.lng },
        startTime: startTime.getTime(),
        satellites: selected,
      });
    },
    [trackedSatellites, userLocation, startTime],
  );

  const calculateForSelected = useCallback(
    (noradId: number) => calculate([noradId]),
    [calculate],
  );
  const calculateForTracked = useCallback(
    (noradIds: number[]) => calculate(noradIds),
    [calculate],
  );
  const clearPasses = useCallback(() => {
    const requestId = ++requestIdRef.current;
    workerRef.current?.postMessage({ type: "cancel", requestId });
    setIsCalculating(false);
    setPasses([]);
    setError(null);
  }, []);

  return {
    passes,
    isCalculating,
    error,
    calculateForSelected,
    calculateForTracked,
    clearPasses,
  };
};
