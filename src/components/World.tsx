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
const CELESTRAK_FALLBACK_URL =
  "https://celestrak.org/NORAD/elements/gp.php?GROUP=stations&FORMAT=TLE";
const FALLBACK_CACHE_DURATION_MS = 2 * 60 * 60 * 1000;
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

type CatalogSource = "active" | "stations";
type SatelliteCache = {
  satellites: SatelliteTle[];
  source?: CatalogSource;
};
type CacheResult = {
  satellites: SatelliteTle[];
  source: CatalogSource;
};
type ActivityMessage = {
  id: number;
  level: "info" | "success" | "warning" | "error";
  text: string;
  time: string;
};

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

const isCacheFresh = (
  timestamp: string | null,
  duration = CACHE_DURATION_MS,
) => {
  if (!timestamp) return false;
  const cachedAt = Date.parse(timestamp);
  return !Number.isNaN(cachedAt) && Date.now() - cachedAt < duration;
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

const readCache = (allowStale = false): CacheResult | null => {
  const value = localStorage.getItem(SATELLITE_CACHE_KEY);
  const timestamp = localStorage.getItem(SATELLITE_CACHE_TIMESTAMP_KEY);
  if (!value) return null;

  try {
    const parsed = JSON.parse(value) as SatelliteCache;
    const source = parsed.source ?? "active";
    const duration =
      source === "active" ? CACHE_DURATION_MS : FALLBACK_CACHE_DURATION_MS;
    if (!allowStale && !isCacheFresh(timestamp, duration)) return null;
    return Array.isArray(parsed.satellites) && parsed.satellites.length > 0
      ? { satellites: parsed.satellites, source }
      : null;
  } catch {
    localStorage.removeItem(SATELLITE_CACHE_KEY);
    localStorage.removeItem(SATELLITE_CACHE_TIMESTAMP_KEY);
    return null;
  }
};

const writeCache = (satellites: SatelliteTle[], source: CatalogSource) => {
  try {
    localStorage.setItem(
      SATELLITE_CACHE_KEY,
      JSON.stringify({ satellites, source }),
    );
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

const getRequestErrorMessage = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 403) {
      return "CelesTrak declined the request, usually because this catalog was downloaded too recently.";
    }
    if (error.response?.status) {
      return `CelesTrak returned HTTP ${error.response.status}.`;
    }
    if (error.code === "ERR_NETWORK") {
      return "The catalog request was blocked or the network is unavailable.";
    }
    return error.message;
  }
  return error instanceof Error ? error.message : "An unknown error occurred.";
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
  const [isPanelExpanded, setIsPanelExpanded] = useState(
    () => window.matchMedia("(min-width: 640px)").matches,
  );
  const [activityMessages, setActivityMessages] = useState<ActivityMessage[]>([
    {
      id: 0,
      level: "info",
      text: "Checking the browser cache…",
      time: new Date().toLocaleTimeString(),
    },
  ]);
  const [statusMessage, setStatusMessage] = useState(
    "Loading the active satellite catalog…",
  );

  const addActivity = useCallback(
    (level: ActivityMessage["level"], text: string) => {
      setActivityMessages((messages) => [
        ...messages.slice(-4),
        {
          id: Date.now() + Math.random(),
          level,
          text,
          time: new Date().toLocaleTimeString(),
        },
      ]);
    },
    [],
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
      addActivity(
        "success",
        `Prepared ${tracked.length.toLocaleString()} valid satellite orbits.`,
      );
      setSelectedNoradId((current) =>
        tracked.some((item) => item.noradId === current)
          ? current
          : (tracked[0]?.noradId ?? DEFAULT_NORAD_ID),
      );
    },
    [addActivity],
  );

  const loadCatalog = useCallback(
    async (forceRefresh = false) => {
      setIsLoading(true);
      if (!forceRefresh) {
        const cached = readCache();
        if (cached) {
          const label =
            cached.source === "active" ? "active satellites" : "space stations";
          addActivity(
            "info",
            `Found a fresh ${label} catalog in this browser.`,
          );
          applyCatalog(
            cached.satellites,
            cached.source === "active"
              ? "Tracking {count} active satellites from cache."
              : "Tracking {count} space stations from the fallback cache.",
          );
          setIsLoading(false);
          return;
        }
      }

      addActivity("info", "Requesting the active catalog once from CelesTrak…");
      setStatusMessage("Downloading the active satellite catalog…");

      try {
        // One bulk request replaces thousands of per-satellite requests. Its
        // eight-hour cache is much longer than CelesTrak's refresh interval.
        const response = await axios.get<string>(CELESTRAK_ACTIVE_URL);
        const catalog = parseTleCatalog(response.data);
        writeCache(catalog, "active");
        applyCatalog(
          catalog,
          "Tracking {count} active satellites from CelesTrak.",
        );
        addActivity("success", "The active catalog was downloaded and cached.");
      } catch (activeError) {
        console.error("Error fetching active satellite catalog:", activeError);
        const detail = getRequestErrorMessage(activeError);
        addActivity("warning", `Active catalog failed: ${detail}`);

        const staleCache = readCache(true);
        if (staleCache) {
          applyCatalog(
            staleCache.satellites,
            "Using {count} satellites from an older cache while CelesTrak is unavailable.",
          );
          addActivity(
            "warning",
            "Using older saved data instead of showing an empty globe.",
          );
        } else {
          setStatusMessage(
            "The active catalog failed. Trying the smaller space-stations catalog…",
          );
          addActivity(
            "info",
            "No saved catalog exists. Trying the smaller space-stations group once…",
          );
          try {
            const fallbackResponse = await axios.get<string>(
              CELESTRAK_FALLBACK_URL,
            );
            const fallbackCatalog = parseTleCatalog(fallbackResponse.data);
            writeCache(fallbackCatalog, "stations");
            applyCatalog(
              fallbackCatalog,
              "Active catalog unavailable; showing {count} space stations.",
            );
            addActivity(
              "warning",
              "Loaded the space-stations fallback. The full catalog will be retried later.",
            );
          } catch (fallbackError) {
            console.error("Error fetching fallback catalog:", fallbackError);
            const fallbackDetail = getRequestErrorMessage(fallbackError);
            setStatusMessage(
              "No satellite data could be loaded. Expand Activity for details, then retry later.",
            );
            addActivity("error", `Fallback failed: ${fallbackDetail}`);
          }
        }
      } finally {
        setIsLoading(false);
      }
    },
    [addActivity, applyCatalog],
  );

  useEffect(() => {
    void loadCatalog();
  }, [loadCatalog]);

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
    addActivity("info", "Requesting location permission…");
    getUserLocation()
      .then((location) => {
        const point = { ...location, name: "You" };
        setUserLocation(point);
        globeEl.current?.pointOfView({ ...point, altitude: 2.4 }, 1000);
        addActivity("success", "Your location marker is now visible.");
      })
      .catch((error) => {
        console.error("Error getting user location:", error);
        setStatusMessage(
          "Location unavailable. Satellite tracking is still active.",
        );
        addActivity("warning", String(error));
      });
  }, [addActivity]);

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

      <aside className="absolute inset-x-3 bottom-3 z-20 max-h-[58vh] overflow-y-auto rounded-2xl border border-white/15 bg-slate-950/90 p-3 text-left text-white shadow-2xl backdrop-blur-md sm:bottom-auto sm:left-4 sm:right-auto sm:top-24 sm:max-h-[calc(100vh-7rem)] sm:w-96 sm:p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Active catalog
            </p>
            <h2 className="truncate text-lg font-bold sm:text-2xl">
              {trackedSatellites.length > 0
                ? `${trackedSatellites.length.toLocaleString()} satellites`
                : "Satellite Tracker"}
            </h2>
          </div>
          <button
            aria-expanded={isPanelExpanded}
            className="shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-bold text-white hover:bg-white/20 sm:px-4"
            onClick={() => setIsPanelExpanded((expanded) => !expanded)}
            type="button"
          >
            {isPanelExpanded ? "Hide panel" : "Open panel"}
          </button>
        </div>
        <p
          className={`mt-1 text-xs ${
            activityMessages[activityMessages.length - 1]?.level === "error"
              ? "text-red-300"
              : isLoading
                ? "text-cyan-200"
                : "text-slate-300"
          }`}
          role="status"
        >
          {isLoading ? "Loading: " : ""}
          {statusMessage}
        </p>

        {isPanelExpanded && (
          <div>
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
              <ControlButton
                onClick={() => setFollowSelected((value) => !value)}
              >
                {followSelected ? "Stop following" : "Follow selected"}
              </ControlButton>
              <ControlButton onClick={() => setShowOrbit((value) => !value)}>
                {showOrbit ? "Hide orbit" : "Show orbit"}
              </ControlButton>
              <ControlButton onClick={locateUser}>Locate me</ControlButton>
              <ControlButton
                disabled={isLoading}
                onClick={() => void loadCatalog(true)}
              >
                {isLoading ? "Loading…" : "Retry catalog"}
              </ControlButton>
            </div>

            <section
              aria-label="Catalog activity"
              className="mt-4 rounded-xl border border-white/10 bg-black/25 p-3"
            >
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Activity
              </h3>
              <ol className="mt-2 space-y-2">
                {activityMessages.map((message) => (
                  <li className="flex gap-2 text-xs" key={message.id}>
                    <span
                      aria-hidden="true"
                      className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                        message.level === "error"
                          ? "bg-red-400"
                          : message.level === "warning"
                            ? "bg-amber-300"
                            : message.level === "success"
                              ? "bg-emerald-300"
                              : "bg-cyan-300"
                      }`}
                    />
                    <span className="min-w-0 flex-1 text-slate-300">
                      {message.text}
                    </span>
                    <time className="shrink-0 text-slate-500">
                      {message.time}
                    </time>
                  </li>
                ))}
              </ol>
            </section>
            {isLoading && (
              <p className="mt-3 text-xs text-slate-400">
                Fetching one bulk catalog from CelesTrak…
              </p>
            )}
          </div>
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
  disabled = false,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}) => (
  <button
    className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default World;
