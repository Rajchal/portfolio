import { useEffect, useState } from "react";
import { myProjects } from "../constants";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const [activePreviewImage, setActivePreviewImage] = useState(null);

  const currentProject = myProjects[selectedProjectIndex];
  const previewImages = currentProject.images?.length
    ? currentProject.images
    : [currentProject.spotlight];

  const getCollageClass = (count) => {
    if (count <= 1) return "project-collage-one";
    if (count === 2) return "project-collage-two";
    if (count === 3) return "project-collage-three";
    return "project-collage-many";
  };

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
    }, 1750);

    return () => clearInterval(intervalId);
  }, [isAutoPaused]);

  useEffect(() => {
    // Close any open lightbox image when the active project changes.
    setActivePreviewImage(null);
  }, [selectedProjectIndex]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActivePreviewImage(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleUserInteraction = () => setIsAutoPaused(true);

  return (
    <section className="c-space my-20  pt-20" id="work">
      <p className="head-text">My Work</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-6 w-full">
        <div
          className="project-card"
          onPointerDown={handleUserInteraction}
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
                className="project-auto-toggle"
                onPointerDown={(event) => event.stopPropagation()}
                onClick={(event) => {
                  event.stopPropagation();
                  setIsAutoPaused((prev) => !prev);
                }}
                aria-label={isAutoPaused ? "Resume autoplay" : "Pause autoplay"}
              >
                <span className="text-sm leading-none">{isAutoPaused ? "▶" : "❚❚"}</span>
              </button>

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

        <div className="project-preview" onPointerDown={handleUserInteraction}>
          <div
            key={`collage-${selectedProjectIndex}`}
            className={`project-collage ${getCollageClass(previewImages.length)} project-content-animate`}
          >
            {previewImages.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => {
                  handleUserInteraction();
                  setActivePreviewImage(image);
                }}
                className={`project-collage-item project-collage-item-${index + 1} cursor-zoom-in`}
                aria-label={`Open ${currentProject.title} image ${index + 1}`}
              >
                <img src={image} alt={`${currentProject.title} preview ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {activePreviewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 p-4 sm:p-8 flex items-center justify-center"
          onClick={() => setActivePreviewImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Project image preview"
        >
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/30 bg-black/40 text-white text-xl leading-none hover:bg-black/60"
            onClick={() => setActivePreviewImage(null)}
          >
            x
          </button>
          <img
            src={activePreviewImage}
            alt={`${currentProject.title} full preview`}
            className="max-w-full max-h-[85vh] w-auto h-auto rounded-xl border border-white/15 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
