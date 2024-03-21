import React from "react";
import ogl from "../../assets/ogl.png";
import valk from "../../assets/valk.png";
import synagro from "../../assets/synagro.png";
import agefit from "../../assets/agefit.svg";
const Proveedores = () => {
  const clients = [
    ogl,
    "https://sustentacorp.com/wp-content/uploads/2023/08/ose.png",
    valk,
    synagro,
    agefit,
  ];

  return (
    <div className="flex flex-wrap justify-center items-center py-6 lg:py-12">
      <div className="w-full flex justify-center items-center ">
        <h1 className="text-gray-800 text-center lg:text-left text-xl lg:text-2xl font-barlow-400 tracking-[0.3rem]">
          REFERENTES COMERCIALES{" "}
        </h1>
      </div>
      {/* <div className="w-full flex justify-center ">
        <div className="w-1/5">
          <hr className="my-2 border-[1.5px] border-emerald-600" />
        </div>
      </div> */}
      <ul className="flex flex-wrap justify-center items-center py-4 px-0 lg:px-0 xl:px-20 space-x-8">
        {clients?.map((client, index) => (
          <li key={index} className="w-1/3 lg:w-1/6">
            <img src={client} alt="img-client" className="w-full lg:w-2/3" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Proveedores;
