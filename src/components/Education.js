import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Fade } from "react-awesome-reveal";
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
      className="sm:px-5 w-full h-screen bg-gradient-to-b to-gray-800 from-black text-white pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <Fade>
          <div className="pb-20 text-center">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
              Education
            </p>
          </div>
        </Fade>
        {educationDetails.map(
          ({ universityName, graduationYear, degree, gpa, link }, index) => {
            return (
              <div key={universityName + degree}>
                <VerticalTimeline animate={true}>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date={graduationYear}
                    iconStyle={{ background: "#338bf1", color: "#fff" }}
                    icon={<FaGraduationCap />}
                    position={index % 2 === 0 ? "right" : "left"}
                  >
                    <h3 className="text-xl font-semibold text-black">
                      {universityName}
                    </h3>
                    <h4 className="text-md italic text-black">{degree}</h4>
                    <h4 className="text-md italic text-black">GPA: {gpa}</h4>
                    <a
                      className="italic underline text-sm"
                      style={{ color: "#338bf1" }}
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link}
                    </a>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Education;
