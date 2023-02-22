import Education from "./components/Education";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Education />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
