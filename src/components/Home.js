import React from "react";
import myImage from "../assets/myImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b 
      from-black via-black to-gray-800 "
    >
      <div
        className="flex flex-col items-center justify-center 
      max-w-screen-lg h-full px-4 md:flex-row mx-auto"
      >
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-7xl font-bold
           text-white"
          >
            I am a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
            sit amet ligula. Sed porttitor lectus nibh. Proin eget tortor risus.
            Nulla porttitor accumsan tincidunt.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={550}
              className="group text-white w-fit px-6 
            py-3 my-2 flex items-center rounded-md 
            bg-gradient-to-r from-cyan-500 to-blue-500 
            cursor-pointer"
            >
              Portfolio
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
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
