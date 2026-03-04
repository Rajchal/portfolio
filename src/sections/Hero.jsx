import { Suspense, memo, lazy, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import PropTypes from "prop-types";

// import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const HackerRoom = lazy(() => import("../components/HackerRoom"));
const ReactLogo = lazy(() => import("../components/K8s"));
const Cube = lazy(() => import("../components/Cube"));
const Rings = lazy(() => import("../components/Rings"));
const Target = lazy(() => import("../components/Rust"));
const Next = lazy(() => import("../components/Aws"));
const HackerRooMemo = memo(HackerRoom);
const MemoizedCanvasLoader = memo(CanvasLoader);
const MemoizedHackerRoom = ({ position, rotation, scale, onRendered }) => {
  useEffect(() => {
    if (onRendered) {
      onRendered();
    }
  }, [onRendered]);

  return (
    <HackerRooMemo position={position} rotation={rotation} scale={scale} />
  );
};

MemoizedHackerRoom.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
  scale: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]).isRequired,
  onRendered: PropTypes.func,
};

MemoizedHackerRoom.defaultProps = {
  onRendered: undefined,
};

const Hero = () => {
  // const x = useControls("HackerRoom", {
  //   positionX: { value: 2.5, min: -10, max: 10 },
  //   positionY: { value: 2.5, min: -20, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 10 },
  //   rotationX: { value: 2.5, min: -10, max: 10 },
  //   rotationY: { value: 2.5, min: -10, max: 10 },
  //   rotationZ: { value: 2.5, min: -10, max: 10 },
  //   scale: { value: 0.07, min: 0.01, max: 10 },
  // });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ minWidth: 440, maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isAwk = useMediaQuery({ minWidth: 1024, maxWidth: 1074 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet, isAwk);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isRendered) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isRendered]);
  const poppy = isRendered ? "" : "hidden";
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10 pointer-events-none">
        <h1 className="sm:text-2xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Anjal <span className="waving-hand">👋</span>{" "}
        </h1>
        <h2 className="hero_tag text-gray_gradient text-center">
          DevOps & Web3 Infrastructure Engineer
        </h2>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas
          className="w-full h-full"
          shadows
          dpr={[1, 1.5]}
          gl={{ antialias: false, powerPreference: "high-performance" }}
        >
          <Suspense fallback={<MemoizedCanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isSmall}>
              {" "}
              <MemoizedHackerRoom
                position={sizes.deskPosition}
                rotation={[-9.5, 3.9, 3.1]}
                scale={sizes.deskScale}
                onRendered={() => setIsRendered(true)}
              />
            </HeroCamera>

            <group scale={isMobile || isSmall ? 0.5 : 1}>
              <Target
                position={[
                  sizes.targetPosition[0] + 20,
                  sizes.targetPosition[1] + 11,
                  sizes.targetPosition[2],
                ]}
                rotation={[-0.5, 4.2, 6.2]}
                scale={0.8}
              />
              <ReactLogo
                position={sizes.reactLogoPosition}
                rotation={[-0.5, 5.3, 0]}
                scale={24}
              />
              <Cube
                position={sizes.cubePosition}
                rotation={[0.5, -0.3, -0.4]}
                isMob={isMobile}
              />
              <Rings position={sizes.ringPosition} />
              <Next
                position={[
                  sizes.nextPosition[0] - 20,
                  sizes.nextPosition[1] - 6.5,
                  sizes.nextPosition[2],
                ]}
              />
            </group>

            <ambientLight intensity={1.1} />
            <directionalLight position={[0, 10, 0]} intensity={3} />

          </Suspense>
        </Canvas>
      </div>
      <div
        className={`absolute bottom-7 left-0 right-0 w-full z-10 c-space ${poppy}`}
      >
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
