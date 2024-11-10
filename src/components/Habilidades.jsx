import React, { useEffect, useRef } from "react";
import { useStore } from "../store/Store";

import html5Icon from "../assets/icons/HTML5.svg";
import css3Icon from "../assets/icons/css3.svg";
import sassIcon from "../assets/icons/sass.svg";
import bootstrapIcon from "../assets/icons/bootstrap.svg";
import styledComponentsIcon from "../assets/icons/styledComponents.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import jQueryIcon from "../assets/icons/jQuery.svg";
import reactIcon from "../assets/icons/react.svg";
import reduxIcon from "../assets/icons/redux.svg";
import gitIcon from "../assets/icons/git.svg";
import gitHubIcon from "../assets/icons/github.svg";

const Habilidades = () => {
  const HABILIDADES = [
    {
      name: "Git",
      src: gitIcon,
    },

    {
      name: "gitHub",
      src: gitHubIcon,
    },

    {
      name: "HTML5",
      src: html5Icon,
    },

    {
      name: "css3",
      src: css3Icon,
    },

    {
      name: "Sass",
      src: sassIcon,
    },

    {
      name: "Bootstrap",
      src: bootstrapIcon,
    },

    {
      name: "Styled Components",
      src: styledComponentsIcon,
    },

    {
      name: "Tailwind",
      src: tailwindIcon,
    },

    {
      name: "Javascript",
      src: javascriptIcon,
    },

    {
      name: "jQuery",
      src: jQueryIcon,
    },

    {
      name: "React",
      src: reactIcon,
    },

    {
      name: "Redux",
      src: reduxIcon,
    },
  ];
  const { dispatch } = useStore();
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const section = sectionRef.current;
    const scrollPosition = window.scrollY + 100;
    const { offsetTop, offsetHeight } = section;

    if (
      scrollPosition >= offsetTop &&
      scrollPosition < offsetTop + offsetHeight
    ) {
      dispatch({ type: "SET_ACTIVE_SECTION", payload: "#habilidades" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="habilidades"
      className="w-full  flex flex-col justify-center items-center"
      ref={sectionRef}
    >
      <h2 className="text-4xl font-bold mb-1 mt-12">Habilidades</h2>
      <div
        id="cuadrillaContainer"
        className="grid w-3/4 grid-cols-4 gap-3 p-24 pt-8 pb-8 shadow-custom rounded-md mb-8 "
      >
        {HABILIDADES.map((habilidad, index) => (
          <div key={index} className="flex justify-center items-center  ">
            <img
              src={habilidad.src}
              className="w-full h-full"
              alt={habilidad.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
