import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import type { GlobeMethods } from "react-globe.gl";
import { getSunDirection } from "../utils/solar";

type Props = {
  globe: GlobeMethods | null;
  time: Date;
  nightEnabled: boolean;
  cloudsEnabled: boolean;
};

const cloudImageUrl = () => {
  const configured = import.meta.env.VITE_CLOUD_IMAGE_URL as string | undefined;
  return configured ?? `${import.meta.env.BASE_URL}data/clouds/latest.png`;
};

// react-globe.gl rotates its textured globe to align the prime meridian with
// its coordinate system. Overlay spheres must use the same rotation for their
// equirectangular textures and lighting to line up with the Earth image.
const GLOBE_TEXTURE_ROTATION_Y = -Math.PI / 2;
const CLOUD_RADIUS_SCALE = 1.008;
const CLOUD_STATUS_REFRESH_MS = 6 * 60 * 60 * 1000;
const toOverlayDirection = (direction: THREE.Vector3) =>
  direction
    .clone()
    .applyAxisAngle(new THREE.Vector3(0, 1, 0), -GLOBE_TEXTURE_ROTATION_Y);

export const EarthOverlays = ({
  globe,
  time,
  nightEnabled,
  cloudsEnabled,
}: Props) => {
  const nightUniformsRef = useRef({
    sunDirection: { value: new THREE.Vector3() },
    enabled: { value: 1 },
  });
  const cloudRef = useRef<THREE.Mesh | null>(null);
  const [cloudVersion, setCloudVersion] = useState("");
  const timeMs = time.getTime();
  const sun = useMemo(() => getSunDirection(new Date(timeMs)), [timeMs]);
  const cloudUrl = useMemo(() => {
    const url = cloudImageUrl();
    if (!cloudVersion) return url;
    return `${url}${url.includes("?") ? "&" : "?"}v=${encodeURIComponent(cloudVersion)}`;
  }, [cloudVersion]);
  const sunRef = useRef(sun);
  const nightEnabledRef = useRef(nightEnabled);
  sunRef.current = sun;
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
          fetchedAt?: string;
        };
        if (!cancelled && status.state === "ready" && status.fetchedAt)
          setCloudVersion(status.fetchedAt);
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
      if (
        globeMeshes.length === 0 &&
        object instanceof THREE.Mesh &&
        (object as THREE.Mesh & { __globeObjType?: string }).__globeObjType ===
          "globe"
      )
        globeMeshes.push(object);
    });
    const globeMesh = globeMeshes[0];
    if (!globeMesh) return;
    const material = globeMesh.material;
    if (!(material instanceof THREE.MeshPhongMaterial)) return;
    const previousCompile = material.onBeforeCompile;
    const previousCacheKey = material.customProgramCacheKey;
    const uniforms = nightUniformsRef.current;
    uniforms.sunDirection.value.copy(toOverlayDirection(sunRef.current));
    uniforms.enabled.value = nightEnabledRef.current ? 1 : 0;
    material.onBeforeCompile = (shader, renderer) => {
      previousCompile.call(material, shader, renderer);
      shader.uniforms.orbitradarSunDirection = uniforms.sunDirection;
      shader.uniforms.orbitradarNightEnabled = uniforms.enabled;
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
          "#include <common>\nvarying vec3 orbitradarSurfaceNormal;\nuniform vec3 orbitradarSunDirection;\nuniform float orbitradarNightEnabled;",
        )
        .replace(
          "#include <opaque_fragment>",
          `float orbitradarDaylight = dot(normalize(orbitradarSurfaceNormal), normalize(orbitradarSunDirection));
float orbitradarDay = smoothstep(-0.22, 0.12, orbitradarDaylight);
vec3 orbitradarNightColor = outgoingLight * vec3(0.04, 0.07, 0.16);
outgoingLight = mix(outgoingLight, mix(orbitradarNightColor, outgoingLight, orbitradarDay), orbitradarNightEnabled);
#include <opaque_fragment>`,
        );
    };
    material.customProgramCacheKey = () =>
      `${previousCacheKey.call(material)}-orbitradar-night-surface-v1`;
    material.needsUpdate = true;
    return () => {
      material.onBeforeCompile = previousCompile;
      material.customProgramCacheKey = previousCacheKey;
      material.needsUpdate = true;
    };
  }, [globe]);

  useEffect(() => {
    const uniforms = nightUniformsRef.current;
    uniforms.enabled.value = nightEnabled ? 1 : 0;
    uniforms.sunDirection.value.copy(toOverlayDirection(sun));
  }, [nightEnabled, sun]);

  useEffect(() => {
    if (!globe || !cloudsEnabled) {
      if (cloudRef.current && globe) globe.scene().remove(cloudRef.current);
      const material = cloudRef.current?.material as
        THREE.MeshBasicMaterial | undefined;
      material?.map?.dispose();
      cloudRef.current?.geometry.dispose();
      material?.dispose();
      cloudRef.current = null;
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
        texture.wrapS = THREE.ClampToEdgeWrapping;
        texture.wrapT = THREE.ClampToEdgeWrapping;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;
        texture.needsUpdate = true;
        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(
            globe.getGlobeRadius() * CLOUD_RADIUS_SCALE,
            64,
            32,
          ),
          new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 0.58,
            alphaTest: 0.05,
            depthTest: true,
            depthWrite: false,
            side: THREE.FrontSide,
          }),
        );
        mesh.name = "orbitradar-cloud-cover";
        mesh.rotation.y = GLOBE_TEXTURE_ROTATION_Y;
        globe.scene().add(mesh);
        cloudRef.current = mesh;
      },
      undefined,
      () => {
        // The globe remains usable when the public imagery service is unavailable.
      },
    );
    return () => {
      cancelled = true;
      if (cloudRef.current && globe) globe.scene().remove(cloudRef.current);
      const material = cloudRef.current?.material as
        THREE.MeshBasicMaterial | undefined;
      material?.map?.dispose();
      cloudRef.current?.geometry.dispose();
      material?.dispose();
      cloudRef.current = null;
    };
  }, [globe, cloudsEnabled, cloudUrl]);

  return null;
};

export default EarthOverlays;
