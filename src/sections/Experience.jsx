import { Suspense, useState, memo, lazy } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import CanvasLoader from "../components/CanvasLoader.jsx";
import { workExperiences } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";
import useInView from "../hooks/useInView";

const Developer = lazy(() => import("../components/Developer.jsx"));
const MemoizedDeveloper = memo(Developer);
const MemoizedCanvasLoader = memo(CanvasLoader);

const WorkExperience = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const [animationName, setAnimationName] = useState("idle");
  const { ref: sectionRef, isInView } = useInView({ rootMargin: "250px" });

  return (
    <section ref={sectionRef} className="c-space my-20" id="experience">
      <div className="w-full text-white-600">
        <h3 className="head-text pt-20">My Work Experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            {isInView ? (
              <Canvas dpr={[1, 1.5]}>
                <Suspense fallback={<MemoizedCanvasLoader />}>
                  <ambientLight intensity={0.8} />
                  <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                  />
                  <directionalLight position={[10, 10, 10]} intensity={1} />
                  <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                  <MemoizedDeveloper
                    position-y={-3}
                    scale={3}
                    animationName={isSmall ? "idle" : animationName}
                  />
                </Suspense>
              </Canvas>
            ) : null}
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() =>
                    setAnimationName(item.animation.toLowerCase())
                  }
                  onPointerOut={() => setAnimationName("idle")}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
