import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const [currentPage, setCurrentPage] = useState("/");
  const location = useLocation();
  const currentPath = location.pathname;


  useEffect(() => {
    setCurrentPage(currentPath);
  }, [currentPath]);

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="w-screen flex justify-center fixed bottom-0 z-50">
      <ul className="flex justify-center text-xl items-center space-x-12 bg-emerald-900 text-gray-300 py-2 px-4 rounded-md border-2 border-emerald-700">
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
        {/* <li>
          <a
            href="/proveedores-clientes"
            onClick={() => handleNavClick("/proveedores-clientes")}
            className={`underline-on-hover ${
              currentPage === "/proveedores-clientes" ? "active" : ""
            }`}
          >
            PROVEEDORES/CLIENTES
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default NavBar;
