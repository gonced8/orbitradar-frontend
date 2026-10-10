import {
  mkdir,
  mkdtemp,
  readFile,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import pngjs from "pngjs";
import {
  cloudImageUrl,
  renderCloudTexture,
  refreshCloudImage,
} from "./refresh-clouds.mjs";

const { PNG } = pngjs;

const temporaryDirs = [];
const makeSite = async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "orbitradar-clouds-"));
  temporaryDirs.push(root);
  return root;
};

afterEach(async () => {
  await Promise.all(
    temporaryDirs
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

const image = () => {
  const png = new PNG({ width: 2, height: 1 });
  png.data.set([102, 0, 119, 255, 255, 0, 0, 255]);
  return PNG.sync.write(png);
};

const response = (status, body = image()) => ({
  ok: status >= 200 && status < 300,
  status,
  arrayBuffer: async () =>
    body.buffer.slice(body.byteOffset, body.byteOffset + body.byteLength),
});

describe("shared weather publisher", () => {
  it("converts the thematic NASA palette into white cloud opacity", () => {
    const rendered = PNG.sync.read(renderCloudTexture(image()));
    expect([...rendered.data.slice(0, 4)]).toEqual([255, 255, 255, 0]);
    expect(rendered.data[7]).toBeGreaterThan(0);
    expect(rendered.data[4]).toBe(255);
    expect(rendered.data[5]).toBe(255);
    expect(rendered.data[6]).toBe(255);
  });

  it("publishes the latest available image and records its observation date", async () => {
    const siteDir = await makeSite();
    const requested = [];
    const now = new Date("2026-10-10T12:00:00.000Z");
    const result = await refreshCloudImage({
      siteDir,
      now,
      validateImageDimensions: false,
      fetchImpl: async (url) => {
        requested.push(url);
        return requested.length === 1 ? response(404) : response(200);
      },
    });

    expect(result).toMatchObject({
      queried: true,
      state: "ready",
      observationDate: "2026-10-09",
    });
    expect(requested[0]).toBe(cloudImageUrl(now));
    expect(
      await stat(path.join(siteDir, "data/clouds/latest.png")),
    ).toBeTruthy();
    const status = JSON.parse(
      await readFile(path.join(siteDir, "data/cloud-status.json"), "utf8"),
    );
    expect(status.observationDate).toBe("2026-10-09");
  });

  it("does not query NASA again while the cached image is fresh", async () => {
    const siteDir = await makeSite();
    await mkdir(path.join(siteDir, "data/clouds"), { recursive: true });
    await writeFile(
      path.join(siteDir, "data/cloud-status.json"),
      JSON.stringify({
        state: "ready",
        fetchedAt: "2026-10-10T10:00:00.000Z",
        observationDate: "2026-10-10",
      }),
    );
    await writeFile(path.join(siteDir, "data/clouds/latest.png"), "cached");
    let queried = false;
    const result = await refreshCloudImage({
      siteDir,
      now: new Date("2026-10-10T12:00:00.000Z"),
      fetchImpl: async () => {
        queried = true;
        return response(200);
      },
    });
    expect(result.queried).toBe(false);
    expect(queried).toBe(false);
  });
});
