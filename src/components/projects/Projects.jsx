"use client";
import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { SiNetlify } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import portfolioProjects from "@data/portfolioProjects.js"


const Projects = ({ autoSlide = false, autoSlideInterval = 4000 }) => {
    
//   const [proyectoActual, setProyectoActual] = useState(0);
    const [currentProject, setCurrentProject] = useState(0);

  // Cambiar proyecto logica
  const handleProjectChange = (direction) => {
    setCurrentProject((prev) =>
      direction === "prev"
        ? prev === 0
          ? portfolioProjects.length - 1
          : prev - 1
        : prev === portfolioProjects.length - 1
        ? 0
        : prev + 1
    );
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(() => handleProjectChange("next"), autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <section
      id="proyectos"
      className="flex flex-col justify-center items-center my-10 md:my-12"
    >
      <h2 className="text-4xl font-bold mb-1 mt-12">Proyectos</h2>

      {/* Información del proyecto actual */}
      <div className="mb-4 text-center">
        <h3 className="text-xl font-bold">{portfolioProjects[currentProject].name}</h3>
        <p className="text-pretty px-4">{portfolioProjects[currentProject].descripcion}</p>
      </div>

      {/* Slider */}
      <div className="w-3/5 md:max-w-lg overflow-hidden relative rounded-md">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentProject * 100}%)` }}
        >
          {portfolioProjects.map((project, i) => (
            <img key={i} src={project.src} alt={project.descripcion} />
          ))}
        </div>

        {/* Controles */}
        <div className="absolute inset-0 flex items-center justify-between p-2">
          <button
            onClick={() => handleProjectChange("prev")}
            aria-label="Proyecto anterior"
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <FaChevronLeft size={30} />
          </button>
          <button
            onClick={() => handleProjectChange("next")}
            aria-label="Proyecto siguiente"
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <FaChevronRight size={30} />
          </button>
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-2 right-0 left-0 flex items-center justify-center gap-2">
          {portfolioProjects.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 rounded-full ${
                currentProject === i ? "bg-gray-800 p-1" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Enlaces */}
      <Button.Group className="mt-2">
        <a
          href={portfolioProjects[currentProject].link}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
          aria-label="Ver proyecto en Netlify"
        >
          <SiNetlify size={'1.5em'} className="text-2xl opacity-80 hover:opacity-100" />
        </a>

        <a
          href={portfolioProjects[currentProject].github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver proyecto en GitHub"
        >
          <IoLogoGithub size={'1.5em'} className="text-2xl opacity-80 hover:opacity-100" />
        </a>
      </Button.Group>
    </section>
  );
};

export default Projects;
