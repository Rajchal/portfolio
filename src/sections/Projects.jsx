import { useEffect, useState } from "react";
import { myProjects } from "../constants";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);

  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction, shouldPause = true) => {
    if (shouldPause) setIsAutoPaused(true);

    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    if (isAutoPaused) return;

    const intervalId = setInterval(() => {
      handleNavigation("next", false);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isAutoPaused]);

  const handleUserInteraction = () => setIsAutoPaused(true);

  return (
    <section className="c-space my-20  pt-20" id="work">
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-6 w-full">
        <div
          className="project-card"
          onPointerDown={handleUserInteraction}
          onFocus={handleUserInteraction}
        >
          <div className="absolute top-0 right-0 opacity-70 pointer-events-none">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
          <div className="project-card-header">
            <div
              className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
              style={currentProject.logoStyle}
            >
              <img
                src={currentProject.logo}
                alt="logo"
                className="w-10 h-10 shadow-sm"
              />
            </div>

            <div className="flex items-center gap-2 z-10">
              <div className="text-xs text-white-600 hidden sm:block">
                {String(selectedProjectIndex + 1).padStart(2, "0")} / {String(projectCount).padStart(2, "0")}
              </div>

              <button
                type="button"
                className="arrow-btn z-10"
                onClick={() => handleNavigation("previous")}
                aria-label="Previous project"
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/left-arrow.png`}
                  alt="left arrow"
                  className="w-4 h-4"
                />
              </button>
              <button
                type="button"
                className="arrow-btn z-10"
                onClick={() => handleNavigation("next")}
                aria-label="Next project"
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/right-arrow.png`}
                  alt="right arrow"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>

          <div key={`content-${selectedProjectIndex}`} className="project-content-animate">
            <div className="flex flex-col gap-4 text-white-600 my-3 z-10 relative">
              <h3 className="text-white text-2xl font-semibold leading-snug">
                {currentProject.title}
              </h3>
              <p className="text-base md:text-lg leading-relaxed">{currentProject.desc}</p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                {currentProject.subdesc}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5 pt-1 z-10 relative">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img
                src={`${import.meta.env.BASE_URL}assets/arrow-up.png`}
                className="w-3 h-3"
                alt="arrow"
              />
            </a>
          </div>

          <div className="project-progress">
            {myProjects.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Open project ${index + 1}`}
                onClick={() => {
                  handleUserInteraction();
                  setSelectedProjectIndex(index);
                }}
                className={`project-dot ${index === selectedProjectIndex ? "project-dot-active" : ""}`}
              />
            ))}
          </div>
        </div>

        <div
          className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full overflow-hidden"
          onPointerDown={handleUserInteraction}
        >
          <video
            key={currentProject.texture}
            className="w-full h-full rounded-lg object-cover project-content-animate"
            src={currentProject.texture}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
