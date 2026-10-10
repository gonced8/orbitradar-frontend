export const listenForWebglContextLoss = (
  canvas: HTMLCanvasElement,
  onLost: () => void,
) => {
  const handleContextLost = (event: Event) => {
    event.preventDefault();
    onLost();
  };
  canvas.addEventListener("webglcontextlost", handleContextLost);
  return () =>
    canvas.removeEventListener("webglcontextlost", handleContextLost);
};
