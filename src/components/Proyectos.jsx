"use client";
import React, { useEffect, useRef, useState } from "react";
import { useStore } from "../store/Store";
import { Button } from "flowbite-react";
import { SiNetlify } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import pomodoroImg from "../assets/proyectos/pomodoro.webp";
import calculatorImg from "../assets/proyectos/calculator.webp";
import drumsMachineImg from "../assets/proyectos/drumsMachine.webp";
import markdownPreviewerImg from "../assets/proyectos/markdownPreviewer.webp";
import randomQuoteMachineImg from "../assets/proyectos/randomQuoteMachine.webp";

const Proyectos = ({ autoSlide = false, autoSlideInterval = 4000 }) => {
  const [proyectoActual, setProyectoActual] = useState(0);
  const { dispatch } = useStore();
  const sectionRef = useRef(null);

  const PROYECTOS = [
    {
      name: "25 + 5 Clock",
      src: pomodoroImg,
      link: "https://cdpn.io/pen/debug/eYwYYbz?authentication_hash=PNAvYgowvWvr",
      github: "https://codepen.io/mordok22012/pen/eYwYYbz",
      descripcion: '"Pomodoro 25 + 5 Clock" hecho en React con React-icons. ',
      tecnologiasUsadas: "HTML, SCSS, JavaScript, React",
    },
    {
      name: "Calculator",
      src: calculatorImg,
      link: "https://chimerical-truffle-9cf8c1.netlify.app/",
      github: "https://github.com/mordok22012/calculator",
      descripcion:
        "Calculadora hecha con React y Redux-toolkit para la logica y styled-components para el diseño.",
      tecnologiasUsadas:
        "HTML, styled-components, JavaScript, React, reduxjs/toolkit, mathjs, Git",
    },
    {
      name: "Drum Machine",
      src: drumsMachineImg,
      link: "https://cajaderitmo.netlify.app/",
      github: "https://github.com/mordok22012/Drum-Machine",
      descripcion:
        "Aplicacion web  que reproduce sonidos de bateria y piano en funcion de la tecla que presiones.",
      tecnologiasUsadas: "HTML, CSS, Bootstrap, JavaScript, React, Git",
    },
    {
      name: "Markdown Previewer",
      src: markdownPreviewerImg,
      link: "https://heroic-platypus-00b6ab.netlify.app/",
      github: "https://github.com/mordok22012/MarkdownPreviewer",
      descripcion:
        "Aplicación web que convierte contenido markdown a html.",
      tecnologiasUsadas:
        "HTML, bootstrap, Styled Components, JavaScript, React, Market, Git",
    },
    {
      name: "Random Quote Machine",
      src: randomQuoteMachineImg,
      link: "https://visionary-dolphin-cab2bc.netlify.app/",
      github: "https://github.com/mordok22012/RandomQuoteMachine",
      descripcion:
        "Aplicación web que genera citas famosas aleatorias y permite compartirlas como un tweet.",
      tecnologiasUsadas: "HTML, CSS, Javascript, Jquery, Git",
    },
  ];

// logic for the project slider
  const prev = () =>
    setProyectoActual((proyectoActual) =>
      proyectoActual === 0 ? PROYECTOS.length - 1 : proyectoActual - 1
    );

  const next = () =>
    setProyectoActual((proyectoActual) =>
      proyectoActual === PROYECTOS.length - 1 ? 0 : proyectoActual + 1
    );

// useEffect for project slide
  useEffect(() => {
    if (!autoSlide) {
      return;
    }
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
//end of the logic

  const handleScroll = () => {
    const section = sectionRef.current;
    const scrollPosition = window.scrollY + 100;
    const { offsetTop, offsetHeight } = section;

    if (
      scrollPosition >= offsetTop &&
      scrollPosition < offsetTop + offsetHeight
    ) {
      dispatch({ type: "SET_ACTIVE_SECTION", payload: "#proyectos" });
    }
  };
//useEffect for handleScroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="proyectos"
      className="flex flex-col justify-center items-center my-10 md:my-12"
      ref={sectionRef}
    >
      <h2 className="text-4xl font-bold mb-1 mt-12">Proyectos</h2>

      <div className="mb-4 ">
        <h3 className="text-xl font-bold text-center">{PROYECTOS[proyectoActual].name}</h3>
        <p className="text-pretty text-center px-2">{PROYECTOS[proyectoActual].descripcion}</p>
      </div>

      <div className=" w-3/5 md:max-w-lg overflow-hidden relative  rounded-md">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${proyectoActual * 100}%)` }}
        >
          {PROYECTOS.map((proyecto, i) => (
            <img key={i} src={proyecto.src} alt={proyecto.descripcion} />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-between p-2">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <FaChevronLeft size={30} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <FaChevronRight size={30} />
          </button>
        </div>

        <div className="absolute bottom-2 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {PROYECTOS.map((_, i) => (
              <div
                key={i}
                className={`
                    transition-all w-2 h-2 bg-[#cfc9c9] rounded-full ${
                      proyectoActual === i ? "p-1" : "bg-opacity-50"
                    }
                    `}
              />
            ))}
          </div>
        </div>
      </div>

      <Button.Group className="mt-2">
        <a
          href={PROYECTOS[proyectoActual].link}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <SiNetlify className=" size-9 md:size-11 opacity-80 hover:opacity-100" />
        </a>

        <a
          href={PROYECTOS[proyectoActual].github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoGithub className=" size-9 md:size-11 opacity-80 hover:opacity-100" />
        </a>
      </Button.Group>
    </section>
  );
};

export default Proyectos;
