import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import logo from "../../assets/logo.png";
import MenuPhone from "../../components/MenuPhone/MenuPhone";
import "./NavBar.css";
const NavBar = ({ home }) => {
  const [currentPage, setCurrentPage] = useState("/");
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewPast100vh, setViewPast100vh] = useState(false);

  const element = home ? (
    <div>Elemento para la página de inicio</div>
  ) : (
    <div>Otro elemento para otras páginas</div>
  );

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setCurrentPage(currentPath);
  }, [currentPath]);

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      if (scrollPosition >= window.innerHeight * 0.2) {
        setViewPast100vh(true);
      } else {
        setViewPast100vh(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-screen flex justify-center fixed bottom-0 z-30">
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      )}
      <div className="flex lg:hidden w-screen justify-center text-xl items-center space-x-6 bg-emerald-900 text-gray-300 py-4 px-4 rounded-md border-2 border-emerald-700">
        <div className="w-1/2 flex items-center">
          <a href="/">
            <img className="w-[140px]" src={logo} alt="Logo" />
          </a>
        </div>
        <button
          className="w-1/2 flex justify-center items-center pl-20"
          onClick={handleMenuToggle}
        >
          <IoMenu className="text-gray-400 w-16 h-16 " width={64} />
        </button>
      </div>
      {home ? (
        <ul
          className={`${
            viewPast100vh === true
              ? "bg-black text-gray-800 text-5xl"
              : "text-emerald-800"
          } hidden lg:flex justify-center w-screen text-xl items-center space-x-20  text-gray-800 py-2 px-10 rounded-md border-2 border-gray-700`}
          style={{
            backgroundColor: viewPast100vh
              ? "rgb(6 95 70)"
              : "rgba(224, 224, 224, 0.7)",
            color: viewPast100vh ? "rgb(229 231 235)" : "rgb(31 41 55)",
          }}
        >
          <li>
            <a
              href="/"
              onClick={() => handleNavClick("/")}
              className={`underline-on-hover ${
                currentPage === "/" ? "active" : ""
              }`}
            >
              INICIO
            </a>
          </li>
          <li>
            <a
              href="/proyectos"
              onClick={() => handleNavClick("/proyectos")}
              className={`underline-on-hover ${
                currentPage === "/proyectos" ? "active" : ""
              }`}
            >
              PROYECTOS
            </a>
          </li>
          <li>
            <a
              href="/servicios"
              onClick={() => handleNavClick("/servicios")}
              className={`underline-on-hover ${
                currentPage === "/servicios" ? "active" : ""
              }`}
            >
              SERVICIOS
            </a>
          </li>
          <li>
            <a
              href="/quienes-somos"
              onClick={() => handleNavClick("/quienes-somos")}
              className={`underline-on-hover ${
                currentPage === "/quienes-somos" ? "active" : ""
              }`}
            >
              QUIENES SOMOS
            </a>
          </li>
          <li>
            <a
              href="/contacto"
              onClick={() => handleNavClick("/contacto")}
              className={`underline-on-hover ${
                currentPage === "/contacto" ? "active" : ""
              }`}
            >
              CONTACTO
            </a>
          </li>
        </ul>
      ) : (
        <ul className="hidden  lg:flex justify-center text-xl items-center space-x-12 bg-emerald-900 text-gray-300 py-2 px-4 rounded-md border-2 border-emerald-700">
          <li>
            <a
              href="/"
              onClick={() => handleNavClick("/")}
              className={`underline-on-hover ${
                currentPage === "/" ? "active" : ""
              }`}
            >
              INICIO
            </a>
          </li>
          <li>
            <a
              href="/proyectos"
              onClick={() => handleNavClick("/proyectos")}
              className={`underline-on-hover ${
                currentPage === "/proyectos" ? "active" : ""
              }`}
            >
              PROYECTOS
            </a>
          </li>
          <li>
            <a
              href="/servicios"
              onClick={() => handleNavClick("/servicios")}
              className={`underline-on-hover ${
                currentPage === "/servicios" ? "active" : ""
              }`}
            >
              SERVICIOS
            </a>
          </li>
          <li>
            <a
              href="/quienes-somos"
              onClick={() => handleNavClick("/quienes-somos")}
              className={`underline-on-hover ${
                currentPage === "/quienes-somos" ? "active" : ""
              }`}
            >
              QUIENES SOMOS
            </a>
          </li>
          <li>
            <a
              href="/contacto"
              onClick={() => handleNavClick("/contacto")}
              className={`underline-on-hover ${
                currentPage === "/contacto" ? "active" : ""
              }`}
            >
              CONTACTO
            </a>
          </li>
        </ul>
      )}
      <div>
        {menuOpen ? (
          <MenuPhone handleMenuToggle={handleMenuToggle} menuOpen={menuOpen} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NavBar;
