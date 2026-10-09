import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import PassPredictionPanel from "../../components/PassPredictionPanel";
import SettingsPanel from "../../components/SettingsPanel";
import type { Settings } from "../../hooks/useSettings";

const settings: Settings = {
  theme: "dark",
  showOrbitsByDefault: true,
  defaultAltitudeFilter: "all",
  autoRefresh: true,
  refreshIntervalHours: 8,
};

describe("dialog accessibility", () => {
  it("names the focused settings dialog", () => {
    render(
      <SettingsPanel
        settings={settings}
        onUpdate={vi.fn()}
        onReset={vi.fn()}
        onClose={vi.fn()}
      />,
    );

    const dialog = screen.getByRole("dialog", { name: "Configuration" });
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toContainElement(document.activeElement as HTMLElement);
  });

  it("names the focused pass prediction dialog", () => {
    render(
      <PassPredictionPanel
        passes={[]}
        isCalculating={false}
        error={null}
        onClose={vi.fn()}
        onCalculateTracked={vi.fn()}
        selectedSatelliteName="ISS"
      />,
    );

    const dialog = screen.getByRole("dialog", {
      name: "Upcoming satellite passes",
    });
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toContainElement(document.activeElement as HTMLElement);
  });
});
