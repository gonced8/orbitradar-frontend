import { afterEach, describe, expect, it, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useDataFreshness } from "../../hooks/useDataFreshness";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("useDataFreshness", () => {
  it("reads both publisher documents and uses cloud validity for age", async () => {
    const fetchedAt = new Date().toISOString();
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      if (String(input).endsWith("catalog-status.json"))
        return new Response(JSON.stringify({ state: "ready", fetchedAt }), {
          status: 200,
        });
      return new Response(
        JSON.stringify({
          state: "ready",
          sourceId: "noaa-gfs-tcc",
          fetchedAt,
          validAt: fetchedAt,
          modelCycle: "20261011T06Z",
        }),
        { status: 200 },
      );
    });
    vi.stubGlobal("fetch", fetchMock);

    const { result } = renderHook(() =>
      useDataFreshness(fetchedAt, { state: "ready", fetchedAt }),
    );
    await waitFor(() => expect(result.current.cloud.level).toBe("fresh"));

    expect(result.current.satellite.level).toBe("fresh");
    expect(result.current.cloud.modelCycle).toBe("20261011T06Z");
    expect(result.current.cloudVersion).toBe(fetchedAt);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("keeps a valid source timestamp visible when a publisher is paused", async () => {
    const fetchedAt = new Date().toISOString();
    vi.stubGlobal(
      "fetch",
      vi.fn(async (input: RequestInfo | URL) =>
        String(input).endsWith("catalog-status.json")
          ? new Response(JSON.stringify({ state: "paused", fetchedAt }), {
              status: 200,
            })
          : new Response("offline", { status: 503 }),
      ),
    );

    const { result } = renderHook(() =>
      useDataFreshness(fetchedAt, { state: "paused", fetchedAt }),
    );
    await waitFor(() => expect(result.current.satellite.level).toBe("stale"));
    expect(result.current.satellite.sourceTimestamp).toBe(fetchedAt);
    expect(result.current.cloud.level).toBe("unavailable");
  });
});
