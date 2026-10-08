import React from "react";
import { Settings } from "../hooks/useSettings";

type SettingsPanelProps = {
  settings: Settings;
  onUpdate: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  onReset: () => void;
  onClose: () => void;
};

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  settings,
  onUpdate,
  onReset,
  onClose,
}) => {
  return (
    <div
      aria-modal="true"
      className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
    >
      <section className="max-h-[90vh] w-full max-w-md overflow-hidden rounded-2xl border border-white/15 bg-slate-950 text-white shadow-2xl">
        <header className="flex items-start justify-between gap-4 border-b border-white/10 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Settings
            </p>
            <h2 className="mt-1 text-2xl font-bold">Configuration</h2>
            <p className="mt-1 text-sm text-slate-400">
              Customize your OrbitRadar experience
            </p>
          </div>
          <button
            aria-label="Close settings"
            className="rounded-full bg-white/10 px-3 py-2 text-sm font-bold hover:bg-white/20"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </header>

        <div className="max-h-[calc(90vh-180px)] overflow-y-auto p-5">
          <div className="space-y-6">
            {/* Theme */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Theme
              </label>
              <div className="flex gap-2">
                {(["dark", "light", "system"] as const).map((theme) => (
                  <button
                    key={theme}
                    className={`flex-1 rounded-lg border px-3 py-2 text-sm transition ${
                      settings.theme === theme
                        ? "border-cyan-400 bg-cyan-400/20 text-cyan-300"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                    onClick={() => onUpdate("theme", theme)}
                    type="button"
                  >
                    {theme.charAt(0).toUpperCase() + theme.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Show Orbits by Default */}
            <div>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-semibold text-slate-300">
                  Show orbits by default
                </span>
                <button
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    settings.showOrbitsByDefault
                      ? "bg-cyan-500/20 text-cyan-300"
                      : "bg-white/10 text-slate-400"
                  }`}
                  onClick={() => onUpdate("showOrbitsByDefault", !settings.showOrbitsByDefault)}
                  type="button"
                >
                  {settings.showOrbitsByDefault ? "ON" : "OFF"}
                </button>
              </label>
              <p className="mt-1 text-xs text-slate-500">
                Automatically show orbit path when selecting a satellite
              </p>
            </div>

            {/* Default Altitude Filter */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Default altitude filter
              </label>
              <select
                className="w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-300"
                onChange={(e) => onUpdate("defaultAltitudeFilter", e.target.value)}
                value={settings.defaultAltitudeFilter}
              >
                <option value="all">All Satellites</option>
                <option value="leo">LEO (&lt;2000km)</option>
                <option value="meo">MEO (2-20k km)</option>
                <option value="geo">GEO (20k+ km)</option>
              </select>
            </div>

            {/* Auto Refresh */}
            <div>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-semibold text-slate-300">
                  Auto refresh catalog
                </span>
                <button
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    settings.autoRefresh
                      ? "bg-cyan-500/20 text-cyan-300"
                      : "bg-white/10 text-slate-400"
                  }`}
                  onClick={() => onUpdate("autoRefresh", !settings.autoRefresh)}
                  type="button"
                >
                  {settings.autoRefresh ? "ON" : "OFF"}
                </button>
              </label>
              <p className="mt-1 text-xs text-slate-500">
                Automatically refresh satellite catalog periodically
              </p>
            </div>

            {/* Refresh Interval */}
            {settings.autoRefresh && (
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">
                  Refresh interval (hours)
                </label>
                <select
                  className="w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white outline-none focus:border-cyan-300"
                  onChange={(e) => onUpdate("refreshIntervalHours", Number(e.target.value))}
                  value={settings.refreshIntervalHours}
                >
                  <option value={1}>1 hour</option>
                  <option value={4}>4 hours</option>
                  <option value={8}>8 hours</option>
                  <option value={12}>12 hours</option>
                  <option value={24}>24 hours</option>
                </select>
              </div>
            )}
          </div>
        </div>

        <footer className="border-t border-white/10 p-4">
          <div className="flex gap-2">
            <button
              className="flex-1 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-400 transition hover:bg-white/20"
              onClick={onReset}
              type="button"
            >
              Reset to defaults
            </button>
            <button
              className="flex-1 rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/30"
              onClick={onClose}
              type="button"
            >
              Save & Close
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default SettingsPanel;
