import React from "react";
const ContactUs = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center space-y-4">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-[#0c6464] text-center text-2xl lg:text-3xl font-bold tracking-[0.2rem]">
          CUÉNTANOS SOBRE TU IDEA
        </h1>
      </div>
      <div className="w-full flex justify-center items-center py-2">
        <a href="/contacto">
          <button
            className="text-2xl text-gray-200 px-4 py-2 font-barlow-400 rounded-md bg-[#0c6464] transform-transition hover:scale-110 duration-200"
            // style={{ backgroundColor: "#081022" }}
          >
            Contacto
          </button>
        </a>
      </div>

    </div>
  );
};

export default ContactUs;
