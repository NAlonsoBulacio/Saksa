import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const Carousel2 = ({images}) => {
  const [curr, setCurr] = useState(0);
//   const images = [
//     "https://res.cloudinary.com/doczyujqf/image/upload/v1711044972/large_5_94d06566fe.jpg",
//     "https://res.cloudinary.com/doczyujqf/image/upload/v1711044971/large_1_a1ecdd029f.jpg",
//     "https://res.cloudinary.com/doczyujqf/image/upload/v1711044972/large_3_c7dadfcefc.jpg",
//     "https://res.cloudinary.com/doczyujqf/image/upload/v1711044972/large_4_3141730435.jpg",
//     "https://res.cloudinary.com/doczyujqf/image/upload/v1711044982/large_CEDYT_2_41c6b4bee7.png",
//     "https://res.cloudinary.com/doczyujqf/image/upload/v1711044981/large_Portada_4d02726c69.png",
//   ];
  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  // useEffect(() => {
  //   if (!autoSlide) return
  //   const slideInterval = setInterval(next, autoSlideInterval)
  //   return () => clearInterval(slideInterval)
  // }, [])

  return (
    <>
      {images ? (
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {images
              ? images.map((img, index) => (
                  <img key={index} src={img} alt="img" className="" />
                ))
              : ""}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prev}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <FaChevronLeft size={40} />
            </button>
            <button
              onClick={next}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <FaChevronRight size={40} />
            </button>
          </div>

          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {images.map((_, i) => (
                <div
                  className={`
            transition-all w-3 h-3 bg-white rounded-full
            ${curr === i ? "p-2" : "bg-opacity-50"}
          `}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Carousel2;
