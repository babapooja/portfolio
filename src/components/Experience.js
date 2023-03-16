import React, { useState } from "react";
import { ImLocation2 } from "react-icons/im";
import {
  HiOutlineExternalLink,
  HiOutlineMinus,
  HiOutlinePlus,
} from "react-icons/hi";
import { Fade, Slide } from "react-awesome-reveal";
import { MdOutlineAlternateEmail } from "react-icons/md";
const Experience = () => {
  const educationDetails = [
    {
      companyName: "Georgia State University",
      location: "Atlanta, USA",
      startDate: "Jan 2022",
      endDate: "Present",
      position: "Graduate Teaching Assistant",
      link: "https://www.gsu.edu/",
      description:
        "Managed the grading of assignments and conducted lab sessions for cohorts of 50 students for various courses, including Computer Organization, Data Structures, and Principles of Computer Science I.",
      logo: "https://lykehouse.org/wp-content/uploads/2017/09/georgia-state-university-logo.gif",
      skills: ["Java", "Python", "Mentoring"],
    },
    {
      companyName: "ZS Associates",
      startDate: "Dec 2020",
      location: "Pune, India",
      endDate: "Dec 2021",
      position: "Associate Consultant",
      link: "https://www.zs.com/",
      description:
        "Developed frontend applications in angular (v9+) for various clients integrated with REST APIs and GraphQL. Communicated with the clients directly in Agile development team for deliverables. Mentored interns and juniors to onboard to team by creating learning modules.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/ZS_logo.png",
      skills: [
        "Angular",
        "React",
        "Bitbucket",
        "Git",
        "Azure",
        "JIRA",
        "Python",
        "Flask",
        "PostgreSQL",
        "GraphQL",
      ],
    },
    {
      companyName: "ZS Associates, India",
      startDate: "Mar 2018",
      location: "Pune, India",
      endDate: "Dec 2020",
      position: "Associate | Software Developer",
      link: "https://www.zs.com/",
      description:
        "Developed modules in frontend applications for clients that involved implementing single sign-on (SSO) methods of authentication such as - PING and OKTA. Worked effectively in corss-functional teams for API integrations and design reviews. Designed and created REST APIs for a learning dashboard project for client.",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/ZS_logo.png",
      skills: [
        "Angular",
        "React",
        "Bitbucket",
        "Git",
        "JIRA",
        "Python",
        "MySQL",
        "RESTAPIs",
      ],
    },
    {
      companyName: "Logiquad Solutions, India",
      startDate: "Jun 2017",
      location: "Pune, India",
      endDate: "Mar 2018",
      position: "Jr. Software Developer",
      link: "https://logiquad.com/",
      description:
        "Worked Drupal CMS to build various websites - Trade Show News Network, LawhelpCA, and Corporate Event News. Communicated with clients for requirements gathering and ensuring proper functioning of the websites.",
      logo: "https://media.glassdoor.com/o/2022588/logiquad-solutions-squareLogo-1659422897168.png",
      skills: ["Drupal", "CMS", "Git", "JIRA", "PHP", "HTML", "CSS"],
    },
  ];
  const [exp, setExp] = useState();
  function buttonClick(status) {
    if (exp === status) {
      setExp("");
    } else {
      setExp(status);
    }
  }

  function skill(skillName, index) {
    return (
      <div
        key={index}
        className="p-3 text-white w-auto bg-cyan-500 opacity-70 rounded-3xl mr-1 my-3"
      >
        <p className="text-sm font-semibold">{skillName}</p>
      </div>
    );
  }

  return (
    <div
      name="experience"
      className="sm:px-5 dark:bg-gradient-to-b dark:to-gray-800 dark:from-black  pt-20  w-full h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full dark:text-white">
        <Fade>
          <div className="pb-10 text-center">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700 dark:border-gray-500">
              Experience
            </p>
          </div>
        </Fade>

        {educationDetails.map(
          (
            {
              companyName,
              startDate,
              endDate,
              position,
              link,
              location,
              logo,
              description,
              skills,
            },
            index
          ) => {
            return (
              <Slide
                direction={index % 2 === 0 ? "left" : "right"}
                key={position + companyName}
              >
                <div>
                  <div className="flex flex-col text-white">
                    {/* BUTTON */}
                    <button
                      onClick={() => {
                        buttonClick(position + companyName);
                      }}
                      className="z-10 flex w-100 p-2 md:p-5 bg-gradient-to-r from-cyan-500 to-blue-500 mt-5 rounded-md font-bold text-sm md:text-lg justify-between"
                    >
                      <p className="flex items-center">
                        {position}{" "}
                        <MdOutlineAlternateEmail className="md:mx-1" />
                        {companyName}
                      </p>
                      <div className="flex items-center">
                        <p className="flex items-center">
                          {startDate} - {endDate}
                          {exp === position + companyName ? (
                            <HiOutlineMinus
                              className="ml-10"
                              size={20}
                            ></HiOutlineMinus>
                          ) : (
                            <HiOutlinePlus
                              className="ml-10"
                              size={20}
                            ></HiOutlinePlus>
                          )}
                        </p>
                      </div>
                    </button>

                    {/* COLLAPSIBLE BODY */}
                    <div
                      className={`bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-md mt-3 p-3 ${
                        exp === position + companyName
                          ? "flex flex-col transition-all ease duration-150 opacity-100 h-auto"
                          : "transition-all ease duration-200 opacity-0 h-0 p-0"
                      }`}
                    >
                      <div className="flex opacity-80">
                        <div className="flex">
                          <ImLocation2 size={20} className="mr-1"></ImLocation2>
                          {location}
                        </div>
                        <div className="flex mx-4">
                          <HiOutlineExternalLink
                            size={20}
                            className="mr-1"
                          ></HiOutlineExternalLink>
                          <a
                            className="text-md"
                            target="_blank"
                            href={link}
                            rel="noreferrer"
                          >
                            {link}
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-col-reverse justify-center items-center mt-3 md:flex-row md:justify-between">
                        <div className="flex flex-col flex-auto md:w-4/5 sm:w-auto">
                          <div className="text-justify"> {description}</div>
                          <div className="flex flex-wrap">
                            {skills.map((skillName, index) => {
                              return skill(skillName, index);
                            })}
                          </div>
                        </div>
                        <div className="w-32 flex-auto ml-5">
                          <img
                            alt="logo"
                            src={logo}
                            className="rounded-full h-32"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Experience;
