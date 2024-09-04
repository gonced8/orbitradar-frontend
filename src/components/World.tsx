import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { GlobeMethods } from 'react-globe.gl';
import { getUserLocation } from "../utils/geolocation";

// Constants
const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 200; // km
const SAT_ALTITUDE = 10; // km
const ORBIT_POINTS = 100; // Number of points in the orbit trajectory
const PERIOD = 60000; // ms
const CLICK_AREA_SIZE = 1000; // km

interface UserLocation {
    lat: number;
    lng: number;
    name: string;
}

const World: React.FC = () => {
    const globeEl = useRef<GlobeMethods | undefined>();
    const [time, setTime] = useState(new Date());
    const [globeRadius, setGlobeRadius] = useState<number>(EARTH_RADIUS_KM);
    const [userLocation, setUserLocation] = useState<UserLocation | null>(null);
    const [satClicked, setSatClicked] = useState<boolean>(false);
    const [orbitPoints, setOrbitPoints] = useState<{ lat: number; lng: number; alt: number; }[]>([]);
    const [initialTime] = useState(new Date().getTime());

    // Get user's geolocation
    useEffect(() => {
        getUserLocation()
            .then((location) => {
                const userLoc: UserLocation = { lat: location.lat, lng: location.lng, name: 'You' };
                setUserLocation(userLoc);
                globeEl.current?.pointOfView({ lat: userLoc.lat, lng: userLoc.lng, altitude: 3.5 }, 1000);
            })
            .catch((error) => {
                console.error("Error getting user location:", error);
            });
    }, []);

    // Init globe
    useEffect(() => {
        if (globeEl.current) {
            globeEl.current.pointOfView({ altitude: 3.5 });
            setGlobeRadius(globeEl.current.getGlobeRadius());
        }
    }, []);

    // Time ticker
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000 / 60); // 60fps
        return () => clearInterval(timer);
    }, []);

    // Satellite data
    const satData = useMemo(() => {
        const elapsedTime = time.getTime() - initialTime;
        return [{
            name: 'Satellite',
            lat: 0,
            lng: (elapsedTime % PERIOD) / PERIOD * 360,
            alt: SAT_ALTITUDE * globeRadius / EARTH_RADIUS_KM,
        }];
    }, [globeRadius, time, initialTime]);

    // Satellite object
    const satObject = useMemo(() => {
        if (!globeRadius) return undefined;

        // Satellite object
        const satGeometry = new THREE.OctahedronGeometry(SAT_SIZE * globeRadius / EARTH_RADIUS_KM / 2, 0);
        const satMaterial = new THREE.MeshLambertMaterial({ color: 'red', transparent: true, opacity: 0.7 });
        const satellite = new THREE.Mesh(satGeometry, satMaterial);
        satellite.name = 'Satellite'; // Name the satellite for identification

        // Click area object
        const clickAreaGeometry = new THREE.SphereGeometry(CLICK_AREA_SIZE * globeRadius / EARTH_RADIUS_KM / 2, 32, 32);
        const clickAreaMaterial = new THREE.MeshBasicMaterial({ color: 'black', transparent: true, opacity: 0, depthTest: false });
        const clickArea = new THREE.Mesh(clickAreaGeometry, clickAreaMaterial);
        clickArea.renderOrder = 999; // Ensure click area is rendered last

        const group = new THREE.Group();
        group.add(satellite);
        group.add(clickArea);

        return group;
    }, [globeRadius]);

    // Handle object click
    const handleObjectClick = useCallback((obj: object) => {
        console.log('Object clicked:', obj);
        const object = obj as THREE.Object3D;
        if (object.name === 'Satellite') {
            setSatClicked(prev => !prev);
        }
    }, []);

    // Generate orbit points
    const generateOrbitPoints = useCallback((altitude: number, numPoints: number) => {
        return Array.from({ length: numPoints }, (_, i) => ({
            lat: 0,
            lng: i * 360 / (numPoints - 1),
            alt: altitude
        }));
    }, []);

    // Set orbit points
    useEffect(() => {
        const altitude = SAT_ALTITUDE * globeRadius / EARTH_RADIUS_KM;
        setOrbitPoints(generateOrbitPoints(altitude, ORBIT_POINTS));
    }, [globeRadius, generateOrbitPoints]);

    return (
        <div>
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                backgroundColor="black"
                showAtmosphere={true}
                // User location
                labelsData={userLocation ? [userLocation] : []}
                labelLat={(d: object) => (d as UserLocation).lat}
                labelLng={(d: object) => (d as UserLocation).lng}
                labelText={(d: object) => (d as UserLocation).name}
                labelSize={1}
                labelDotRadius={0.5}
                labelsTransitionDuration={50}
                labelColor={() => 'rgba(255, 165, 0, 0.75)'}
                labelResolution={2}
                // Satellites
                objectsData={satData}
                objectLabel="name"
                objectLat="lat"
                objectLng="lng"
                objectAltitude="alt"
                objectFacesSurfaces={false}
                objectThreeObject={satObject}
                // Handle click
                onObjectClick={handleObjectClick}
                // Orbit trajectory
                pathsData={satClicked ? [{ points: orbitPoints }] : []}
                pathPoints="points"
                pathPointLat="lat"
                pathPointLng="lng"
                pathPointAlt="alt"
                pathColor={() => 'rgba(255, 0, 0, 0.7)'}
                pathStroke={0.5}
                pathTransitionDuration={0}
            />
        </div>
    );
};

export default World;