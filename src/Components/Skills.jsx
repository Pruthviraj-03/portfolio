import React, { useState, useEffect } from "react";
import HTML from "../svg/icons8-html.svg";
import CSS from "../svg/icons8-css.svg";
import JavaScript from "../svg/icons8-javascript.svg";
import ReactJS from "../svg/icons8-react.svg";
import NodeJS from "../svg/icons8-nodejs.svg";
import ExpressJS from "../svg/icons8-express-js.svg";
import MongoDB from "../svg/icons8-mongodb.svg";
import NextJS from "../svg/icons8-nextjs.svg";
import Redux from "../svg/icons8-redux.svg";
import Tailwind from "../svg/icons8-tailwind-css.svg";
import BootStrap from "../svg/icons8-bootstrap.svg";
import GitHub from "../svg/icons8-github.svg";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  const skillsApi = [
    {
      id: 1,
      logo: HTML,
      name: "HTML",
    },
    {
      id: 2,
      logo: CSS,
      name: "CSS",
    },
    {
      id: 3,
      logo: JavaScript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: ReactJS,
      name: "ReactJS",
    },
    {
      id: 5,
      logo: NodeJS,
      name: "NodeJS",
    },
    {
      id: 6,
      logo: ExpressJS,
      name: "ExpressJS",
    },
    {
      id: 7,
      logo: MongoDB,
      name: "MongoDB",
    },
    {
      id: 8,
      logo: NextJS,
      name: "NextJS",
    },
    {
      id: 9,
      logo: Redux,
      name: "Redux",
    },
    {
      id: 10,
      logo: Tailwind,
      name: "Tailwind",
    },
    {
      id: 11,
      logo: BootStrap,
      name: "BootStrap",
    },
    {
      id: 12,
      logo: GitHub,
      name: "GitHub",
    },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {!isMobile && (
        <div
          className="flex flex-col items-center justify-center py-50 px-100 laptop:px-50 tablet:px-25"
          id="skills"
        >
          <h1 className="text-70 font-700 text-hover-color font-Libre tablet:text-55">
            My Skills
          </h1>
          <div className="flex items-center w-full flex-wrap justify-center mt-50 gap-2.5">
            {skillsApi.map((skill) => (
              <div
                className="skill-card flex flex-col overflow-hidden items-center justify-center h-20 w-20 bg-bg-color rounded-20 gap-2.5"
                key={skill.id}
              >
                <img
                  className="h-7.5 w-7.5 object-contain"
                  src={skill.logo}
                  alt="{skill.logo} logo"
                />
                <h2 className="text-24 font-400 text-hover-color">
                  {skill.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}

      {isMobile && (
        <div
          className="flex flex-col items-center justify-center p-18 gap-24 overflow-hidden"
          id="skills"
        >
          <h1 className="text-40 font-700 text-hover-color font-Libre">
            My Skills
          </h1>
          <div className="flex items-center w-full flex-wrap justify-center gap-15">
            {skillsApi.map((skill) => (
              <div
                className="skill-card flex flex-col overflow-hidden items-center justify-center h-110 w-48 bg-bg-color rounded-xl gap-10"
                key={skill.id}
              >
                <img
                  className="h-10 w-10 object-contain"
                  src={skill.logo}
                  alt="{skill.logo} logo"
                />
                <h2 className="text-24 font-400 text-hover-color">
                  {skill.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Skills;
