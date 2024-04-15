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
        <div className="w-full lg:w-[47%] flex flex-wrap justify-center items-start text-center lg:text-left text-xl font-barlow-400 text-gray-800 px-0 lg:px-12 space-y-4">
          <div className="w-full">
            <h1 className="tracking-[0.3rem] text-gray-500 text-2xl lg:text-4xl">
              saksa/arquitectura
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
            Ubicados en el corazón del norte argentino, en Tucumán, rodeados de la vibrante identidad latinoamericana, nos enorgullece ofrecer una amplia trayectoria en el mundo de la arquitectura y el diseño. En nuestro estudio, fusionamos la riqueza de nuestra cultura con la excelencia profesional para ofrecer proyectos únicos y funcionales. Desde arquitectura comercial hasta residencial, pasando por espacios dedicados a la salud y el bienestar, abordamos cada proyecto con pasión y compromiso.
            </p>
          </div>

          <div className="text-left w-full">
            <p>
            Nos especializamos en llevar tus ideas del papel a la realidad, brindando servicios que van desde la concepción del proyecto hasta su dirección técnica y gerenciamiento de obras. Valoramos profundamente el contexto y la identidad de cada lugar, asegurando que nuestras obras respeten y enriquezcan su entorno.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
