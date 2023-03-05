import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import REACT from "../assets/react.png";
import JAVASCRIPT from "../assets/javascript.png";
import JIRA from "../assets/jira.png";
import GRAPHQL from "../assets/graphql.png";
import MONGODB from "../assets/mongodb.webp";
import MYSQL from "../assets/mysql.png";
import PYTHON from "../assets/python.png";
import JAVA from "../assets/java.png";
import ANGULAR from "../assets/angular.png";
import GITHUB from "../assets/github.png";
import { Fade, Zoom } from "react-awesome-reveal";

const Skills = () => {
  const skills = [
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
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: REACT,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 5,
      src: ANGULAR,
      title: "Angular",
      style: "shadow-red-500",
    },
    {
      id: 6,
      src: GRAPHQL,
      title: "GraphQL",
      style: "shadow-pink-500",
    },
    {
      id: 7,
      src: MONGODB,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: MYSQL,
      title: "MySQL",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: PYTHON,
      title: "Python",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: JAVA,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: JIRA,
      title: "Jira",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: GITHUB,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 
    to-black pt-24  w-full md:h-screen"
    >
      <div
        className="max-w-screen-lg mx-auto p-4 
      flex flex-col justify-center w-full h-full 
      text-white"
      >
        <Fade>
          <div className="text-center">
            <p
              className="text-4xl font-bold inline 
          border-b-4 border-gray-500 p-2"
            >
              Skills
            </p>
            <p className="py-6">These are the technologies I have worked on</p>
          </div>
        </Fade>

        <div
          className="w-full grid grid-cols-2 sm:grid-cols-4
          gap-8 text-center py-5 px-12 sm:px-0"
        >
          {skills.map(({ id, src, title, style }) => {
            return (
              <Zoom key={id}>
                <div
                  className={
                    "shadow-md hover:scale-105 duration-500 py-2 rounded-lg" +
                    " " +
                    style
                  }
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              </Zoom>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
