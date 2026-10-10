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
  return `https://gibs.earthdata.nasa.gov/wms/epsg4326/best/wms.cgi?SERVICE=WMS&REQUEST=GetMap&VERSION=1.1.1&LAYERS=MODIS_Terra_Cloud_Fraction_Day&STYLES=&FORMAT=image/png&TRANSPARENT=true&SRS=EPSG:4326&WIDTH=2048&HEIGHT=1024&BBOX=-180,-90,180,90&TIME=${date}`;
};

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
    const geometry = new THREE.SphereGeometry(radius * 1.002, 64, 32);
    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        sunDirection: { value: sunRef.current.clone() },
        opacity: { value: 0.72 },
      },
      vertexShader: `varying vec3 vNormal; void main() { vNormal = normalize(normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform vec3 sunDirection; uniform float opacity; varying vec3 vNormal; void main() { float daylight = dot(normalize(vNormal), normalize(sunDirection)); float night = smoothstep(0.12, -0.22, daylight); gl_FragColor = vec4(0.005, 0.012, 0.04, night * opacity); }`,
    });
    const mesh = new THREE.Mesh(geometry, material);
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
    material.uniforms.sunDirection.value.copy(sun);
  }, [nightEnabled, sun]);

  useEffect(() => {
    if (!globe || !cloudsEnabled) {
      if (cloudRef.current && globe) globe.scene().remove(cloudRef.current);
      cloudRef.current?.geometry.dispose();
      (cloudRef.current?.material as THREE.Material | undefined)?.dispose();
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
        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(globe.getGlobeRadius() * 1.008, 64, 32),
          new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 0.58,
            depthWrite: false,
            side: THREE.FrontSide,
          }),
        );
        mesh.name = "orbitradar-cloud-cover";
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
      cloudRef.current?.geometry.dispose();
      (cloudRef.current?.material as THREE.Material | undefined)?.dispose();
      cloudRef.current = null;
    };
  }, [globe, cloudsEnabled, cloudUrl]);

  return null;
};

export default EarthOverlays;
