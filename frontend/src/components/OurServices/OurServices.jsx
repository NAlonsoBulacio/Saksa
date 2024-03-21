import React from "react";

const OurServices = () => {
  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector("h1").classList.add("opacity-100");
    e.currentTarget.querySelector("img").classList.add("brightness-[.3]");
    e.currentTarget.querySelector("img").classList.add("scale-110");
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector("h1").classList.remove("opacity-100");
    e.currentTarget.querySelector("img").classList.remove("brightness-[.3]");
    e.currentTarget.querySelector("img").classList.remove("scale-110");
  };
  return (
    <div className="w-full flex flex-wrap justify-center items-center space-y-6 py-12">
      <div className="w-full flex flex-wrap justify-center items-center space-y-3">
        <h1 className="w-full text-center text-3xl lg:text-4xl font-glacial-bold tracking-[0.2rem] text-green-800">
          NUESTROS SERVICIOS
        </h1>
        <div className="w-full flex justify-center ">
          <div className="w-1/5">
            <hr className=" border-[1.5px] border-green-800" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-between items-start py-3 px-0 lg:px-32">
        <div className="w-full lg:w-1/2 flex flex-wrap justify-start items-start space-y-8 py-2">
          <div
            href="/proyectos"
            className="w-full flex flex-wrap justify-start items-start h-auto "
          >
            <div className="flex flex-wrap w-full justify-start items-start ">
              <div className="w-full flex justify-start">
                <h1 className="text-center text-2xl lg:text-3xl font-bold text-gray-600">
                  - Proyectos de Arquitectura
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-start items-start h-auto ">
            <a href="/proyectos"></a>
            <div className="flex flex-wrap w-full justify-start items-start">
              <div className="w-full flex justify-start">
                <h1 className="text-left text-2xl lg:text-3xl font-bold text-gray-600">
                  - Dirección Técnica
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-start items-start h-auto ">
            <a href="/proyectos"></a>
            <div className="flex flex-wrap w-full justify-start items-start ">
              <div className="w-full flex justify-start">
                <h1 className="text-left  text-2xl lg:text-3xl font-bold text-gray-600">
                  - Estudios Preliminares
                </h1>
              </div>
            </div>
          </div>
          <a
            href="/proyectos"
            className="w-full flex flex-wrap justify-start items-start h-auto "
          >
            <div className="flex flex-wrap w-full justify-start items-start ">
              <div className="w-full flex justify-start">
                <h1 className="w-full text-left  text-2xl lg:text-3xl font-bold text-gray-600">
                  - Gerenciamiento de Obras
                </h1>
              </div>
            </div>
          </a>
          <a
            href="/servicios"
            className="bg-emerald-800 text-gray-100 py-2 px-3 rounded-md border-2 border-emerald-900 text-xl transform-translation hover:scale-110 duration-200"
          >
            Ver Más
          </a>
        </div>
        <div className="hidden w-1/2  lg:flex justify-center items-start">
          <img
          className="h-[500px]"
            src="https://behindpictures.com/wp-content/uploads/2023/09/QUANTUM-TRIBECA-9_00000-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
