import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationDetails = [
    {
      universityName: "Georgia State University, Atlanta",
      graduationYear: "May 2023",
      gpa: "3.9/4",
      degree: "Master of Science in Computer Science",
      link: "https://www.gsu.edu/",
    },
    {
      universityName: "University of Pune, Pune",
      graduationYear: "May 2017",
      gpa: "3.7/4",
      degree: "Bachelor of Engineering in Computer Engineering",
      link: "http://www.unipune.ac.in/",
    },
  ];
  return (
    <div
      name="education"
      className="w-full h-screen bg-gradient-to-b to-gray-800 from-black text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-20 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Education
          </p>
        </div>

        {educationDetails.map(
          ({ universityName, graduationYear, degree, gpa, link }) => {
            return (
              <>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div className="hidden md:flex">
                      <FaGraduationCap size={35} />
                    </div>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="md:mx-3 font-bold text-lg inline 
                        border-b-2 border-gray-300 md:text-xl "
                      href={link}
                    >
                      {universityName}
                    </a>
                  </div>
                  <p className="font-bold text-md md:text-xl">
                    {graduationYear}
                  </p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="font-thin italic mx-14">{degree}</p>
                  <p className="font-thin italic flex">
                    <span className="hidden md:flex">GPA: &nbsp;</span> {gpa}
                  </p>
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

export default Education;
