import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import logo from "../../assets/logo.png";
import MenuPhone from "../../components/MenuPhone/MenuPhone";
import "./NavBar.css";
const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("/");
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    setCurrentPage(currentPath);
  }, [currentPath]);

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="w-screen flex justify-center fixed bottom-0 z-30">
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
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
