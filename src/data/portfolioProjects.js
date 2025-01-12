import pomodoroImg from "@assets/proyectos/pomodoro.webp";
import calculatorImg from "@assets/proyectos/calculator.webp";
import drumsMachineImg from "@assets/proyectos/drumsMachine.webp";
import markdownPreviewerImg from "@assets/proyectos/markdownPreviewer.webp";
import randomQuoteMachineImg from "@assets/proyectos/randomQuoteMachine.webp";


const portfolioProjects = [
    {
      name: "25 + 5 Clock",
      src: pomodoroImg,
      link: "https://cdpn.io/pen/debug/eYwYYbz?authentication_hash=PNAvYgowvWvr",
      github: "https://codepen.io/mordok22012/pen/eYwYYbz",
      descripcion: '"Pomodoro 25 + 5 Clock" hecho en React con React-icons.',
      tecnologiasUsadas: "HTML, SCSS, JavaScript, React",
    },
    {
      name: "Calculator",
      src: calculatorImg,
      link: "https://chimerical-truffle-9cf8c1.netlify.app/",
      github: "https://github.com/mordok22012/calculator",
      descripcion:
        "Calculadora hecha con React y Redux-toolkit para la lógica y styled-components para el diseño.",
      tecnologiasUsadas:
        "HTML, styled-components, JavaScript, React, reduxjs/toolkit, mathjs, Git",
    },
    {
      name: "Drum Machine",
      src: drumsMachineImg,
      link: "https://cajaderitmo.netlify.app/",
      github: "https://github.com/mordok22012/Drum-Machine",
      descripcion:
        "Aplicación web que reproduce sonidos de batería y piano en función de la tecla que presiones.",
      tecnologiasUsadas: "HTML, CSS, Bootstrap, JavaScript, React, Git",
    },
    {
      name: "Markdown Previewer",
      src: markdownPreviewerImg,
      link: "https://heroic-platypus-00b6ab.netlify.app/",
      github: "https://github.com/mordok22012/MarkdownPreviewer",
      descripcion: "Aplicación web que convierte contenido markdown a HTML.",
      tecnologiasUsadas: "HTML, Bootstrap, Styled Components, JavaScript, React",
    },
    {
      name: "Random Quote Machine",
      src: randomQuoteMachineImg,
      link: "https://visionary-dolphin-cab2bc.netlify.app/",
      github: "https://github.com/mordok22012/RandomQuoteMachine",
      descripcion:
        "Aplicación web que genera citas famosas aleatorias y permite compartirlas como un tweet.",
      tecnologiasUsadas: "HTML, CSS, Javascript, Jquery, Git",
    },
  ];

  export default portfolioProjects;