import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import arrowdown from "../../assets/arrow-down.svg";
import "./Ant.css";
const Ant = ({ hormiga }) => {
  const [openDiv, setOpenDiv] = useState(false);

  const handleOpenDiv = () => {
    setOpenDiv(!openDiv);
  };
  return (
    <div className="flex flex-wrap justify-center items-start space-y-8 py-8">
      <div className="w-full flex justify-center items-start">
        <h1 className="w-full text-center text-5xl font-bold text-green-800">
          NUESTRA MARCA
        </h1>
      </div>
      <div className="w-full flex justify-center items-start">
        <img src={hormiga} alt="hormiga" className="w-64 cursor-pointer" 
        onClick={() => handleOpenDiv()}
        />
      </div>
      <div
        className={` w-auto flex justify-center flex-wrap items-start text-left overflow-hidden  transition-transform duration-500 ease-in-out`}
      >
        <div
          className={`antDiv ${
            openDiv ? "show" : ""
          } justify-center flex-wrap items-start text-left flex w-2/3 space-y-4 border-b-2 border-gray-400 cursor-pointer text-xl text-gray-800`}
          onClick={() => handleOpenDiv()}
        >
          <p className="w-full   ">
            La imagen de la hormiga se fundamenta en varios aspectos simbólicos.
          </p>
          <p className="w-full">
            En primer lugar, la percepción de las ciudades como construcciones
            naturales, similares a los hormigueros o madrigueras, sugiere que
            los humanos somos constructores naturales, conscientes de nuestro
            entorno como parte de un todo natural. Esta idea nos responsabiliza
            de cuidar nuestro hábitat y nos conecta con la naturaleza.
          </p>
          <p className="w-full">
            Además, la labor colaborativa de las hormigas destaca la importancia
            del trabajo en comunidad y la creación colectiva. Su organización y
            eficiencia son símbolos de orden e inteligencia, mientras que su
            capacidad para cargar varias veces su peso muestra su compromiso con
            el bien común.
          </p>
          <p className="w-full">
            Las hormigas también destacan por su impacto en el paisaje de manera
            ecológica, siendo hábiles diseñadoras y constructoras. Esta dualidad
            entre lo natural y lo artificial plantea una interesante dicotomía
            en nuestra percepción del entorno.
          </p>
        </div>
        <div
          className={`w-auto flex items-start justify-center cursor-pointer antDiv ${
            openDiv ? "show" : ""
          }  border-b-2 border-gray-400`}
          onClick={() => handleOpenDiv()}
        >
          <img
            src={arrowdown}
            alt="arrow"
            className={`${
              openDiv ? "rotate-180" : "rotate-0"
            } w-8 transition-transform duration-500 ease-in-out`}
          />
        </div>
      </div>
    </div>
  );
};

export default Ant;
