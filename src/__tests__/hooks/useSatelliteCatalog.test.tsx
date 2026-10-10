import { afterEach, describe, expect, it, vi } from "vitest";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useSatelliteCatalog } from "../../hooks/useSatelliteCatalog";

const snapshot = {
  schemaVersion: 1,
  fetchedAt: "2026-10-09T12:00:00.000Z",
  satellites: [
    {
      OBJECT_NAME: "ISS (ZARYA)",
      OBJECT_ID: "1998-067A",
      EPOCH: "2025-01-01T00:00:00.000Z",
      MEAN_MOTION: 15.5,
      ECCENTRICITY: 0.0007,
      INCLINATION: 51.64,
      RA_OF_ASC_NODE: 20,
      ARG_OF_PERICENTER: 90,
      MEAN_ANOMALY: 270,
      NORAD_CAT_ID: 25544,
    },
  ],
};

afterEach(() => {
  vi.unstubAllGlobals();
  localStorage.clear();
});

describe("useSatelliteCatalog", () => {
  it("reads the shared snapshot and never requests the upstream source", async () => {
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input);
      if (url === "/data/catalog.json")
        return new Response(JSON.stringify(snapshot), { status: 200 });
      if (url === "/data/catalog-status.json")
        return new Response(JSON.stringify({ state: "ready" }), {
          status: 200,
        });
      return new Response("unexpected source", { status: 404 });
    });
    vi.stubGlobal("fetch", fetchMock);
    const { result } = renderHook(() =>
      useSatelliteCatalog({ autoRefresh: false, refreshIntervalHours: 1 }),
    );

    await waitFor(() =>
      expect(result.current.trackedSatellites).toHaveLength(1),
    );
    expect(result.current.trackedSatellites[0].noradId).toBe(25544);
    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "/data/catalog.json",
      "/data/catalog-status.json",
    ]);

    await act(async () => result.current.refreshCatalog());
    expect(
      fetchMock.mock.calls.every(([url]) => String(url).startsWith("/data/")),
    ).toBe(true);
  });

  it("allows the panel to clear the selected satellite", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (input: RequestInfo | URL) =>
        String(input) === "/data/catalog.json"
          ? new Response(JSON.stringify(snapshot), { status: 200 })
          : new Response(JSON.stringify({ state: "ready" }), { status: 200 }),
      ),
    );
    const { result } = renderHook(() =>
      useSatelliteCatalog({ autoRefresh: false, refreshIntervalHours: 1 }),
    );

    await waitFor(() => expect(result.current.selectedNoradId).toBe(25544));
    act(() => result.current.clearSelection());

    expect(result.current.selectedNoradId).toBeNull();
  });

  it("shows cached data when the shared snapshot cannot be fetched", async () => {
    const fetchMock = vi.fn(
      async () => new Response("offline", { status: 503 }),
    );
    vi.stubGlobal("fetch", fetchMock);
    localStorage.setItem(
      "orbitradar_active_satellite_tles_v2",
      JSON.stringify({
        satellites: [
          {
            noradId: 25544,
            name: "Cached ISS",
            line1:
              "1 25544U 98067A   19156.50900463  .00003075  00000-0  59442-4 0  9992",
            line2:
              "2 25544  51.6433  59.2583 0008217  16.4489 347.6017 15.51174618173442",
          },
        ],
      }),
    );
    localStorage.setItem(
      "orbitradar_active_satellite_timestamp_v2",
      new Date().toISOString(),
    );

    const { result } = renderHook(() =>
      useSatelliteCatalog({ autoRefresh: false, refreshIntervalHours: 1 }),
    );
    await waitFor(() =>
      expect(result.current.trackedSatellites).toHaveLength(1),
    );
    expect(result.current.statusMessage).toContain("local cache");
  });

  it("shows the publisher's safe pause reason with the last known snapshot", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (input: RequestInfo | URL) => {
        if (String(input) === "/data/catalog.json")
          return new Response(JSON.stringify(snapshot), { status: 200 });
        return new Response(
          JSON.stringify({
            state: "paused",
            message:
              "CelesTrak reports that the active group has not updated. Automatic requests are stopped; an operator probe is required.",
          }),
          { status: 200 },
        );
      }),
    );
    const { result } = renderHook(() =>
      useSatelliteCatalog({ autoRefresh: false, refreshIntervalHours: 1 }),
    );
    await waitFor(() =>
      expect(result.current.trackedSatellites).toHaveLength(1),
    );
    expect(result.current.statusMessage).toContain(
      "operator probe is required",
    );
    expect(result.current.statusMessage).toContain("1 satellites");
  });
});
