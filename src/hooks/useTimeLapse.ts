import { useState, useCallback, useEffect, useRef } from "react";

const TIME_LAPSE_SPEEDS = [1, 5, 10, 30, 60, 120, 300, 600] as const;

export type TimeLapseSpeed = (typeof TIME_LAPSE_SPEEDS)[number];

export const useTimeLapse = () => {
  const [isTimeLapseActive, setIsTimeLapseActive] = useState(false);
  const [speed, setSpeed] = useState<TimeLapseSpeed>(1);
  const [timeOffsetMs, setTimeOffsetMs] = useState<number>(0);
  const [startTimestamp, setStartTimestamp] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const speeds = TIME_LAPSE_SPEEDS;

  // Calculate effective time
  const getEffectiveTime = useCallback((): Date => {
    if (!isTimeLapseActive) return new Date();
    const now = Date.now();
    const elapsedMs = now - startTimestamp;
    const totalOffsetMs = timeOffsetMs + elapsedMs * speed;
    return new Date(now + totalOffsetMs);
  }, [isTimeLapseActive, speed, timeOffsetMs, startTimestamp]);

  // Format time offset for display
  const getTimeOffsetDisplay = useCallback((): string => {
    if (!isTimeLapseActive && timeOffsetMs === 0) return "Live";
    
    const totalMs = isTimeLapseActive
      ? timeOffsetMs + (Date.now() - startTimestamp) * speed
      : timeOffsetMs;
    
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
  }, [isTimeLapseActive, speed, timeOffsetMs, startTimestamp]);

  const startTimeLapse = useCallback(() => {
    if (intervalRef.current) return;
    setIsTimeLapseActive(true);
    setStartTimestamp(Date.now());
    intervalRef.current = setInterval(() => {}, 100);
  }, []);

  const stopTimeLapse = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    const effectiveTime = getEffectiveTime();
    const offset = effectiveTime.getTime() - Date.now();
    setTimeOffsetMs(offset);
    setIsTimeLapseActive(false);
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
      setSpeed(newSpeed);
      if (isTimeLapseActive) {
        const wasActive = isTimeLapseActive;
        stopTimeLapse();
        if (wasActive) {
          startTimeLapse();
        }
      }
    },
    [isTimeLapseActive, startTimeLapse, stopTimeLapse],
  );

  const resetTime = useCallback(() => {
    setTimeOffsetMs(0);
    if (isTimeLapseActive) {
      stopTimeLapse();
    }
  }, [isTimeLapseActive, stopTimeLapse]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

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
