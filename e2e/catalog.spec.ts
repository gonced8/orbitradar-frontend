import { expect, test } from "@playwright/test";
import { readFileSync } from "node:fs";

const catalog = JSON.parse(
  readFileSync(new URL("./fixtures/catalog.json", import.meta.url), "utf8"),
);

test.beforeEach(async ({ page }) => {
  await page.route("**/data/catalog.json", (route) =>
    route.fulfill({ json: catalog }),
  );
  await page.route("**/data/catalog-status.json", (route) =>
    route.fulfill({
      json: { schemaVersion: 1, state: "ready", fetchedAt: catalog.fetchedAt },
    }),
  );
  await page.route("https://unpkg.com/**", (route) => route.abort());
});

test("loads the shared OMM snapshot and searches a six-digit catalog ID", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByText("3 satellites", { exact: true })).toBeVisible();
  await page
    .getByRole("searchbox", { name: /find by name or norad id/i })
    .fill("100972");
  await expect(
    page.getByRole("button", { name: /modern id test satellite.*100972/i }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: /modern id test satellite.*100972/i })
    .click();
  await expect(page.getByText("NORAD 100972", { exact: true })).toBeVisible();
});

test("sizes the globe canvas to its responsive container", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  const canvas = page.locator("canvas").first();
  await expect(canvas).toBeVisible({ timeout: 20_000 });
  const dimensions = await canvas.evaluate((element) => {
    const rect = element.parentElement?.getBoundingClientRect();
    return {
      canvasWidth: element.getBoundingClientRect().width,
      canvasHeight: element.getBoundingClientRect().height,
      containerWidth: rect?.width ?? 0,
      containerHeight: rect?.height ?? 0,
    };
  });
  expect(dimensions.canvasWidth).toBeGreaterThan(0);
  expect(dimensions.canvasHeight).toBeGreaterThan(0);
  expect(
    Math.abs(dimensions.canvasWidth - dimensions.containerWidth),
  ).toBeLessThanOrEqual(1);
  expect(
    Math.abs(dimensions.canvasHeight - dimensions.containerHeight),
  ).toBeLessThanOrEqual(1);
  if (isMobile) expect(dimensions.containerWidth).toBeLessThan(500);
});

test("can open the time-lapse dialog with fixture catalog data", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Close control panel" }).click();
  await page.getByRole("button", { name: "Time Lapse" }).first().click();
  await expect(
    page.getByRole("dialog", { name: "Time Lapse Controls" }),
  ).toBeVisible();
});
