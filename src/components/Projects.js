import React from "react";
import linkedInClone from "../assets/projects/linkedInClone.png";
import weatherApp from "../assets/projects/weatherApp.png";
import mediumArticle from "../assets/projects/mediumArticle.png";
import resumeBuilder from "../assets/projects/resumeBuilder.png";
import taskManager from "../assets/projects/taskManager.png";
import { Zoom, Fade } from "react-awesome-reveal";
const Projects = () => {
  const projects = [
    {
      id: 1,
      src: weatherApp,
      projectTitle: "Weather App - ReactJS",
      codeLink: "https://github.com/babapooja/weather-app",
      demoLink: "https://reactjs-weather-app-weather-api.netlify.app/",
    },
    {
      id: 5,
      src: linkedInClone,
      projectTitle: "LinkedIn Clone - ReactJS",
      codeLink: "https://github.com/babapooja/linkedin-clone",
      demoLink: "https://linkedin-clone-c2390.web.app/",
    },

    {
      id: 3,
      src: resumeBuilder,
      projectTitle: "Resume Builder - ReactJS",
      codeLink: "https://github.com/babapooja/resume-creator",
      demoLink: "https://babapooja.github.io/resume-creator/",
    },
    {
      id: 4,
      src: taskManager,
      projectTitle: "Task Manager - MEAN",
      codeLink: "https://github.com/babapooja/task-manager-frontend",
      demoLink: "https://task-manager.azurewebsites.net/",
    },
    {
      id: 2,
      src: mediumArticle,
      projectTitle: "Medium Article",
      codeLink: null,
      demoLink:
        "https://babapooja.medium.com/how-to-begin-with-web-development-dc97cf7c3b97",
    },
  ];

  const navigateTo = (link) => {
    window.open(link);
  };

  return (
    <div
      name="projects"
      className="flex flex-col items-center justify-center bg-gradient-to-b to-black from-gray-800 w-full text-white md:h-screen pt-20"
    >
      <div
        className="max-w-screen-lg p-4 pb-10 mx-auto flex flex-col justify-center
      w-full h-fit"
      >
        <Fade>
          <div className="pb-6 text-center">
            <p
              className="text-4xl font-bold inline border-b-4
           border-gray-500 "
            >
              Projects
            </p>
            <p className="pt-6">Check out some of my work right here</p>
          </div>
        </Fade>
        {/* card structure */}

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 
        px-12 sm:px-0"
        >
          {projects.map(({ id, src, codeLink, demoLink, projectTitle }) => {
            return (
              <Zoom key={id}>
                <div className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-200 h-auto">
                  <div
                    className="h-60"
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <p className="text-xl text-center font-medium mt-2">
                    {projectTitle}
                  </p>
                  <div className="flex  items-center justify-center">
                    {codeLink != null ? (
                      <button
                        onClick={() => navigateTo(demoLink)}
                        className="w-1/2 px-6 pb-4 duration-200 hover:font-bold"
                      >
                        <span className="border-b-2 border-gray-400">Demo</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => navigateTo(demoLink)}
                        className=" px-6 pb-4 duration-200 hover:font-bold"
                      >
                        <span className="border-b-2 border-gray-400">
                          Read Article
                        </span>
                      </button>
                    )}
                    {codeLink && (
                      <button
                        onClick={() => navigateTo(codeLink)}
                        className="w-1/2 px-6 pb-4 duration-200 hover:font-bold"
                      >
                        <span className="border-b-2 border-gray-400">Code</span>
                      </button>
                    )}
                  </div>
                </div>
              </Zoom>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
