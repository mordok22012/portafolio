import React from "react";
import { skills } from "@data/skills";


const Skills = () => {
 

  return (
    <section
      id="habilidades"
      className="w-full  flex flex-col justify-center items-center"
     
    >
      <h2 className="text-4xl font-bold mb-1 mt-12">Habilidades</h2>
      <div
        id="cuadrillaContainer"
        className="grid w-3/4 max-w-screen-lg grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 sm:p-8 shadow-custom rounded-md mb-8 "
      >
        {skills.map((skill, index) => (
          <div key={index} className="flex justify-center items-center hover:scale-110 transition-transform duration-300  ">
            <img
              src={skill.src}
              className="max-w-[80px] sm:max-w-[100px] object-contain"
              title={skill.name}
              alt={skill.name}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;