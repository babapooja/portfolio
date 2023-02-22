import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const Experience = () => {
  const educationDetails = [
    {
      companyName: "Georgia State University, Atlanta",
      startDate: "Jan 2022",
      endDate: "Present",
      position: "Graduate Teaching Assistant",
      link: "https://www.gsu.edu/",
    },
    {
      companyName: "ZS Associates, India",
      startDate: "Dec 2020",
      endDate: "Dec 2021",
      position: "Associate Consultant",
      link: "https://www.zs.com/",
    },
    {
      companyName: "ZS Associates, India",
      startDate: "Mar 2018",
      endDate: "Dec 2020",
      position: "Associate | Software Developer",
      link: "https://www.zs.com/",
    },
    {
      companyName: "Logiquad Solutions, India",
      startDate: "Jun 2017",
      endDate: "Mar 2018",
      position: "Jr. Software Developer",
      link: "https://logiquad.com/",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b to-gray-800 from-black  pt-20  w-full h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="pb-20 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        {educationDetails.map(
          ({ companyName, startDate, endDate, position, link }) => {
            return (
              <>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="hidden md:flex">
                      <FaLaptopCode size={35} />
                    </div>
                    <a
                      className="md:mx-3 font-bold text-lg md:text-xl border-b-2 border-gray-400"
                      target="_blank"
                      href={link}
                      rel="noreferrer"
                    >
                      {companyName}
                    </a>
                  </div>
                  <div className="flex italic">
                    <p className="font-thin md:text-lg text-md">{startDate}</p>
                    &nbsp; -&nbsp;
                    <p className="font-thin md:text-lg text-md">{endDate}</p>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="font-thin italic mx-14">{position}</p>
                </div>
                <br />
              </>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Experience;
