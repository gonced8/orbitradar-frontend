import { useState, useCallback } from "react";
import { getUserLocation as getUserLocationUtil } from "../utils/geolocation";
import { LocationPoint } from "../utils/satellite";

const USER_LOCATION_KEY = "orbitradar_user_location";

export const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState<LocationPoint | null>(() => {
    // Try to load last saved location
    const saved = localStorage.getItem(USER_LOCATION_KEY);
    if (saved) {
      try {
        return { ...JSON.parse(saved), name: "You" };
      } catch {
        return null;
      }
    }
    return null;
  });

  const locateUser = useCallback(() => {
    return getUserLocationUtil()
      .then((location) => {
        const point = { ...location, name: "You" };
        setUserLocation(point);
        // Save to localStorage for persistence
        localStorage.setItem(USER_LOCATION_KEY, JSON.stringify(location));
        return point;
      })
      .catch((error) => {
        console.error("Error getting user location:", error);
        throw error;
      });
  }, []);

  const clearUserLocation = useCallback(() => {
    setUserLocation(null);
    localStorage.removeItem(USER_LOCATION_KEY);
  }, []);

  return {
    userLocation,
    locateUser,
    clearUserLocation,
  };
};
