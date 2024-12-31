import React, { useEffect, useState } from "react";
import { useStore } from "../store/Store";

const sectionsArray = [
  { id: 0, name: "Sobre mi", href: "#sobreMi" },
  { id: 1, name: "Habilidades", href: "#habilidades" },
  { id: 2, name: "Proyectos", href: "#proyectos" },
  { id: 3, name: "Contacto", href: "#contacto" },
];

export function NavHeader() {
  const { state, dispatch } = useStore();

  
 //handle section active
 const [activeSection, setActiveSection] = useState("");

 useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const {id, offsetTop, offsetHeight} = section;
        
        if(scrollPosition >= offsetTop  && 
          scrollPosition < offsetTop + offsetHeight
        ) {setActiveSection(`#${id}`);}
        

      });

    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  //end
  return (
    <ul
      className={`fixed inset-0 grid place-content-center gap-8 p-6 text-center bg-black md:bg-inherit  transition-transform duration-500 ${
        state.isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative  md:flex md:gap-6 md:p-0 md:transform-none`}
    >
      {sectionsArray.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            // Cierra el menú al hacer clic
            onClick={() => dispatch({ type: "navOnOf", payload: false })} 
            className={`opacity-80 hover:opacity-100 ${
              activeSection === item.href ? "nav_active" : ""
            }`}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function NavFooter() {
  //handle section active
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const {id, offsetTop, offsetHeight} = section;
        
        if(scrollPosition >= offsetTop  && 
          scrollPosition < offsetTop + offsetHeight
        ) {setActiveSection(`#${id}`);}
        

      });

    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])


  return (
    <ul className="grid grid-cols-1 gap-2">
      {sectionsArray.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            className={`opacity-80 hover:opacity-100  ${
              activeSection === item.href ? "nav_active" : ""
            }`}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
