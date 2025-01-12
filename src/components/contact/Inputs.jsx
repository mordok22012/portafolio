import React from "react";
import { Label, Textarea, Button } from "flowbite-react";

const FormInput = ({
  icon: Icon,
  type = "text",
  placeholder = "",
  labelValue,
  register,
  inputName,
  validationRules,
  
}) => {
  return (
    <div className="mb-2 block">
      <Label htmlFor={inputName} value={labelValue} className="text-white" />
      <div className="flex">
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {Icon && <Icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />}
          </div>
          <input
            type={type}
            placeholder={placeholder}
            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm pl-10 rounded-lg"
            {...register(inputName, validationRules)}
          />
        </div>
      </div>
      

    </div>
  );
};

export { FormInput };

// // pattern of correo pattern: {
//             value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//             message: "Correo no válido",
//           },



