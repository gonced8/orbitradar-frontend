import { mkdtemp, readFile, rm, mkdir, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { normalizeSourceCatalog, refreshCatalog } from "./refresh-catalog.mjs";

const record = (id = 25544) => ({
  OBJECT_NAME: `Satellite ${id}`,
  OBJECT_ID: "1998-067A",
  EPOCH: "2025-01-01T00:00:00.000Z",
  MEAN_MOTION: 15.5,
  ECCENTRICITY: 0.0007,
  INCLINATION: 51.64,
  RA_OF_ASC_NODE: 20,
  ARG_OF_PERICENTER: 90,
  MEAN_ANOMALY: 270,
  EPHEMERIS_TYPE: 0,
  CLASSIFICATION_TYPE: "U",
  NORAD_CAT_ID: id,
  ELEMENT_SET_NO: 1,
  REV_AT_EPOCH: 1,
  BSTAR: 0.0003,
  MEAN_MOTION_DOT: 0.00016717,
  MEAN_MOTION_DDOT: 0,
});

const temporaryDirs = [];
const makeSite = async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "orbitradar-catalog-"));
  temporaryDirs.push(root);
  return root;
};
afterEach(async () => {
  await Promise.all(
    temporaryDirs
      .splice(0)
      .map((dir) => rm(dir, { recursive: true, force: true })),
  );
});

const response = (status, body) => ({
  ok: status >= 200 && status < 300,
  status,
  json: async () => body,
  text: async () => body,
});

describe("shared catalog publisher", () => {
  it("validates OMM and accepts modern six-digit NORAD identifiers", () => {
    const snapshot = normalizeSourceCatalog(
      [record(100972), { ...record(11), MEAN_MOTION: "bad" }],
      "2025-01-01T00:00:00.000Z",
      1,
    );
    expect(snapshot.satellites).toHaveLength(1);
    expect(snapshot.satellites[0].NORAD_CAT_ID).toBe(100972);
  });

  it("keeps the last known-good snapshot after a source 403 and stops automatic requests", async () => {
    const siteDir = await makeSite();
    const dataDir = path.join(siteDir, "data");
    await mkdir(dataDir, { recursive: true });
    const lastGood = {
      schemaVersion: 1,
      fetchedAt: "2025-01-01T00:00:00.000Z",
      satellites: [record()],
    };
    await writeFile(
      path.join(dataDir, "catalog.json"),
      JSON.stringify(lastGood),
    );
    const now = new Date("2025-01-01T01:00:00.000Z");
    const fetchImpl = async () =>
      response(
        403,
        "GP data has not updated since your last successful download of GROUP=active at 2025-01-01 00:00:00.",
      );

    const first = await refreshCatalog({ siteDir, now, fetchImpl });
    expect(first).toMatchObject({ queried: true, state: "paused" });
    const sourceFile = path.join(dataDir, "catalog.json");
    expect(JSON.parse(await readFile(sourceFile, "utf8"))).toEqual(lastGood);
    const status = JSON.parse(
      await readFile(path.join(dataDir, "catalog-status.json"), "utf8"),
    );
    expect(status.retryAt).toBeNull();
    expect(status.manualProbeRequired).toBe(true);
    expect(status.message).not.toContain("2025-01-01 00:00:00");

    let queried = false;
    const skipped = await refreshCatalog({
      siteDir,
      now: new Date("2025-01-01T01:30:00.000Z"),
      fetchImpl: async () => {
        queried = true;
        return response(200, [record()]);
      },
    });
    expect(skipped).toEqual({ queried: false, state: "paused" });
    expect(queried).toBe(false);
  });

  it("recovers on a later successful probe and clears the pause", async () => {
    const siteDir = await makeSite();
    const dataDir = path.join(siteDir, "data");
    await mkdir(dataDir, { recursive: true });
    await writeFile(
      path.join(dataDir, "catalog-status.json"),
      JSON.stringify({
        state: "paused",
        manualProbeRequired: true,
        fetchedAt: "2025-01-01T00:00:00.000Z",
        recordCount: 1,
      }),
    );
    const success = await refreshCatalog({
      siteDir,
      forceProbe: true,
      now: new Date("2025-01-01T04:00:00.000Z"),
      fetchImpl: async () => response(200, [record(100972)]),
      minimumRecords: 1,
    });
    expect(success).toMatchObject({
      queried: true,
      state: "ready",
      recordCount: 1,
    });
    const status = JSON.parse(
      await readFile(path.join(dataDir, "catalog-status.json"), "utf8"),
    );
    expect(status.manualProbeRequired).toBe(false);
    expect(status.retryAt).toBeNull();
  });

  it("does not request the source more often than the two-hour update cadence", async () => {
    const siteDir = await makeSite();
    const dataDir = path.join(siteDir, "data");
    await mkdir(dataDir, { recursive: true });
    await writeFile(
      path.join(dataDir, "catalog-status.json"),
      JSON.stringify({ state: "ready", fetchedAt: "2025-01-01T00:00:00.000Z" }),
    );
    let queried = false;
    const result = await refreshCatalog({
      siteDir,
      now: new Date("2025-01-01T01:59:00.000Z"),
      fetchImpl: async () => {
        queried = true;
        return response(200, [record(100972)]);
      },
      minimumRecords: 1,
    });
    expect(result).toEqual({ queried: false, state: "ready" });
    expect(queried).toBe(false);
  });

  it("pauses unexplained forbidden responses without persisting response content", async () => {
    const siteDir = await makeSite();
    const result = await refreshCatalog({
      siteDir,
      now: new Date("2025-01-01T00:00:00.000Z"),
      fetchImpl: async () => response(403, "Your IP 192.0.2.10 is blocked"),
    });
    expect(result.state).toBe("paused");
    const status = await readFile(
      path.join(siteDir, "data/catalog-status.json"),
      "utf8",
    );
    expect(status).not.toContain("192.0.2.10");
  });

  it("keeps transient source failures recoverable", async () => {
    const siteDir = await makeSite();
    const result = await refreshCatalog({
      siteDir,
      now: new Date("2025-01-01T00:00:00.000Z"),
      fetchImpl: async () => response(429, "rate limited"),
    });
    expect(result).toEqual({ queried: true, state: "error" });
    const status = JSON.parse(
      await readFile(path.join(siteDir, "data/catalog-status.json"), "utf8"),
    );
    expect(status.manualProbeRequired).toBe(false);
    expect(Date.parse(status.retryAt)).toBeGreaterThan(
      Date.parse(status.attemptedAt),
    );
  });
});
