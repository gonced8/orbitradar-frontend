/// <reference lib="webworker" />
import {
  buildTrackedSatellite,
  SatellitePosition,
  SatelliteTle,
} from "../utils/satellite";
import { propagateOrbit, propagatePosition } from "../utils/propagation";

type Request = {
  type?: "update" | "catalog";
  requestId?: number;
  time?: string;
  selectedNoradId?: number;
  satellites?: SatelliteTle[];
  showOrbit?: boolean;
};

let tracked: NonNullable<ReturnType<typeof buildTrackedSatellite>>[] = [];

self.onmessage = (event: MessageEvent<Request>) => {
  const request = event.data;
  if (request.type === "catalog") {
    tracked = (request.satellites ?? [])
      .map(buildTrackedSatellite)
      .filter((sat): sat is NonNullable<typeof sat> => sat !== null);
    return;
  }
  const { requestId, time, selectedNoradId, showOrbit } = request;
  const at = new Date(time ?? Date.now());
  const positions: SatellitePosition[] = [];
  let index = 0;
  const propagateBatch = () => {
    if (requestId !== latestRequestId) return;
    const batchEnd = Math.min(index + 250, tracked.length);
    for (; index < batchEnd; index += 1) {
      const position = propagatePosition(tracked[index], at);
      if (position) positions.push(position);
    }
    if (index < tracked.length) {
      setTimeout(propagateBatch, 0);
      return;
    }
    self.postMessage({ type: "positions", requestId, positions });
  };
  if (requestId === undefined) return;
  latestRequestId = requestId;
  const selected = tracked.find((sat) => sat.noradId === selectedNoradId);
  if (selected && showOrbit) {
    const orbitPoints = propagateOrbit(selected, at);
    const chunkSize = 12;
    let orbitIndex = 0;
    const publishOrbit = () => {
      if (requestId !== latestRequestId) return;
      const next = orbitPoints.slice(
        0,
        Math.min(orbitIndex + chunkSize, orbitPoints.length),
      );
      orbitIndex = next.length;
      self.postMessage({
        type: "orbit",
        requestId,
        orbitPoints: next,
        complete: orbitIndex >= orbitPoints.length,
      });
      if (orbitIndex < orbitPoints.length) setTimeout(publishOrbit, 0);
    };
    publishOrbit();
  } else {
    self.postMessage({
      type: "orbit",
      requestId,
      orbitPoints: [],
      complete: true,
    });
  }
  propagateBatch();
};

let latestRequestId = 0;
