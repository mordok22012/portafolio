"use client";
import React, { useEffect, useRef } from "react";
import { useStore } from "../store/Store";
import { Label, TextInput, Textarea, Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";

const Contacto = () => {
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
      dispatch({ type: "SET_ACTIVE_SECTION", payload: "#contacto" });
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
      id="contacto"
      className="flex flex-col justify-center items-center mb-4 pt-8"
      ref={sectionRef}
    >
      <div className="w-full min-h-28">
        <h2 className="flex flex-col justify-center items-center font-serif text-2xl font-semibold text-center mb-5 p-2.5 overflow-hidden backface-hidden perspective translate-3d ">
          <p className="block overflow-hidden whitespace-nowrap animate-showup">
            Conéctate conmigo
          </p>
          <p className="block overflow-hidden whitespace-nowrap w-0 animate-reveal">
            <span className="ml-[-400px] animate-slideIn">
              y llevemos tu idea a la realidad
            </span>
          </p>
        </h2>
      </div>
      <form className="w-3/5 md:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="nombre" value="Nombre" className="text-white" />
          <TextInput
            id="nombre"
            icon={IoPersonSharp}
            placeholder="Escribe tu nombre"
            required
          />
        </div>

        <div className="mb-2 block">
          <Label
            htmlFor="email"
            value="Correo Electronico"
            className="text-white"
          />
          <TextInput
            id="email"
            type="email"
            icon={HiMail}
            placeholder="Ingresa tu correo electronico"
            required
          />
        </div>

        <div className="mb-2 block">
          <Label
            htmlFor="mensaje"
            value="Mensaje"
            className="text-white pb-2"
          />
          <Textarea
            id="mensaje"
            placeholder="Escribe tu mensaje..."
            required
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full my-4">
          ¡Hablemos!
        </Button>
      </form>
    </section>
  );
};

export default Contacto;
