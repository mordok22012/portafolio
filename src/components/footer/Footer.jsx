"use client";
import React from "react";
import { Avatar, Button, Badge } from "flowbite-react";
import logo from "@assets/me.webp";
import linkedinIcon from "@assets/icons/linkedin.svg";
import gitHubIcon from "@assets/icons/github.svg";
import reactIcon from "@assets/icons/react.svg";
import tailwindIcon from "@assets/icons/tailwind.svg";
import reactIconsWeb from "@assets/icons/reactIcon.svg";
import flowbiteIcon from "@assets/icons/flowbiteReact.svg";
import { NavFooter } from "@components/nav.jsx";

// Herramientas principales usadas para crear el sitio
const TECNOLOGIAS = [
  { name: "React", icon: reactIcon, clase: "animate-[spin_20s_linear_infinite]" },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "Flowbite-React", icon: flowbiteIcon },
  { name: "React-icon", icon: reactIconsWeb, clase: "animate-[spin_20s_linear_infinite]" },
];

const SocialLink = ({ href, icon, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="mr-4">
    <img
      src={icon}
      alt={alt}
      className="size-6  opacity-80 hover:opacity-100"
    />
  </a>
);

const TechnologyItem = React.memo(({ icon, name, clase }) => (
    <li className="flex items-center gap-2">
      <img src={icon} alt={name} className={`size-5 ${clase || ""}`} />
      <Badge size="sm" className="bg-inherit text-current">
        {name}
      </Badge>
    </li>
  ));

  const AvatarContent = React.memo(() => (
    <div className="space-y-1 font-medium dark:text-white">
      <div>Agustín Dorta</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">Programador Web</div>
    </div>
  ));
  
  

export default function Footer() {
  return (
    <footer className="relative">
      <hr className="border-0 h-0.5 text-center bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {/* Sección Izquierda */}
        <div className="flex flex-col justify-center items-start p-2">
          <Avatar img={logo} rounded>
            <AvatarContent />
          </Avatar>

          <p className="text-pretty mt-4 md:max-w-80">
            Transformando ideas en realidad a través de código limpio y soluciones innovadoras
          </p>

          <Button.Group className="mt-2">
            <SocialLink
              href="https://www.linkedin.com/in/joel-agustín-dorta-49b153216"
              icon={linkedinIcon}
              alt="LinkedIn"
            />
            <SocialLink
              href="https://github.com/mordok22012"
              icon={gitHubIcon}
              alt="GitHub"
            />
          </Button.Group>
        </div>

        {/* Sección Derecha */}
        <div className="flex flex-wrap justify-between p-2 gap-4">
          {/* Navegación */}
          <div>
            <h3 className="mb-2 text-lg md:text-xl font-semibold">Navegación</h3>
            <NavFooter />
          </div>

          {/* Sobre la Web */}
          <div>
            <h3 className="mb-2 text-lg md:text-xl font-semibold">Sobre esta Web</h3>
            <p>Creado con:</p>
            <ul>
              {TECNOLOGIAS.map((tecnologia, index) => (
                <TechnologyItem key={index} {...tecnologia} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
