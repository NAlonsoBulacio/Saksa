import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { AiTwotonePhone, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { BsPinMapFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
const DescriptionContact = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-start py-10 pb-4 space-y-8 lg:space-y-0">
      <div className="w-full lg:w-1/2 flex flex-wrap justify-center items-center space-y-6 mt-4">
        <p className="w-full text-center lg:text-left text-gray-500 text-xl lg:text-2xl tracking-[0.3rem]">
          SOLICITANOS INFORMACIÓN
        </p>
        <div className="w-full">
          <p className="text-left text-3xl lg:text-5xl font-bold text-[#0c6464]">
            ¿Que tienes en mente?
          </p>
        </div>
        <div className="w-full flex justify-start items-center text-left text-xl text-gray-600">
          <h1>
            Cuéntanos sobre tu idea, podemos asesorarte y hacerla realidad.
          </h1>
        </div>
        <div className="w-full lg:hidden flex justify-center items-start">
          <ContactForm />
        </div>
        <div className="w-full flex justify-start ">
          <div className="w-1/5">
            <hr className="my-2 border-[1.5px] border-[#0c6464]" />
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-start items-center text-left text-lg text-gray-600 space-y-4">
          <div className="w-full flex justify-start">
            <a className="w-auto flex justify-start items-start">
              <AiTwotonePhone className="w-8" style={{ marginTop: "0.3rem" }} />
              <h1>+381 4291652</h1>
            </a>
          </div>
          <div className="w-full flex justify-start">
            <a
              href="mailto:saksaarq@gmail.com"
              target="_blank"
              className="w-auto flex justify-start items-start hover:underline"
            >
              <IoMailOutline className="w-8" style={{ marginTop: "0.3rem" }} />
              <h1>saksaarq@gmail.com</h1>
            </a>
          </div>
          <div className="w-full flex justify-start">
            <a className="w-auto flex justify-start items-start">
              <BsPinMapFill className="w-8" style={{ marginTop: "0.3rem" }} />
              <h1>
                Av. Solano Vera 306 - Altos. CP 4107 - Yerba Buena. Tucumán,
                Argentina.
              </h1>
            </a>
          </div>

          <div className="w-full flex justify-start">
            <a
              href="https://wa.me/+5493814097860"
              target="_blank"
              className="w-auto flex justify-start items-start hover:underline"
            >
              <FaWhatsapp className="w-8" style={{ marginTop: "0.3rem" }} />
              <h1>+54 9 381 4097860</h1>
            </a>
          </div>
        </div>
        {/* <div className="w-full flex justify-start items-center space-x-4 text-gray-700 pl-2">
          <a
            href="https://www.instagram.com/saksa_arq/"
            target="_blank"
            className="w-auto flex justify-start items-start"
          >
            <AiOutlineInstagram className=" text-2xl hover:scale-110" />
          </a>
        </div> */}
      </div>
      <div className="w-[40%] hidden lg:flex justify-end items-center ">
        <ContactForm />
      </div>
    </div>
  );
};

export default DescriptionContact;
