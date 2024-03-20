import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import FlyerAboutUs from "../../components/Flyers/FlyerAboutUs";
import ProjectsContainer from "../../components/ProjectsContainer/ProyectsContainer";
import ContactUs from "../../components/ContactUs/ContactUs";
const Projects = () => {
  const projects = [
    {
      img: "https://studiopractica.com/wp-content/uploads/2022/06/PRACTICA_ATICO-EN-CHAMBERI_01-801x1200.jpg",
      type: 3,
      name: "Casa Uno",
    },
    {
      img: "https://studiopractica.com/wp-content/uploads/2022/06/PRACTICA_ATICO-EN-CHAMBERI_04_2000px-1200x800.jpg",
      type: 1,
      name: "Casa Uno",
    },
    {
      img: "https://studiopractica.com/wp-content/uploads/2018/09/PRACTICA_PRIVATE_RESIDENCE_IN_SHOREDITCH_KITCHEN_2-1200x800.jpg",
      type: 2,
      name: "Casa Uno",
    },
    {
      img: "https://studiopractica.com/wp-content/uploads/2018/09/PRACTICA_PRIVATE_RESIDENCE_IN_SHOREDITCH_LIVING_2-1200x800.jpg",
      type: 3,
      name: "Casa Uno",
    },
    {
      img: "https://behindpictures.com/wp-content/uploads/2022/10/Behind-Pictures_Ca-Na-Grisa-_Camera-02_Post-1-2048x1152.jpg",
      type: 1,
      name: "Casa Uno",
    },
    {
      img: "https://behindpictures.com/wp-content/uploads/2023/09/QUANTUM-TRIBECA-9_00001-1843x2048.jpg",
      type: 4,
      name: "Casa Uno",
    },
    {
      img: "https://behindpictures.com/wp-content/uploads/2023/09/QUANTUM-TRIBECA-178_00000-2048x1152.jpg",
      type: 4,
      name: "Casa Uno",
    },
    {
      img: "https://behindpictures.com/wp-content/uploads/2023/09/QUANTUM-TRIBECA-9_00000-1.jpg",
      type: 1,
      name: "Casa Uno",
    },
    {
      img: "https://behindpictures.com/wp-content/uploads/2022/10/Behind-Pictures_Ca-Na-Grisa-_Camera-05_piscina-2048x1152.jpg",
      type: 5,
      name: "Casa Uno",
    },
    {
      img: "https://behindpictures.com/wp-content/uploads/2023/09/QUANTUM-TRIBECA-9_00001-1843x2048.jpg",
      type: 5,
      name: "Casa Uno",
    },
  ];

  const options = [
    { value: "todos", label: "TODOS", type: 0 },
    { value: "salud", label: "SALUD/BIENESTAR", type: 1 },
    { value: "oficinas", label: "OFICINAS/COMERCIAL", type: 2 },
    { value: "viviendas", label: "VIVIENDAS UNIFAMILIARES", type: 2 },
    { value: "altura", label: "OBRAS EN ALTURA", type: 4 },
    { value: "otros", label: "OTROS PROYECTOS", type: 5 },
    { value: "diseños", label: "DISEÑOS", type: 6 },
  ];

  const [projectsInView, setProjectsInView] = useState(projects);
  const [filter, setFilter] = useState("todos");

  const filterProjects = (filter, type) => {
    if (filter && filter !== 0) {
      const filteredProjects = projects?.filter(
        (project) => project.type === filter
      );
      setProjectsInView(filteredProjects);
      setFilter(type);
    } else {
      setProjectsInView(projects);
      setFilter(type);
    }
  };

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    const selectedType = parseInt(e.target.selectedOptions[0].dataset.type);

    filterProjects(selectedType, selectedValue);
  };

  return (
    <div>
      <FlyerAboutUs />
      <div className="flex flex-wrap justify-center items-center px-4 lg:px-10 xl:px-20 py-14 space-y-4">
        <h1 className="w-full text-center font-semibold text-5xl text-green-800 tracking-[0.2rem] my-4">
          PROYECTOS
        </h1>
        <div className="w-full flex justify-center ">
          <div className="flex w-full lg:hidden">
            <label
              htmlFor="filter"
              className="block lg:hidden text-sm font-medium text-gray-700"
            >
              Tipo de Propiedad
            </label>
            <select
              id="filter"
              name="filter"
              value={filter}
              onChange={handleChange}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  data-type={option.type}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <ul className="hidden lg:flex flex-wrap justify-center lg:justify-between items-center space-x-6 text-xl">
            <li
              className={` ${
                filter === "todos" ? "text-emerald-800 font-bold underline" : ""
              } cursor-pointer hover:text-emerald-800 hover:font-bold`}
              onClick={() => filterProjects(0, "todos")}
            >
              TODOS
            </li>
            <li
              className={`${
                filter === "salud" ? "text-emerald-800 font-bold underline" : ""
              } hover:text-emerald-800 hover:font-bold cursor-pointer`}
              onClick={() => filterProjects(1, "salud")}
            >
              SALUD/BIENESTAR
            </li>
            <li
              className={`${
                filter === "oficinas"
                  ? "text-emerald-800 font-bold underline"
                  : ""
              } hover:text-emerald-800 hover:font-bold cursor-pointer`}
              onClick={() => filterProjects(2, "oficinas")}
            >
              OFICINAS/COMERCIAL
            </li>
            <li
              className={`${
                filter === "viviendas"
                  ? "text-emerald-800 font-bold underline"
                  : ""
              } hover:text-emerald-800 hover:font-bold cursor-pointer `}
              onClick={() => filterProjects(3, "viviendas")}
            >
              VIVIENDAS UNIFAMILIARES
            </li>
            <li
              className={`${
                filter === "altura"
                  ? "text-emerald-800 font-bold underline"
                  : ""
              } hover:text-emerald-800 hover:font-bold cursor-pointer `}
              onClick={() => filterProjects(4, "altura")}
            >
              OBRAS EN ALTURA
            </li>
            <li
              className={`${
                filter === "otros" ? "text-emerald-800 font-bold underline" : ""
              } hover:text-emerald-800 hover:font-bold cursor-pointer`}
              onClick={() => filterProjects(5, "otros")}
            >
              OTROS PROYECTOS
            </li>
            <li
              className={`${
                filter === "diseños"
                  ? "text-emerald-800 font-bold underline"
                  : ""
              } hover:text-emerald-800 hover:font-bold cursor-pointer`}
              onClick={() => filterProjects(6, "diseños")}
            >
              DISEÑOS
            </li>
          </ul>
        </div>
        <div>
          <ProjectsContainer projects={projectsInView} />
        </div>
        <div className="py-6">
          <ContactUs />
        </div>
      </div>

      <NavBar />
      <Footer />
    </div>
  );
};

export default Projects;
