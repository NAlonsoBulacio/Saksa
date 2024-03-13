import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import img from "../../assets/1.jpg";
import WhoAreWe from "../../components/WhoAreWe/WhoAreWe";
import Slider from "../../components/Slider/Slider";
import Clients from "../../components/Clients/Clients";
import hormiga from "../../assets/hormiga-negra.png";
import Ant from "../../components/Ant/Ant";
import Proveedores from "../../components/Proveedores/Proveedores";
import FlyerAboutUs from "../../components/Flyers/FlyerAboutUs";
import ContactUs from "../../components/ContactUs/ContactUs";
import ItemsHome from "../../components/ItemsHome/ItemsHome";
import perfil from "../../assets/perfil.png";
const AboutUs = () => {
  return (
    <div className="">
      <FlyerAboutUs />
      <div className="py-12 bg-gray-100">
        <div className="lg:px-10 xl:px-32 bg-gray-100">
          <WhoAreWe img={img} />
          <Ant hormiga={hormiga} />
          <img className="rounded-xl" src={perfil} alt="" />
        </div>
        <div className="pb-20 space-y-12 pt-16 bg-gray-100">
          <ItemsHome />
          <Proveedores />
          <ContactUs />
        </div>
      </div>
      <NavBar />
      <Footer />
    </div>
  );
};

export default AboutUs;
