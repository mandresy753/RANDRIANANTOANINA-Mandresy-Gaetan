import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Header from "./components/Header";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faCode,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

const links = [
  { name: "Accueil", icon: <FontAwesomeIcon icon={faHouse} /> },
  { name: "Propos", icon: <FontAwesomeIcon icon={faUser} /> },
  { name: "Compétences", icon: <FontAwesomeIcon icon={faCode} /> },
  { name: "Projets", icon: <FontAwesomeIcon icon={faFolderOpen} /> },
];

function App() {
  return (
    <>
    <ThemeToggle/>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Navbar links={links} />
      <Footer/>
  
    </>
  );
}

export default App;