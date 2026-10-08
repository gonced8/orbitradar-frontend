import { useState, useCallback, useMemo } from "react";
import * as satellite from "satellite.js";
import { EARTH_RADIUS_KM, TrackedSatellite } from "../utils/satellite";

// Type for pass prediction result
export type SatellitePass = {
  noradId: number;
  name: string;
  riseTime: Date;
  maxElevationTime: Date;
  setTime: Date;
  maxElevationDeg: number;
  durationMinutes: number;
};

const MIN_ELEVATION = 0; // Minimum elevation in degrees to consider a pass
const PREDICTION_DAYS = 1; // Predict passes for the next day

export const usePassPrediction = (
  trackedSatellites: TrackedSatellite[],
  userLocation: { lat: number; lng: number } | null
) => {
  const [passes, setPasses] = useState<SatellitePass[]>([]);
  const [selectedSatelliteId, setSelectedSatelliteId] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Calculate passes for a specific satellite
  const calculatePasses = useCallback(
    (sat: TrackedSatellite, observerLat: number, observerLng: number, daysAhead: number = PREDICTION_DAYS) => {
      const passes: SatellitePass[] = [];
      const now = new Date();
      const endTime = new Date(now.getTime() + daysAhead * 24 * 60 * 60 * 1000);
      
      // We'll check every 5 minutes for potential passes
      const stepMinutes = 5;
      let currentTime = new Date(now);
      
      while (currentTime < endTime) {
        // Propagate satellite position
        const propagated = satellite.propagate(sat.satrec, currentTime);
        if (!propagated.position) {
          currentTime = new Date(currentTime.getTime() + stepMinutes * 60 * 1000);
          continue;
        }
        
        // Convert to geodetic coordinates
        const gmst = satellite.gstime(currentTime);
        const geodetic = satellite.eciToGeodetic(
          propagated.position as satellite.EciVec3<number>,
          gmst
        );
        
        const satLat = satellite.degreesLat(geodetic.latitude);
        const satLon = satellite.degreesLong(geodetic.longitude);
        const satAltKm = geodetic.height / 1000;
        
        // Calculate azimuth and elevation from observer
        const { elevation } = calculateAzimuthElevation(
          observerLat,
          observerLng,
          satLat,
          satLon,
          satAltKm
        );
        
        // If elevation is above minimum, this might be a pass
        if (elevation > MIN_ELEVATION) {
          // Find the maximum elevation point
          let maxElevation = elevation;
          let maxElevationTime = new Date(currentTime);
          let riseTime: Date | null = null;
          let setTime: Date | null = null;
          
          // Look backwards for rise time
          let lookTime = new Date(currentTime.getTime() - stepMinutes * 60 * 1000);
          while (lookTime > now) {
            const prevProp = satellite.propagate(sat.satrec, lookTime);
            if (!prevProp.position) {
              lookTime = new Date(lookTime.getTime() - stepMinutes * 60 * 1000);
              continue;
            }
            const prevGmst = satellite.gstime(lookTime);
            const prevGeodetic = satellite.eciToGeodetic(
              prevProp.position as satellite.EciVec3<number>,
              prevGmst
            );
            const prevSatLat = satellite.degreesLat(prevGeodetic.latitude);
            const prevSatLon = satellite.degreesLong(prevGeodetic.longitude);
            const prevSatAltKm = prevGeodetic.height / 1000;
            const { elevation: prevElevation } = calculateAzimuthElevation(
              observerLat,
              observerLng,
              prevSatLat,
              prevSatLon,
              prevSatAltKm
            );
            
            if (prevElevation <= MIN_ELEVATION && elevation > MIN_ELEVATION) {
              riseTime = new Date(currentTime);
              break;
            }
            lookTime = new Date(lookTime.getTime() - stepMinutes * 60 * 1000);
          }
          
          // Look forwards for max elevation and set time
          lookTime = new Date(currentTime);
          let foundMax = false;
          while (lookTime < endTime) {
            const nextProp = satellite.propagate(sat.satrec, lookTime);
            if (!nextProp.position) {
              lookTime = new Date(lookTime.getTime() + stepMinutes * 60 * 1000);
              continue;
            }
            const nextGmst = satellite.gstime(lookTime);
            const nextGeodetic = satellite.eciToGeodetic(
              nextProp.position as satellite.EciVec3<number>,
              nextGmst
            );
            const nextSatLat = satellite.degreesLat(nextGeodetic.latitude);
            const nextSatLon = satellite.degreesLong(nextGeodetic.longitude);
            const nextSatAltKm = nextGeodetic.height / 1000;
            const { elevation: nextElevation } = calculateAzimuthElevation(
              observerLat,
              observerLng,
              nextSatLat,
              nextSatLon,
              nextSatAltKm
            );
            
            if (nextElevation > maxElevation) {
              maxElevation = nextElevation;
              maxElevationTime = new Date(lookTime);
            }
            
            if (nextElevation <= MIN_ELEVATION && elevation > MIN_ELEVATION) {
              setTime = new Date(lookTime);
              foundMax = true;
              break;
            }
            lookTime = new Date(lookTime.getTime() + stepMinutes * 60 * 1000);
          }
          
          // If we found a complete pass
          if (riseTime && setTime && foundMax) {
            const durationMinutes = (setTime.getTime() - riseTime.getTime()) / (60 * 1000);
            passes.push({
              noradId: sat.noradId,
              name: sat.name,
              riseTime,
              maxElevationTime,
              setTime,
              maxElevationDeg: maxElevation,
              durationMinutes,
            });
            
            // Skip ahead to after this pass
            currentTime = new Date(setTime.getTime() + stepMinutes * 60 * 1000);
            continue;
          }
        }
        
        currentTime = new Date(currentTime.getTime() + stepMinutes * 60 * 1000);
      }
      
      return passes;
    },
    []
  );

  // Calculate azimuth and elevation from observer to satellite
  const calculateAzimuthElevation = useCallback(
    (
      observerLat: number,
      observerLng: number,
      satLat: number,
      satLon: number,
      satAltKm: number
    ): { azimuth: number; elevation: number } => {
      // Convert to radians
      const obsLatRad = (observerLat * Math.PI) / 180;
      const obsLonRad = (observerLng * Math.PI) / 180;
      const satLatRad = (satLat * Math.PI) / 180;
      const satLonRad = (satLon * Math.PI) / 180;
      
      // Earth radius in km
      const R = EARTH_RADIUS_KM;
      const satR = R + satAltKm;
      
      // Calculate differences
      const deltaLon = satLonRad - obsLonRad;
      
      // Calculate elevation
      const sinEl = (
        (Math.sin(satLatRad) * Math.sin(obsLatRad) + 
          Math.cos(satLatRad) * Math.cos(obsLatRad) * Math.cos(deltaLon)) *
        (satR / R) -
        Math.cos(satLatRad) * Math.cos(obsLatRad) * Math.cos(deltaLon)
      );
      
      const elevation = Math.asin(sinEl) * (180 / Math.PI);
      
      // Calculate azimuth
      const cosAz = (Math.sin(satLatRad) - Math.sin(obsLatRad) * Math.cos(elevation * Math.PI / 180)) /
        (Math.cos(obsLatRad) * Math.sin(elevation * Math.PI / 180));
      const azimuth = Math.acos(Math.min(Math.max(cosAz, -1), 1)) * (180 / Math.PI);
      
      // Adjust azimuth based on longitude difference
      if (Math.sin(deltaLon) >= 0) {
        return { azimuth: 360 - azimuth, elevation };
      }
      return { azimuth, elevation };
    },
    []
  );

  // Calculate passes for selected satellite
  const calculateForSelected = useCallback(() => {
    if (!userLocation || selectedSatelliteId === null) return;
    
    const sat = trackedSatellites.find(s => s.noradId === selectedSatelliteId);
    if (!sat) return;
    
    setIsCalculating(true);
    setError(null);
    
    try {
      const newPasses = calculatePasses(sat, userLocation.lat, userLocation.lng);
      setPasses(newPasses);
    } catch (err) {
      setError("Failed to calculate passes");
      console.error("Pass prediction error:", err);
    } finally {
      setIsCalculating(false);
    }
  }, [userLocation, selectedSatelliteId, trackedSatellites, calculatePasses]);

  // Calculate passes for all satellites (limited)
  const calculateForAll = useCallback(() => {
    if (!userLocation) return;
    
    setIsCalculating(true);
    setError(null);
    
    try {
      const allPasses: SatellitePass[] = [];
      const limit = Math.min(trackedSatellites.length, 50); // Limit to 50 satellites
      
      for (let i = 0; i < limit; i++) {
        const sat = trackedSatellites[i];
        const satPasses = calculatePasses(sat, userLocation.lat, userLocation.lng, 0.5); // Shorter period for all
        allPasses.push(...satPasses);
      }
      
      // Sort by rise time
      allPasses.sort((a, b) => a.riseTime.getTime() - b.riseTime.getTime());
      setPasses(allPasses.slice(0, 50)); // Limit to 50 passes
    } catch (err) {
      setError("Failed to calculate passes");
      console.error("Pass prediction error:", err);
    } finally {
      setIsCalculating(false);
    }
  }, [userLocation, trackedSatellites, calculatePasses]);

  // Next pass for each satellite (simplified)
  const nextPasses = useMemo(() => {
    if (!userLocation || trackedSatellites.length === 0) return [];
    
    const next: { noradId: number; name: string; nextPassTime: Date | null; maxElevation: number | null }[] = [];
    
    // For performance, only calculate for first 20 satellites
    const limit = Math.min(trackedSatellites.length, 20);
    for (let i = 0; i < limit; i++) {
      const sat = trackedSatellites[i];
      try {
        const satPasses = calculatePasses(sat, userLocation.lat, userLocation.lng, 0.2); // Next 4.8 hours
        if (satPasses.length > 0) {
          next.push({
            noradId: sat.noradId,
            name: sat.name,
            nextPassTime: satPasses[0].riseTime,
            maxElevation: satPasses[0].maxElevationDeg,
          });
        } else {
          next.push({
            noradId: sat.noradId,
            name: sat.name,
            nextPassTime: null,
            maxElevation: null,
          });
        }
      } catch {
        next.push({
          noradId: sat.noradId,
          name: sat.name,
          nextPassTime: null,
          maxElevation: null,
        });
      }
    }
    
    return next;
  }, [userLocation, trackedSatellites, calculatePasses]);

  // Clear passes
  const clearPasses = useCallback(() => {
    setPasses([]);
    setSelectedSatelliteId(null);
    setError(null);
  }, []);

  return {
    passes,
    nextPasses,
    selectedSatelliteId,
    isCalculating,
    error,
    setSelectedSatelliteId,
    calculateForSelected,
    calculateForAll,
    clearPasses,
  };
};
