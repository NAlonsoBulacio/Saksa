import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Carousel2 = ({ logos, title }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [logosPerPage, setLogosPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setLogosPerPage(6);
      } else if (screenWidth >= 992) {
        setLogosPerPage(5);
      } else if (screenWidth >= 768) {
        setLogosPerPage(4);
      } else {
        setLogosPerPage(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const totalPages = Math.ceil(logos.length / logosPerPage);

  const prevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  const renderLogos = () => {
    const startIdx = currentPage * logosPerPage;
    const endIdx = Math.min(startIdx + logosPerPage, logos.length);
    const visibleLogos = logos.slice(startIdx, endIdx);

    return visibleLogos.map((logo, index) => (
      <img key={index} src={logo} alt="logo" className="w-32" />
    ));
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full flex justify-center items-center ">
        <h1 className="text-gray-800 text-center lg:text-left text-xl lg:text-2xl font-barlow-400 tracking-[0.3rem]">
          {title}
        </h1>
      </div>
      <div className="w-full overflow-hidden h-[250px] relative">
        <div className="flex justify-center gap-x-6 items-center h-full transition-transform ease-out duration-500">
          {renderLogos()}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevPage}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <FaChevronLeft className="text-2xl lg:text-4xl" />
          </button>
          <button
            onClick={nextPage}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <FaChevronRight className="text-2xl lg:text-4xl" />
          </button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 bg-gray-800 rounded-full ${
                  currentPage === i ? "p-2" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel2;
