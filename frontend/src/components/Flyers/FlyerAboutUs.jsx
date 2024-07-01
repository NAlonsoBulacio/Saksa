import React from "react";
import logo from "../../assets/logo.png";
import { banner, banner2 } from "../../assets";
const FlyerAboutUs = () => {
  return (
    <div className="w-full flex flex-wrap justify-start items-center relative h-[40vh] lg:h-[50vh]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      ></div>
      <div
        className="absolute block lg:hidden inset-0 z-0"
        style={{
          backgroundImage: `url(${banner2})`,
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
    </div>
  );
};

export default FlyerAboutUs;
