import React from "react";
import logo from "../../assets/logo.png";
import img from "../../assets/5.jpg";
const FlyerAboutUs = () => {
  return (
    <div className="w-full flex flex-wrap justify-start items-center relative h-[50vh]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div className="w-full flex justify-center items-center z-10">
        <img src={logo} alt="logo" className="max-w-[200px]" />
      </div>
      <div className="z-10 w-full justify-start lg:px-10 xl:px-20">
        <h1 className="text-3xl text-left text-gray-300 font-semibold tracking-wide">- Procurando la Excelencia en el Diseño Arquitectónico.</h1>
      </div>
    </div>
  );
};

export default FlyerAboutUs;
