import { act, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import LocalClock from "../../components/LocalClock";

describe("LocalClock", () => {
  afterEach(() => vi.useRealTimers());

  it("refreshes fractional simulation time without changing propagation cadence", () => {
    vi.useFakeTimers();
    let now = new Date("2026-01-01T00:00:00.000Z");
    const { container } = render(
      <LocalClock isPaused={false} isTimeLapseActive getTime={() => now} />,
    );
    const time = container.querySelector("time");
    expect(time?.getAttribute("datetime")).toBe("2026-01-01T00:00:00.000Z");

    now = new Date("2026-01-01T00:00:00.250Z");
    act(() => vi.advanceTimersByTime(100));

    expect(time?.getAttribute("datetime")).toBe("2026-01-01T00:00:00.250Z");
    expect(time?.textContent).toContain(".2");
  });
});
