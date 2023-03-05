import React from "react";
import myImage from "../assets/myImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import TypewriterComponent from "typewriter-effect";

import "./Home.css";

const Home = () => {
  var intro = "Hi, I am Pooja Baba";
  var messages = [
    "I am a Front-End Developer.",
    "I am a Back-End Developer.",
    "I am a Full Stack Developer.",
  ];
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b 
      from-black via-black to-gray-800 pt-24"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col
        justify-center h-full px-4 pt-20"
      >
        <h2 className="text-4xl sm:text-7xl font-bold text-center text-white">
          {intro}
        </h2>
        <h4
          className="text-2xl text-center my-4
           text-white"
        >
          <TypewriterComponent
            options={{
              strings: messages,
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </h4>

        <div className="flex flex-col justify-evenly items-center md:flex-row">
          <div className="flex flex-col">
            <p className=" text-gray-500 py-4 max-w-md text-justify">
              I have 5 years of experience as a web developer working on
              front-end and back-end. I have worked on various front-end
              frameworks - ReactJS, Angular, Redux and back-end frameworks -
              Flask, Spring Boot, NodeJS. Along with these, I also have
              knowledge of code versionsing tool - git clubbed with git
              versioning system - GitHub, Bitbucket, GitLab. During my industry
              experience, I have worked in Agile Development team focusing on
              SCRUM.
            </p>

            <div className="flex items-center justify-center">
              <Link
                to="projects"
                smooth
                duration={550}
                className="group text-white w-fit px-6 
            py-3 flex items-center rounded-md 
            bg-gradient-to-r from-cyan-500 to-blue-500 
            cursor-pointer"
              >
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={myImage}
              alt="profile"
              className="rounded-2xl mx-auto w-4/5 md:w-full mt-8 md:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
