import { describe, expect, it, vi } from "vitest";
import { listenForWebglContextLoss } from "../../utils/globeContext";

describe("WebGL context loss handling", () => {
  it("prevents the browser default and notifies the app once per event", () => {
    const canvas = document.createElement("canvas");
    const onLost = vi.fn();
    const cleanup = listenForWebglContextLoss(canvas, onLost);

    const event = new Event("webglcontextlost", { cancelable: true });
    expect(canvas.dispatchEvent(event)).toBe(false);
    expect(event.defaultPrevented).toBe(true);
    expect(onLost).toHaveBeenCalledOnce();

    cleanup();
    canvas.dispatchEvent(new Event("webglcontextlost", { cancelable: true }));
    expect(onLost).toHaveBeenCalledOnce();
  });
});
