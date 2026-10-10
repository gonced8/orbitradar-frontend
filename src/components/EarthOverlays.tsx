import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { GlobeMethods } from "react-globe.gl";
import { getSunDirection } from "../utils/solar";

type Props = {
  globe: GlobeMethods | null;
  time: Date;
  getTime?: () => Date;
  nightEnabled: boolean;
  cloudsEnabled: boolean;
};

const cloudImageUrl = () => {
  const configured = import.meta.env.VITE_CLOUD_IMAGE_URL as string | undefined;
  return configured ?? `${import.meta.env.BASE_URL}data/clouds/latest.png`;
};

// react-globe.gl rotates its textured globe to align the prime meridian with
// its coordinate system. Keep the same rotation when transforming the sun
// direction used by the globe shader.
const GLOBE_TEXTURE_ROTATION_Y = -Math.PI / 2;
const CLOUD_OPACITY = 0.35;
const CLOUD_STATUS_REFRESH_MS = 6 * 60 * 60 * 1000;
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
  });
  const cloudTextureRef = useRef<THREE.Texture | null>(null);
  const [cloudVersion, setCloudVersion] = useState("");
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
  const nightEnabledRef = useRef(nightEnabled);
  sunRef.current = sun;
  timeRef.current = time;
  getTimeRef.current = getTime;
  nightEnabledRef.current = nightEnabled;

  useEffect(() => {
    if (!cloudsEnabled || import.meta.env.VITE_CLOUD_IMAGE_URL) return;
    let cancelled = false;
    const refreshVersion = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}data/cloud-status.json`,
          { cache: "no-cache" },
        );
        if (!response.ok) return;
        const status = (await response.json()) as {
          state?: string;
          sourceId?: string;
          fetchedAt?: string;
        };
        if (cancelled) return;
        const compatible =
          (status.state === "ready" || status.state === "stale") &&
          status.sourceId === "noaa-gfs-tcc" &&
          Boolean(status.fetchedAt);
        // The status document is only a cache-busting hint. Keep trying the
        // published image if this small document is stale or unavailable.
        setCloudVersion(compatible && status.fetchedAt ? status.fetchedAt : "");
      } catch {
        // Retain the current texture while the publisher status is unavailable.
      }
    };
    const onVisibilityChange = () => {
      if (!document.hidden) void refreshVersion();
    };
    void refreshVersion();
    const timer = window.setInterval(refreshVersion, CLOUD_STATUS_REFRESH_MS);
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [cloudsEnabled]);

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
          "#include <common>\nvarying vec3 orbitradarSurfaceNormal;\nuniform vec3 orbitradarSunDirection;\nuniform float orbitradarNightEnabled;\nuniform sampler2D orbitradarCloudMap;\nuniform float orbitradarCloudEnabled;\nuniform float orbitradarCloudOpacity;",
        )
        .replace(
          "#include <opaque_fragment>",
          `float orbitradarDaylight = dot(normalize(orbitradarSurfaceNormal), normalize(orbitradarSunDirection));
float orbitradarDay = smoothstep(-0.22, 0.12, orbitradarDaylight);
vec3 orbitradarNightColor = outgoingLight * vec3(0.04, 0.07, 0.16);
outgoingLight = mix(outgoingLight, mix(orbitradarNightColor, outgoingLight, orbitradarDay), orbitradarNightEnabled);
vec4 orbitradarCloudSample = texture2D(orbitradarCloudMap, vMapUv);
vec3 orbitradarCloudNightColor = vec3(0.12, 0.16, 0.26);
vec3 orbitradarCloudColor = mix(orbitradarCloudNightColor, vec3(1.0), mix(1.0, orbitradarDay, orbitradarNightEnabled));
float orbitradarCloudAlpha = orbitradarCloudSample.a * orbitradarCloudOpacity * orbitradarCloudEnabled;
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
    if (!getTime || typeof window.requestAnimationFrame !== "function") return;
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
  }, [getTime]);

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
        if (cloudTextureRef.current) cloudTextureRef.current.dispose();
        cloudTextureRef.current = texture;
        cloudUniformsRef.current.map.value = texture;
        cloudUniformsRef.current.enabled.value = 1;
      },
      undefined,
      () => {
        // The globe remains usable when the public imagery service is unavailable.
      },
    );
    return () => {
      cancelled = true;
      clearCloudTexture();
    };
  }, [globe, cloudsEnabled, cloudUrl, emptyCloudTexture]);

  useEffect(
    () => () => {
      emptyCloudTexture.dispose();
    },
    [emptyCloudTexture],
  );

  return null;
};

export default EarthOverlays;
