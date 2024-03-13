import React from "react";
import NewCarousel from "../../components/NewCarousel/NewCarousel";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import img from "../../assets/6.jpg";
import ContactUs from "../../components/ContactUs/ContactUs";
import Counter from "../../components/Counter/Counter";
import OurServices from "../../components/OurServices/OurServices";
import ItemsHome from "../../components/ItemsHome/ItemsHome";
const Home = () => {
  return (
    <div className="overflow-hidden ">
      <div className="w-screen h-screen overflow-hidden relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>
      <div
        className="flex flex-wrap justify-center items-center bg-gray-100 space-y-14 py-20"
        // style={{ backgroundColor: "#04302f " }}
      >
        <div className="w-full flex justify-center items-center px-64">
          <h1 className="font-glacial-bold text-5xl text-center text-emerald-800">
            Somos un estudio con 30 años de trayectoria de labor profesional en
            Arquitectura, y más de 300.000 m2 construidos.
          </h1>
        </div>
        <Counter />
        <OurServices />
      </div>
      <NewCarousel />
      <div className="bg-gray-100 py-14 space-y-20">
        <ItemsHome />
        <ContactUs />
      </div>
      <NavBar />
      <Footer />
    </div>
  );
};

export default Home;
