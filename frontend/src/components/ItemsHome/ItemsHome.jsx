import React from "react";

const ItemsHome = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center space-y-4 py-8">
      {/* <div className="w-full flex justify-center lg:justify-start items-center px-0 lg:px-[225px]">
        <h1 className="text-3xl text-center lg:text-left text-emerald-800 font-glacial-bold">- Nuestra Búsqueda.</h1>
      </div> */}
      <div className="w-full h-[120px] lg:h-[140px] flex flex-wrap justify-center items-start lg:items-center text-center py-4 gap-y-4 lg:gap-y-0 gap-x-4">
        <div className="w-[40%] lg:w-64 h-full flex justify-center items-center shadow-sm border-2 border-gray-200 bg-gray-100 rounded-xl transform-transition hover:bg-emerald-800 text-gray-800 hover:text-gray-200 duration-300">
          <h1 className="text-xl lg:text-3xl">Proyectos 100% Personalizados</h1> 
        </div>
        <div className="w-[40%] lg:w-64 h-full flex justify-center items-center shadow-sm border-2 border-gray-200 bg-gray-100 rounded-xl transform-transition hover:bg-emerald-800 text-gray-800 hover:text-gray-200 duration-300">
          <h1 className="text-xl lg:text-3xl">Comunicación</h1>
        </div>
        <div className="w-[40%] lg:w-64 h-full flex justify-center items-center shadow-sm border-2 border-gray-200 bg-gray-100 rounded-xl transform-transition hover:bg-emerald-800 text-gray-800 hover:text-gray-200 duration-300">
          <h1 className="text-xl lg:text-3xl">Los Detalles</h1>
        </div>
        <div className="w-[40%] lg:w-64 h-full flex justify-center items-center shadow-sm border-2 border-gray-200 bg-gray-100 rounded-xl transform-transition hover:bg-emerald-800 text-gray-800 hover:text-gray-200 duration-300">
          <h1 className="text-xl lg:text-3xl ">Entrega Exitosa</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemsHome;
