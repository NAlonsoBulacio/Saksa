import React, { useState, useEffect } from "react";
import "./ProjectsContainer.css";
const ProjectsType = ({ projects }) => {
  const [localProjects, setLocalProjects] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setIsTransitioning(false);
  }, []);

  useEffect(() => {
    setIsTransitioning(true);
    const timeoutId = setTimeout(() => {
      setLocalProjects(projects);
      setIsTransitioning(false);
    }, 700);
    return () => clearTimeout(timeoutId);
  }, [projects]);

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector("h1").classList.add("opacity-100");
    e.currentTarget.querySelector("img").classList.add("brightness-50");
    e.currentTarget.querySelector("img").classList.add("scale-110");
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector("h1").classList.remove("opacity-100");
    e.currentTarget.querySelector("img").classList.remove("brightness-50");
    e.currentTarget.querySelector("img").classList.remove("scale-110");
  };

  return (
    <div className="flex flex-wrap justify-center items-center space-y-10">
      {localProjects ? (
        <div className="w-full columns-1 gap-4 lg:gap-4 sm:columns-2 lg:columns-3 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-6">
          {localProjects?.map((project, index) => (
            <div
              className={`w-auto h-auto border-2 border-gray-400 rounded-xl relative overflow-hidden cursor-pointer transition-opacity duration-500 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={project.img}
                alt={`Chat ${index}`}
                className="w-full h-auto hover:scale-110 transition duration-700 shadow-2xl hover:brightness-50"
              />
              <h1 className="absolute inset-0 opacity-0  transition duration-700 text-white flex justify-center items-center text-2xl">
                {project.name}
              </h1>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProjectsType;
