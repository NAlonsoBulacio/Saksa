import React, { useState } from "react";
import arrowdown from "../../assets/arrow-down.svg";
import "./Ant.css";
const Ant = ({ hormiga }) => {
  const [openDiv, setOpenDiv] = useState(false);

  const handleOpenDiv = () => {
    setOpenDiv(!openDiv);
  };
  return (
    <div className="flex flex-wrap justify-center items-start space-y-8 py-8">
      <div className="w-full flex flex-wrap justify-center items-start space-y-2 lg:space-y-4">
        <h1 className="w-full text-center text-3xl lg:text-5xl font-glacial-bold text-green-800">
          NUESTRA INSPIRACIÓN
        </h1>

      </div>
      <div className="w-full flex justify-center items-start">
        <img
          src={hormiga}
          alt="hormiga"
          className="w-48 lg:w-64 cursor-pointer -rotate-6"
          onClick={() => handleOpenDiv()}
        />
      </div>
      <div
        className={` w-auto flex justify-between lg:justify-center flex-wrap items-start text-left overflow-hidden  transition-transform duration-500 ease-in-out px-2 lg:px-0`}
      >
        <div
          className={`antDiv ${
            openDiv ? "show" : ""
          } justify-center flex-wrap items-start text-left flex w-[93%] lg:w-[60%] space-y-4 border-b-2 border-emerald-800 cursor-pointer text-lg lg:text-xl text-gray-800`}
          onClick={() => handleOpenDiv()}
        >
          <p className="w-full   ">
          La imagen de la hormiga está llena de simbolismos que reflejan nuestra visión en el mundo de la arquitectura. Vemos las ciudades como parte de la naturaleza, como si fueran hormigueros gigantes, esta perspectiva nos recuerda que somos parte de un mundo más grande y nos motiva a construir de manera consciente, cuidando nuestro hogar natural.

          </p>
          <p className="w-full">
          El trabajo en equipo para la creación colectiva de algo más grande nos inspira. La capacidad de las hormigas para cargar varias veces su propio peso es un recordatorio del compromiso con el bien común. 

          </p>
          <p className="w-full">
          Las hormigas también nos enseñan mucho sobre diseño ecológico. Son expertas en adaptarse al entorno y construir de manera sostenible. Esta dualidad entre lo natural y lo artificial nos desafía a pensar en cómo nuestras obras pueden integrarse armoniosamente en el paisaje.
          </p>
        </div>
        <div
          className={`w-auto flex items-start justify-center cursor-pointer antDiv ${
            openDiv ? "show" : ""
          }  border-b-2 border-emerald-800`}
          onClick={() => handleOpenDiv()}
        >
          <img
            src={arrowdown}
            alt="arrow"
            className={`${
              openDiv ? "rotate-180" : "rotate-0"
            } w-6 transition-transform duration-500 ease-in-out`}
          />
        </div>
      </div>
    </div>
  );
};

export default Ant;
