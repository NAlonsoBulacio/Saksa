import React, { useState, useEffect } from "react";
import FlyerAboutUs from "../../components/Flyers/FlyerAboutUs";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Carousel2 from "../../components/Carousel2/Carousel2";
import { fondo } from "../../assets";
import { useDispatch, useSelector } from "react-redux";
import { getProjectId, emptyDetail } from "../../redux/actions";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import SampleNextArrow from "../../utils/SampleNextArrow";
import SamplePrevArrow from "../../utils/SamplePrevArrow";
import Slider from "react-slick";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = ({ match }) => {
  const projectId = match.params.id;
  const [fullScreen, setFullScreen] = useState(false);
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    dispatch(getProjectId(projectId));
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(emptyDetail());
    };
  }, [dispatch]);

  const images = detail ? detail.img : "";

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      {detail ? (
        <div
          style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
          }}
        >
          <FlyerAboutUs />
          <div className="flex justify-start items-start space-x-3  px-2 lg:px-10 xl:px-32 pt-4 lg:pt-20 pb-4 lg:pb-8 text-lg lg:text-xl text-gray-700">
            <a className="hover:underline" href="/">
              Inicio
            </a>
            <span className="arrow">→</span>
            <a className="hover:underline" href="/proyectos">
              Proyectos
            </a>
            <span className="arrow">→</span>
            <a href="" className="underline ">
              {detail.name}
            </a>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center pb-20 px-0 lg:px-10 xl:px-32 space-y-8">
            <div className="w-full flex justify-between items-center px-2">
              <h1 className="text-left text-3xl lg:text-5xl  font-glacial-bold text-[#0c6464] font-bold">
                {detail.name}
              </h1>
            </div>
            <div
              className={`${
                fullScreen ? "w-screen" : "w-full lg:w-[1100px]"
              } z-20 flex flex-wrap lg:flex-nowrap justify-between items-start gap-3`}
            >
              {images ? (
                <div
                  className={`w-full lg:w-[80%] h-auto flex justify-center items-center ${
                    isFullscreen ? "fixed lg:w-full inset-0 z-50 bg-gray-900" : ""
                  }`}
                >
                  <div
                    className={`w-full ${
                      isFullscreen ? "w-[80%] h-full" : ""
                    }`}
                  >
                    <Slider
                      {...settings}
                      className={`${isFullscreen ? "h-full" : ""}`}
                    >
                      {images?.map((image, index) => (
                        <div
                          key={index}
                          className={`h-full px-2 relative ${
                            isFullscreen
                              ? "flex justify-center items-center"
                              : ""
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Slide ${index}`}
                            className={`w-full ${
                              isFullscreen ? "max-h-full" : ""
                            }`}
                          />
                          {isFullscreen && (
                            <div className="absolute top-8 right-8">
                              <button onClick={toggleFullScreen} className="w-auto h-auto bg-gray-700 opacity-60 hover:opacity-80 duration-150 rounded-sm">
                                <MdFullscreenExit className="text-white w-full text-[60px]" />
                              </button>
                            </div>
                          )}
                          {!isFullscreen && (
                            <div className="absolute top-8 right-8 ">
                              <button onClick={toggleFullScreen} className="w-auto h-auto bg-gray-500 opacity-60 hover:opacity-80 duration-150 rounded-sm">
                                <MdFullscreen className="text-white w-full text-4xl" />
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="w-full lg:w-[20%] px-2 lg:px-0 text-xl lg:text-2xl">
                {detail.year ? (
                  <p>
                    <span className="text-bold">Año:</span> {detail?.year}
                  </p>
                ) : (
                  ""
                )}
                {detail.surface ? (
                  <p>
                    <span className="text-bold">Superficie:</span>{" "}
                    {detail?.surface}
                  </p>
                ) : (
                  ""
                )}
                {/* {detail.description ? (
                  <p className="text-xl">
                   {detail.description}
                  </p>
                ) : (
                  ""
                )} */}
              </div>
            </div>
            {/* <div className="w-full flex flex-wrap justify-start space-y-4 py-10 px-2">
              <div className="w-full flex justify-start ">
                <div className="w-1/5">
                  <hr className="my-2 border-[1.5px] border-green-800" />
                </div>
              </div>
            </div> */}
          </div>
          {fullScreen ? (
            <div className="fixed inset-0 w-screen h-screen flex justify-center items-center bg-black z-10">
              {/* <div className="w-[900px]">
            <Carousel
              handleFullScreen={handleFullScreen}
              fullScreen={fullScreen}
              images={images ? images : ""}
            />
          </div> */}
            </div>
          ) : (
            ""
          )}
          <NavBar />
          <Footer />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Project;
