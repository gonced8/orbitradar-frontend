import React, { useEffect, useMemo, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { useSatelliteCatalog } from "../hooks/useSatelliteCatalog";
import { useSatellitePositions } from "../hooks/useSatellitePositions";
import { useUserLocation } from "../hooks/useUserLocation";
import { useFavorites } from "../hooks/useFavorites";
import { useTimeLapse } from "../hooks/useTimeLapse";
import { useMultipleTracking } from "../hooks/useMultipleTracking";
import { usePassPrediction } from "../hooks/usePassPrediction";
import { useSettings } from "../hooks/useSettings";
import { SatellitePosition, formatCoordinate, ALTITUDE_FILTERS, AltitudeFilter, getAltitudeClass } from "../utils/satellite";
import PassPredictionPanel from "./PassPredictionPanel";
import SettingsPanel from "./SettingsPanel";

const SEARCH_RESULT_LIMIT = 12;
const CATALOG_PAGE_SIZE = 50;

const World: React.FC = () => {
  const globeEl = useRef<GlobeMethods | undefined>();
  
  // Custom hooks
  const {
    trackedSatellites,
    selectedNoradId,
    isLoading,
    statusMessage,
    lastUpdated,
    selectSatellite,
    refreshCatalog,
  } = useSatelliteCatalog();

  const {
    isTimeLapseActive,
    speed,
    currentTime,
    speeds,
    toggleTimeLapse,
    setTimeLapseSpeed,
    resetTime,
    getSpeedLabel,
    getTimeOffsetDisplay,
  } = useTimeLapse();

  const {
    satellitePositions,
    selectedPosition,
    orbitPoints,
    showOrbit,
    setShowOrbit,
    followSelected,
    setFollowSelected,
    MARKER_ALTITUDE,
  } = useSatellitePositions(trackedSatellites, selectedNoradId, currentTime);

  const {
    userLocation,
    locateUser,
    clearUserLocation,
  } = useUserLocation();

  const {
    favorites,
    isFavorite,
    toggleFavorite,
    clearFavorites,
  } = useFavorites();

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
    calculateForAll,
    clearPasses,
  } = usePassPrediction(trackedSatellites, userLocation);

  const {
    settings,
    updateSetting,
    resetSettings,
  } = useSettings();

  // Local state
  const [searchQuery, setSearchQuery] = useState("");
  const [showControls, setShowControls] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showTimeLapseControls, setShowTimeLapseControls] = useState(false);
  const [showPassPrediction, setShowPassPrediction] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [catalogPage, setCatalogPage] = useState(0);
  const [altitudeFilter, setAltitudeFilter] = useState<AltitudeFilter>(settings.defaultAltitudeFilter as AltitudeFilter);

  // Initialize globe view
  useEffect(() => {
    globeEl.current?.pointOfView({ altitude: 3.2 });
  }, []);

  // Follow selected satellite
  useEffect(() => {
    if (!followSelected || !selectedPosition) return;
    globeEl.current?.pointOfView(
      { lat: selectedPosition.lat, lng: selectedPosition.lng, altitude: 2.1 },
      1000,
    );
  }, [followSelected, selectedPosition]);

  // Update altitude filter from settings
  useEffect(() => {
    setAltitudeFilter(settings.defaultAltitudeFilter as AltitudeFilter);
  }, [settings.defaultAltitudeFilter]);

  // Update showOrbit from settings
  useEffect(() => {
    if (settings.showOrbitsByDefault) {
      setShowOrbit(true);
    }
  }, [settings.showOrbitsByDefault, setShowOrbit]);

  // Filter satellites by altitude
  const filteredSatellites = useMemo(() => {
    if (altitudeFilter === 'all') return trackedSatellites;
    return trackedSatellites.filter((sat: { noradId: number; name: string; periodSeconds: number }) => {
      const altitudeEstimate = Math.pow(
        ((sat.periodSeconds * 60) / (2 * Math.PI)) ** 2 * 3.986e14,
        1/3
      ) - 6371000;
      const altitudeKm = altitudeEstimate / 1000;
      const altitudeClass = getAltitudeClass(altitudeKm);
      return altitudeClass === altitudeFilter;
    });
  }, [trackedSatellites, altitudeFilter]);

  // Search results
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const satellitesToSearch = filteredSatellites;
    
    if (!query) {
      // Show featured satellites when no query
      const featuredIds = [25544, 20580, 25994, 33591];
      return satellitesToSearch
        .filter((item: { noradId: number; name: string }) => featuredIds.includes(item.noradId))
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
    return trackedSatellites.filter((sat: { noradId: number }) => favorites.includes(sat.noradId));
  }, [trackedSatellites, favorites]);

  // Catalog entries
  const catalogEntries = useMemo(
    () =>
      [...filteredSatellites].sort((first: { name: string }, second: { name: string }) =>
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

  // Get point color considering both selection and tracking
  const getPointColor = (position: SatellitePosition): string => {
    if (trackedNoradIds.includes(position.noradId)) {
      return getTrackedColor(position.noradId);
    }
    return position.color;
  };

  // Get point radius considering selection and tracking
  const getPointRadius = (position: SatellitePosition): number => {
    if (position.noradId === selectedNoradId) return 0.12;
    if (trackedNoradIds.includes(position.noradId)) return 0.08;
    return 0.045;
  };

  // Get selected satellite name
  const getSelectedSatelliteName = (): string => {
    const sat = trackedSatellites.find(s => s.noradId === selectedNoradId);
    return sat ? sat.name : selectedPosition?.name ?? "Unknown";
  };

  // Calculate passes for selected satellite
  const handleCalculatePasses = () => {
    if (selectedPosition) {
      calculateForSelected(selectedPosition.noradId);
      setShowPassPrediction(true);
    }
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
        pointAltitude={() => MARKER_ALTITUDE}
        pointColor={(obj: object) => getPointColor(obj as SatellitePosition)}
        pointRadius={(obj: object) => getPointRadius(obj as SatellitePosition)}
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

      {/* Compact Info Panel (when controls closed) */}
      {!showControls && !showFavorites && !showTimeLapseControls && !showPassPrediction && !showSettings && (
        <section className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl border border-white/15 bg-slate-950/80 p-4 text-left text-white shadow-2xl backdrop-blur-md sm:right-auto sm:w-96">
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
              onClick={() => setShowControls(true)}
              type="button"
            >
              Open panel
            </button>
            {isTimeLapseActive && (
              <span className="shrink-0 rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300">
                Time Lapse: {getTimeOffsetDisplay()}
              </span>
            )}
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-slate-400">
            {statusMessage}
          </p>
          {lastUpdated && (
            <p className="mt-1 text-xs text-slate-500">
              Last updated: {new Date(lastUpdated).toLocaleString()}
            </p>
          )}
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20"
              onClick={() => setShowFavorites(true)}
              type="button"
            >
              Favorites ({favorites.length})
            </button>
            <button
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20"
              onClick={() => setShowTimeLapseControls(true)}
              type="button"
            >
              Time Lapse
            </button>
            {userLocation && selectedPosition && (
              <button
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20"
                onClick={handleCalculatePasses}
                type="button"
              >
                Predict Pass
              </button>
            )}
            <button
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold transition hover:bg-white/20"
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
        <aside className="absolute bottom-4 left-4 right-4 z-30 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl border border-white/15 bg-slate-950/90 p-4 text-left text-white shadow-2xl backdrop-blur-md sm:bottom-auto sm:right-auto sm:top-24 sm:w-96">
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

          {searchResults.length > 0 && (
            <div className="mt-2 space-y-1">
              {searchResults.map((item: { noradId: number; name: string }) => (
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
            <ControlButton onClick={locateUser}>Locate me</ControlButton>
            <ControlButton onClick={refreshCatalog}>
              Refresh
            </ControlButton>
            {selectedPosition && (
              <ControlButton onClick={() => toggleFavorite(selectedPosition.noradId)}>
                {isFavorite(selectedPosition.noradId) ? "★ Favorited" : "☆ Favorite"}
              </ControlButton>
            )}
            {selectedPosition && (
              <ControlButton onClick={() => toggleTracked(selectedPosition.noradId)}>
                {isTracked(selectedPosition.noradId) ? "📍 Tracked" : "📍 Track"}
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
              Fetching one bulk catalog from CelesTrak\u2026
            </p>
          )}
          {lastUpdated && (
            <p className="mt-1 text-xs text-slate-500">
              Last updated: {new Date(lastUpdated).toLocaleString()}
            </p>
          )}
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
        <div
          aria-modal="true"
          className="absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
        >
          <section className="flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl">
            <header className="flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Favorites
                </p>
                <h2 className="mt-1 text-2xl font-bold">
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
                favoriteSatellites.map((item: { noradId: number; name: string }) => (
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
                      <span className="truncate font-medium">{item.name}</span>
                      {isTracked(item.noradId) && (
                        <span className="text-blue-400">📍</span>
                      )}
                    </div>
                    <span className="ml-3 shrink-0 text-xs text-slate-400">
                      {item.noradId}
                    </span>
                  </button>
                ))
              ) : (
                <p className="p-4 text-center text-slate-400">
                  No favorites yet. Add satellites to favorites from the control panel.
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
        <div
          aria-modal="true"
          className="absolute bottom-4 right-4 z-50 w-full max-w-md p-3 sm:p-4"
          role="dialog"
        >
          <section className="flex max-h-[80vh] w-full flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950/95 text-white shadow-2xl backdrop-blur-md">
            <header className="flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Time Lapse
                </p>
                <h2 className="mt-1 text-2xl font-bold">Time Lapse Controls</h2>
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
                  <span className={`rounded-full px-3 py-1 text-sm ${
                    isTimeLapseActive ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                  }`}>
                    {isTimeLapseActive ? "Active" : "Stopped"}
                  </span>
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-2">Speed</label>
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
                <div className="mt-4 text-center">
                  <span className="text-sm text-slate-400">
                    Time: {getTimeOffsetDisplay()}
                  </span>
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
          onCalculateAll={() => {
            calculateForAll();
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
        <div
          aria-modal="true"
          className="absolute inset-0 z-40 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          role="dialog"
        >
          <section className="flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl">
            <header className="flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Active catalog
                </p>
                <h2 className="mt-1 text-2xl font-bold">
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
              {visibleCatalogEntries.map((item: { noradId: number; name: string }) => (
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
              ))}
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
