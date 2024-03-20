import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import FlyerAbout from "../../components/Flyers/FlyerAboutUs";
import ContactUs from "../../components/ContactUs/ContactUs";
import img from "../../assets/1.jpg";
import Footer from "../../components/Footer/Footer";
const Services = () => {
  return (
    <div>
      <FlyerAbout />
      <div className="bg-gray-100 flex flex-wrap justify-center items-center px-2 lg:px-10 xl:px-32 space-y-16 py-10">
        <div className="w-full flex flex-wrap justify-center items-center  space-y-6">
          <h1 className="text-3xl lg:text-4xl tracking-[0.2rem] font-glacial-bold text-green-800">
            NUESTROS SERVICIOS
          </h1>
          <p className="w-full px-0 lg:px-16 text-lg lg:text-xl text-left lg:text-center text-gray-800">
            Contando con experiencia en Arquitectura Comercial, Habitacional,
            para la Salud y la Administración. Con mas de 40 años de trayectoria
            vemos la Arquitectura como una disciplina que genera una identidad
            única para cada usuario: cada cliente, cada proyecto y cada terreno
            nos da la posibilidad de crear un proyecto a medida en el que se
            funde nuestra experiencia, las líneas arquitectónicas que van
            aggiornándose y la incorporación de la tecnología que tanto mejora
            la calidad de vida del usuario en la Arquitectura de hoy.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[60%] hidden lg:flex items-start overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src="https://static.wixstatic.com/media/d9faadd5288644d8b9bb8a53d6a17e6c.jpg/v1/fill/w_656,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Plan%20de%20la%20construcci%C3%B3n%20II.jpg"
              alt=""
            />
          </div>
          <div className="w-full lg:w-[30%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3 lg:space-y-0">
            <h1 className="text-2xl font-glacial-bold tracking-[0.2rem] text-green-800">
              PROYECTOS DE ARQUITECTURA
            </h1>
            <img
              className="lg:hidden w-full object-cover object-center"
              src="https://static.wixstatic.com/media/d9faadd5288644d8b9bb8a53d6a17e6c.jpg/v1/fill/w_656,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Plan%20de%20la%20construcci%C3%B3n%20II.jpg"
              alt=""
            />
            <p className="text-lg text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in interdum risus. Mauris suscipit enim quis lacus aliquet, quis aliquam elit rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent finibus semper massa sit amet faucibus. Sed dolor magna, viverra vel leo quis, ornare fringilla lacus. In faucibus urna vestibulum, blandit ipsum non, ullamcorper mi. 
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[30%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3 lg:space-y-0">
            <h1 className="text-2xl font-glacial-bold tracking-[0.2rem] text-green-800">
              DIRECCIÓN TÉCNICA
            </h1>
            <img
              className="lg:hidden w-full object-cover object-center"
              src="https://static.wixstatic.com/media/nsplsh_347a776f7a517844624434~mv2_d_4981_3320_s_4_2.jpg/v1/fill/w_656,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Guilherme%20%20Cunha.jpg"
              alt=""
            />
            <p className="text-lg text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in interdum risus. Mauris suscipit enim quis lacus aliquet, quis aliquam elit rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent finibus semper massa sit amet faucibus. Sed dolor magna, viverra vel leo quis, ornare fringilla lacus. In faucibus urna vestibulum, blandit ipsum non, ullamcorper mi.
            </p>
          </div>
          <div className="w-full lg:w-[60%] hidden lg:flex items-start overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src="https://static.wixstatic.com/media/nsplsh_347a776f7a517844624434~mv2_d_4981_3320_s_4_2.jpg/v1/fill/w_656,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Guilherme%20%20Cunha.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[60%] hidden lg:flex items-start overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src="https://static.wixstatic.com/media/nsplsh_2a95c67e90b4478a856fc7d41736cbbe~mv2.jpg/v1/fill/w_656,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Pedro%20Miranda.jpg"
              alt=""
            />
          </div>
          <div className="w-full lg:w-[30%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3 lg:space-y-0">
            <h1 className="text-2xl font-glacial-bold tracking-[0.2rem] text-green-800">
              CONDUCCIÓN Y GERENCIAMIENTO DE OBRAS
            </h1>
            <img
              className="lg:hidden w-full object-cover object-center"
              src="https://static.wixstatic.com/media/nsplsh_2a95c67e90b4478a856fc7d41736cbbe~mv2.jpg/v1/fill/w_656,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Pedro%20Miranda.jpg"
              alt=""
            />
            <p className="text-lg text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in interdum risus. Mauris suscipit enim quis lacus aliquet, quis aliquam elit rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent finibus semper massa sit amet faucibus. Sed dolor magna, viverra vel leo quis, ornare fringilla lacus. In faucibus urna vestibulum, blandit ipsum non, ullamcorper mi. 
            </p>
          </div>
        </div>
        <ContactUs />
      </div>

      <NavBar />
      <Footer />
    </div>
  );
};

export default Services;
