import React from "react";
import NewCarousel from "../../components/NewCarousel/NewCarousel";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import img from "../../assets/home.png";
import img2 from "../../assets/home2.png";
// import logo from "../../assets/logo.png";
import ContactUs from "../../components/ContactUs/ContactUs";
import Counter from "../../components/Counter/Counter";
import OurServices from "../../components/OurServices/OurServices";
import ItemsHome from "../../components/ItemsHome/ItemsHome";
import logo from "../../assets/hormiga-negra.png";
const Home = () => {
  return (
    <div className="overflow-hidden ">
      <div className="w-screen h-[37vh] lg:h-[45vh] xl:h-[45vh] overflow-hidden relative">
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
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>
      </div>
      <div className="flex flex-wrap justify-center items-center bg-gray-100 space-y-8 lg:space-y-10 py-8 lg:py-10 px-4 lg:px-10 xl:px-20">
        {/* <div className="w-full flex flex-wrap justofy-center lg:justify-end items-center px-0 lg:px-12">
          <div className="w-full lg:w-1/3 flex justify-start lg:justify-center flex-wrap">
            <div className="w-full flex justify-center">
              <img className="w-32 lg:w-64 -rotate-6" src={logo} alt="" />
            </div>
            <div className="w-full flex justify-center lg:justify-center ">
              <h1 className="lg:text-center text-3xl">saksa/arquitectura</h1>
            </div>
          </div>
        </div> */}
        <div className="w-full flex justify-center items-center px-0 lg:px-10 ">
          <h1 className="font-lato-700 text-3xl lg:text-5xl  text-emerald-800 text-center">
            Somos un estudio con 30 años de trayectoria de labor profesional en
            Arquitectura, y más de 300.000 m2 construidos.
          </h1>
        </div>
        <Counter />
        <div className="w-full flex justify-center items-center py-2">
          <a href="/contacto">
            <button
              className="text-2xl text-gray-200 px-4 py-2 font-barlow-400 rounded-md bg-emerald-900 transform-transition hover:scale-110 duration-200"
              // style={{ backgroundColor: "#081022" }}
            >
              Contacto
            </button>
          </a>
        </div>
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

export default Home;
