import React from "react";
import logo from "../../assets/logo.png";
import img from "../../assets/5.jpg";
import img2 from "../../assets/images/image14.png";
import img3 from "../../assets/images/image15.png";

const FlyerAboutUs = () => {
  return (
    <div className="w-full flex flex-wrap justify-start items-center relative h-[50vh]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div
        className="absolute block lg:hidden inset-0 z-0"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "100% 100%",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="absolute hidden lg:block inset-0 z-10"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "15%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "top 12% left 6%",
        }}
      ></div>
      <div
        className="absolute block lg:hidden  inset-0 z-10"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: "31%",
          backgroundRepeat: "no-repeat",

          backgroundPosition: "top 16% left 6%",
        }}
      ></div>
      {/* <div className="w-full flex justify-start items-center z-10">
        <img src={logo} alt="logo" className="max-w-[200px]" />
      </div> */}
      {/* <div className="z-10 w-full justify-start px-4 lg:px-10 xl:px-20">
        <h1 className="text-2xl lg:text-3xl text-left text-gray-300 font-semibold tracking-wide">- Procurando la Excelencia en el Diseño Arquitectónico.</h1>
      </div> */}
    </div>
  );
};

export default FlyerAboutUs;
