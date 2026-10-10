import * as THREE from "three";

/** Return the geocentric direction of the Sun in the globe's coordinates. */
export const getSunDirection = (time: Date): THREE.Vector3 => {
  const dayOfYear = Math.floor(
    (Date.UTC(time.getUTCFullYear(), time.getUTCMonth(), time.getUTCDate()) -
      Date.UTC(time.getUTCFullYear(), 0, 0)) /
      86400000,
  );
  const minutes =
    time.getUTCHours() * 60 + time.getUTCMinutes() + time.getUTCSeconds() / 60;
  const gamma =
    (2 * Math.PI * (dayOfYear - 1 + (minutes / 60 - 12) / 24)) / 365;
  const declination =
    0.006918 -
    0.399912 * Math.cos(gamma) +
    0.070257 * Math.sin(gamma) -
    0.006758 * Math.cos(2 * gamma) +
    0.000907 * Math.sin(2 * gamma) -
    0.002697 * Math.cos(3 * gamma) +
    0.00148 * Math.sin(3 * gamma);
  const equationOfTime =
    229.18 *
    (0.000075 +
      0.001868 * Math.cos(gamma) -
      0.032077 * Math.sin(gamma) -
      0.014615 * Math.cos(2 * gamma) -
      0.040849 * Math.sin(2 * gamma));
  const longitude = ((720 - (minutes + equationOfTime)) / 4) * (Math.PI / 180);
  return new THREE.Vector3(
    Math.cos(declination) * Math.sin(longitude),
    Math.sin(declination),
    Math.cos(declination) * Math.cos(longitude),
  ).normalize();
};
