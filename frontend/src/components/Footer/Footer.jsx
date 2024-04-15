import React from "react";
import { AiTwotonePhone, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { BsPinMapFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import bg_image from "../../assets/images/image13.png";
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div
      className="w-full flex flex-wrap justify-center items-center pt-6 mb-20 lg:py-6"
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "auto 100%", // La imagen se ajustará solo en altura
        backgroundPosition: "center", // La imagen se centrará verticalmente
      }}
    >
      <div className="w-full flex flex-wrap justify-center items-start px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-10 space-x-0 lg:space-x-14 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-[40%] flex flex-wrap justify-start items-center space-y-6">
          <img
            src={logo}
            alt="logo"
            className="w-1/3"
          />
          {/* <div className="w-full ">
            <h1 className="text-gray-300 font-plus-500 text-left text-xl">
            40 años de trayectoria definen nuestra identidad.
            </h1>
          </div> */}
          <div className="w-full flex justify-start items-center space-x-4">
          <a href="https://www.instagram.com/saksa_arq/" target="_blank" >
            <AiOutlineInstagram className=" text-gray-400 text-4xl lg;text-2xl" />
            </a>
          </div>
          <div className="w-full flex justify-start items-center space-x-4">
            <h1 className="text-gray-300 font-plus-500 text-left text-lg">Todos los derechos reservados.</h1>
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex flex-wrap justify-center items-center space-y-6">
          <div className="w-full flex justify-start items-center text-left text-3xl text-gray-200">
            <h1>Contacto</h1>
          </div>
          <div className="w-full flex flex-wrap justify-start items-center text-left text-lg text-gray-400 space-y-4">
            <a  className="w-full flex justify-start items-start">
              <AiTwotonePhone className="w-8"
              style={{marginTop: "0.3rem"}}
              />
              <h1>+381 4291652</h1>
            </a>
            <a href="/" target="_blank" className="w-full flex justify-start items-start">
              <IoMailOutline className="w-8"
              style={{marginTop: "0.3rem"}}
              />
              <h1>info@saksa.com</h1>
            </a>
            <a className="w-full flex justify-start items-start">
              <BsPinMapFill className="w-8"
              style={{marginTop: "0.3rem"}}
              />
              <h1>Tucumán, Argentina</h1>
            </a>
            <a  href="https://wa.me/+5493814097860" target="_blank" className="w-full flex justify-start items-start">
              <FaWhatsapp className="w-8"
              style={{marginTop: "0.3rem"}}
              />
              <h1>+54 9 381 4097860</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
