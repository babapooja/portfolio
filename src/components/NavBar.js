import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Switcher from "../utils/Switcher";

const NavBar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "education",
    },
    {
      id: 6,
      link: "contact",
    },
  ];
  const [nav, setNav] = useState(false);

  return (
    <div
      className="flex justify-between items-center w-full h-20 z-50
     text-black dark:text-white fixed bg-white dark:bg-black px-4"
    >
      <div>
        <h1 className="font-signature text-4xl ml-2 mt-3">P.B.B</h1>
      </div>

      {/* top navbar */}
      <ul className="hidden md:flex items-center">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize 
              font-medium dark:text-gray-500 hover:scale-105 hover:font-bold
              duration-200"
            >
              <Link to={link} smooth duration={550}>
                {link}
              </Link>
            </li>
          );
        })}
        <Switcher moonColor='white' sunColor='black' size={40} />
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 dark:text-gray-500 md:hidden dark:hover:text-gray-100 hover:text-gray-500 duration-300"
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center
      items-center absolute top-0 left-0 w-full h-screen 
      bg-white
      dark:bg-gradient-to-b from-black to-gray-800 
      dark:text-gray-500"
        >
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize
              py-6 text-4xl hover:font-bold 
              dark:hover:text-gray-100 hover:duration-200 "
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={550}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
