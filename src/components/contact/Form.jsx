import React, { useState } from "react";
import { Label, Textarea, Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { FormInput } from "./Inputs";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      textAreaMessage: "",
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      to_name: "agustin",
      email: data.email,
      message: data.textAreaMessage,
    }

    emailjs.send(
      "service_zecr1d9", // Reemplaza con tu Service ID
      "template_zl2yuef", // Reemplaza con tu Template ID
      templateParams,
      "WmGeMTF2az-vQe4Jy" // Reemplaza con tu Public Key
    )
    .then((response) => {
      setIsSubmitted(true);
      console.log("Correo enviado con éxito:", response.status, response.text);
      console.log("body form: ", data );
      setTimeout(() => {
        setIsSubmitted(false);
        reset(); // Opcional, para limpiar los campos del formulario
      }, 3000);

    },
    (error) => {
      console.error("Error al enviar correo:", error);
    }
    )
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 md:w-1/2">
      <FormInput
        type="text"
        placeholder="Ingresa tu nombre "
        inputName="name"
        labelValue="Nombre"
        icon={IoPersonSharp}
        register={register}
        validationRules={{
          required: "Nombre requerido",
          maxLength: {
            value: 20,
            message: "Nombre no debe ser mayor a 20 caracteres",
          },
          minLength: {
            value: 2,
            message: "Nombre debe ser mayor a 2 caracteres",
          },
          pattern: {
            value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, // Solo letras, incluyendo acentos y espacios
            message: "El nombre solo puede contener letras",
          },
        }}
        errors={errors}
      />
      {errors.name && (
        <span className="block text-rose-600 text-xs">
          {errors.name.message}
        </span>
      )}
      <FormInput
        type="email"
        placeholder="Ingresa tu correo electrónico "
        inputName="email"
        labelValue="Correo"
        icon={HiMail}
        register={register}
        validationRules={{
          required: "Correo es requerido",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Correo no válido",
          },
        }}
        errors={errors}
      />
      {errors.email && (
        <span className="block text-rose-600 text-xs">
          {errors.email.message}
        </span>
      )}

      <div className="mb-2 block">
        <Label htmlFor="textAreaMessage" value="Mensaje" className="text-white pb-2" />
        <Textarea
          id="mensaje"
          placeholder="Escribe tu mensaje..."
          rows={4}
          {...register("textAreaMessage", {
            required: "El mensaje es obligatorio",
            minLength: {
              value: 10,
              message: "El mensaje debe tener al menos 10 caracteres",
            },
            maxLength: {
              value: 200,
              message: "El mensaje no debe exceder 200 caracteres",
            },
          })}
        />
        {errors.textAreaMessage && (
          <span className="block text-rose-600 text-xs">
            {errors.textAreaMessage.message}
          </span>
        )}
      </div>

      <Button
        type="submit"
        className={`w-full my-4 rounded ${
          isSubmitted ? "bg-green-500" : ""
        } text-white`}
      >
        {isSubmitted ? "Enviado" : "¡Hablemos!"}
      </Button>
    </form>
  );
};

export default ContactForm;
