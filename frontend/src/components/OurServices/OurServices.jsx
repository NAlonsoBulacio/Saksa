import React from "react";
import servicesImage from "../../assets/images/image4.png";
const OurServices = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center space-y-6 py-4 lg:py-12">
      <div className="w-full flex flex-wrap justify-center items-center space-y-3">
        <h1 className="w-full text-center text-3xl lg:text-4xl font-glacial-bold tracking-[0.2rem] text-[#0c6464]">
          NUESTROS SERVICIOS
        </h1>
        <div className="w-full flex justify-center ">
          <div className="w-1/5">
            <hr className=" border-[1.5px] border-[#0c6464]" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-between items-start py-3 px-0 lg:px-32">
        <div className="w-full lg:w-1/2 flex flex-wrap justify-center lg:justify-start items-start space-y-8 py-2">
          <div
            href="/proyectos"
            className="w-full flex flex-wrap justify-start items-start h-auto "
          >
            <div className="flex flex-wrap w-full justify-start items-start ">
              <div className="w-full flex justify-start">
                <h1 className="text-center text-2xl lg:text-3xl font-bold text-gray-700">
                  - Proyectos de Arquitectura
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-start items-start h-auto ">
            <div className="flex flex-wrap w-full justify-start items-start">
              <a href="/proyectos">
                <h1 className="text-left text-2xl lg:text-3xl font-bold text-gray-700">
                  - Dirección Técnica
                </h1>
              </a>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-start items-start h-auto ">
            <div className="flex flex-wrap w-full justify-start items-start ">
              <a href="/proyectos" className="w-auto flex justify-start">
                <h1 className="text-left  text-2xl lg:text-3xl font-bold text-gray-700">
                  - Estudios Preliminares
                </h1>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap w-full justify-start items-start ">
            <a href="/proyectos" className="w-auto flex justify-start">
              <h1 className="w-full text-left  text-2xl lg:text-3xl font-bold text-gray-700">
                - Gerenciamiento de Obras
              </h1>
            </a>
          </div>
          <a
            href="/servicios"
            className="bg-[#0c6464] text-gray-100 py-2 px-3 rounded-md border-2 border-emerald-900 text-xl transform-translation hover:scale-110 duration-200"
          >
            Ver Más
          </a>
        </div>
        <div className="hidden w-1/2  lg:flex justify-center items-start">
          <img
            className="h-auto"
            src={servicesImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
