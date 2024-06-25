import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { GlobeMethods } from 'react-globe.gl';
import { getUserLocation } from "../utils/geolocation";

interface UserLocation {
    lat: number;
    lng: number;
    name: string;
}

const World: React.FC = () => {
    const globeEl = useRef<GlobeMethods>();
    const [userLocation, setUserLocation] = useState<UserLocation | null>(null);

    useEffect(() => {
        if (globeEl.current) {
            // Point the globe to a default location
            globeEl.current.pointOfView({ altitude: 3.5 });
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

    return (
        <div>
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                backgroundColor="black"
                labelsData={userLocation ? [userLocation] : []}
                labelLat={(d: object) => (d as UserLocation).lat}
                labelLng={(d: object) => (d as UserLocation).lng}
                labelText={(d: object) => (d as UserLocation).name}
                labelSize={() => 1.5}
                labelDotRadius={() => 0.5}
                labelColor={() => 'rgba(255, 165, 0, 0.75)'}
                labelResolution={2}
            />
        </div>
    );
};

export default World;
