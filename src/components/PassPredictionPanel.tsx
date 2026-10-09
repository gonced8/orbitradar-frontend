import React from "react";
import { SatellitePass } from "../hooks/usePassPrediction";

type PassPredictionPanelProps = {
  passes: SatellitePass[];
  isCalculating: boolean;
  error: string | null;
  onClose: () => void;
  onCalculateAll: () => void;
  selectedSatelliteName: string;
};

export const PassPredictionPanel: React.FC<PassPredictionPanelProps> = ({
  passes,
  isCalculating,
  error,
  onClose,
  onCalculateAll,
  selectedSatelliteName,
}) => {
  // Format time
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Format date
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString([], {
      month: "short",
      day: "numeric",
      year:
        date.getFullYear() !== new Date().getFullYear() ? "numeric" : undefined,
    });
  };

  // Format duration
  const formatDuration = (minutes: number): string => {
    if (minutes < 60) {
      return `${Math.round(minutes)} min`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return `${hours}h ${mins}m`;
  };

  return (
    <div
      aria-modal="true"
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
    >
      <section className="max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl">
        <header className="flex items-start justify-between gap-4 border-b border-white/10 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Pass Prediction
            </p>
            <h2 className="mt-1 text-2xl font-bold">
              {selectedSatelliteName} Passes
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Upcoming passes over your location
            </p>
          </div>
          <button
            aria-label="Close pass prediction"
            className="rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </header>

        <div className="max-h-[calc(90vh-140px)] overflow-y-auto">
          {error && (
            <div className="p-4 text-red-400">
              <p>Error: {error}</p>
            </div>
          )}

          {isCalculating && passes.length === 0 && !error && (
            <div className="p-4 text-center text-slate-400">
              <p>Calculating passes... This may take a moment.</p>
            </div>
          )}

          {!isCalculating && passes.length === 0 && !error && (
            <div className="p-4 text-center text-slate-400">
              <p>No passes found for this satellite in the next 24 hours.</p>
              <p className="mt-2 text-sm">
                The satellite may not pass over your location, or its orbit may
                not be visible.
              </p>
            </div>
          )}

          {passes.length > 0 && (
            <div className="p-4">
              <div className="space-y-3">
                {passes.map((pass, index) => (
                  <div
                    key={index}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">Pass #{index + 1}</p>
                        <p className="text-sm text-slate-400">
                          {formatDate(pass.riseTime)}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${
                          pass.maxElevationDeg >= 60
                            ? "bg-green-500/20 text-green-400"
                            : pass.maxElevationDeg >= 30
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        Max: {pass.maxElevationDeg.toFixed(1)}°
                      </span>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                      <div className="rounded-lg bg-white/10 p-2 text-center">
                        <p className="text-slate-400">Rise</p>
                        <p className="font-semibold">
                          {formatTime(pass.riseTime)}
                        </p>
                      </div>
                      <div className="rounded-lg bg-white/10 p-2 text-center">
                        <p className="text-slate-400">Peak</p>
                        <p className="font-semibold">
                          {formatTime(pass.maxElevationTime)}
                        </p>
                      </div>
                      <div className="rounded-lg bg-white/10 p-2 text-center">
                        <p className="text-slate-400">Set</p>
                        <p className="font-semibold">
                          {formatTime(pass.setTime)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 text-center text-xs text-slate-400">
                      Duration: {formatDuration(pass.durationMinutes)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <footer className="border-t border-white/10 p-4">
          <button
            className="w-full rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30"
            onClick={onCalculateAll}
            type="button"
          >
            Calculate All Satellites
          </button>
        </footer>
      </section>
    </div>
  );
};

export default PassPredictionPanel;
