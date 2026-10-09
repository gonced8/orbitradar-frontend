import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { useFavorites } from "../../hooks/useFavorites";

describe("useFavorites hook", () => {
  const FAVORITES_KEY = "orbitradar_favorites";

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("initializes with empty favorites when localStorage is empty", () => {
    const { result } = renderHook(() => useFavorites());
    expect(result.current.favorites).toEqual([]);
  });

  it("initializes with saved favorites from localStorage", () => {
    const savedFavorites = [25544, 20580, 25994];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(savedFavorites));

    const { result } = renderHook(() => useFavorites());
    expect(result.current.favorites).toEqual(savedFavorites);
  });

  it("adds satellite to favorites", () => {
    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.addFavorite(25544);
    });

    expect(result.current.favorites).toContain(25544);
    expect(result.current.favorites).toHaveLength(1);
  });

  it("removes satellite from favorites", () => {
    // Initialize with favorites
    const savedFavorites = [25544, 20580];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(savedFavorites));

    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.removeFavorite(25544);
    });

    expect(result.current.favorites).not.toContain(25544);
    expect(result.current.favorites).toContain(20580);
    expect(result.current.favorites).toHaveLength(1);
  });

  it("toggles satellite favorite status", () => {
    const { result } = renderHook(() => useFavorites());

    // Initially not in favorites
    expect(result.current.isFavorite(25544)).toBe(false);

    // Add to favorites
    act(() => {
      result.current.toggleFavorite(25544);
    });
    expect(result.current.isFavorite(25544)).toBe(true);
    expect(result.current.favorites).toContain(25544);

    // Remove from favorites
    act(() => {
      result.current.toggleFavorite(25544);
    });
    expect(result.current.isFavorite(25544)).toBe(false);
    expect(result.current.favorites).not.toContain(25544);
  });

  it("clears all favorites", () => {
    const savedFavorites = [25544, 20580, 25994];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(savedFavorites));

    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.clearFavorites();
    });

    expect(result.current.favorites).toEqual([]);
  });

  it("does not add duplicate favorites", () => {
    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.addFavorite(25544);
      result.current.addFavorite(25544);
      result.current.addFavorite(25544);
    });

    expect(result.current.favorites).toHaveLength(1);
    expect(result.current.favorites).toEqual([25544]);
  });

  it("persists favorites to localStorage", () => {
    const { result } = renderHook(() => useFavorites());

    act(() => {
      result.current.addFavorite(25544);
      result.current.addFavorite(20580);
    });

    const stored = localStorage.getItem(FAVORITES_KEY);
    expect(stored).not.toBeNull();
    const parsed = JSON.parse(stored || "[]");
    expect(parsed).toContain(25544);
    expect(parsed).toContain(20580);
  });

  it("checks if satellite is favorited", () => {
    const savedFavorites = [25544, 20580];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(savedFavorites));

    const { result } = renderHook(() => useFavorites());

    expect(result.current.isFavorite(25544)).toBe(true);
    expect(result.current.isFavorite(20580)).toBe(true);
    expect(result.current.isFavorite(99999)).toBe(false);
  });
});
