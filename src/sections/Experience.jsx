import { useState } from "react";

import { workExperiences } from "../constants/index.js";

const WorkExperience = () => {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const selectedExperience = workExperiences[selectedExperienceIndex];

  return (
    <section className="c-space my-20" id="experience">
      <div className="w-full text-white-600">
        <h3 className="head-text pt-20">My Work Experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            <div className="w-full h-full rounded-2xl bg-black-200 border border-black-300 flex items-center justify-center p-8">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-20 h-20 rounded-xl bg-black-300 p-4">
                  <img
                    className="w-full h-full object-contain"
                    src={selectedExperience.icon}
                    alt={selectedExperience.name}
                  />
                </div>
                <p className="text-white-800 font-semibold text-xl">
                  {selectedExperience.name}
                </p>
                <p className="text-white-600 text-sm">
                  {selectedExperience.pos} — {selectedExperience.duration}
                </p>
              </div>
            </div>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedExperienceIndex(index)}
                  onPointerOver={() => setSelectedExperienceIndex(index)}
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
