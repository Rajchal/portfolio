import { useEffect, useMemo, useRef, useState } from "react";
import Globe from "react-globe.gl";

const CollaborationGlobe = () => {
    const wrapperRef = useRef(null);
    const globeRef = useRef(null);
    const hasFocusedNepal = useRef(false);
    const [size, setSize] = useState({ width: 320, height: 320 });

    const pointsData = useMemo(
        () => [
            { lat: 27.7172, lng: 85.324, size: 1.0 }, // Kathmandu
            { lat: 51.5072, lng: -0.1276, size: 0.7 }, // London
            { lat: 37.7749, lng: -122.4194, size: 0.7 }, // San Francisco
            { lat: 40.7128, lng: -74.006, size: 0.72 }, // New York
            { lat: 47.6062, lng: -122.3321, size: 0.68 }, // Seattle
            { lat: 43.6532, lng: -79.3832, size: 0.68 }, // Toronto
            { lat: -33.8688, lng: 151.2093, size: 0.72 }, // Sydney
            { lat: -37.8136, lng: 144.9631, size: 0.68 }, // Melbourne
            { lat: 52.52, lng: 13.405, size: 0.68 }, // Berlin
            { lat: 25.2048, lng: 55.2708, size: 0.68 }, // Dubai
            { lat: 1.3521, lng: 103.8198, size: 0.7 }, // Singapore
        ],
        []
    );

    const arcsData = useMemo(
        () => [
            {
                startLat: 27.7172,
                startLng: 85.324,
                endLat: 51.5072,
                endLng: -0.1276,
            },
            {
                startLat: 27.7172,
                startLng: 85.324,
                endLat: 37.7749,
                endLng: -122.4194,
            },
            {
                startLat: 27.7172,
                startLng: 85.324,
                endLat: 1.3521,
                endLng: 103.8198,
            },
            {
                startLat: 27.7172,
                startLng: 85.324,
                endLat: 40.7128,
                endLng: -74.006,
            },
            {
                startLat: 27.7172,
                startLng: 85.324,
                endLat: 47.6062,
                endLng: -122.3321,
            },
            {
                startLat: 27.7172,
                startLng: 85.324,
                endLat: 43.6532,
                endLng: -79.3832,
            },
            {
                startLat: 27.7172,
                startLng: 85.324,
                endLat: -33.8688,
                endLng: 151.2093,
            },
            {
                startLat: 27.7172,
                startLng: 85.324,
                endLat: -37.8136,
                endLng: 144.9631,
            },
            {
                startLat: 27.7172,
                startLng: 85.324,
                endLat: 52.52,
                endLng: 13.405,
            },
            {
                startLat: 27.7172,
                startLng: 85.324,
                endLat: 25.2048,
                endLng: 55.2708,
            },
        ],
        []
    );

    const labelsData = useMemo(
        () => [
            {
                lat: 27.7172,
                lng: 85.324,
                text: "I'm here - Nepal",
            },
        ],
        []
    );

    useEffect(() => {
        const node = wrapperRef.current;
        if (!node || typeof ResizeObserver === "undefined") {
            return undefined;
        }

        const updateSize = () => {
            const width = Math.max(220, Math.floor(node.clientWidth));
            setSize({ width, height: Math.floor(width * 0.92) });
        };

        updateSize();
        const observer = new ResizeObserver(updateSize);
        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const globe = globeRef.current;
        const node = wrapperRef.current;
        if (!globe || !node) {
            return;
        }

        const controls = globe.controls();
        controls.autoRotate = false;
        controls.enableZoom = true;
        controls.enablePan = false;
        controls.enableRotate = true;
        controls.rotateSpeed = 0.7;
        controls.enableDamping = true;
        controls.dampingFactor = 0.08;

        // Keep initial view at the back side until the section is actually scrolled into view.
        globe.pointOfView({ lat: -22, lng: -100, altitude: 2.45 }, 0);

        if (typeof IntersectionObserver === "undefined") {
            globe.pointOfView({ lat: 27.7, lng: 85.32, altitude: 2.2 }, 2400);
            hasFocusedNepal.current = true;
            return;
        }

        const viewObserver = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || hasFocusedNepal.current) {
                    return;
                }

                globe.pointOfView({ lat: 27.7, lng: 85.32, altitude: 2.2 }, 2400);
                hasFocusedNepal.current = true;
            },
            { threshold: 0.45 }
        );

        viewObserver.observe(node);

        return () => viewObserver.disconnect();
    }, []);

    return (
        <div ref={wrapperRef} className="about-globe-canvas">
            <Globe
                ref={globeRef}
                width={size.width}
                height={size.height}
                backgroundColor="rgba(0, 0, 0, 0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                pointsData={pointsData}
                pointLat="lat"
                pointLng="lng"
                pointAltitude={0.05}
                pointRadius="size"
                pointColor={() => "#b9ddff"}
                labelsData={labelsData}
                labelText="text"
                labelSize={1.7}
                labelDotRadius={0.45}
                labelAltitude={0.08}
                labelColor={() => "#e8f4ff"}
                minZoom={1.8}
                maxZoom={3.1}
                arcsData={arcsData}
                arcColor={() => ["#8ff3ff", "#8ab4ff"]}
                arcStroke={0.35}
                arcAltitude={0.18}
                arcDashLength={0.65}
                arcDashGap={0.35}
                arcDashAnimateTime={3200}
            />
        </div>
    );
};

export default CollaborationGlobe;
