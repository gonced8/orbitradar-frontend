/** Scale a marker with the globe so it remains visible at normal zoom levels. */
export const getSatelliteMarkerScale = (
  globeRadius: number,
  selected: boolean,
  tracked: boolean,
): number => globeRadius * (selected ? 0.008 : tracked ? 0.0055 : 0.0035);
