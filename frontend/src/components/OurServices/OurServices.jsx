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
        <h1 className="w-full text-center text-4xl font-glacial-bold tracking-[0.2rem] text-green-800">
          NUESTROS SERVICIOS
        </h1>
        <div className="w-full flex justify-center ">
          <div className="w-1/5">
            <hr className=" border-[1.5px] border-green-800" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center">
        <a
          href="/proyectos"
          className="w-full lg:w-1/3 flex flex-wrap justify-center items-start h-auto space-y-3"
        >
          <div
            className="relative cursor-pointer overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="w-full object-cover object-center hover:scale-110 transition duration-700 shadow-2xl "
              src="https://static.wixstatic.com/media/d9faadd5288644d8b9bb8a53d6a17e6c.jpg/v1/fill/w_656,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Plan%20de%20la%20construcci%C3%B3n%20II.jpg"
              alt=""
            />
            <h1 className="absolute inset-0 opacity-0  transition duration-700 text-white flex justify-center items-center text-2xl">
              Proyectos de Arquitectura
            </h1>
          </div>
          <div className="flex flex-wrap h-36 w-full justify-center items-start space-y-4">
            <div className="w-full flex justify-center">
              <h1 className="text-center text-3xl font-bold text-gray-700">
                Proyectos de Arquitectura
              </h1>
            </div>
            <a
              href="/proyectos"
              className="bg-emerald-800 text-gray-100 py-2 px-3 rounded-md border-2 border-emerald-900 text-xl transform-translation hover:scale-110 duration-200"
            >
              Ver Más
            </a>
          </div>
        </a>
        <a
          href="/proyectos"
          className="w-full lg:w-1/3 flex flex-wrap justify-center items-start h-auto space-y-3"
        >
          <div
            className="relative cursor-pointer overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="w-full object-cover object-center hover:scale-110 transition duration-700 shadow-2xl hover:brightness-50"
              src="https://static.wixstatic.com/media/nsplsh_347a776f7a517844624434~mv2_d_4981_3320_s_4_2.jpg/v1/fill/w_656,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Guilherme%20%20Cunha.jpg"
              alt=""
            />
            <h1 className="absolute inset-0 opacity-0  transition duration-700 text-white flex justify-center items-center text-2xl">
              Dirección Técnica
            </h1>
          </div>
          <div className="flex flex-wrap h-36 w-full justify-center items-start space-y-4">
            <div className="w-full flex justify-center">
              <h1 className="text-center text-3xl font-bold text-gray-700">
                Dirección Técnica
              </h1>
            </div>
            <a
              href="/proyectos"
              className="bg-emerald-800 text-gray-100 py-2 px-3 rounded-md border-2 border-emerald-900 text-xl transform-translation hover:scale-110 duration-200"
            >
              Ver Más
            </a>
          </div>
        </a>
        <a
          href="/proyectos"
          className="w-full lg:w-1/3 flex flex-wrap justify-center items-start h-auto space-y-3"
        >
          <div
            className="relative cursor-pointer overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="w-full object-cover object-center hover:scale-110 transition duration-700 shadow-2xl hover:brightness-50"
              src="https://static.wixstatic.com/media/nsplsh_2a95c67e90b4478a856fc7d41736cbbe~mv2.jpg/v1/fill/w_656,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Pedro%20Miranda.jpg"
              alt=""
            />
            <h1 className="absolute inset-0 opacity-0  transition duration-700 text-white flex justify-center items-center text-2xl">
              Conducción y Gerenciamiento de Obras
            </h1>
          </div>
          <div className="flex flex-wrap h-36 w-full justify-center items-start space-y-4">
            <h1 className="text-center text-3xl font-bold text-gray-700">
              Conducción y Gerenciamiento de Obras
            </h1>
            <a
              href="/proyectos"
              className="bg-emerald-800 text-gray-100 py-2 px-3 rounded-md border-2 border-emerald-900 text-xl transform-translation hover:scale-110 duration-200"
            >
              Ver Más
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default OurServices;
