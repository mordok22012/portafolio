
import avatar from "@assets/webdeveloperflatline.svg";
import { PiHandWavingFill } from "react-icons/pi";

const SobreMi = () => {
 
  return (
    <section
      id="sobreMi"
      className=" flex flex-col justify-start items-center  text-white h-screen   w-full relative"
      
    >
      <div id="img-hero" className="h-3/5 w-full " >
        <img src={avatar} alt="hero img" className="w-full h-full object-fill " />
      </div>

      <div id="text-hero" className="h-2/5 w-11/12 md:w-4/5 px-4">
        <h1 className=" font-bold text-left flex flex-col text-lg md:text-3xl">
          <span className="block">
            Hola <PiHandWavingFill className="inline text-[#fdddca] " />
          </span>
          <span className="block">Soy Joel Dorta</span>
        </h1>
        <p className=" text-pretty text-left text-sm md:text-base ">
          "Desarrollador web. De Buenos Aires, Argentina. Especializado en crear
          aplicaciones interactivas y eficientes utilizando React y
          Redux-toolkit para la logica y Tailwind para el diseño."
        </p>
      </div>
    </section>
  );
};
export default SobreMi;
