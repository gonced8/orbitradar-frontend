/** Scale a marker with the globe so it remains visible at normal zoom levels. */
export const getSatelliteMarkerScale = (
  globeRadius: number,
  selected: boolean,
  tracked: boolean,
): number => globeRadius * (selected ? 0.012 : tracked ? 0.008 : 0.005);

export const SELECTED_SATELLITE_COLOR = "#ffffff";

export const getGlobePixelRatio = (devicePixelRatio: number): number =>
  Math.min(Math.max(devicePixelRatio, 1), 1.5);
