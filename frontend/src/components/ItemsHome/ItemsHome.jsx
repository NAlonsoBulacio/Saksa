import React from "react";

const ItemsHome = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center space-y-4">
      <div className="w-full flex justify-start items-center px-[225px]">
        <h1 className="text-3xl text-left text-emerald-800 font-glacial-bold">- Nuestra Búsqueda.</h1>
      </div>
      <div className="w-full h-[140px] flex justify-center items-center text-center py-4 space-x-4">
        <div className="w-64 h-full flex justify-center items-center shadow-sm border-2 border-gray-200 bg-white rounded-xl transform-transition hover:bg-emerald-800 text-gray-800 hover:text-gray-200 duration-300">
          <h1 className="text-3xl">Proyectos 100% Personalizados</h1>
        </div>
        <div className="w-64 h-full flex justify-center items-center shadow-sm border-2 border-gray-200 bg-white rounded-xl transform-transition hover:bg-emerald-800 text-gray-800 hover:text-gray-200 duration-300">
          <h1 className="text-3xl">Comunicación</h1>
        </div>
        <div className="w-64 h-full flex justify-center items-center shadow-sm border-2 border-gray-200 bg-white rounded-xl transform-transition hover:bg-emerald-800 text-gray-800 hover:text-gray-200 duration-300">
          <h1 className="text-3xl">Los Detalles</h1>
        </div>
        <div className="w-64 h-full flex justify-center items-center shadow-sm border-2 border-gray-200 bg-white rounded-xl transform-transition hover:bg-emerald-800 text-gray-800 hover:text-gray-200 duration-300">
          <h1 className="text-3xl ">Entrega Exitosa</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemsHome;
