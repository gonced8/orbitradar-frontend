import React, { useEffect, useMemo, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";
import { useSatelliteCatalog } from "../hooks/useSatelliteCatalog";
import { useSatellitePositions } from "../hooks/useSatellitePositions";
import { useUserLocation } from "../hooks/useUserLocation";
import { SatellitePosition, formatCoordinate, ALTITUDE_FILTERS, AltitudeFilter, getAltitudeClass } from "../utils/satellite";

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
    satellitePositions,
    selectedPosition,
    orbitPoints,
    showOrbit,
    setShowOrbit,
    followSelected,
    setFollowSelected,
    MARKER_ALTITUDE,
  } = useSatellitePositions(trackedSatellites, selectedNoradId);

  const {
    userLocation,
    locateUser,
    clearUserLocation,
  } = useUserLocation();

  // Local state
  const [searchQuery, setSearchQuery] = useState("");
  const [showControls, setShowControls] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const [catalogPage, setCatalogPage] = useState(0);
  const [altitudeFilter, setAltitudeFilter] = useState<AltitudeFilter>('all');

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

  // Filter satellites by altitude
  const filteredSatellites = useMemo(() => {
    if (altitudeFilter === 'all') return trackedSatellites;
    return trackedSatellites.filter(sat => {
      // Estimate altitude from period for filtering
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
        .filter((item) => featuredIds.includes(item.noradId))
        .slice(0, SEARCH_RESULT_LIMIT);
    }
    return satellitesToSearch
      .filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.noradId.toString().includes(query),
      )
      .slice(0, SEARCH_RESULT_LIMIT);
  }, [filteredSatellites, searchQuery]);

  // Catalog entries
  const catalogEntries = useMemo(
    () =>
      [...filteredSatellites].sort((first, second) =>
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
        pointAltitude={() => MARKER_ALTITUDE}
        pointColor="color"
        pointRadius={(item: object) =>
          (item as SatellitePosition).noradId === selectedNoradId ? 0.12 : 0.045
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

      {!showControls && (
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
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-slate-400">
            {statusMessage}
          </p>
          {lastUpdated && (
            <p className="mt-1 text-xs text-slate-500">
              Last updated: {new Date(lastUpdated).toLocaleString()}
            </p>
          )}
        </section>
      )}

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
                onClick={() => setAltitudeFilter(key as AltitudeFilter)}
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
              {searchResults.map((item) => (
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
        </aside>
      )}

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
              {visibleCatalogEntries.map((item) => (
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
                  <span className="truncate font-medium">{item.name}</span>
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
