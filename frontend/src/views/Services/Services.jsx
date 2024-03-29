import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import FlyerAbout from "../../components/Flyers/FlyerAboutUs";
import ContactUs from "../../components/ContactUs/ContactUs";
import img from "../../assets/gerenciamiento.png";
import img2 from "../../assets/estudios_pre.png";
import Footer from "../../components/Footer/Footer";
const Services = () => {
  return (
    <div>
      <FlyerAbout />
      <div className="bg-gray-100 flex flex-wrap justify-center items-center px-2 lg:px-10 xl:px-32 space-y-16 py-10">
        <div className="w-full flex flex-wrap justify-center items-center  space-y-6">
          <h1 className="text-3xl lg:text-5xl tracking-[0.2rem] font-glacial-bold text-green-800 text-center">
            NUESTROS SERVICIOS
          </h1>
          <div className="w-full flex justify-center ">
            <div className="w-1/5">
              <hr className=" border-[1.5px] border-green-800" />
            </div>
          </div>
          <p className="w-full px-0 lg:px-16 text-lg lg:text-xl text-left lg:text-center text-gray-800">
            En nuestro estudio/espacio creativo, nos apasiona transformar ideas
            en realidad. Combinamos creatividad, experiencia y dedicación,
            ofreciendo una amplia gama de servicios para satisfacer todas tus
            necesidades arquitectónicas.
          </p>
          <p className="w-full px-0 lg:px-16 text-lg lg:text-xl text-left lg:text-center text-gray-800">
            Desde los primeros bocetos hasta la dirección técnica y el
            gerenciamiento de obras, estamos aquí para guiar cada paso del
            camino. Nuestros servicios incluyen:
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full lg:w-[30%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3 lg:space-y-0">
            <h1 className="text-2xl font-glacial-bold tracking-[0.2rem] text-green-800">
              ESTUDIOS PRELIMINARES
            </h1>
            <img
              className="lg:hidden w-full object-cover object-center"
              src={img2}
              alt=""
            />
            <p className="text-lg text-gray-800">
            Nos sumergimos en la exploración inicial de tu proyecto, realizando esquemas, diagramas, croquis de plantas, elevaciones, volúmenes o cualquier otro elemento gráfico, comprendiendo tus visiones y necesidades para establecer una sólida base de diseño. 
            </p>
          </div>
          <div className="w-full max-h-[400px] lg:w-[60%] hidden lg:flex justify-end items-start overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src={img2}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full max-h-[400px] lg:w-[60%] hidden lg:flex items-start overflow-hidden rounded-lg">
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
              Con un enfoque meticuloso y una atención al detalle, creamos
              diseños innovadores que se adaptan a tus deseos, abarcando un gran
              panorama de tipologías de obras, escalas y envergaduras.
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
              Nos encargamos de supervisar cada aspecto técnico del proyecto,
              para que se realicen en estricto cumplimiento a los planos y
              especificaciones técnicas que conforman el proyecto. Tanto en la
              obra gruesa, las terminaciones e instalaciones, hasta la
              concreción final de las obras, garantizamos que se cumplan los
              estándares más altos de calidad y seguridad.
            </p>
          </div>
          <div className="w-full max-h-[400px] lg:w-[60%] hidden lg:flex items-start overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src="https://static.wixstatic.com/media/nsplsh_347a776f7a517844624434~mv2_d_4981_3320_s_4_2.jpg/v1/fill/w_656,h_368,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Guilherme%20%20Cunha.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start space-x-0 lg:space-x-8">
          <div className="w-full max-h-[400px] lg:w-[60%] hidden lg:flex items-start overflow-hidden rounded-lg">
            <img
              className="w-full object-cover object-center"
              src={img}
              alt=""
            />
          </div>
          <div className="w-full lg:w-[30%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3 lg:space-y-0">
            <h1 className="text-2xl font-glacial-bold tracking-[0.2rem] text-green-800">
              CONDUCCIÓN Y GERENCIAMIENTO DE OBRAS
            </h1>
            <img
              className="lg:hidden w-full object-cover object-center"
              src={img}
              alt=""
            />
            <p className="text-lg text-gray-800">
              Desde la planificación hasta la ejecución, coordinamos
              eficientemente todos los aspectos de la construcción para
              garantizar un óptimo resultado final.
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
