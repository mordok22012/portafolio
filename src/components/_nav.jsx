import React, { useEffect, useState } from "react";
import { useStore } from "../store/Store";

const sections = [
  { id: 0, name: "Sobre mi", href: "#sobreMi" },
  { id: 1, name: "Habilidades", href: "#habilidades" },
  { id: 2, name: "Proyectos", href: "#proyectos" },
  { id: 3, name: "Contacto", href: "#contacto" },
];

const NavItem = ({ href, name }) => {
  const { state } = useStore();
  return (
    <a
      href={href}
      className={`opacity-80 hover:opacity-100 ${
        state.activeSection === href ? "nav_active" : ""
      } `}
    >
      {name}
    </a>
  );
};

const NavItems = ({ navPosition }) => {
  let stylesNav;
  switch (navPosition) {
    case "header":
      stylesNav =
        " flex-row md:flex-col absolute md:static md:justify-center   w-full md:w-auto left-0 top-16 md:text-xl gap-y-4  text-white ";
      break;
    case "footer":
      stylesNav = "flex-col gap-y-1";
      break;
    default:
      stylesNav = "";
      break;
  }

  return (
    <ul className={` flex  ${stylesNav}`}>
      {sections.map((item) => (
        <NavItem key={item.id} href={item.href} name={item.name} />
      ))}
    </ul>
  );
};

export default NavItems;
