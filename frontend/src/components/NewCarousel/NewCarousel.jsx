import React, { useState, useEffect } from "react";
import img1 from "../../assets/destacadas/edificio-9dejulio.jpg";
import img2 from "../../assets/destacadas/boulevard-consultorios.jpg";
import img3 from "../../assets/destacadas/edificio-las-piedras.jpg";
import "./NewCarousel.css";
const CarouselSlider = () => {
  const images = [
    { img: img1, text: "Edificio 9 de Julio" },
    { img: img2, text: "Boulevard Consultorios" },
    { img: img3, text: "Edificio Las Piedras" },
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  useEffect(() => {
    const preloadImages = () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };
    preloadImages();
  }, [images]);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      next();
    }, 8000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [selectedIndex]);

  // const previous = () => {
  //   const condition = selectedIndex > 0;
  //   const nextIndex = condition ? selectedIndex - 1 : images.length -1;
  //   setSelectedImage(images[nextIndex]);
  //   setSelectedIndex(nextIndex);
  // };
  const next = () => {
    const condition = selectedIndex < images.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };
  return (
    <div className="carousel-div w-full">
      <div className="carousel-slider overflow-hidden">
        <img
          key={selectedIndex}
          src={selectedImage.img}
          alt="Imagen carrusel"
          className="carousel-img image-fade-in-zoom"
        />

        <div className="absolute top-[10%] w-full flex flex-wrap justify-start text-gray-300 z-10 px-12">
          <h2 className="w-full font-montserrat-300 text-left">
            - PROYECTOS RECIENTES
          </h2>
          <h1 className="w-full font-raleway-700 text-5xl md:text-7xl text-left ">
            {selectedImage.text}
          </h1>
          <a href="/proyectos" className="my-2">
            <button className="border-2 border-white px-2 transform-transition hover:bg-emerald-800 hover:border-emerald-800 duration-300  text-xl">
              Ver todas las propiedades
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;
