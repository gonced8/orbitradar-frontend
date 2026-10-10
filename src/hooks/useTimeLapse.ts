import { useState, useCallback, useEffect, useMemo, useRef } from "react";

const TIME_LAPSE_SPEEDS = [1, 5, 10, 30, 60, 120, 300, 600] as const;

export type TimeLapseSpeed = (typeof TIME_LAPSE_SPEEDS)[number];

const formatTimeOffset = (offsetMs: number): string => {
  if (Math.abs(offsetMs) < 1000) return "Live";
  const absoluteMs = Math.abs(offsetMs);
  const sign = offsetMs < 0 ? "-" : "+";
  if (absoluteMs < 60_000) return `${sign}${Math.floor(absoluteMs / 1000)}s`;
  if (absoluteMs < 3_600_000)
    return `${sign}${Math.floor(absoluteMs / 60_000)}m`;
  return `${sign}${Math.floor(absoluteMs / 3_600_000)}h`;
};

export const useTimeLapse = () => {
  const [isTimeLapseActive, setIsTimeLapseActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState<TimeLapseSpeed>(1);
  const [simulationTimeMs, setSimulationTimeMs] = useState(() => Date.now());
  const [liveTimeMs, setLiveTimeMs] = useState(() => Date.now());
  const [updatedAt, setUpdatedAt] = useState(() => Date.now());
  const lastTickRef = useRef(Date.now());

  const effectiveTimeMs =
    isPaused || isTimeLapseActive ? simulationTimeMs : liveTimeMs;
  const currentTime = useMemo(
    () => new Date(effectiveTimeMs),
    [effectiveTimeMs],
  );
  const timeOffsetMs = effectiveTimeMs - liveTimeMs;

  const getEffectiveTime = useCallback((): Date => {
    if (isPaused || !isTimeLapseActive) return new Date(effectiveTimeMs);
    return new Date(simulationTimeMs + (Date.now() - updatedAt) * speed);
  }, [
    effectiveTimeMs,
    isPaused,
    isTimeLapseActive,
    simulationTimeMs,
    speed,
    updatedAt,
  ]);

  const getTimeOffsetDisplay = useCallback(
    () => formatTimeOffset(timeOffsetMs),
    [timeOffsetMs],
  );

  const startTimeLapse = useCallback(() => {
    if (isTimeLapseActive) return;
    const now = Date.now();
    lastTickRef.current = now;
    if (!isPaused) setSimulationTimeMs(now);
    setUpdatedAt(now);
    setIsPaused(false);
    setIsTimeLapseActive(true);
  }, [isTimeLapseActive, isPaused]);

  const stopTimeLapse = useCallback(() => {
    const now = Date.now();
    setSimulationTimeMs(getEffectiveTime().getTime());
    lastTickRef.current = now;
    setUpdatedAt(now);
    setIsTimeLapseActive(false);
    setIsPaused(true);
  }, [getEffectiveTime]);

  const toggleTimeLapse = useCallback(() => {
    if (isTimeLapseActive) stopTimeLapse();
    else startTimeLapse();
  }, [isTimeLapseActive, startTimeLapse, stopTimeLapse]);

  const setTimeLapseSpeed = useCallback(
    (newSpeed: TimeLapseSpeed) => {
      if (isTimeLapseActive) {
        const now = Date.now();
        setSimulationTimeMs(getEffectiveTime().getTime());
        lastTickRef.current = now;
        setUpdatedAt(now);
      }
      setSpeed(newSpeed);
    },
    [isTimeLapseActive, getEffectiveTime],
  );

  const resetTime = useCallback(() => {
    const now = Date.now();
    setSimulationTimeMs(now);
    setLiveTimeMs(now);
    setUpdatedAt(now);
    lastTickRef.current = now;
    setIsTimeLapseActive(false);
    setIsPaused(false);
  }, []);

  useEffect(() => {
    const tick = () => {
      if (document.hidden) return;
      const now = Date.now();
      setLiveTimeMs(now);
      if (isTimeLapseActive) {
        const elapsed = now - lastTickRef.current;
        lastTickRef.current = now;
        setSimulationTimeMs((current) => current + elapsed * speed);
        setUpdatedAt(now);
      }
    };
    const timer = window.setInterval(tick, 1000);
    document.addEventListener("visibilitychange", tick);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", tick);
    };
  }, [isTimeLapseActive, speed]);

  const getSpeedLabel = useCallback((value: TimeLapseSpeed): string => {
    if (value === 1) return "1x (Real-time)";
    if (value < 60) return `${value}x`;
    return `${value / 60} min`;
  }, []);

  return {
    isTimeLapseActive,
    speed,
    speeds: TIME_LAPSE_SPEEDS,
    currentTime,
    timeOffsetMs,
    startTimeLapse,
    stopTimeLapse,
    toggleTimeLapse,
    setTimeLapseSpeed,
    resetTime,
    getSpeedLabel,
    getTimeOffsetDisplay,
  };
};
