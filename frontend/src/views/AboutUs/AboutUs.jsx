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
import img3 from "../../assets/fondo.png";

const AboutUs = () => {
  return (
    <div className="">
      <FlyerAboutUs />
      <div
        className="py-6 lg:py-12 px-2 lg:px-10 xl:px-32"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div>
          <WhoAreWe img={img} />
          <Ant hormiga={hormiga} />
          {/* <img className="rounded-xl" src={perfil} alt="" /> */}
        </div>
        <div className="pb-20 space-y-20 pt-16">
          <LogoCarousel logos={logoClientes} title={"Confiaron en nosotros:"} />
          {/* <ItemsHome /> */}
          <LogoCarousel logos={logoRef} title={"Referencias comerciales: "} />
          <ContactUs />
        </div>
      </div>
      <NavBar />
      <Footer />
    </div>
  );
};

export default AboutUs;
