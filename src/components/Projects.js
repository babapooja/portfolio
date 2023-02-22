import React from "react";
import linkedInClone from "../assets/projects/linkedInClone.png";
import mediumArticle from "../assets/projects/mediumArticle.png";
import resumeBuilder from "../assets/projects/resumeBuilder.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: linkedInClone,
      codeLink: "https://github.com/babapooja/linkedin-clone",
      demoLink: "",
    },
    {
      id: 2,
      src: mediumArticle,
      codeLink: null,
      demoLink:
        "https://babapooja.medium.com/how-to-begin-with-web-development-dc97cf7c3b97",
    },
    {
      id: 3,
      src: resumeBuilder,
      codeLink: "https://github.com/babapooja/resume-creator",
      demoLink: "https://babapooja.github.io/resume-creator/",
    },
  ];

  const navigateTo = (link) => {
    window.open(link);
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black 
      to-gray-800 w-full text-white md:h-screen pt-20"
    >
      <div
        className="max-w-screen-lg p-4 pb-10 mx-auto flex flex-col justify-center
      w-full h-fit"
      >
        <div className="pb-6 text-center">
          <p
            className="text-4xl font-bold inline border-b-4
           border-gray-500 "
          >
            Projects
          </p>
          <p className="pt-6">Check out some of my work right here</p>
        </div>
        {/* card structure */}

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 
        px-12 sm:px-0"
        >
          {projects.map(({ id, src, codeLink, demoLink }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <div className="object-cover h-3/4 hover:scale-105 duration-200">
                  <img src={src} alt="" className="rounded-md h-full w-full" />
                </div>
                <div className="flex items-center justify-center">
                  {codeLink != null ? (
                    <button
                      onClick={() => navigateTo(demoLink)}
                      class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:font-bold"
                    >
                      Demo
                    </button>
                  ) : (
                    <button
                      onClick={() => navigateTo(demoLink)}
                      class=" px-6 py-3 m-4 duration-200 hover:scale-105 hover:font-bold"
                    >
                      Read Article
                    </button>
                  )}
                  {codeLink && (
                    <button
                      onClick={() => navigateTo(codeLink)}
                      class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:font-bold"
                    >
                      Code
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
