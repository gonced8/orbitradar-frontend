import React, { useRef, useState, useEffect, useMemo } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import { GlobeMethods } from 'react-globe.gl';
import { getUserLocation } from "../utils/geolocation";

const EARTH_RADIUS_KM = 6371; // km
const SAT_SIZE = 200; // km
const TIME_STEP = 1; // per frame

interface UserLocation {
    lat: number;
    lng: number;
    name: string;
}

const World: React.FC = () => {
    const globeEl = useRef<GlobeMethods>();
    const [time, setTime] = useState(new Date());
    const [globeRadius, setGlobeRadius] = useState<number>();
    const [userLocation, setUserLocation] = useState<UserLocation | null>(null);

    useEffect(() => {
        if (globeEl.current) {
            // Point the globe to a default location
            globeEl.current.pointOfView({ altitude: 3.5 });
            // Get the globe's radius
            setGlobeRadius(globeEl.current.getGlobeRadius());
        }

        // Get user's geolocation
        getUserLocation()
            .then((location) => {
                const userLoc = { lat: location.lat, lng: location.lng, name: 'You' };
                setUserLocation(userLoc);
                if (globeEl.current) {
                    // Point the globe to the user's location
                    globeEl.current.pointOfView({ lat: userLoc.lat, lng: userLoc.lng, altitude: 3.5 }, 1000);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        // time ticker
        const timer = setInterval(() => {
            setTime(prevTime => new Date(+prevTime + TIME_STEP));
        }, 1000 / 60);    // 60fps
        return () => clearInterval(timer);
    }, []);


    const satData = useMemo(() => {
        return [{
            name: 'Satellite',
            lat: 0,
            // circular orbit
            lng: time.getMilliseconds() / 1000 * 360,
            alt: 0.5
        }];
    }, [time]);

    const satObject = useMemo(() => {
        if (!globeRadius) return undefined;
        const satGeometry = new THREE.OctahedronGeometry(SAT_SIZE * globeRadius / EARTH_RADIUS_KM / 2, 0);
        const satMaterial = new THREE.MeshLambertMaterial({ color: 'red', transparent: true, opacity: 0.7 });
        return new THREE.Mesh(satGeometry, satMaterial);
    }, [globeRadius]);

    return (
        <div>
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                backgroundColor="black"
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
            />
        </div>
    );
};

export default World;
