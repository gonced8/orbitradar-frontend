import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DataFreshness from "../../components/DataFreshness";
import type { FreshnessStatus } from "../../utils/dataFreshness";

const fresh: FreshnessStatus = {
  level: "fresh",
  label: "Fresh",
  relativeAge: "just now",
  localTime: "Oct 11, 2026, 10:00 AM",
  sourceTimestamp: "2026-10-11T10:00:00.000Z",
};

describe("DataFreshness", () => {
  it("keeps the compact passive information out of live regions", () => {
    render(<DataFreshness satellite={fresh} cloud={fresh} compact />);

    expect(screen.getByLabelText("Data freshness").textContent).toContain(
      "Satellites",
    );
    expect(screen.queryByRole("status")).toBeNull();
  });
});
