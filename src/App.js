import Education from "./components/Education";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import Switcher from "./utils/Switcher";

function App() {
  return (
    <div className="relative">
      <NavBar />
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <SocialLinks />
      <div
        className="hidden fixed lg:flex flex-row-reverse justify-between items-center w-45 h-14 px-4 bg-gray-500 bottom-0 right-0 mr-[-122px] hover:rounded-md
    hover:mr-[-10px] duration-300 text-white rounded-md "
      >
        <p
          className="flex justify-between items-center 
              w-full text-white font-medium"
        >
          Switch Mode
        </p>
        <Switcher size={40} />
      </div>
    </div>
  );
}

export default App;
