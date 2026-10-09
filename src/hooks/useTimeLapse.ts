import { useState, useCallback, useEffect, useRef } from "react";

const TIME_LAPSE_SPEEDS = [1, 5, 10, 30, 60, 120, 300, 600] as const;

export type TimeLapseSpeed = (typeof TIME_LAPSE_SPEEDS)[number];

export const useTimeLapse = () => {
  const [isTimeLapseActive, setIsTimeLapseActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState<TimeLapseSpeed>(1);
  const [simulationTimeMs, setSimulationTimeMs] = useState<number>(() =>
    Date.now(),
  );
  const [updatedAt, setUpdatedAt] = useState<number>(() => Date.now());
  const lastTickRef = useRef(Date.now());

  const speeds = TIME_LAPSE_SPEEDS;

  // Calculate effective time
  const getEffectiveTime = useCallback((): Date => {
    if (!isTimeLapseActive)
      return new Date(isPaused ? simulationTimeMs : Date.now());
    return new Date(simulationTimeMs + (Date.now() - updatedAt) * speed);
  }, [isTimeLapseActive, isPaused, speed, simulationTimeMs, updatedAt]);

  // Format time offset for display
  const getTimeOffsetDisplay = useCallback((): string => {
    const totalMs = getEffectiveTime().getTime() - Date.now();
    if (Math.abs(totalMs) < 1000) return "Live";

    const absMs = Math.abs(totalMs);
    const sign = totalMs > 0 ? "+" : "";

    if (absMs < 60000) {
      const seconds = Math.floor(absMs / 1000);
      return `${sign}${seconds}s`;
    } else if (absMs < 3600000) {
      const minutes = Math.floor(absMs / 60000);
      return `${sign}${minutes}m`;
    } else {
      const hours = Math.floor(absMs / 3600000);
      return `${sign}${hours}h`;
    }
  }, [getEffectiveTime]);

  const startTimeLapse = useCallback(() => {
    if (isTimeLapseActive) return;
    lastTickRef.current = Date.now();
    const now = Date.now();
    if (!isPaused) setSimulationTimeMs(now);
    setUpdatedAt(now);
    setIsPaused(false);
    setIsTimeLapseActive(true);
  }, [isTimeLapseActive, isPaused]);

  const stopTimeLapse = useCallback(() => {
    setSimulationTimeMs(getEffectiveTime().getTime());
    const now = Date.now();
    lastTickRef.current = now;
    setUpdatedAt(now);
    setIsTimeLapseActive(false);
    setIsPaused(true);
  }, [getEffectiveTime]);

  const toggleTimeLapse = useCallback(() => {
    if (isTimeLapseActive) {
      stopTimeLapse();
    } else {
      startTimeLapse();
    }
  }, [isTimeLapseActive, startTimeLapse, stopTimeLapse]);

  const setTimeLapseSpeed = useCallback(
    (newSpeed: TimeLapseSpeed) => {
      if (isTimeLapseActive) {
        setSimulationTimeMs(getEffectiveTime().getTime());
        const now = Date.now();
        lastTickRef.current = now;
        setUpdatedAt(now);
      }
      setSpeed(newSpeed);
    },
    [isTimeLapseActive, getEffectiveTime],
  );

  const resetTime = useCallback(() => {
    setSimulationTimeMs(Date.now());
    setUpdatedAt(Date.now());
    setIsTimeLapseActive(false);
    setIsPaused(false);
  }, []);

  useEffect(() => {
    if (!isTimeLapseActive) return;
    const timer = window.setInterval(() => {
      const now = Date.now();
      const elapsed = now - lastTickRef.current;
      lastTickRef.current = now;
      setSimulationTimeMs((current) => current + elapsed * speed);
      setUpdatedAt(now);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isTimeLapseActive, speed]);

  const getSpeedLabel = useCallback((s: TimeLapseSpeed): string => {
    if (s === 1) return "1x (Real-time)";
    if (s < 60) return `${s}x`;
    const minutes = s / 60;
    return `${minutes} min`;
  }, []);

  return {
    isTimeLapseActive,
    speed,
    speeds,
    currentTime: getEffectiveTime(),
    timeOffsetMs: getEffectiveTime().getTime() - Date.now(),
    startTimeLapse,
    stopTimeLapse,
    toggleTimeLapse,
    setTimeLapseSpeed,
    resetTime,
    getSpeedLabel,
    getTimeOffsetDisplay,
  };
};
