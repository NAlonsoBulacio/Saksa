import React, { useRef, useEffect, useState } from "react";
import NewCarousel from "../../components/NewCarousel/NewCarousel";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { fondo, home4, home5 } from "../../assets";
import logoNegro from "../../assets/logo-negro.png";
import ContactUs from "../../components/ContactUs/ContactUs";
import Counter from "../../components/Counter/Counter";
import OurServices from "../../components/OurServices/OurServices";
import ItemsHome from "../../components/ItemsHome/ItemsHome";
import { useDispatch } from "react-redux";
import { getProjects } from "../../redux/actions";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Home = () => {
  const homeRef = useRef(null);
  const handleClick = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <div className="overflow-hidden">
      <div className="w-screen h-[100vh] lg:h-[100vh] xl:h-[100vh] overflow-hidden relative">
        <div
          className="absolute hidden lg:block inset-0 z-0"
          style={{
            backgroundImage: `url(${home5})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div
          className="absolute hidden lg:block inset-0 z-10"
          style={{
            backgroundImage: `url(${logoNegro})`,
            backgroundSize: "12% 12%",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "top 4% left 3%",
          }}
        ></div>
        <div
          className="absolute block lg:hidden inset-0 z-0"
          style={{
            backgroundImage: `url(${home4})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className="absolute bottom-0 w-screen flex justify-center items-center px-2 lg:px-[178px] py-2 lg:py-8 pb-2 lg:pb-20"
          style={{
            backgroundColor: "rgba(75, 75, 75, 0.7)",
          }}
        >
          <h1 className=" text-2xl lg:text-[38px] tracking-[0.28rem] text-gray-300 text-center">
          BUSCAMOS EMOCIONAR CON LOS ÁMBITOS DE LA VIDA
          </h1>
        </div>
        <div className="absolute right-10 lg:right-24 bottom-28 lg:bottom-16 z-20">
          <a onClick={() => handleClick()}>
            <MdKeyboardDoubleArrowDown className="text-[78px] text-gray-300 lg:text-gray-400 cursor-pointer hover:text-gray-300 hover:scale-110 duration-200 rotate-180" />
          </a>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          ref={homeRef}
          id="home"
          className="flex flex-wrap justify-center items-center  space-y-8 lg:space-y-10 py-8 lg:py-10 px-4 lg:px-10 xl:px-20"
        >
          {/* <div className="w-full flex justify-center items-center px-0 lg:px-10 ">
            <h1 className="font-lato-700 text-3xl lg:text-5xl  text-emerald-800 text-center">
              Somos un estudio con 30 años de trayectoria de labor profesional
              en Arquitectura, y más de 300.000 m2 construidos.
            </h1>
          </div> */}
          <OurServices />
          {/* <Counter /> */}
          {/* <div className="w-full flex justify-center items-center py-2">
            <a href="/contacto">
              <button className="text-2xl text-gray-200 px-4 py-2 font-barlow-400 rounded-md bg-emerald-800 transform-transition hover:scale-110 duration-200">
                Contáctanos
              </button>
            </a>
          </div> */}
        </div>
        <NewCarousel />
        <div className="py-20 space-y-20 px-2 lg:px-10 xl:px-20">
          {/* <ItemsHome /> */}
          <ContactUs />
        </div>
      </div>
      <NavBar home={true} />
      <Footer />
    </div>
  );
};

export default Home;
