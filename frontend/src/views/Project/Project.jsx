import React, { useState, useEffect } from "react";
import FlyerAboutUs from "../../components/Flyers/FlyerAboutUs";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel";
import img from "../../assets/1.jpg";
import img2 from "../../assets/4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProjectId, emptyDetail } from "../../redux/actions";
const Project = ({ match }) => {
  const projectId = match.params.id;
  const [fullScreen, setFullScreen] = useState(false);
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectId(projectId));
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(emptyDetail());
    };
  }, [dispatch]);

  const handleFullScreen = () => {
    setFullScreen(!fullScreen);
  };
  const images = [detail ? detail.img : ""];
  return (
    <>
      {detail ? (
        <div>
          <FlyerAboutUs />
          <div className="w-full flex flex-wrap justify-start items-center py-20 px-0 lg:px-20 xl:px-32 space-y-8">
            <div className="w-full flex justify-between items-center px-2">
              <h1 className="text-left text-3xl lg:text-5xl  font-glacial-bold text-green-800 font-bold">
                {detail.name}
              </h1>
            </div>
            <div className={`${fullScreen ? "w-screen " : ""} z-20`}>
              <Carousel
                handleFullScreen={handleFullScreen}
                fullScreen={fullScreen}
                images={images ? images : ""}
              />
            </div>
            <div className="w-full flex flex-wrap justify-start space-y-4 py-10 px-2">

              <div className="w-full flex justify-start ">
                <div className="w-1/5">
                  <hr className="my-2 border-[1.5px] border-green-800" />
                </div>
              </div>
              <div className="w-2/3 flex flex-wrap justify-start items-center text-left text-xl text-gray-600 space-y-6">
                <p className="w-full">
                  Te escucharemos encantados, escucharemos tu propuesta para
                  asesorarte y darte un presupuesto adaptado a tus necesidades.
                </p>
                <p className="w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam semper tincidunt mattis. Morbi volutpat justo eu
                  gravida rhoncus. Nulla malesuada, ante sit amet malesuada
                  elementum, tellus ex ultrices ante, scelerisque ornare ex
                  risus eget risus. Vivamus orci dolor, egestas eu est a,
                  porttitor placerat diam. Cras bibendum ultrices commodo. In
                  molestie odio eros. Etiam sit amet velit.
                </p>
                <p className="w-full">
                  Te escucharemos encantados, escucharemos tu propuesta para
                  asesorarte y darte un presupuesto adaptado a tus necesidades.
                </p>
                <p className="w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam semper tincidunt mattis. Morbi volutpat justo eu
                  gravida rhoncus. Nulla malesuada, ante sit amet malesuada
                  elementum, tellus ex ultrices ante, scelerisque ornare ex
                  risus eget risus. Vivamus orci dolor, egestas eu est a,
                </p>
              </div>
            </div>
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
