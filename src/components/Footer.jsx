"use client";

import { Avatar, Button, Badge } from "flowbite-react";
import logo from "../assets/me.webp";
import linkedinIcon from "../assets/icons/linkedin.svg";
import gitHubIcon from "../assets/icons/github.svg";
import reactIcon from "../assets/icons/react.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import reactIconsWeb from "../assets/icons/reactIcon.svg";
import flowbiteIcon from "../assets/icons/flowbiteReact.svg";
//herramientas principales usadas para crear el sitio
const TECNOLOGIAS = [
  {
    name: "React",
    icon: reactIcon,
    clase: "animate-[spin_20s_linear_infinite]",
  },

  {
    name: "Tailwind",
    icon: tailwindIcon,
  },

  {
    name: "Flowbite-React",
    icon: flowbiteIcon,
  },

  {
    name: "React-icon",
    icon: reactIconsWeb,
    clase: "animate-[spin_20s_linear_infinite]",
  },
];

export default function Footer() {
  return (
    <footer className=" relative">
      <hr className="border-0 h-0.5 text-center bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-start p-2">
          <Avatar img={logo} rounded>
            <div className="space-y-1 font-medium dark:text-white">
              <div>Agustin Dorta</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Programador Web
              </div>
            </div>
          </Avatar>

          <p className="text-pretty mt-4 md:max-w-80">
            Transformando ideas en realidad a traves de codigo limpio y
            soluciones innovadoras
          </p>

          <Button.Group className="mt-2">
            <a
              href="www.linkedin.com/in/joel-agustín-dorta-49b153216"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <img
                src={linkedinIcon}
                alt="linkedin"
                className=" size-6 md:size-6 opacity-80 hover:opacity-100"
              />
            </a>

            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src={gitHubIcon}
                alt="GitHub"
                className="size-6 md:size-6 opacity-80 hover:opacity-100"
              />
            </a>
          </Button.Group>
        </div>

        <div className="flex justify-between p-2">
          <div>
            <h3 className="mb-2 text-lg md:text-xl font-semibold ">
              Navegacion
            </h3>

            
          </div>

          <div>
            <h3 className="mb-2 text-lg md:text-xl font-semibold ">
              Sobre esta Web
            </h3>
            <p>Creado con</p>
            <ul>
              {TECNOLOGIAS.map((elemento, index) => (
                <li key={index} className="flex gap-y-2">
                  <img
                    src={elemento.icon}
                    alt={elemento.name}
                    className={`size-5 ${
                      elemento.hasOwnProperty("clase") ? elemento.clase : ""
                    }`}
                  />
                  <Badge size="sm" className="bg-inherit text-current">
                    {elemento.name}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* 
    <NavItems navPosition= 'footer' /> 

*/