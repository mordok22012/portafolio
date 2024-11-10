import React, { useEffect, useRef } from "react";
import { useStore } from "../store/Store";
import avatar from "../assets/webdeveloperflatline.svg";
import { PiHandWavingFill } from "react-icons/pi";

const SobreMi = () => {
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
      dispatch({type: 'SET_ACTIVE_SECTION', payload: '#sobreMi'})
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="sobreMi"
      className=" relative text-white h-lvh grid grid-cols-12 grid-rows-12 "
      ref={sectionRef}
    >
      <div id="logoContainer " className="absolute w-3/4 h-lvh top-0 left-0">
        <img src={avatar} alt="agustin dorta" loading="auto" type="img/svg" />
      </div>
      <div className=" row-start-2 row-end-10 col-start-9 col-end-13 flex flex-col  p-4 pl-0 mt-8">
        <h1 className="sm:text-4xl text-2xl font-bold text-left flex flex-col">
          <span className="block">
            Hola <PiHandWavingFill className="inline text-[#fdddca] " />
          </span>
          <span className="block">Soy Joel Dorta</span>
        </h1>
        <p className=" text-pretty text-[2vw] text-left ">
          "Desarrollador web. De Buenos Aires, Argentina. Especializado en crear
          aplicaciones interactivas y eficientes utilizando React y
          Redux-toolkit para la logica y Tailwind para el diseño."
        </p>
      </div>
    </section>
  );
};
export default SobreMi;
