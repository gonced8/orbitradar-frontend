import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import { GlobeMethods } from 'react-globe.gl';

const World: React.FC = () => {
    const globeEl = useRef<GlobeMethods>();

    useEffect(() => {
        if (globeEl.current) {
            globeEl.current.pointOfView({ altitude: 3.5 });
        }
    }, []);

    return (
        <div>
            <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                backgroundColor="black"
            />
        </div>
    );
};

export default World;
