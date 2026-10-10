/// <reference lib="webworker" />
import * as satellite from "satellite.js";
import { buildTrackedSatellite, SatelliteTle } from "../utils/satellite";

type Request = {
  type?: "predict" | "cancel";
  requestId: number;
  startTime: number;
  location: { lat: number; lng: number };
  satellites: SatelliteTle[];
};

const radians = (degrees: number) => (degrees * Math.PI) / 180;

self.onmessage = (event: MessageEvent<Request>) => {
  if (event.data.type === "cancel") {
    latestRequestId = event.data.requestId;
    return;
  }
  latestRequestId = event.data.requestId;
  const activeId = event.data.requestId;
  setTimeout(() => calculate(event.data, activeId), 0);
};

let latestRequestId = 0;

const calculate = async (request: Request, activeId: number) => {
  if (activeId !== latestRequestId) return;
  const { requestId, startTime, location, satellites } = request;
  try {
    const observer = {
      latitude: radians(location.lat),
      longitude: radians(location.lng),
      height: 0,
    };
    const start = new Date(startTime);
    const end = new Date(startTime + 24 * 60 * 60 * 1000);
    const stepMs = 30_000;
    const results = [];
    for (const tle of satellites) {
      const sat = buildTrackedSatellite(tle);
      if (!sat) continue;
      const elevationAt = (timestamp: number) => {
        const at = new Date(timestamp);
        const propagated = satellite.propagate(sat.satrec, at);
        if (
          !propagated ||
          !propagated.position ||
          typeof propagated.position !== "object"
        )
          return -Math.PI / 2;
        const ecf = satellite.eciToEcf(
          propagated.position as satellite.EciVec3<number>,
          satellite.gstime(at),
        );
        return satellite.ecfToLookAngles(observer, ecf).elevation;
      };
      let previousTime = start.getTime();
      let previousElevation = elevationAt(previousTime);
      let riseTime = previousElevation >= 0 ? previousTime : null;
      let riseClipped = previousElevation >= 0;
      let peakTime = previousTime;
      let peakElevation = previousElevation;
      let stepsSinceYield = 0;
      for (
        let currentTime = previousTime + stepMs;
        currentTime <= end.getTime();
        currentTime += stepMs
      ) {
        const currentElevation = elevationAt(currentTime);
        if (
          riseTime === null &&
          previousElevation < 0 &&
          currentElevation >= 0
        ) {
          let low = previousTime,
            high = currentTime;
          while (high - low > 1000) {
            const mid = (low + high) / 2;
            if (elevationAt(mid) >= 0) high = mid;
            else low = mid;
          }
          riseTime = high;
          riseClipped = false;
          peakTime = high;
          peakElevation = elevationAt(high);
        }
        if (riseTime !== null && currentElevation > peakElevation) {
          peakElevation = currentElevation;
          peakTime = currentTime;
        }
        if (
          riseTime !== null &&
          previousElevation >= 0 &&
          currentElevation < 0
        ) {
          let low = previousTime,
            high = currentTime;
          while (high - low > 1000) {
            const mid = (low + high) / 2;
            if (elevationAt(mid) >= 0) low = mid;
            else high = mid;
          }
          const setTime = low;
          let left = Math.max(riseTime, peakTime - stepMs),
            right = Math.min(setTime, peakTime + stepMs);
          for (
            let iteration = 0;
            iteration < 24 && right - left > 1000;
            iteration += 1
          ) {
            const a = left + (right - left) / 3,
              b = right - (right - left) / 3;
            if (elevationAt(a) < elevationAt(b)) left = a;
            else right = b;
          }
          peakTime = (left + right) / 2;
          peakElevation = elevationAt(peakTime);
          results.push({
            noradId: sat.noradId,
            name: sat.name,
            riseTime,
            maxElevationTime: peakTime,
            setTime,
            maxElevationDeg: (peakElevation * 180) / Math.PI,
            durationMinutes: (setTime - riseTime) / 60_000,
            riseClipped,
            setClipped: false,
          });
          riseTime = null;
          riseClipped = false;
        }
        previousTime = currentTime;
        previousElevation = currentElevation;
        if (++stepsSinceYield >= 120) {
          await new Promise<void>((resolve) => setTimeout(resolve, 0));
          if (activeId !== latestRequestId) return;
          stepsSinceYield = 0;
        }
      }
      if (riseTime !== null) {
        results.push({
          noradId: sat.noradId,
          name: sat.name,
          riseTime,
          maxElevationTime: peakTime,
          setTime: end.getTime(),
          maxElevationDeg: (peakElevation * 180) / Math.PI,
          durationMinutes: (end.getTime() - riseTime) / 60_000,
          riseClipped,
          setClipped: true,
        });
      }
    }
    results.sort((a, b) => a.riseTime - b.riseTime);
    if (activeId === latestRequestId)
      self.postMessage({ requestId, passes: results });
  } catch {
    if (activeId === latestRequestId)
      self.postMessage({
        requestId,
        passes: [],
        error: "Pass prediction failed. Please try again.",
      });
  }
};
