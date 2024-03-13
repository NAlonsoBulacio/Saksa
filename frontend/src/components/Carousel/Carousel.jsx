import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";
import { GrNext, GrPrevious } from "react-icons/gr";
const MyCarousel = ({ images }) => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState([0]);
  const [marker, setMarker] = useState(0);
  const [buttonClick, setButtonClick] = useState(false);
  const slides = images ? images : "";
  const numSlides = slides.length;
  const containerWidth = numSlides * 100;

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
    if (slides) {
      const listNode = listRef.current;
      const imgNode = listNode.querySelectorAll("li")[currentIndex];
      if (imgNode && buttonClick) {
        imgNode.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    }
  }, [currentIndex]);

  const previousArray = () => {
    setButtonClick(true);
    const [firstIndex] = currentIndex;
    const newFirstIndex = firstIndex === 0 ? numSlides - 1 : firstIndex - 1;
    setMarker(newFirstIndex);
    setCurrentIndex([newFirstIndex]);
  };

  const nextArray = () => {
    setButtonClick(true);
    const [firstIndex] = currentIndex;
    const newFirstIndex = firstIndex === numSlides - 1 ? 0 : firstIndex + 1;
    setMarker(newFirstIndex);
    setCurrentIndex([newFirstIndex]);
  };
  return (
    <div className="flex w-full h-auto justify-center items-center relative overflow-hidden">
      <div className="carousel w-[100%] h-auto relative flex overflow-hidden">
        <ul
          ref={listRef}
          className={`w-${containerWidth}vw h-full flex items-center slider-ul overflow-hidden`}
        >
          {slides?.map((item, index) => {
            return (
              <li className="w-full min-w-full float-left" key={index}>
                <img
                  src={item}
                  alt="Imagen carrusel"
                  className="carousel-properties"
                />
              </li>
            );
          })}
        </ul>
        {marker !== 0 ? (
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 flex justify-center items-center text-gray-700 text-xl bg-gray-100 bg-opacity-[0.7] hover:bg-opacity-[0.9] rounded-full h-12 w-12"
            style={{ zIndex: "4" }}
            onClick={() => previousArray()}
          >
            <GrPrevious className="text-3xl"/>
          </button>
        ) : (
          ""
        )}
        {marker !== slides.length - 1 ? (
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 flex justify-center items-center text-gray-700 text-xl bg-gray-300 bg-opacity-[0.7] hover:bg-opacity-[0.9] rounded-full h-12 w-12"
            style={{ zIndex: "4" }}
            onClick={() => nextArray()}
          >
            <GrNext className="text-3xl" />
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MyCarousel;
