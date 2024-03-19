import React from "react";

const WhoAreWe = ({ img }) => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center ">
      <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-4 my-10">
        <div className="hidden lg:block w-full lg:w-1/2 h-80 overflow-hidden rounded-lg">
          <img
            src={img}
            alt=""
            className="h-full object-cover object-center "
          />
        </div>
        <div className="w-full lg:w-[47%] flex flex-wrap justify-center items-start text-left text-xl font-barlow-400 text-gray-800 px-0 lg:px-12 space-y-4">
          <div className="w-full">
            <h1 className="tracking-[0.3rem] text-gray-500 text-xl lg:text-2xl">
              SAKSA ARQUITECTURA
            </h1>
          </div>
          <img
            src={img}
            alt=""
            className="lg:hidden h-full object-cover object-center "
          />
          <div className="w-full">
            <p className="text-left text-4xl font-bold text-green-800">
              ¿Quienes Somos?
            </p>
          </div>
          <div className="w-full">
            <p className="text-left text-gray-700">
              Somos un estudio con 30 años de trayectoria de labor profesional
              en Arquitectura, brinda servicios en Tucumán, y Provincias del
              Norte del País, como en Ciudades del Sur de Brasil.
            </p>
          </div>

          <div className="w-full">
            <p>
              Realiza específicamente Proyectos de Arquitectura, Dirección
              Técnica, Conducción y Gerenciamiento de Obras.
            </p>
          </div>
          <div className="w-full">
            <p>
              Contando con experiencia en Arquitectura Comercial, Habitacional,
              para la Salud y la Administración.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
