import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import ContactForm from "../../components/ContactForm/ContactForm";
import DescriptionContact from "../../components/DescrptionContact/DescriptionContact";
import img3 from "../../assets/fondo.png";
import Footer from "../../components/Footer/Footer";
import FlyerAboutUs from "../../components/Flyers/FlyerAboutUs";
import GoogleMapEmbed from "../../components/GoogleMapEmbed/GoogleMapEmbed";

const Contact = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${img3})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
    }}
    >
      <FlyerAboutUs />
      <div className="px-2 lg:px-10 xl:px-20">
        <DescriptionContact />
      </div>
      <GoogleMapEmbed />
      <NavBar />
      <Footer />
    </div>
  );
};

export default Contact;
