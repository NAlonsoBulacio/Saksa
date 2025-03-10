import React, { useState, useEffect } from "react";
import "./ProjectsContainer.css";
import loading from "../../assets/loading/ripples.svg";
import compressImage from "../../utils/compressImage";

const ProjectsContainer = ({ projects }) => {
  const [localProjects, setLocalProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(10);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    setIsTransitioning(false);
  }, []);

  useEffect(() => {
    setIsTransitioning(true);
    const timeoutId = setTimeout(() => {
      if (projects !== "null") {
        const shuffledProjects = shuffleArray(projects);
        setLocalProjects(shuffledProjects);
        setIsTransitioning(false);
      }
    }, 1100);
    return () => clearTimeout(timeoutId);
  }, [projects]);

  const shuffleArray = (array) => {
    let newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

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

  const handleShowMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 10);
  };

  return (
    <div className="w-full flex flex-wrap justify-center items-center space-y-10 mb-6 lg:mb-20">
      {localProjects.length ? (
        <>
          <div className="w-full columns-1 gap-4 lg:gap-4 sm:columns-2 lg:columns-3 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-6">
            {localProjects?.slice(0, visibleProjects).map((project, index) => (
              <div key={project.id}>
                <a href={`/proyecto/${project.id}`}>
                  <div
                    className={`w-auto h-auto border-2 border-gray-400 rounded-xl relative overflow-hidden cursor-pointer transition-opacity duration-500 ${
                      isTransitioning ? "opacity-0" : "opacity-100"
                    }`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      src={compressImage(project.img)}
                      alt={`Chat ${index}`}
                      className="w-full h-auto hover:scale-110 transition duration-700 shadow-2xl hover:brightness-30"
                    />
                    <h1 className="absolute right-3 bottom-3 opacity-0  transition duration-700 text-white flex justify-center items-center text-2xl">
                      {project.name}
                    </h1>
                  </div>
                </a>
              </div>
            ))}
          </div>
          {visibleProjects < localProjects.length && (
            <button
              onClick={handleShowMore}
              className="mt-10 bg-[#0c6464] text-white px-4 py-2 rounded"
            >
              Mostrar más
            </button>
          )}
        </>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <img className="w-[200px]" src={loading} alt="" />
        </div>
      )}
    </div>
  );
};

export default ProjectsContainer;
