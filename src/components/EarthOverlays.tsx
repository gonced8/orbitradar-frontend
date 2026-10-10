import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { GlobeMethods } from "react-globe.gl";
import { getSunDirection } from "../utils/solar";

type Props = {
  globe: GlobeMethods | null;
  time: Date;
  nightEnabled: boolean;
  cloudsEnabled: boolean;
};

const cloudImageUrl = (time: Date) => {
  const date = time.toISOString().slice(0, 10);
  const configured = import.meta.env.VITE_CLOUD_IMAGE_URL as string | undefined;
  if (configured) return configured.replace("{date}", date);
  if (!import.meta.env.DEV) return "/data/clouds/latest.png";
  return `https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?SERVICE=WMS&REQUEST=GetMap&VERSION=1.1.1&LAYERS=MODIS_Terra_Cloud_Fraction_Day&STYLES=&FORMAT=image/png&TRANSPARENT=true&SRS=EPSG:4326&WIDTH=1024&HEIGHT=512&BBOX=-180,-90,180,90&TIME=${date}`;
};

// react-globe.gl rotates its textured globe to align the prime meridian with
// its coordinate system. Overlay spheres must use the same rotation for their
// equirectangular textures and lighting to line up with the Earth image.
const GLOBE_TEXTURE_ROTATION_Y = -Math.PI / 2;
const NIGHT_RADIUS_SCALE = 1.002;
const CLOUD_RADIUS_SCALE = 1.008;
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
  const nightRef = useRef<THREE.Mesh | null>(null);
  const cloudRef = useRef<THREE.Mesh | null>(null);
  const timeMs = time.getTime();
  const sun = useMemo(() => getSunDirection(new Date(timeMs)), [timeMs]);
  const cloudUrl = useMemo(() => cloudImageUrl(new Date()), []);
  const sunRef = useRef(sun);
  const nightEnabledRef = useRef(nightEnabled);
  sunRef.current = sun;
  nightEnabledRef.current = nightEnabled;

  useEffect(() => {
    if (!globe) return;
    const radius = globe.getGlobeRadius();
    const geometry = new THREE.SphereGeometry(
      radius * NIGHT_RADIUS_SCALE,
      64,
      32,
    );
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        sunDirection: { value: toOverlayDirection(sunRef.current) },
        opacity: { value: 0.72 },
      },
      side: THREE.FrontSide,
      depthTest: true,
      vertexShader: `varying vec3 vNormal; void main() { vNormal = normalize(normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform vec3 sunDirection; uniform float opacity; varying vec3 vNormal; void main() { float daylight = dot(normalize(vNormal), normalize(sunDirection)); float day = smoothstep(-0.22, 0.12, daylight); float night = 1.0 - day; gl_FragColor = vec4(0.005, 0.012, 0.04, night * opacity); }`,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = GLOBE_TEXTURE_ROTATION_Y;
    mesh.name = "orbitradar-night-side";
    mesh.visible = nightEnabledRef.current;
    globe.scene().add(mesh);
    nightRef.current = mesh;
    return () => {
      globe.scene().remove(mesh);
      geometry.dispose();
      material.dispose();
      if (nightRef.current === mesh) nightRef.current = null;
    };
  }, [globe]);

  useEffect(() => {
    const mesh = nightRef.current;
    if (!mesh) return;
    mesh.visible = nightEnabled;
    const material = mesh.material as THREE.ShaderMaterial;
    material.uniforms.sunDirection.value.copy(toOverlayDirection(sun));
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
