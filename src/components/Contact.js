import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  const endUrl = "https://getform.io/f/2174190c-7d69-40e0-a1f0-00fc9e275982";
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://linkedin.com/in/pooja-baba",
      style: "rounded-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/babapooja",
      style: "rounded-md mx-3",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:babapooja6@gmail.com",
      style: "rounded-md",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/Pooja_Baba_Resume.pdf",
      style: "rounded-md mx-3",
      download: true,
    },
  ];

  return (
    <div
      name="contact"
      className="w-full pt-24 h-fit bg-gradient-to-b to-black from-gray-800 text-white p-4"
    >
      <div className="flex flex-col p4 justify-center max-w-screen-lg mx-auto h-full">
        <div className=" text-center">
          <p className="text-4xl font-bold border-b-4 inline border-gray-400">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center flex-col ">
          <form
            action={endUrl}
            method="POST"
            className="flex flex-col w-full md:w-3/5"
          >
            <input
              className="p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <input
              className="my-4 p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none"
              type="email"
              name="name"
              placeholder="Enter your email"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 
              rounded-md text-white focus:outline-none"
            ></textarea>
            <button
              className="text-white 
            bg-gradient-to-b from-cyan-500 
            to-blue-500 px-6 py-3 my-8 mx-auto flex 
            items-center rounded-md hover:scale-110 
            duration-300"
            >
              Let's talk
            </button>
          </form>
          {/* social links */}
          <div className="flex items-center justify-center lg:hidden">
            <ul className="flex">
              {links.map(({ id, child, href, style, download }) => {
                return (
                  <li
                    key={id}
                    className={
                      "flex items-center h-10 px-3 bg-gray-500  duration-300 hover:scale-125" +
                      " " +
                      style
                    }
                  >
                    <a
                      className="flex justify-between items-center 
              w-full text-white"
                      href={href}
                      download={download}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {child}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
