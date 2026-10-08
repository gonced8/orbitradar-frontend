import { useState, useCallback, useEffect, useRef } from "react";

const TIME_LAPSE_SPEEDS = [1, 5, 10, 30, 60, 120, 300, 600] as const; // 1x, 5x, 10x, 30x, 1min, 2min, 5min, 10min

export type TimeLapseSpeed = typeof TIME_LAPSE_SPEEDS[number];

export const useTimeLapse = () => {
  const [isTimeLapseActive, setIsTimeLapseActive] = useState(false);
  const [speed, setSpeed] = useState<TimeLapseSpeed>(1);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Available speeds
  const speeds = TIME_LAPSE_SPEEDS;

  // Start time lapse
  const startTimeLapse = useCallback(() => {
    if (intervalRef.current) return;
    
    setIsTimeLapseActive(true);
    
    const updateTime = () => {
      setCurrentTime((prev) => {
        const newTime = new Date(prev.getTime() + speed * 1000);
        return newTime;
      });
    };
    
    // Initial update
    updateTime();
    
    // Set interval
    intervalRef.current = setInterval(updateTime, 1000);
  }, [speed]);

  // Stop time lapse
  const stopTimeLapse = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsTimeLapseActive(false);
  }, []);

  // Toggle time lapse
  const toggleTimeLapse = useCallback(() => {
    if (isTimeLapseActive) {
      stopTimeLapse();
    } else {
      startTimeLapse();
    }
  }, [isTimeLapseActive, startTimeLapse, stopTimeLapse]);

  // Change speed
  const setTimeLapseSpeed = useCallback((newSpeed: TimeLapseSpeed) => {
    setSpeed(newSpeed);
    // Restart with new speed
    if (isTimeLapseActive) {
      stopTimeLapse();
      startTimeLapse();
    }
  }, [isTimeLapseActive, startTimeLapse, stopTimeLapse]);

  // Reset to current time
  const resetTime = useCallback(() => {
    setCurrentTime(new Date());
    if (isTimeLapseActive) {
      stopTimeLapse();
    }
  }, [isTimeLapseActive, stopTimeLapse]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Format speed label
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
    currentTime,
    startTimeLapse,
    stopTimeLapse,
    toggleTimeLapse,
    setTimeLapseSpeed,
    resetTime,
    getSpeedLabel,
  };
};
