import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import REACT from "../assets/react.png";
import JAVASCRIPT from "../assets/javascript.png";
import JIRA from "../assets/jira.png";
import GRAPHQL from "../assets/graphql.png";
import GITHUB from "../assets/github.png";
import MONGODB from "../assets/mongodb.webp";
import MYSQL from "../assets/mysql.png";
import PYTHON from "../assets/python.png";
import JAVA from "../assets/java.png";
import ANGULAR from "../assets/angular.png";
import TAILWIND from "../assets/tailwind.png";
import BOOTSTRAP from "../assets/bootstrap.png";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JAVASCRIPT,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: REACT,
      title: "REACT",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: ANGULAR,
      title: "ANGULAR",
      style: "shadow-red-500",
    },

    {
      id: 13,
      src: JIRA,
      title: "JIRA",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: GRAPHQL,
      title: "GRAPHQL",
      style: "shadow-pink-500",
    },
    {
      id: 14,
      src: GITHUB,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: MONGODB,
      title: "MONGODB",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: MYSQL,
      title: "MYSQL",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: PYTHON,
      title: "PYTHON",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: JAVA,
      title: "JAVA",
      style: "shadow-orange-500",
    },

    {
      id: 11,
      src: TAILWIND,
      title: "TAILWIND",
      style: "shadow-sky-500",
    },
    {
      id: 12,
      src: BOOTSTRAP,
      title: "BOOTSTRAP",
      style: "shadow-purple-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 
      to-black w-full h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 
      flex flex-col justify-center w-full h-full 
      text-white"
      >
        <div>
          <p
            className="text-4xl font-bold inline 
          border-b-4 border-gray-500 p-2"
          >
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked on</p>
        </div>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-4
          gap-8 text-center py-8 px-12 sm:px-0"
        >
          {experiences.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={
                  "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                  " " +
                  style
                }
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
