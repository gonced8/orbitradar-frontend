import { useState, useCallback } from "react";
import { getUserLocation as getUserLocationUtil } from "../utils/geolocation";
import { LocationPoint } from "../utils/satellite";

const USER_LOCATION_KEY = "orbitradar_user_location";

export const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState<LocationPoint | null>(() => {
    try {
      const saved = localStorage.getItem(USER_LOCATION_KEY);
      if (!saved) return null;
      const parsed: unknown = JSON.parse(saved);
      if (!parsed || typeof parsed !== "object") return null;
      const { lat, lng } = parsed as { lat?: unknown; lng?: unknown };
      return typeof lat === "number" &&
        Number.isFinite(lat) &&
        Math.abs(lat) <= 90 &&
        typeof lng === "number" &&
        Number.isFinite(lng) &&
        Math.abs(lng) <= 180
        ? { lat, lng, name: "You" }
        : null;
    } catch {
      return null;
    }
  });

  const locateUser = useCallback(() => {
    return getUserLocationUtil()
      .then((location) => {
        const point = { ...location, name: "You" };
        setUserLocation(point);
        // Save to localStorage for persistence
        try {
          localStorage.setItem(USER_LOCATION_KEY, JSON.stringify(location));
        } catch {
          /* Location remains available for this session. */
        }
        return point;
      })
      .catch((error) => {
        console.error("Error getting user location:", error);
        throw error;
      });
  }, []);

  const clearUserLocation = useCallback(() => {
    setUserLocation(null);
    try {
      localStorage.removeItem(USER_LOCATION_KEY);
    } catch {
      /* Storage may be disabled. */
    }
  }, []);

  return {
    userLocation,
    locateUser,
    clearUserLocation,
  };
};
