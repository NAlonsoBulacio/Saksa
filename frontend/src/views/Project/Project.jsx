import React, { useState, useEffect } from "react";
import FlyerAboutUs from "../../components/Flyers/FlyerAboutUs";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel";
import Carousel2 from "../../components/Carousel2/Carousel2";
import img from "../../assets/1.jpg";
import img3 from "../../assets/fondo.png";
import { useDispatch, useSelector } from "react-redux";
import { getProjectId, emptyDetail } from "../../redux/actions";
import { MdOutlineArrowRightAlt } from "react-icons/md";

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
  const images = detail ? detail.img : "";
  console.log(images);
  return (
    <>
      {detail ? (
        <div
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        >
          <FlyerAboutUs />
          <div
            className="flex justify-start items-start space-x-3  px-0 lg:px-10 xl:px-32 pt-20 pb-8 text-xl text-gray-700"

          >
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
              <h1 className="text-left text-3xl lg:text-5xl  font-glacial-bold text-green-800 font-bold">
                {detail.name}
              </h1>
            </div>
            <div
              className={`${
                fullScreen ? "w-screen" : "w-full lg:w-[1100px]"
              } z-20 flex justify-between items-start gap-3`}
            >
              <div className="w-[80%]">
              <Carousel2
                handleFullScreen={handleFullScreen}
                fullScreen={fullScreen}
                images={images ? images : ""}
              />
            </div>

              <div className="w-[20%] text-2xl">
                <p><span className="text-bold">Año:</span> 2000</p>
                <p><span className="text-bold">Superficie:</span> 50 m2</p>
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
