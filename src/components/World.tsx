import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import axios from "axios";
import Globe, { GlobeMethods } from "react-globe.gl";
import * as satellite from "satellite.js";
import { getUserLocation } from "../utils/geolocation";

const EARTH_RADIUS_KM = 6371;
const ORBIT_POINTS = 100;
const POSITION_TICK_MS = 5000;
const CACHE_DURATION_MS = 8 * 60 * 60 * 1000;
const SATELLITE_CACHE_KEY = "orbitradar_active_satellite_tles_v2";
const SATELLITE_CACHE_TIMESTAMP_KEY =
  "orbitradar_active_satellite_timestamp_v2";
const CELESTRAK_ACTIVE_URL =
  "https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=TLE";
const DEFAULT_NORAD_ID = 25544;
const SEARCH_RESULT_LIMIT = 12;

type LocationPoint = { lat: number; lng: number; name: string };
type OrbitPoint = { lat: number; lng: number; alt: number };

type SatelliteTle = {
  noradId: number;
  name: string;
  line1: string;
  line2: string;
};

type TrackedSatellite = SatelliteTle & {
  satrec: satellite.SatRec;
  periodSeconds: number;
};

type SatellitePosition = OrbitPoint & {
  noradId: number;
  name: string;
  altitudeKm: number;
  velocityKph: number | null;
  color: string;
};

type SatelliteCache = { satellites: SatelliteTle[] };

const FEATURED_COLORS = new Map<number, string>([
  [25544, "#ff4d4f"], // ISS
  [20580, "#7dd3fc"], // Hubble
  [25994, "#34d399"], // Terra
  [33591, "#fbbf24"], // NOAA 19
]);

const formatCoordinate = (value: number, positive: string, negative: string) =>
  `${Math.abs(value).toFixed(2)}° ${value >= 0 ? positive : negative}`;

const getSatelliteColor = (noradId: number, altitudeKm: number) => {
  const featuredColor = FEATURED_COLORS.get(noradId);
  if (featuredColor) return featuredColor;
  if (altitudeKm < 2000) return "#67e8f9";
  if (altitudeKm < 20000) return "#a78bfa";
  return "#f9a8d4";
};

const isCacheFresh = (timestamp: string | null) => {
  if (!timestamp) return false;
  const cachedAt = Date.parse(timestamp);
  return !Number.isNaN(cachedAt) && Date.now() - cachedAt < CACHE_DURATION_MS;
};

const parseTleCatalog = (rawTle: string): SatelliteTle[] => {
  const lines = rawTle
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const catalog: SatelliteTle[] = [];

  for (let index = 0; index < lines.length - 2; index += 1) {
    const name = lines[index];
    const line1 = lines[index + 1];
    const line2 = lines[index + 2];
    if (!line1.startsWith("1 ") || !line2.startsWith("2 ")) continue;

    const noradId = Number.parseInt(line1.slice(2, 7).trim(), 10);
    if (!Number.isFinite(noradId)) continue;
    catalog.push({ noradId, name, line1, line2 });
    index += 2;
  }

  if (catalog.length === 0) {
    throw new Error("CelesTrak returned an unexpected TLE catalog.");
  }
  return catalog;
};

const readCache = (allowStale = false): SatelliteTle[] | null => {
  const value = localStorage.getItem(SATELLITE_CACHE_KEY);
  const timestamp = localStorage.getItem(SATELLITE_CACHE_TIMESTAMP_KEY);
  if (!value || (!allowStale && !isCacheFresh(timestamp))) return null;

  try {
    const parsed = JSON.parse(value) as SatelliteCache;
    return Array.isArray(parsed.satellites) && parsed.satellites.length > 0
      ? parsed.satellites
      : null;
  } catch {
    localStorage.removeItem(SATELLITE_CACHE_KEY);
    localStorage.removeItem(SATELLITE_CACHE_TIMESTAMP_KEY);
    return null;
  }
};

const writeCache = (satellites: SatelliteTle[]) => {
  try {
    localStorage.setItem(SATELLITE_CACHE_KEY, JSON.stringify({ satellites }));
    localStorage.setItem(
      SATELLITE_CACHE_TIMESTAMP_KEY,
      new Date().toISOString(),
    );
  } catch (error) {
    // A full active catalog can exceed restrictive browser storage quotas.
    console.warn("Satellite catalog could not be cached:", error);
  }
};

const buildTrackedSatellite = (tle: SatelliteTle): TrackedSatellite | null => {
  const satrec = satellite.twoline2satrec(tle.line1, tle.line2);
  if (satrec.error) return null;
  return {
    ...tle,
    satrec,
    periodSeconds: ((2 * Math.PI) / satrec.no) * 60,
  };
};

const World: React.FC = () => {
  const globeEl = useRef<GlobeMethods | undefined>();
  const [time, setTime] = useState(new Date());
  const [userLocation, setUserLocation] = useState<LocationPoint | null>(null);
  const [trackedSatellites, setTrackedSatellites] = useState<
    TrackedSatellite[]
  >([]);
  const [selectedNoradId, setSelectedNoradId] = useState(DEFAULT_NORAD_ID);
  const [showOrbit, setShowOrbit] = useState(true);
  const [followSelected, setFollowSelected] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [statusMessage, setStatusMessage] = useState(
    "Loading the active satellite catalog…",
  );

  const applyCatalog = useCallback(
    (catalog: SatelliteTle[], message: string) => {
      const tracked = catalog
        .map(buildTrackedSatellite)
        .filter((item): item is TrackedSatellite => Boolean(item));
      setTrackedSatellites(tracked);
      setStatusMessage(
        message.replace("{count}", tracked.length.toLocaleString()),
      );
      setSelectedNoradId((current) =>
        tracked.some((item) => item.noradId === current)
          ? current
          : (tracked[0]?.noradId ?? DEFAULT_NORAD_ID),
      );
    },
    [],
  );

  useEffect(() => {
    const cached = readCache();
    if (cached) {
      applyCatalog(cached, "Tracking {count} active satellites from cache.");
      setIsLoading(false);
      return;
    }

    // One bulk request replaces thousands of per-satellite requests and is kind
    // to CelesTrak's rate limits. The result is cached for eight hours.
    axios
      .get<string>(CELESTRAK_ACTIVE_URL)
      .then((response) => {
        const catalog = parseTleCatalog(response.data);
        writeCache(catalog);
        applyCatalog(
          catalog,
          "Tracking {count} active satellites from CelesTrak.",
        );
      })
      .catch((error) => {
        console.error("Error fetching active satellite catalog:", error);
        const staleCache = readCache(true);
        if (staleCache) {
          applyCatalog(
            staleCache,
            "CelesTrak is unavailable; tracking {count} satellites from stale cache.",
          );
        } else {
          setStatusMessage(
            "Unable to load the satellite catalog. Check your connection and refresh.",
          );
        }
      })
      .finally(() => setIsLoading(false));
  }, [applyCatalog]);

  useEffect(() => {
    const timer = window.setInterval(
      () => setTime(new Date()),
      POSITION_TICK_MS,
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    globeEl.current?.pointOfView({ altitude: 3.2 });
  }, []);

  const locateUser = useCallback(() => {
    getUserLocation()
      .then((location) => {
        const point = { ...location, name: "You" };
        setUserLocation(point);
        globeEl.current?.pointOfView({ ...point, altitude: 2.4 }, 1000);
      })
      .catch((error) => {
        console.error("Error getting user location:", error);
        setStatusMessage(
          "Location unavailable. Satellite tracking is still active.",
        );
      });
  }, []);

  const satellitePositions = useMemo<SatellitePosition[]>(() => {
    const gmst = satellite.gstime(time);
    return trackedSatellites
      .map((tracked) => {
        const propagated = satellite.propagate(tracked.satrec, time);
        if (!propagated.position) return null;
        const geodetic = satellite.eciToGeodetic(
          propagated.position as satellite.EciVec3<number>,
          gmst,
        );
        const velocity =
          propagated.velocity && typeof propagated.velocity === "object"
            ? (propagated.velocity as satellite.EciVec3<number>)
            : null;
        const altitudeKm = geodetic.height;
        return {
          noradId: tracked.noradId,
          name: tracked.name,
          lat: satellite.degreesLat(geodetic.latitude),
          lng: satellite.degreesLong(geodetic.longitude),
          alt: Math.max(altitudeKm / EARTH_RADIUS_KM, 0.005),
          altitudeKm,
          velocityKph: velocity
            ? Math.hypot(velocity.x, velocity.y, velocity.z) * 3600
            : null,
          color: getSatelliteColor(tracked.noradId, altitudeKm),
        };
      })
      .filter((item): item is SatellitePosition => Boolean(item));
  }, [trackedSatellites, time]);

  const selectedSatellite = useMemo(
    () =>
      trackedSatellites.find((item) => item.noradId === selectedNoradId) ??
      null,
    [trackedSatellites, selectedNoradId],
  );
  const selectedPosition = useMemo(
    () =>
      satellitePositions.find((item) => item.noradId === selectedNoradId) ??
      null,
    [satellitePositions, selectedNoradId],
  );

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return trackedSatellites
        .filter((item) => FEATURED_COLORS.has(item.noradId))
        .slice(0, SEARCH_RESULT_LIMIT);
    }
    return trackedSatellites
      .filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.noradId.toString().includes(query),
      )
      .slice(0, SEARCH_RESULT_LIMIT);
  }, [trackedSatellites, searchQuery]);

  const orbitPoints = useMemo(() => {
    if (!selectedSatellite || !showOrbit) return [];
    const points: OrbitPoint[] = [];
    const halfPeriodMs = (selectedSatellite.periodSeconds * 1000) / 2;
    const stepMs = (selectedSatellite.periodSeconds * 1000) / ORBIT_POINTS;
    for (let offset = -halfPeriodMs; offset <= halfPeriodMs; offset += stepMs) {
      const propagationTime = new Date(time.getTime() + offset);
      const propagated = satellite.propagate(
        selectedSatellite.satrec,
        propagationTime,
      );
      if (!propagated.position) continue;
      const geodetic = satellite.eciToGeodetic(
        propagated.position as satellite.EciVec3<number>,
        satellite.gstime(propagationTime),
      );
      points.push({
        lat: satellite.degreesLat(geodetic.latitude),
        lng: satellite.degreesLong(geodetic.longitude),
        alt: geodetic.height / EARTH_RADIUS_KM,
      });
    }
    return points;
  }, [selectedSatellite, showOrbit, time]);

  useEffect(() => {
    if (!followSelected || !selectedPosition) return;
    globeEl.current?.pointOfView(
      { lat: selectedPosition.lat, lng: selectedPosition.lng, altitude: 2.1 },
      POSITION_TICK_MS,
    );
  }, [followSelected, selectedPosition]);

  const selectSatellite = (noradId: number) => {
    setSelectedNoradId(noradId);
    setShowOrbit(true);
  };

  return (
    <div className="h-full w-full">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="black"
        showAtmosphere
        labelsData={userLocation ? [userLocation] : []}
        labelLat="lat"
        labelLng="lng"
        labelText="name"
        labelColor={() => "rgba(255, 165, 0, 0.9)"}
        labelSize={1}
        labelDotRadius={0.5}
        pointsData={satellitePositions}
        pointLat="lat"
        pointLng="lng"
        pointAltitude="alt"
        pointColor="color"
        pointRadius={(item: object) =>
          (item as SatellitePosition).noradId === selectedNoradId ? 0.2 : 0.07
        }
        pointsMerge
        pointsTransitionDuration={0}
        pathsData={
          orbitPoints.length > 0
            ? [{ points: orbitPoints, color: selectedPosition?.color }]
            : []
        }
        pathPoints="points"
        pathPointLat="lat"
        pathPointLng="lng"
        pathPointAlt="alt"
        pathColor={(path: object) =>
          `${(path as { color?: string }).color ?? "#67e8f9"}cc`
        }
        pathStroke={0.5}
        pathTransitionDuration={0}
      />

      <aside className="absolute left-4 top-24 z-20 max-h-[calc(100vh-7rem)] w-[min(24rem,calc(100vw-2rem))] overflow-y-auto rounded-2xl border border-white/15 bg-slate-950/80 p-4 text-left text-white shadow-2xl backdrop-blur-md">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Active catalog
        </p>
        <h2 className="mt-1 text-2xl font-bold">Satellite Tracker</h2>
        <p className="mt-2 text-sm text-slate-300">{statusMessage}</p>

        <label className="mt-4 block text-xs font-semibold uppercase tracking-wider text-slate-400">
          Find by name or NORAD ID
          <input
            className="mt-2 w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm font-normal normal-case tracking-normal text-white outline-none placeholder:text-slate-500 focus:border-cyan-300"
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="e.g. Starlink, Hubble, 25544"
            type="search"
            value={searchQuery}
          />
        </label>

        {searchResults.length > 0 && (
          <div className="mt-2 space-y-1">
            {searchResults.map((item) => (
              <button
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                  item.noradId === selectedNoradId
                    ? "bg-cyan-300/20 text-cyan-100"
                    : "bg-white/5 hover:bg-white/10"
                }`}
                key={item.noradId}
                onClick={() => selectSatellite(item.noradId)}
                type="button"
              >
                <span className="truncate font-medium">{item.name}</span>
                <span className="ml-2 shrink-0 text-xs text-slate-400">
                  {item.noradId}
                </span>
              </button>
            ))}
          </div>
        )}

        <h3 className="mt-4 truncate text-lg font-bold">
          {selectedPosition?.name ?? "Select a satellite"}
        </h3>
        {selectedPosition && (
          <p className="text-xs text-slate-400">
            NORAD {selectedPosition.noradId}
          </p>
        )}

        <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
          <Telemetry label="Latitude">
            {selectedPosition
              ? formatCoordinate(selectedPosition.lat, "N", "S")
              : "—"}
          </Telemetry>
          <Telemetry label="Longitude">
            {selectedPosition
              ? formatCoordinate(selectedPosition.lng, "E", "W")
              : "—"}
          </Telemetry>
          <Telemetry label="Altitude">
            {selectedPosition
              ? `${selectedPosition.altitudeKm.toFixed(0)} km`
              : "—"}
          </Telemetry>
          <Telemetry label="Speed">
            {selectedPosition?.velocityKph
              ? `${selectedPosition.velocityKph.toLocaleString(undefined, { maximumFractionDigits: 0 })} km/h`
              : "—"}
          </Telemetry>
        </dl>

        <div className="mt-4 flex flex-wrap gap-2">
          <ControlButton onClick={() => setFollowSelected((value) => !value)}>
            {followSelected ? "Stop following" : "Follow selected"}
          </ControlButton>
          <ControlButton onClick={() => setShowOrbit((value) => !value)}>
            {showOrbit ? "Hide orbit" : "Show orbit"}
          </ControlButton>
          <ControlButton onClick={locateUser}>Locate me</ControlButton>
        </div>
        {isLoading && (
          <p className="mt-3 text-xs text-slate-400">
            Fetching one bulk catalog from CelesTrak…
          </p>
        )}
      </aside>
    </div>
  );
};

const Telemetry = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-xl bg-white/10 p-3">
    <dt className="text-slate-400">{label}</dt>
    <dd className="font-semibold">{children}</dd>
  </div>
);

const ControlButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20"
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default World;
