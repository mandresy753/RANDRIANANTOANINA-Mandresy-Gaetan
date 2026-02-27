import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Header from "./components/Header";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Navbar from "./components/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faCode,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

const links = [
  { name: "Home", icon: <FontAwesomeIcon icon={faHouse} /> },
  { name: "About", icon: <FontAwesomeIcon icon={faUser} /> },
  { name: "Skills", icon: <FontAwesomeIcon icon={faCode} /> },
  { name: "Projects", icon: <FontAwesomeIcon icon={faFolderOpen} /> },
];

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />

      <Navbar links={links} />
    </>
  );
}

export default App;