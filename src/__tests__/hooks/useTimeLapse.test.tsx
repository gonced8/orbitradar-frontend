import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useTimeLapse } from "../../hooks/useTimeLapse";

describe("useTimeLapse", () => {
  afterEach(() => vi.useRealTimers());

  it("keeps the propagated time snapshot stable between clock ticks", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T00:00:00Z"));
    const { result, rerender } = renderHook(() => useTimeLapse());
    const firstSnapshot = result.current.currentTime;

    rerender();
    expect(result.current.currentTime).toBe(firstSnapshot);

    act(() => vi.advanceTimersByTime(999));
    expect(result.current.currentTime).toBe(firstSnapshot);

    act(() => vi.advanceTimersByTime(1));
    expect(result.current.currentTime).not.toBe(firstSnapshot);
    expect(result.current.currentTime.getTime()).toBe(Date.now());
  });

  it("advances at the selected speed, pauses without resetting, and resumes", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T00:00:00Z"));
    const { result } = renderHook(() => useTimeLapse());

    act(() => result.current.toggleTimeLapse());
    act(() => vi.advanceTimersByTime(2_000));
    expect(result.current.currentTime.getTime()).toBe(Date.now());

    act(() => result.current.setTimeLapseSpeed(10));
    act(() => vi.advanceTimersByTime(2_000));
    const pausedAt = result.current.currentTime.getTime();
    expect(pausedAt).toBe(Date.now() + 18_000);

    act(() => result.current.stopTimeLapse());
    act(() => vi.advanceTimersByTime(5_000));
    expect(result.current.currentTime.getTime()).toBe(pausedAt);

    act(() => result.current.startTimeLapse());
    expect(result.current.currentTime.getTime()).toBe(pausedAt);
    act(() => result.current.resetTime());
    expect(result.current.isTimeLapseActive).toBe(false);
    expect(result.current.currentTime.getTime()).toBe(Date.now());
  });

  it("shows a negative offset when paused time falls behind live time", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-01-01T00:00:00Z"));
    const { result } = renderHook(() => useTimeLapse());

    act(() => result.current.toggleTimeLapse());
    act(() => vi.advanceTimersByTime(1_000));
    act(() => result.current.stopTimeLapse());
    act(() => vi.advanceTimersByTime(5 * 60_000));

    expect(result.current.getTimeOffsetDisplay()).toBe("-5m");
  });
});
