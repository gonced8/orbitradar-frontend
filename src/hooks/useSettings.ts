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
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
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
    []
  );

  // Reset to defaults
  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
  }, []);

  return {
    settings,
    updateSetting,
    resetSettings,
  };
};
