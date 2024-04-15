import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import FlyerAbout from "../../components/Flyers/FlyerAboutUs";
import ContactUs from "../../components/ContactUs/ContactUs";
import img from "../../assets/images/image1.png";
import img2 from "../../assets/images/image3.png";
import img5 from "../../assets/images/image5.png";
import img6 from "../../assets/images/image10.jpg";
import Footer from "../../components/Footer/Footer";
import img3 from "../../assets/fondo.png";

const Services = () => {
  return (
    <div 
    style={{
      backgroundImage: `url(${img3})`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
    }}
    >
      <FlyerAbout />
      <div className="flex flex-wrap justify-center items-center px-2 lg:px-10 xl:px-32 space-y-16 py-10">
        <div className="w-full flex flex-wrap justify-center items-center  space-y-6">
          <h1 className="text-3xl lg:text-5xl tracking-[0.2rem] font-glacial-bold text-green-800 text-center">
            NUESTROS SERVICIOS
          </h1>
          <div className="w-full flex justify-center ">
            <div className="w-1/5">
              <hr className=" border-[1.5px] border-green-800" />
            </div>
          </div>
          <p className="w-full px-0 lg:px-16 text-xl lg:text-xl text-center text-gray-800">
            En nuestro estudio buscamos pensar para emocionar con los ámbitos
            para la vida. Combinamos creatividad, experiencia y dedicación,
            ofreciendo una amplia gama de servicios para transformar ideas en
            realidad.
          </p>
          <p className="w-full px-0 lg:px-16 text-xl lg:text-xl text-center text-gray-800">
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
              Nos sumergimos en la exploración inicial de tu proyecto,
              realizando esquemas, diagramas, croquis de plantas, elevaciones,
              volúmenes o cualquier otro elemento gráfico, comprendiendo tus
              visiones y necesidades para establecer una sólida base de diseño.
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
              src={img5}
              alt=""
            />
          </div>
          <div className="w-full lg:w-[30%] flex flex-wrap justify-start items-start px-0 lg:px-10 space-y-3 lg:space-y-0">
            <h1 className="text-2xl font-glacial-bold tracking-[0.2rem] text-green-800">
              PROYECTOS DE ARQUITECTURA
            </h1>
            <img
              className="lg:hidden w-full object-cover object-center"
              src={img5}
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
              src={img6}
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
              src={img6}
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
        <div>
          <p className="w-full px-0 lg:px-16 text-xl lg:text-3xl text-center text-gray-800">
            Ya sea que estés planeando construir desde cero o renovar un espacio
            existente, estamos aquí para acompañarte y hacer realidad tus
            sueños.
          </p>
          <p className="my-2 lg:my-8 w-full px-0 lg:px-16 text-xl lg:text-3xl text-center text-gray-800">
          ¡Contáctanos hoy mismo y comencemos a dar vida a tu proyecto!
          </p>
        </div>
        <ContactUs />
      </div>
      <NavBar />
      <Footer />
    </div>
  );
};

export default Services;
