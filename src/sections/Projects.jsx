import { useState } from "react";
import { myProjects } from "../constants";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const currentProject = myProjects[selectedProjectIndex];
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };
  return (
    <section className="c-space my-20  pt-20" id="work">
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-sxl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div className="flex justify-between">
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
            <div className="flex">
              <button
                className="arrow-btn z-10"
                onClick={() => handleNavigation("previous")}
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/left-arrow.png`}
                  alt="left arrow"
                  className="w-4 h-4"
                />
              </button>
              <button
                className="arrow-btn z-10"
                onClick={() => handleNavigation("next")}
              >
                <img
                  src={`${import.meta.env.BASE_URL}assets/right-arrow.png`}
                  alt="right arrow"
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <div className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
              <p className="animatedText">{currentProject.desc}</p>
              <p className="pt-3 text-xl text-gray-400">
                {currentProject.subdesc}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
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
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <video
            key={currentProject.texture}
            className="w-full h-full rounded-lg object-cover"
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
