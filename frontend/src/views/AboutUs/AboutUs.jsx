import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import img from "../../assets/1.jpg";
import WhoAreWe from "../../components/WhoAreWe/WhoAreWe";
import hormiga from "../../assets/hormiga-negra.png";
import Ant from "../../components/Ant/Ant";
import FlyerAboutUs from "../../components/Flyers/FlyerAboutUs";
import ContactUs from "../../components/ContactUs/ContactUs";
import ItemsHome from "../../components/ItemsHome/ItemsHome";
import perfil from "../../assets/perfil.png";
import LogoCarousel from "../../components/LogoCarousel/LogoCarousel";
import { logoClientes } from "../../assets/logosClientes";
import { logoRef } from "../../assets/logosRefComerciales";
const AboutUs = () => {
  return (
    <div className="">
      <FlyerAboutUs />
      <div className="py-6 lg:py-12 bg-gray-100 px-2 lg:px-10 xl:px-32">
        <div className=" bg-gray-100">
          <WhoAreWe img={img} />
          <Ant hormiga={hormiga} />
          <img className="rounded-xl" src={perfil} alt="" />
        </div>
        <div className="pb-20 space-y-20 pt-16 bg-gray-100">
          <ItemsHome />
          <LogoCarousel logos={logoClientes} title={"CONFIARON EN NOSOTROS"} />
          <LogoCarousel logos={logoRef} title={"REFERENCIAS COMERCIALES"} />
          <ContactUs />
        </div>
      </div>
      <NavBar />
      <Footer />
    </div>
  );
};

export default AboutUs;
