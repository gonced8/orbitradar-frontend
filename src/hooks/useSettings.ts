import { useState, useCallback, useEffect } from "react";

const SETTINGS_KEY = "orbitradar_settings";

// Settings type
export type Settings = {
  theme: "dark" | "light" | "system";
  showOrbitsByDefault: boolean;
  defaultAltitudeFilter: string;
  autoRefresh: boolean;
  refreshIntervalHours: number;
};

const DEFAULT_SETTINGS: Settings = {
  theme: "dark",
  showOrbitsByDefault: true,
  defaultAltitudeFilter: "all",
  autoRefresh: true,
  refreshIntervalHours: 8,
};

export const useSettings = () => {
  const [settings, setSettings] = useState<Settings>(() => {
    try {
      const saved = localStorage.getItem(SETTINGS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Partial<Settings>;
        return {
          ...DEFAULT_SETTINGS,
          ...parsed,
          theme: ["dark", "light", "system"].includes(parsed.theme ?? "")
            ? parsed.theme!
            : DEFAULT_SETTINGS.theme,
          defaultAltitudeFilter: ["all", "leo", "meo", "geo"].includes(
            parsed.defaultAltitudeFilter ?? "",
          )
            ? parsed.defaultAltitudeFilter!
            : DEFAULT_SETTINGS.defaultAltitudeFilter,
          refreshIntervalHours: [1, 4, 8, 12, 24].includes(
            parsed.refreshIntervalHours ?? 0,
          )
            ? parsed.refreshIntervalHours!
            : DEFAULT_SETTINGS.refreshIntervalHours,
          autoRefresh:
            typeof parsed.autoRefresh === "boolean"
              ? parsed.autoRefresh
              : DEFAULT_SETTINGS.autoRefresh,
          showOrbitsByDefault:
            typeof parsed.showOrbitsByDefault === "boolean"
              ? parsed.showOrbitsByDefault
              : DEFAULT_SETTINGS.showOrbitsByDefault,
        };
      }
    } catch {
      // Use defaults
    }
    return DEFAULT_SETTINGS;
  });

  // Save settings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
      console.warn("Could not save settings:", error);
    }
  }, [settings]);

  // Update a single setting
  const updateSetting = useCallback(
    <K extends keyof Settings>(key: K, value: Settings[K]) => {
      setSettings((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  // Reset to defaults
  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
  }, []);

  useEffect(() => {
    const media = window.matchMedia?.("(prefers-color-scheme: light)");
    const applyTheme = () => {
      document.documentElement.dataset.theme =
        settings.theme === "system"
          ? media.matches
            ? "light"
            : "dark"
          : settings.theme;
    };
    applyTheme();
    media?.addEventListener("change", applyTheme);
    return () => media?.removeEventListener("change", applyTheme);
  }, [settings.theme]);

  return {
    settings,
    updateSetting,
    resetSettings,
  };
};
