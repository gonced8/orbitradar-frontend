import React, {
  Suspense,
  lazy,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { GlobeMethods } from "react-globe.gl";
import { useSatelliteCatalog } from "../hooks/useSatelliteCatalog";
import { useSatellitePositions } from "../hooks/useSatellitePositions";
import { useUserLocation } from "../hooks/useUserLocation";
import { useFavorites } from "../hooks/useFavorites";
import { useTimeLapse } from "../hooks/useTimeLapse";
import { useMultipleTracking } from "../hooks/useMultipleTracking";
import { usePassPrediction } from "../hooks/usePassPrediction";
import { useSettings } from "../hooks/useSettings";
import { useDialogFocus } from "../hooks/useDialogFocus";
import GlobeErrorBoundary from "./GlobeErrorBoundary";
import {
  formatCoordinate,
  ALTITUDE_FILTERS,
  AltitudeFilter,
  getAltitudeClass,
  estimateAltitudeFromPeriod,
} from "../utils/satellite";
import PassPredictionPanel from "./PassPredictionPanel";
import SettingsPanel from "./SettingsPanel";
import { getGlobePixelRatio } from "../utils/satelliteMarkerScale";
import EarthOverlays from "./EarthOverlays";
import { listenForWebglContextLoss } from "../utils/globeContext";

const SEARCH_RESULT_LIMIT = 12;
const CATALOG_PAGE_SIZE = 50;
const Globe = lazy(() => import("react-globe.gl"));
const SatelliteMarkers = lazy(() => import("./SatelliteMarkers"));

const World: React.FC = () => {
  const globeEl = useRef<GlobeMethods | undefined>();
  const globeContainerRef = useRef<HTMLDivElement>(null);
  const [globeReady, setGlobeReady] = useState(false);
  const [globeSize, setGlobeSize] = useState({ width: 0, height: 0 });
  const [globeContextLost, setGlobeContextLost] = useState(false);
  const [globeRetryKey, setGlobeRetryKey] = useState(0);
  const { settings, updateSetting, resetSettings } = useSettings();

  useLayoutEffect(() => {
    const container = globeContainerRef.current;
    if (!container) return;
    const resize = () => {
      const bounds = container.getBoundingClientRect();
      setGlobeSize({
        width: Math.max(0, Math.floor(bounds.width)),
        height: Math.max(0, Math.floor(bounds.height)),
      });
    };
    resize();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = globeContainerRef.current?.querySelector("canvas");
    if (!canvas) return;
    return listenForWebglContextLoss(canvas, () => {
      setGlobeContextLost(true);
      setGlobeReady(false);
    });
  }, [globeReady, globeRetryKey]);

  useEffect(() => {
    const globe = globeEl.current;
    if (!globeReady || !globe) return;
    const syncAnimation = () => {
      if (document.hidden) globe.pauseAnimation();
      else globe.resumeAnimation();
    };
    syncAnimation();
    document.addEventListener("visibilitychange", syncAnimation);
    return () =>
      document.removeEventListener("visibilitychange", syncAnimation);
  }, [globeReady, globeRetryKey]);

  // Custom hooks
  const {
    trackedSatellites,
    selectedNoradId,
    isLoading,
    statusMessage,
    lastUpdated,
    selectSatellite,
    clearSelection,
    refreshCatalog,
  } = useSatelliteCatalog(settings);

  const timeLapse = useTimeLapse();
  const {
    satellitePositions,
    selectedPosition,
    orbitPoints,
    snapshotVersion,
    showOrbit,
    setShowOrbit,
    followSelected,
    setFollowSelected,
  } = useSatellitePositions(
    trackedSatellites,
    selectedNoradId,
    timeLapse.currentTime,
    timeLapse.getEffectiveTime,
  );

  const { userLocation, locateUser, clearUserLocation } = useUserLocation();

  const { favorites, isFavorite, toggleFavorite, clearFavorites } =
    useFavorites();

  const {
    isTimeLapseActive,
    isPaused,
    speed,
    speeds,
    toggleTimeLapse,
    setTimeLapseSpeed,
    resetTime,
    getSpeedLabel,
    getTimeOffsetDisplay,
  } = timeLapse;

  const {
    trackedNoradIds,
    isTracked,
    toggleTracked,
    clearTracked,
    getTrackedColor,
  } = useMultipleTracking(satellitePositions);

  const {
    passes,
    isCalculating,
    error: passError,
    calculateForSelected,
    calculateForTracked,
    clearPasses,
  } = usePassPrediction(trackedSatellites, userLocation, timeLapse.currentTime);

  // Local state
  const [searchQuery, setSearchQuery] = useState("");
  const [showControls, setShowControls] = useState(() =>
    typeof window.matchMedia === "function"
      ? window.matchMedia("(min-width: 640px)").matches
      : true,
  );
  const [explorerTab, setExplorerTab] = useState<
    "catalog" | "favorites" | "tracked"
  >("catalog");
  const [showCatalog, setShowCatalog] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showTimeLapseControls, setShowTimeLapseControls] = useState(false);
  const [showPassPrediction, setShowPassPrediction] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [catalogPage, setCatalogPage] = useState(0);
  const [altitudeFilter, setAltitudeFilter] = useState<AltitudeFilter>(
    settings.defaultAltitudeFilter as AltitudeFilter,
  );
  const favoritesDialogRef = useDialogFocus<HTMLElement>(showFavorites, () =>
    setShowFavorites(false),
  );
  const timeLapseDialogRef = useDialogFocus<HTMLElement>(
    showTimeLapseControls,
    () => setShowTimeLapseControls(false),
  );
  const catalogDialogRef = useDialogFocus<HTMLElement>(showCatalog, () =>
    setShowCatalog(false),
  );

  // Follow selected satellite
  useEffect(() => {
    if (!followSelected || !selectedPosition) return;
    globeEl.current?.pointOfView(
      {
        lat: selectedPosition.lat,
        lng: selectedPosition.lng,
        altitude: Math.max(2.1, selectedPosition.alt * 0.75 + 1.5),
      },
      1000,
    );
  }, [followSelected, selectedPosition]);

  // Update altitude filter from settings
  useEffect(() => {
    setAltitudeFilter(settings.defaultAltitudeFilter as AltitudeFilter);
  }, [settings.defaultAltitudeFilter]);

  // Update showOrbit from settings
  useEffect(() => {
    setShowOrbit(settings.showOrbitsByDefault);
  }, [settings.showOrbitsByDefault, setShowOrbit]);

  // Filter satellites by altitude
  const filteredSatellites = useMemo(() => {
    if (altitudeFilter === "all") return trackedSatellites;
    return trackedSatellites.filter(
      (sat: { noradId: number; name: string; periodSeconds: number }) => {
        const altitudeKm = estimateAltitudeFromPeriod(sat.periodSeconds);
        const altitudeClass = getAltitudeClass(altitudeKm);
        return altitudeClass === altitudeFilter;
      },
    );
  }, [trackedSatellites, altitudeFilter]);

  // Search results
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const satellitesToSearch = filteredSatellites;

    if (!query) {
      // Show featured satellites when no query
      const featuredIds = [25544, 20580, 25994, 33591];
      return satellitesToSearch
        .filter((item: { noradId: number; name: string }) =>
          featuredIds.includes(item.noradId),
        )
        .slice(0, SEARCH_RESULT_LIMIT);
    }
    return satellitesToSearch
      .filter(
        (item: { noradId: number; name: string }) =>
          item.name.toLowerCase().includes(query) ||
          item.noradId.toString().includes(query),
      )
      .slice(0, SEARCH_RESULT_LIMIT);
  }, [filteredSatellites, searchQuery]);

  // Favorites list
  const favoriteSatellites = useMemo(() => {
    return trackedSatellites.filter((sat: { noradId: number }) =>
      favorites.includes(sat.noradId),
    );
  }, [trackedSatellites, favorites]);

  // Catalog entries
  const catalogEntries = useMemo(
    () =>
      [...filteredSatellites].sort(
        (first: { name: string }, second: { name: string }) =>
          first.name.localeCompare(second.name),
      ),
    [filteredSatellites],
  );

  const catalogPageCount = Math.max(
    1,
    Math.ceil(catalogEntries.length / CATALOG_PAGE_SIZE),
  );
  const visibleCatalogEntries = catalogEntries.slice(
    catalogPage * CATALOG_PAGE_SIZE,
    (catalogPage + 1) * CATALOG_PAGE_SIZE,
  );

  // Select satellite handler
  const handleSelectSatellite = (noradId: number) => {
    selectSatellite(noradId);
    setShowOrbit(settings.showOrbitsByDefault);
  };

  const handleClearSelection = () => {
    clearSelection();
    setFollowSelected(false);
    setShowOrbit(false);
    clearPasses();
    setShowPassPrediction(false);
  };

  // Get selected satellite name
  const getSelectedSatelliteName = (): string => {
    const sat = trackedSatellites.find((s) => s.noradId === selectedNoradId);
    return sat ? sat.name : (selectedPosition?.name ?? "Unknown");
  };

  // Calculate passes for selected satellite
  const handleCalculatePasses = () => {
    if (selectedPosition) {
      calculateForSelected(selectedPosition.noradId);
      setShowPassPrediction(true);
    }
  };

  const visiblePositions = useMemo(
    () =>
      satellitePositions.filter(
        (position) =>
          altitudeFilter === "all" || position.altitudeClass === altitudeFilter,
      ),
    [satellitePositions, altitudeFilter],
  );
  const displayedEntries =
    explorerTab === "favorites"
      ? favoriteSatellites
      : explorerTab === "tracked"
        ? trackedSatellites.filter((sat) =>
            trackedNoradIds.includes(sat.noradId),
          )
        : searchResults;
  return (
    <div className="relative h-full w-full overflow-hidden bg-black sm:flex">
      <div
        ref={globeContainerRef}
        className="absolute inset-0 z-0 sm:left-[22.5rem]"
      >
        {globeContextLost ? (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-3 bg-slate-950 px-6 text-center text-white"
            role="alert"
          >
            <p className="text-lg font-bold">
              The globe lost its graphics context.
            </p>
            <p className="text-sm text-slate-300">
              The satellite explorer remains available.
            </p>
            <button
              className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-950"
              onClick={() => {
                setGlobeContextLost(false);
                setGlobeReady(false);
                setGlobeRetryKey((key) => key + 1);
              }}
              type="button"
            >
              Retry globe
            </button>
          </div>
        ) : (
          <GlobeErrorBoundary
            key={globeRetryKey}
            onRetry={() => {
              setGlobeReady(false);
              setGlobeRetryKey((key) => key + 1);
            }}
          >
            <Suspense
              fallback={
                <div
                  role="status"
                  className="flex h-full items-center justify-center text-cyan-200"
                >
                  Loading globe…
                </div>
              }
            >
              {globeSize.width > 0 && globeSize.height > 0 && (
                <Globe
                  ref={globeEl}
                  width={globeSize.width}
                  height={globeSize.height}
                  onGlobeReady={() => {
                    const globe = globeEl.current;
                    if (!globe) return;
                    globe
                      .renderer()
                      .setPixelRatio(
                        getGlobePixelRatio(window.devicePixelRatio),
                      );
                    const controls = globe.controls();
                    controls.enableDamping = true;
                    controls.dampingFactor = 0.08;
                    setGlobeReady(true);
                    globe.pointOfView({ altitude: 3.2 });
                  }}
                  enablePointerInteraction={false}
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
                  pathsData={
                    orbitPoints.length > 0
                      ? [
                          {
                            points: orbitPoints,
                            color: selectedPosition?.color,
                          },
                        ]
                      : []
                  }
                  pathPoints="points"
                  pathPointLat="lat"
                  pathPointLng="lng"
                  pathPointAlt="alt"
                  pathColor={(path: object) =>
                    `${(path as { color?: string }).color ?? "#67e8f9"}e6`
                  }
                  pathStroke={0.9}
                  pathTransitionDuration={0}
                />
              )}
              {globeReady && (
                <EarthOverlays
                  globe={globeEl.current ?? null}
                  time={timeLapse.currentTime}
                  nightEnabled={settings.nightShading ?? true}
                  cloudsEnabled={settings.cloudCover ?? false}
                />
              )}
              {globeReady && (
                <Suspense fallback={null}>
                  <SatelliteMarkers
                    globe={globeEl.current ?? null}
                    positions={visiblePositions}
                    snapshotVersion={snapshotVersion}
                    selectedNoradId={selectedNoradId}
                    trackedNoradIds={trackedNoradIds}
                    getTrackedColor={getTrackedColor}
                    onSelect={selectSatellite}
                  />
                </Suspense>
              )}
            </Suspense>
          </GlobeErrorBoundary>
        )}
      </div>

      <div className="pointer-events-none absolute right-3 top-3 z-20 rounded-lg border border-white/15 bg-slate-950/75 px-2.5 py-1.5 text-right text-white shadow-lg backdrop-blur-md sm:right-5 sm:top-5">
        <div className="flex items-center gap-2">
          <p className="hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:block">
            {isPaused
              ? "Paused UTC"
              : isTimeLapseActive
                ? "Simulation UTC"
                : "Live UTC"}
          </p>
          <time
            className="text-[11px] font-semibold tabular-nums sm:text-xs"
            dateTime={timeLapse.currentTime.toISOString()}
          >
            <span className="sm:hidden">
              {timeLapse.currentTime.toLocaleTimeString(undefined, {
                timeZone: "UTC",
                timeStyle: "medium",
              })}
            </span>
            <span className="hidden sm:inline">
              {timeLapse.currentTime.toLocaleString(undefined, {
                timeZone: "UTC",
                dateStyle: "short",
                timeStyle: "medium",
              })}
            </span>
          </time>
        </div>
      </div>

      {/* Compact Info Panel (when controls closed) */}
      {!showControls &&
        !showFavorites &&
        !showTimeLapseControls &&
        !showPassPrediction &&
        !showSettings && (
          <section className="absolute bottom-3 left-3 right-3 z-20 rounded-2xl border border-white/15 bg-slate-950/90 p-4 text-left text-white shadow-2xl backdrop-blur-md sm:bottom-4 sm:left-[23rem] sm:right-auto sm:w-96">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Active catalog
                </p>
                <p className="mt-1 text-xl font-bold">
                  {filteredSatellites.length.toLocaleString()} satellites
                </p>
              </div>
              <button
                className="shrink-0 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20"
                aria-expanded={showControls}
                onClick={() => setShowControls(true)}
                type="button"
              >
                Open panel
              </button>
            </div>
            <p className="mt-2 hidden line-clamp-2 text-sm text-slate-400 sm:block">
              {statusMessage}
            </p>
            {lastUpdated && (
              <p className="mt-1 hidden text-xs text-slate-500 sm:block">
                Last updated: {new Date(lastUpdated).toLocaleString()}
              </p>
            )}
            <p className="mt-1 hidden text-xs text-slate-500 sm:block">
              Orbital data:{" "}
              <a
                className="underline"
                href="https://celestrak.org/"
                rel="noreferrer"
                target="_blank"
              >
                CelesTrak
              </a>
            </p>
            <div className="mt-3 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
              <button
                className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20"
                onClick={() => setShowFavorites(true)}
                type="button"
              >
                Favorites ({favorites.length})
              </button>
              <button
                className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20"
                onClick={() => setShowTimeLapseControls(true)}
                type="button"
              >
                Time Lapse
              </button>
              {userLocation && selectedPosition && (
                <button
                  className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20"
                  onClick={handleCalculatePasses}
                  type="button"
                >
                  Predict Pass
                </button>
              )}
              <button
                className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20"
                onClick={() => setShowSettings(true)}
                type="button"
              >
                Settings
              </button>
            </div>
          </section>
        )}

      {/* Control Panel */}
      {showControls && (
        <aside className="absolute bottom-0 left-0 right-0 z-30 h-[42dvh] max-h-[28rem] overflow-y-auto rounded-t-2xl border border-white/15 bg-slate-950/95 p-4 pb-8 text-left text-white shadow-2xl backdrop-blur-xl sm:relative sm:h-full sm:max-h-full sm:w-[22.5rem] sm:shrink-0 sm:rounded-none sm:border-b-0 sm:border-l-0 sm:border-t-0 sm:border-r sm:pb-4">
          <div
            aria-hidden="true"
            className="mx-auto mb-3 h-1 w-12 rounded-full bg-white/25 sm:hidden"
          />
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Active catalog
              </p>
              <h2 className="mt-1 text-2xl font-bold">Satellite Tracker</h2>
            </div>
            <button
              aria-label="Close control panel"
              className="rounded-full bg-white/10 px-3 py-2 text-sm font-bold transition hover:bg-white/20"
              onClick={() => setShowControls(false)}
              type="button"
            >
              Close
            </button>
          </div>
          <p className="mt-2 text-sm text-slate-300">{statusMessage}</p>
          <div className="mt-3 flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
            <span className="text-sm font-semibold">
              {trackedSatellites.length.toLocaleString()} satellites
            </span>
            <span className="text-xs text-slate-400">
              {visiblePositions.length.toLocaleString()} visible ·{" "}
              {getTimeOffsetDisplay()}
            </span>
          </div>

          <nav
            aria-label="Satellite explorer"
            className="mt-3 grid grid-cols-3 gap-1 rounded-xl bg-black/30 p-1"
          >
            {(["catalog", "favorites", "tracked"] as const).map((tab) => (
              <button
                key={tab}
                aria-pressed={explorerTab === tab}
                className={`rounded-lg px-2 py-2 text-xs font-bold capitalize ${explorerTab === tab ? "bg-cyan-500 text-white" : "text-slate-300 hover:bg-white/10"}`}
                onClick={() => setExplorerTab(tab)}
                type="button"
              >
                {tab}{" "}
                {tab === "favorites"
                  ? favorites.length
                  : tab === "tracked"
                    ? trackedNoradIds.length
                    : ""}
              </button>
            ))}
          </nav>

          {/* Altitude Filters */}
          <div className="mt-3 flex gap-1">
            {Object.entries(ALTITUDE_FILTERS).map(([key, filter]) => (
              <button
                key={key}
                className={`px-2 py-1 rounded-full text-xs transition ${
                  altitudeFilter === key
                    ? "bg-cyan-500 text-white"
                    : "bg-white/10 hover:bg-white/20"
                }`}
                aria-pressed={altitudeFilter === key}
                onClick={() => {
                  setAltitudeFilter(key as AltitudeFilter);
                  updateSetting("defaultAltitudeFilter", key);
                }}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>

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

          {displayedEntries.length > 0 && (
            <div className="mt-2 space-y-1">
              {displayedEntries
                .slice(
                  0,
                  explorerTab === "catalog" ? SEARCH_RESULT_LIMIT : undefined,
                )
                .map((item: { noradId: number; name: string }) => (
                  <button
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                      item.noradId === selectedNoradId
                        ? "bg-cyan-300/20 text-cyan-100"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                    key={item.noradId}
                    onClick={() => handleSelectSatellite(item.noradId)}
                    type="button"
                  >
                    <div className="flex items-center gap-2">
                      <span className="truncate font-medium">{item.name}</span>
                      {isFavorite(item.noradId) && (
                        <span className="text-yellow-400">★</span>
                      )}
                      {isTracked(item.noradId) && (
                        <span className="text-blue-400">📍</span>
                      )}
                    </div>
                    <span className="ml-2 shrink-0 text-xs text-slate-400">
                      {item.noradId}
                    </span>
                  </button>
                ))}
            </div>
          )}
          {displayedEntries.length === 0 && explorerTab !== "catalog" && (
            <p className="mt-3 text-sm text-slate-400">
              No {explorerTab} satellites yet.
            </p>
          )}

          <h3 className="mt-4 truncate text-lg font-bold">
            {selectedPosition?.name ?? "Select a satellite"}
          </h3>
          {selectedPosition && (
            <p className="text-xs text-slate-400">
              NORAD {selectedPosition.noradId}
              {altitudeFilter !== "all" &&
              selectedPosition.altitudeClass !== altitudeFilter
                ? " · Outside current filter"
                : ""}
            </p>
          )}

          {selectedPosition && (
            <button
              className="mt-2 text-xs font-semibold text-cyan-300 underline decoration-cyan-300/50 underline-offset-2 hover:text-cyan-100"
              onClick={handleClearSelection}
              type="button"
            >
              Clear selection
            </button>
          )}

          <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <Telemetry label="Latitude">
              {selectedPosition
                ? formatCoordinate(selectedPosition.lat, "N", "S")
                : "\u2014"}
            </Telemetry>
            <Telemetry label="Longitude">
              {selectedPosition
                ? formatCoordinate(selectedPosition.lng, "E", "W")
                : "\u2014"}
            </Telemetry>
            <Telemetry label="Altitude">
              {selectedPosition
                ? `${selectedPosition.altitudeKm.toFixed(0)} km`
                : "\u2014"}
            </Telemetry>
            <Telemetry label="Speed">
              {selectedPosition?.velocityKph
                ? `${selectedPosition.velocityKph.toLocaleString(undefined, { maximumFractionDigits: 0 })} km/h`
                : "\u2014"}
            </Telemetry>
          </dl>

          <div className="mt-4 flex flex-wrap gap-2">
            <ControlButton
              onClick={() => {
                setCatalogPage(0);
                setShowControls(false);
                setShowCatalog(true);
              }}
            >
              Browse all
            </ControlButton>
            <ControlButton onClick={() => setFollowSelected((value) => !value)}>
              {followSelected ? "Stop following" : "Follow selected"}
            </ControlButton>
            <ControlButton onClick={() => setShowOrbit((value) => !value)}>
              {showOrbit ? "Hide orbit" : "Show orbit"}
            </ControlButton>
            <ControlButton
              onClick={() =>
                globeEl.current?.pointOfView(
                  {
                    altitude: Math.max(
                      3.2,
                      ...visiblePositions.map(
                        (position) => position.alt * 0.75 + 1.5,
                      ),
                    ),
                  },
                  900,
                )
              }
            >
              Fit visible
            </ControlButton>
            <ControlButton
              onClick={() => {
                setLocationError(null);
                void locateUser()
                  .then((location) => {
                    setLocationError(null);
                    globeEl.current?.pointOfView(
                      { lat: location.lat, lng: location.lng, altitude: 1.5 },
                      1000,
                    );
                  })
                  .catch(() =>
                    setLocationError(
                      "Location access failed. Check browser permission and try again.",
                    ),
                  );
              }}
            >
              Locate me
            </ControlButton>
            <ControlButton onClick={refreshCatalog}>Refresh</ControlButton>
            {selectedPosition && (
              <ControlButton
                onClick={() => toggleFavorite(selectedPosition.noradId)}
              >
                {isFavorite(selectedPosition.noradId)
                  ? "★ Favorited"
                  : "☆ Favorite"}
              </ControlButton>
            )}
            {selectedPosition && (
              <ControlButton
                onClick={() => {
                  if (
                    !isTracked(selectedPosition.noradId) &&
                    trackedNoradIds.length >= 10
                  ) {
                    setLocationError(
                      "Tracking is limited to 10 satellites. Remove one before adding another.",
                    );
                    return;
                  }
                  toggleTracked(selectedPosition.noradId);
                }}
              >
                {isTracked(selectedPosition.noradId)
                  ? "📍 Tracked"
                  : "📍 Track"}
              </ControlButton>
            )}
            {userLocation && selectedPosition && (
              <ControlButton onClick={handleCalculatePasses}>
                Predict Pass
              </ControlButton>
            )}
            {userLocation && (
              <ControlButton onClick={clearUserLocation}>
                Clear location
              </ControlButton>
            )}
          </div>
          {isLoading && (
            <p className="mt-3 text-xs text-slate-400">
              Loading the shared satellite snapshot\u2026
            </p>
          )}
          {locationError && (
            <p role="status" className="mt-3 text-sm text-amber-300">
              {locationError}
            </p>
          )}
          {lastUpdated && (
            <p className="mt-1 text-xs text-slate-500">
              Last updated: {new Date(lastUpdated).toLocaleString()}
            </p>
          )}
          <p className="mt-1 text-xs text-slate-500">
            Orbital data:{" "}
            <a
              className="underline"
              href="https://celestrak.org/"
              rel="noreferrer"
              target="_blank"
            >
              CelesTrak
            </a>
          </p>
          {trackedNoradIds.length > 0 && (
            <div className="mt-3">
              <p className="text-xs text-slate-400 mb-2">
                Tracking {trackedNoradIds.length} satellites
              </p>
              <button
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20"
                onClick={clearTracked}
                type="button"
              >
                Clear all tracked
              </button>
            </div>
          )}
        </aside>
      )}

      {/* Favorites Panel */}
      {showFavorites && (
        <div className="absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6">
          <section
            ref={favoritesDialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="favorites-title"
            className="flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl"
          >
            <header className="flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Favorites
                </p>
                <h2 id="favorites-title" className="mt-1 text-2xl font-bold">
                  {favorites.length} Favorite Satellites
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Quick access to your favorite satellites.
                </p>
              </div>
              <button
                aria-label="Close favorites"
                className="rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20"
                onClick={() => setShowFavorites(false)}
                type="button"
              >
                Close
              </button>
            </header>

            <div className="grid min-h-0 flex-1 grid-cols-1 gap-1 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4">
              {favoriteSatellites.length > 0 ? (
                favoriteSatellites.map(
                  (item: { noradId: number; name: string }) => (
                    <button
                      className={`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm transition ${
                        item.noradId === selectedNoradId
                          ? "border-cyan-300 bg-cyan-300/15 text-cyan-100"
                          : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                      key={item.noradId}
                      onClick={() => {
                        handleSelectSatellite(item.noradId);
                        setShowFavorites(false);
                      }}
                      type="button"
                    >
                      <div className="flex items-center gap-2">
                        <span className="truncate font-medium">
                          {item.name}
                        </span>
                        {isTracked(item.noradId) && (
                          <span className="text-blue-400">📍</span>
                        )}
                      </div>
                      <span className="ml-3 shrink-0 text-xs text-slate-400">
                        {item.noradId}
                      </span>
                    </button>
                  ),
                )
              ) : (
                <p className="p-4 text-center text-slate-400">
                  No favorites yet. Add satellites to favorites from the control
                  panel.
                </p>
              )}
            </div>

            {favorites.length > 0 && (
              <footer className="flex justify-end gap-3 border-t border-white/10 p-4">
                <button
                  className="rounded-full bg-red-500/20 px-4 py-2 text-sm font-bold text-red-400 transition hover:bg-red-500/30"
                  onClick={clearFavorites}
                  type="button"
                >
                  Clear all favorites
                </button>
              </footer>
            )}
          </section>
        </div>
      )}

      {/* Time Lapse Controls */}
      {showTimeLapseControls && (
        <div className="absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6">
          <section
            ref={timeLapseDialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="timelapse-title"
            className="flex max-h-[88vh] w-full max-w-md flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl"
          >
            <header className="flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Time Lapse
                </p>
                <h2 id="timelapse-title" className="mt-1 text-2xl font-bold">
                  Time Lapse Controls
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Watch satellite movement at accelerated speeds.
                </p>
              </div>
              <button
                aria-label="Close time lapse controls"
                className="rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20"
                onClick={() => setShowTimeLapseControls(false)}
                type="button"
              >
                Close
              </button>
            </header>

            <div className="flex-1 p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Status</span>
                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      isTimeLapseActive
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {isTimeLapseActive ? "Active" : "Stopped"}
                  </span>
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Speed
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {speeds.map((s) => (
                      <button
                        key={s}
                        className={`rounded-lg border px-3 py-2 text-sm transition ${
                          speed === s
                            ? "border-cyan-400 bg-cyan-400/20 text-cyan-300"
                            : "border-white/10 bg-white/5 hover:bg-white/10"
                        }`}
                        onClick={() => setTimeLapseSpeed(s)}
                        type="button"
                      >
                        {getSpeedLabel(s)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    className="flex-1 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30"
                    onClick={toggleTimeLapse}
                    type="button"
                  >
                    {isTimeLapseActive ? "Stop" : "Start"} Time Lapse
                  </button>
                  <button
                    className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-bold transition hover:bg-white/20"
                    onClick={resetTime}
                    type="button"
                  >
                    Reset to Now
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Pass Prediction Panel */}
      {showPassPrediction && selectedPosition && (
        <PassPredictionPanel
          passes={passes}
          isCalculating={isCalculating}
          error={passError}
          onClose={() => {
            clearPasses();
            setShowPassPrediction(false);
          }}
          onCalculateTracked={() => {
            calculateForTracked([
              ...new Set([...trackedNoradIds, selectedPosition.noradId]),
            ]);
          }}
          selectedSatelliteName={getSelectedSatelliteName()}
        />
      )}

      {/* Settings Panel */}
      {showSettings && (
        <SettingsPanel
          settings={settings}
          onUpdate={updateSetting}
          onReset={resetSettings}
          onClose={() => setShowSettings(false)}
        />
      )}

      {/* Catalog Panel */}
      {showCatalog && (
        <div className="absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6">
          <section
            ref={catalogDialogRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="catalog-title"
            className="flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl"
          >
            <header className="flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Active catalog
                </p>
                <h2 id="catalog-title" className="mt-1 text-2xl font-bold">
                  All {catalogEntries.length.toLocaleString()} satellites
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Select any satellite to view its telemetry and orbit.
                </p>
              </div>
              <button
                aria-label="Close satellite catalog"
                className="rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20"
                onClick={() => setShowCatalog(false)}
                type="button"
              >
                Close
              </button>
            </header>

            <div className="grid min-h-0 flex-1 grid-cols-1 gap-1 overflow-y-auto p-3 sm:grid-cols-2 sm:p-4">
              {visibleCatalogEntries.map(
                (item: { noradId: number; name: string }) => (
                  <button
                    className={`flex items-center justify-between rounded-xl border px-3 py-3 text-left text-sm transition ${
                      item.noradId === selectedNoradId
                        ? "border-cyan-300 bg-cyan-300/15 text-cyan-100"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                    key={item.noradId}
                    onClick={() => {
                      handleSelectSatellite(item.noradId);
                      setShowCatalog(false);
                    }}
                    type="button"
                  >
                    <div className="flex items-center gap-2">
                      <span className="truncate font-medium">{item.name}</span>
                      {isFavorite(item.noradId) && (
                        <span className="text-yellow-400">★</span>
                      )}
                      {isTracked(item.noradId) && (
                        <span className="text-blue-400">📍</span>
                      )}
                    </div>
                    <span className="ml-3 shrink-0 text-xs text-slate-400">
                      {item.noradId}
                    </span>
                  </button>
                ),
              )}
            </div>

            <footer className="flex items-center justify-between gap-3 border-t border-white/10 p-4">
              <button
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40"
                disabled={catalogPage === 0}
                onClick={() => setCatalogPage((page) => Math.max(0, page - 1))}
                type="button"
              >
                Previous
              </button>
              <p className="text-sm text-slate-400">
                Page {catalogPage + 1} of {catalogPageCount}
              </p>
              <button
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-40"
                disabled={catalogPage >= catalogPageCount - 1}
                onClick={() =>
                  setCatalogPage((page) =>
                    Math.min(catalogPageCount - 1, page + 1),
                  )
                }
                type="button"
              >
                Next
              </button>
            </footer>
          </section>
        </div>
      )}
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
