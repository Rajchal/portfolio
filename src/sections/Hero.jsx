import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "/src/components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
const Hero = () => {
  // const x = useControls("HackerRoom", {
  //   positionX: { value: 2.5, min: -10, max: 10 },
  //   positionY: { value: 2.5, min: -20, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 10 },
  //   rotationX: { value: 2.5, min: -10, max: 10 },
  //   rotationY: { value: 2.5, min: -10, max: 10 },
  //   rotationZ: { value: 2.5, min: -10, max: 10 },
  //   scale: { value: 0.07, min: 0.01, max: 0.1 },
  // });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ minWidth: 440, maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen border-2 border-blue-500 w-full flex flex-xol relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Anjal <span className="waving-hand">👋</span>{" "}
        </p>
        <p className="hero_tag text-gray_gradient text-center">
          Turning Ideas into Interactive Experiences
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HackerRoom
              position={sizes.deskPosition}
              rotation={[3.3, 2.7, 3.15]}
              scale={sizes.deskScale}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
