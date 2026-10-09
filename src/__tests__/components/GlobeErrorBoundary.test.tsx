import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import GlobeErrorBoundary from "../../components/GlobeErrorBoundary";

const BrokenGlobe = () => {
  throw new Error("WebGL initialization failed");
};

describe("GlobeErrorBoundary", () => {
  it("keeps controls available and offers a retry after a rendering failure", () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    const onRetry = vi.fn();
    const RecoveringGlobe = () => {
      const [broken, setBroken] = useState(true);
      return (
        <GlobeErrorBoundary
          key={broken ? "broken" : "recovered"}
          onRetry={() => {
            onRetry();
            setBroken(false);
          }}
        >
          {broken ? <BrokenGlobe /> : <canvas aria-label="Earth globe" />}
        </GlobeErrorBoundary>
      );
    };

    render(<RecoveringGlobe />);
    expect(screen.getByRole("alert").textContent).toContain(
      "The 3D globe is unavailable.",
    );
    fireEvent.click(screen.getByRole("button", { name: "Retry globe" }));
    expect(screen.getByLabelText("Earth globe")).toBeTruthy();
    expect(onRetry).toHaveBeenCalledOnce();
    consoleError.mockRestore();
  });
});
