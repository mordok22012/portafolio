import React,{ useState } from "react";
import {NavHeader} from "./nav";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useStore } from "../store/Store";

const Header = () => {
  const { state, dispatch } = useStore();

  return (
    
    <header >
      <nav className=''>
        <div className=" w-[min(90%,_1200px)] mx-auto flex items-center justify-between h-20 relative z-10">
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
