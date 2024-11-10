import React, { useEffect, useState } from "react";
import { useStore } from "../store/Store";

const sections = [
  { id: 0, name: "Sobre mi", href: "#sobreMi" },
  { id: 1, name: "Habilidades", href: "#habilidades" },
  { id: 2, name: "Proyectos", href: "#proyectos" },
  { id: 3, name: "Contacto", href: "#contacto" },
];

export function NavHeader() {
  const { state } = useStore();
  return (
    <ul className= {`fixed inset-0 grid place-content-center gap-8 p-6 text-center bg-indigo-400 transition-transform duration-500 ${state.isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:flex md:gap-6 md:p-0 md:transform-none`}>
      {sections.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className={`opacity-80 hover:opacity-100 ${
              state.activeSection === item.href ? "nav_active" : ""
            }`}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

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
      stylesNav = "  ";
      break;
    case "footer":
      stylesNav = "";
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
