import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import ContactForm from "../../components/ContactForm/ContactForm";
import DescriptionContact from "../../components/DescrptionContact/DescriptionContact";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FlyerAboutUs from "../../components/Flyers/FlyerAboutUs";
const Contact = () => {
  return (
    <div>
      <FlyerAboutUs />
      <div className="px-2 lg:px-10 xl:px-20">
        <DescriptionContact />
      </div>
      <NavBar />
      <Footer />
    </div>
  );
};

export default Contact;
