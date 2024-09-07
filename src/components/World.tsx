import React, { useRef, useState, useEffect, useMemo } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { GlobeMethods } from 'react-globe.gl';
import axios from 'axios';
import * as satellite from 'satellite.js';
import { getUserLocation } from "../utils/geolocation";

// Constants
const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 200; // km
const CLICK_AREA_SIZE = 1000; // km
const ORBIT_POINTS = 100; // Number of points in the orbit trajectory
const FPS = 60;

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
    const [tleSatrec, setTleSatrec] = useState<satellite.SatRec>();
    const [issPeriodSeconds, setIssPeriodSeconds] = useState<number | null>(null); // Store the period in seconds


    // Fetch ISS TLE data from Celestrak on mount
    useEffect(() => {
        const catnr = 25544; // NORAD ID for ISS
        const format = "TLE";

        axios.get(`https://celestrak.org/NORAD/elements/gp.php?CATNR=${catnr}&FORMAT=${format}`)
            .then((response) => {
                const tleData = response.data.split('\n');
                const tleLine1 = tleData[1].trim();
                const tleLine2 = tleData[2].trim();

                // Create satellite record
                const satrec = satellite.twoline2satrec(tleLine1, tleLine2);
                setTleSatrec(satrec);

                // Calculate and store the ISS period in seconds
                const meanMotion = satrec.no; // revolutions per minute
                const periodSeconds = (2 * Math.PI) / meanMotion * 60; // seconds
                setIssPeriodSeconds(periodSeconds);
            })
            .catch((error) => {
                console.error('Error fetching TLE data:', error);
            });
    }, []);


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

    // Time ticker (fps)
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000 / FPS);
        return () => clearInterval(timer);
    }, []);

    // Propagate ISS position
    const issPosition = useMemo(() => {
        if (!tleSatrec) return null;

        // Propagate the satellite's position using the current time
        const positionAndVelocity = satellite.propagate(tleSatrec, time);
        const positionEci = positionAndVelocity.position;

        if (!positionEci) return null;

        // Convert ECI coordinates to Geodetic coordinates (latitude, longitude, altitude)
        const gmst = satellite.gstime(time);
        const positionGd = satellite.eciToGeodetic(positionEci as satellite.EciVec3<number>, gmst);
        const lat = satellite.degreesLat(positionGd.latitude);
        const lng = satellite.degreesLong(positionGd.longitude);
        const alt = positionGd.height;

        return { lat, lng, alt: alt / EARTH_RADIUS_KM, name: "ISS" }; // Altitude in Earth radii for the globe visualization
    }, [tleSatrec, time]);

    // Generate orbit points centered around current ISS position
    const generateOrbitPoints = useMemo(() => {
        if (!tleSatrec || !issPeriodSeconds || !issPosition) return [];

        const points = [];
        const halfPeriodMs = issPeriodSeconds * 1000 / 2;
        const stepMs = issPeriodSeconds * 1000 / ORBIT_POINTS;

        // Iterate from -half period to +half period centered around the current satellite position
        for (let i = -halfPeriodMs; i <= halfPeriodMs; i += stepMs) {
            const propagationTime = new Date(time.getTime() + i);
            const positionAndVelocity = satellite.propagate(tleSatrec, propagationTime);
            const positionEci = positionAndVelocity.position;

            if (!positionEci) continue;

            const gmst = satellite.gstime(propagationTime);
            const positionGd = satellite.eciToGeodetic(positionEci as satellite.EciVec3<number>, gmst);
            const lat = satellite.degreesLat(positionGd.latitude);
            const lng = satellite.degreesLong(positionGd.longitude);
            const alt = positionGd.height;

            points.push({ lat, lng, alt: alt / EARTH_RADIUS_KM });
        }

        return points;
    }, [tleSatrec, issPeriodSeconds, issPosition, time]);

    // Update orbit points when ISS position is updated
    useEffect(() => {
        setOrbitPoints(generateOrbitPoints);
    }, [generateOrbitPoints]);


    // Satellite object (ISS)
    const satObject = useMemo(() => {
        if (!globeRadius) return undefined;

        // Satellite object
        const satGeometry = new THREE.OctahedronGeometry(SAT_SIZE * globeRadius / EARTH_RADIUS_KM / 2, 0);
        const satMaterial = new THREE.MeshLambertMaterial({ color: 'red', transparent: true, opacity: 0.7 });
        const satellite = new THREE.Mesh(satGeometry, satMaterial);
        satellite.name = 'ISS'; // Name the satellite for identification

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
    const handleObjectClick = (obj: object) => {
        const object = obj as THREE.Object3D;
        if (object.name === 'ISS') {
            setSatClicked(prev => !prev);
        }
    };

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
                // ISS position
                objectsData={issPosition ? [issPosition] : []}
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
