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
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      textAreaMessage: "",
    },
  });

  // Estado personalizado para manejar el estado del envío
  const [formStatus, setFormStatus] = useState("idle"); // 'idle', 'success', 'error'

  const sendEmail = async (templateParams) => {
    try {
      await emailjs.send(
        "service_zecr1d9",
        "template_zl2yuef",
        templateParams,
        "WmGeMTF2az-vQe4Jy"
      );
      setFormStatus("success"); // Cambiar el estado a éxito
    } catch (error) {
      setFormStatus("error"); // Cambiar el estado a error
      throw new Error("Error al enviar el correo");
    }
  };

  const onSubmit = async (data) => {
    const templateParams = {
      from_name: data.name,
      to_name: "agustin",
      email: data.email,
      message: data.textAreaMessage,
    };

    try {
      await sendEmail(templateParams);

      // Limpiar el formulario después de 3 segundos
      setTimeout(() => {
        reset();
        setFormStatus("idle"); // Restaurar el estado inicial
      }, 3000);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-3/5 md:w-1/2">
      <FormInput
        type="text"
        placeholder="Ingresa tu nombre"
        inputName="name"
        labelValue="Nombre"
        icon={IoPersonSharp}
        register={register}
        validationRules={{
          required: "Nombre requerido",
          maxLength: { value: 20, message: "Nombre no debe ser mayor a 20 caracteres" },
          minLength: { value: 2, message: "Nombre debe ser mayor a 2 caracteres" },
          pattern: {
            value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
            message: "El nombre solo puede contener letras",
          },
        }}
        errors={errors}
      />
      {errors.name && <span className="block text-rose-600 text-xs">{errors.name.message}</span>}

      <FormInput
        type="email"
        placeholder="Ingresa tu correo electrónico"
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
      {errors.email && <span className="block text-rose-600 text-xs">{errors.email.message}</span>}

      <div className="mb-2 block">
        <Label htmlFor="textAreaMessage" value="Mensaje" className="text-white pb-2" />
        <Textarea
          id="mensaje"
          placeholder="Escribe tu mensaje..."
          rows={4}
          {...register("textAreaMessage", {
            required: "El mensaje es obligatorio",
            minLength: { value: 10, message: "El mensaje debe tener al menos 10 caracteres" },
            maxLength: { value: 200, message: "El mensaje no debe exceder 200 caracteres" },
          })}
        />
        {errors.textAreaMessage && (
          <span className="block text-rose-600 text-xs">{errors.textAreaMessage.message}</span>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || formStatus === "success"}
        className={`w-full my-4 rounded ${
          formStatus === "success" ? "bg-green-500" : ""
        } text-white`}
      >
        {isSubmitting
          ? "Enviando..."
          : formStatus === "success"
          ? "Enviado"
          : formStatus === "error"
          ? "Error, inténtalo de nuevo"
          : "¡Hablemos!"}
      </Button>
    </form>
  );
};

export default ContactForm;



