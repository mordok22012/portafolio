import "./App.css";
import { Store } from "./store/Store";
import Header from "./components/Header";
import SobreMi from "./components/SobreMi";
import Habilidades from "@components/skills/Skills.jsx";
import Proyectos from "./components/Proyectos";
import Contact from '@components/contact/contact.jsx'
import Footer from "./components/Footer";


function App() {
  return (
    <Store >
      <div className=" min-h-screen  mx-auto ">
        <div className="fixed left-0 top-0 inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
          <Header />
          <SobreMi />
          <Habilidades />
          <Proyectos autoSlide={false} />
          <Contact />
          <Footer />
      </div>
    </Store>
  );
}

export default App;
