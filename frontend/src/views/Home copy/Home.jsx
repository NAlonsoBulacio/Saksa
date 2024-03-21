import React from "react";
import NewCarousel from "../../components/NewCarousel/NewCarousel";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import img from "../../assets/sombra.png";
import ContactUs from "../../components/ContactUs/ContactUs";
import Counter from "../../components/Counter/Counter";
import OurServices from "../../components/OurServices/OurServices";
import ItemsHome from "../../components/ItemsHome/ItemsHome";
const Home2 = () => {
  return (
    <div className="overflow-hidden ">
      <div className="w-screen h-[37vh] lg:h-[63vh] xl:h-[58vh] overflow-hidden relative">
        <div
          className="absolute hidden lg:block inset-0 z-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div
          className="absolute block lg:hidden inset-0 z-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>
      <div className="flex flex-wrap justify-center items-center bg-gray-100 space-y-8 lg:space-y-14 py-8 lg:py-16 px-4 lg:px-10 xl:px-20">
        <div className="w-full flex justify-center items-center px-0 lg:px-10 ">
          <h1 className="font-lato-700 text-2xl lg:text-5xl text-center text-emerald-800">
            Somos un estudio con 30 años de trayectoria de labor profesional en
            Arquitectura, y más de 300.000 m2 construidos.
          </h1>
        </div>
        <Counter />
        <OurServices />
      </div>
      <NewCarousel />
      <div className="bg-gray-100 py-14 space-y-20 px-2 lg:px-10 xl:px-20">
        <ItemsHome />
        <ContactUs />
      </div>
      <NavBar />
      <Footer />
    </div>
  );
};

export default Home2;
