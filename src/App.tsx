import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Header from './components/Header'
import Projects from './Pages/Projects'
import About from './Pages/About'
import Navbar from './components/Navbar';

const links = ["Home", "About", "Skills", "Projects"]

function App() {
  return (
    <>
      <div>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Navbar links={links}/>
        
      </div>
    
    </>
  )
}

export default App
