import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { AiTwotonePhone, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { BsPinMapFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
const DescriptionContact = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-start py-10">
      <div className="w-1/2 flex flex-wrap justify-center items-center space-y-6 mt-4">
        <p className="w-full text-left text-gray-500 text-2xl tracking-[0.3rem]">
          SOLICITANOS INFORMACIÓN
        </p>
        <div className="w-full">
          <p className="text-left text-5xl font-normal text-green-800">
            ¿Que tienes en mente?
          </p>
        </div>
        <div className="w-full flex justify-start items-center text-left text-xl text-gray-600">
          <h1>
            Te escucharemos encantados, cuéntanos sobre tu propuesta <br/> para asesorarte y darte un presupuesto adaptado a tus necesidades.
          </h1>
        </div>
        <div className="w-full flex justify-start ">
          <div className="w-1/5">
            <hr className="my-2 border-[1.5px] border-green-800" />
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-start items-center text-left text-lg text-gray-500 space-y-4">
          <div className="w-full flex justify-start">
            <a
              href="/"
              target="_blank"
              className="w-auto flex justify-start items-start"
            >
              <AiTwotonePhone className="w-8" style={{ marginTop: "0.3rem" }} />
              <h1>+3814455678</h1>
            </a>
          </div>
          <div className="w-full flex justify-start">
            <a
              href="/"
              target="_blank"
              className="w-auto flex justify-start items-start"
            >
              <IoMailOutline className="w-8" style={{ marginTop: "0.3rem" }} />
              <h1>info@saksa.com</h1>
            </a>
          </div>
          <div className="w-full flex justify-start">
            <a
              href="/"
              target="_blank"
              className="w-auto flex justify-start items-start"
            >
              <BsPinMapFill className="w-8" style={{ marginTop: "0.3rem" }} />
              <h1>Ituzaingó 1409, Piso 6, Oficina 602, Tucumán, Argentina</h1>
            </a>
          </div>

          <div className="w-full flex justify-start">
            <a
              href="/"
              target="_blank"
              className="w-auto flex justify-start items-start"
            >
              <FaWhatsapp className="w-8" style={{ marginTop: "0.3rem" }} />
              <h1>+3814455678</h1>
            </a>
          </div>
        </div>
        <div className="w-full flex justify-start items-center space-x-4 text-gray-700 pl-2">
          <BiLogoLinkedin className="text-2xl" />
          <BiLogoFacebook className="text-2xl" />
          <AiOutlineInstagram className=" text-2xl" />
        </div>
      </div>
      <div className="w-[40%] flex justify-end items-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default DescriptionContact;
