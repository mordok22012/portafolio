import React,{ useRef, useEffect, useState } from "react";
import {NavHeader} from "./nav";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useStore } from "../store/Store";



const Header = () => {
  const { state, dispatch } = useStore();
  const headerRef = useRef(null); // Referencia al header
  let previousScrollY = useRef(0); // Variable local para guardar la posición previa del scroll


  // Scroll Effect -- show hide navigation menu
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const header = headerRef.current;
      
      if(header) {
        if (currentScrollY < previousScrollY.current) {
          // Usuario desplazándose hacia arriba
          header.style.top = "0px"; // Mostrar header
        }else {
           // Usuario desplazándose hacia abajo
           header.style.top = "-100px"; // Ocultar header
        }
      }

      previousScrollY.current = currentScrollY; // Actualiza la posición previa
    };

    // Añade el event listener
    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Se ejecuta una sola vez al montar el componente

  //end


  return (
    
    <header 
      ref={headerRef} 
      className={`md:sticky md:top-[0px] z-50 transition duration-300 ease-in-out  `}
    >
      <nav  className="bg-[#100825] md:opacity-90">
        <div className=" w-[min(90%,_1200px)] mx-auto flex items-center justify-between md:justify-center h-10 relative z-10">
          {/* Toggle para menú */}
          <button 
            onClick={() => dispatch({ type: "navOnOf", payload: !state.isOpen })}
            className=" fixed  size-9 bg-cover cursor-pointer transition-transform duration-500 z-10 md:hidden"
          >
          {state.isOpen ? <ImCross/>  : <GiHamburgerMenu/>}
          </button>
        
        
           {/* Menú de navegación */}
          <NavHeader  />
        </div>
      </nav>
    </header>
  );
};

export default Header;
