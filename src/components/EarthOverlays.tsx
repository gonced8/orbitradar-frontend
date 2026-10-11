import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { GlobeMethods } from "react-globe.gl";
import { getSunDirection } from "../utils/solar";

type Props = {
  globe: GlobeMethods | null;
  time: Date;
  getTime?: () => Date;
  nightEnabled: boolean;
  cloudsEnabled: boolean;
  cloudVersion?: string;
};

const cloudImageUrl = () => {
  const configured = import.meta.env.VITE_CLOUD_IMAGE_URL as string | undefined;
  return configured ?? `${import.meta.env.BASE_URL}data/clouds/latest.png`;
};

// react-globe.gl rotates its textured globe to align the prime meridian with
// its coordinate system. Keep the same rotation when transforming the sun
// direction used by the globe shader.
const GLOBE_TEXTURE_ROTATION_Y = -Math.PI / 2;
// Keep the coverage layer translucent so the underlying land and ocean
// textures remain visible beneath dense daytime cloud fields.
const CLOUD_OPACITY = 0.18;
const toOverlayDirection = (direction: THREE.Vector3) =>
  direction
    .clone()
    .applyAxisAngle(new THREE.Vector3(0, 1, 0), -GLOBE_TEXTURE_ROTATION_Y);

export const EarthOverlays = ({
  globe,
  time,
  getTime,
  nightEnabled,
  cloudsEnabled,
  cloudVersion = "",
}: Props) => {
  const emptyCloudTexture = useMemo(() => {
    const texture = new THREE.DataTexture(
      new Uint8Array([255, 255, 255, 0]),
      1,
      1,
      THREE.RGBAFormat,
    );
    texture.needsUpdate = true;
    return texture;
  }, []);
  const nightUniformsRef = useRef({
    sunDirection: { value: new THREE.Vector3() },
    enabled: { value: 1 },
  });
  const cloudUniformsRef = useRef({
    map: { value: emptyCloudTexture as THREE.Texture },
    enabled: { value: 0 },
    opacity: { value: CLOUD_OPACITY },
    texelSize: { value: new THREE.Vector2(1 / 1024, 1 / 512) },
  });
  const cloudTextureRef = useRef<THREE.Texture | null>(null);
  const timeMs = time.getTime();
  const sun = useMemo(() => getSunDirection(new Date(timeMs)), [timeMs]);
  const cloudUrl = useMemo(() => {
    const url = cloudImageUrl();
    if (!cloudVersion) return url;
    return `${url}${url.includes("?") ? "&" : "?"}v=${encodeURIComponent(cloudVersion)}`;
  }, [cloudVersion]);
  const sunRef = useRef(sun);
  const timeRef = useRef(time);
  const getTimeRef = useRef(getTime);
  const hasTimeGetter = Boolean(getTime);
  const nightEnabledRef = useRef(nightEnabled);
  sunRef.current = sun;
  timeRef.current = time;
  getTimeRef.current = getTime;
  nightEnabledRef.current = nightEnabled;

  useEffect(() => {
    if (!globe) return;
    const globeMeshes: THREE.Mesh[] = [];
    globe.scene().traverse((object) => {
      const candidate = object as THREE.Object3D & {
        __globeObjType?: string;
      };
      if (
        globeMeshes.length === 0 &&
        candidate.type === "Mesh" &&
        candidate.__globeObjType === "globe"
      )
        globeMeshes.push(candidate as THREE.Mesh);
    });
    const globeMesh = globeMeshes[0];
    if (!globeMesh) return;
    const material = globeMesh.material;
    if (Array.isArray(material) || material.type !== "MeshPhongMaterial")
      return;
    const phongMaterial = material as THREE.MeshPhongMaterial;
    const previousCompile = phongMaterial.onBeforeCompile;
    const previousCacheKey = phongMaterial.customProgramCacheKey;
    const uniforms = nightUniformsRef.current;
    const cloudUniforms = cloudUniformsRef.current;
    uniforms.sunDirection.value.copy(toOverlayDirection(sunRef.current));
    uniforms.enabled.value = nightEnabledRef.current ? 1 : 0;
    phongMaterial.onBeforeCompile = (shader, renderer) => {
      previousCompile.call(phongMaterial, shader, renderer);
      shader.uniforms.orbitradarSunDirection = uniforms.sunDirection;
      shader.uniforms.orbitradarNightEnabled = uniforms.enabled;
      shader.uniforms.orbitradarCloudMap = cloudUniforms.map;
      shader.uniforms.orbitradarCloudEnabled = cloudUniforms.enabled;
      shader.uniforms.orbitradarCloudOpacity = cloudUniforms.opacity;
      shader.uniforms.orbitradarCloudTexelSize = cloudUniforms.texelSize;
      shader.vertexShader = shader.vertexShader
        .replace(
          "#include <common>",
          "#include <common>\nvarying vec3 orbitradarSurfaceNormal;",
        )
        .replace(
          "#include <beginnormal_vertex>",
          "#include <beginnormal_vertex>\norbitradarSurfaceNormal = normalize(objectNormal);",
        );
      shader.fragmentShader = shader.fragmentShader
        .replace(
          "#include <common>",
          "#include <common>\nvarying vec3 orbitradarSurfaceNormal;\nuniform vec3 orbitradarSunDirection;\nuniform float orbitradarNightEnabled;\nuniform sampler2D orbitradarCloudMap;\nuniform float orbitradarCloudEnabled;\nuniform float orbitradarCloudOpacity;\nuniform vec2 orbitradarCloudTexelSize;",
        )
        .replace(
          "#include <opaque_fragment>",
          `float orbitradarDaylight = dot(normalize(orbitradarSurfaceNormal), normalize(orbitradarSunDirection));
float orbitradarDay = smoothstep(-0.22, 0.12, orbitradarDaylight);
vec3 orbitradarNightColor = outgoingLight * vec3(0.04, 0.07, 0.16);
outgoingLight = mix(outgoingLight, mix(orbitradarNightColor, outgoingLight, orbitradarDay), orbitradarNightEnabled);
// Soften the published raster slightly so its finite resolution does not
// dominate the globe at close zoom. The cross kernel preserves broad fronts
// while smoothing individual coverage pixels.
vec2 orbitradarCloudBlurOffset = orbitradarCloudTexelSize * 1.25;
vec4 orbitradarCloudSample = texture2D(orbitradarCloudMap, vMapUv) * 0.4;
orbitradarCloudSample += texture2D(orbitradarCloudMap, vMapUv + vec2(orbitradarCloudBlurOffset.x, 0.0)) * 0.15;
orbitradarCloudSample += texture2D(orbitradarCloudMap, vMapUv - vec2(orbitradarCloudBlurOffset.x, 0.0)) * 0.15;
orbitradarCloudSample += texture2D(orbitradarCloudMap, vMapUv + vec2(0.0, orbitradarCloudBlurOffset.y)) * 0.15;
orbitradarCloudSample += texture2D(orbitradarCloudMap, vMapUv - vec2(0.0, orbitradarCloudBlurOffset.y)) * 0.15;
// The NOAA field is total coverage, not cloud albedo. Decode its deliberately
// softened alpha back into a coverage estimate, then let solar illumination
// determine the visible cloud brightness.
float orbitradarCloudCoverage = clamp(pow(orbitradarCloudSample.a / 0.824, 0.82), 0.0, 1.0);
float orbitradarCloudDensity = smoothstep(0.08, 0.92, orbitradarCloudCoverage);
vec3 orbitradarCloudNightColor = vec3(0.025, 0.04, 0.075);
vec3 orbitradarCloudDayColor = vec3(1.0, 1.0, 0.98);
float orbitradarCloudSunlight = smoothstep(-0.16, 0.24, orbitradarDaylight);
vec3 orbitradarCloudColor = mix(orbitradarCloudNightColor, orbitradarCloudDayColor, mix(1.0, orbitradarCloudSunlight, orbitradarNightEnabled));
float orbitradarCloudAlpha = orbitradarCloudDensity * orbitradarCloudOpacity * orbitradarCloudEnabled;
outgoingLight = mix(outgoingLight, orbitradarCloudColor, orbitradarCloudAlpha);
#include <opaque_fragment>`,
        );
    };
    phongMaterial.customProgramCacheKey = () =>
      `${previousCacheKey.call(phongMaterial)}-orbitradar-cloud-surface-v3`;
    phongMaterial.needsUpdate = true;
    return () => {
      phongMaterial.onBeforeCompile = previousCompile;
      phongMaterial.customProgramCacheKey = previousCacheKey;
      phongMaterial.needsUpdate = true;
    };
  }, [globe]);

  useEffect(() => {
    const uniforms = nightUniformsRef.current;
    uniforms.enabled.value = nightEnabled ? 1 : 0;
    uniforms.sunDirection.value.copy(toOverlayDirection(sun));
  }, [nightEnabled, sun]);

  useEffect(() => {
    if (!hasTimeGetter || typeof window.requestAnimationFrame !== "function")
      return;
    let frame = 0;
    const updateSun = () => {
      const simulatedTime = getTimeRef.current?.() ?? timeRef.current;
      const direction = getSunDirection(simulatedTime);
      nightUniformsRef.current.enabled.value = nightEnabledRef.current ? 1 : 0;
      nightUniformsRef.current.sunDirection.value.copy(
        toOverlayDirection(direction),
      );
      frame = window.requestAnimationFrame(updateSun);
    };
    frame = window.requestAnimationFrame(updateSun);
    return () => window.cancelAnimationFrame(frame);
  }, [hasTimeGetter]);

  useEffect(() => {
    const clearCloudTexture = () => {
      if (cloudTextureRef.current) {
        cloudTextureRef.current.dispose();
        cloudTextureRef.current = null;
      }
      cloudUniformsRef.current.map.value = emptyCloudTexture;
      cloudUniformsRef.current.enabled.value = 0;
    };

    if (!globe || !cloudsEnabled) {
      clearCloudTexture();
      return;
    }
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    let cancelled = false;
    loader.load(
      cloudUrl,
      (texture) => {
        if (cancelled || !globe) {
          texture.dispose();
          return;
        }
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = true;
        texture.anisotropy = Math.min(
          4,
          globe.renderer().capabilities.getMaxAnisotropy(),
        );
        texture.needsUpdate = true;
        const image = texture.image as { width?: number; height?: number };
        if (image.width && image.height) {
          cloudUniformsRef.current.texelSize.value.set(
            1 / image.width,
            1 / image.height,
          );
        }
        const previousTexture = cloudTextureRef.current;
        cloudTextureRef.current = texture;
        cloudUniformsRef.current.map.value = texture;
        cloudUniformsRef.current.enabled.value = 1;
        if (previousTexture) {
          if (typeof window.requestAnimationFrame === "function")
            window.requestAnimationFrame(() => previousTexture.dispose());
          else previousTexture.dispose();
        }
      },
      undefined,
      () => {
        // The globe remains usable when the public imagery service is unavailable.
      },
    );
    return () => {
      // Keep the previous texture bound while a replacement is loading. A
      // failed refresh therefore leaves the last valid weather image visible.
      cancelled = true;
    };
  }, [globe, cloudsEnabled, cloudUrl, emptyCloudTexture]);

  useEffect(() => {
    return () => {
      cloudTextureRef.current?.dispose();
      cloudTextureRef.current = null;
      emptyCloudTexture.dispose();
    };
  }, [emptyCloudTexture]);

  return null;
};

export default EarthOverlays;
