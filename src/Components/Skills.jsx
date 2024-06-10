import React from "react";
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
  return (
    <div
      className="flex flex-col items-center justify-center py-50 px-100 laptop:px-50"
      id="skills"
    >
      <h1 className="text-70 font-700 text-hover-color font-Libre">
        My Skills
      </h1>
      <div className="flex items-center w-full flex-wrap justify-center mt-50 gap-2.5">
        <div className="skill-card flex flex-col overflow-hidden items-center justify-center h-20 w-20 bg-bg-color rounded-20 gap-2.5">
          <img
            className="h-7.5 w-7.5 object-contain"
            src={HTML}
            alt="HTML logo"
          />
          <h2 className="text-24 font-400 text-hover-color">HTML</h2>
        </div>
        <div className="skill-card flex flex-col overflow-hidden items-center justify-center h-20 w-20 bg-bg-color rounded-20 gap-2.5">
          <img
            className="h-7.5 w-7.5 object-contain"
            src={CSS}
            alt="CSS logo"
          />
          <h2 className="text-24 font-400 text-hover-color">CSS</h2>
        </div>
        <div class="skill-card flex flex-col overflow-hidden items-center justify-center h-20 w-20 bg-bg-color rounded-20 gap-2.5">
          <img
            className="h-7.5 w-7.5 object-contain"
            src={JavaScript}
            alt="JavaScript logo"
          />
          <h2 className="text-24 font-400 text-hover-color">JavaScript</h2>
        </div>
        <div class="skill-card flex flex-col overflow-hidden items-center justify-center h-20 w-20 bg-bg-color rounded-20 gap-2.5">
          <img
            className="h-7.5 w-7.5 object-contain"
            src={ReactJS}
            alt="ReactJS logo"
          />
          <h2 className="text-24 font-400 text-hover-color">ReactJS</h2>
        </div>
        <div class="skill-card flex flex-col overflow-hidden items-center justify-center h-20 w-20 bg-bg-color rounded-20 gap-2.5">
          <img
            className="h-7.5 w-7.5 object-contain"
            src={NodeJS}
            alt="NodeJS logo"
          />
          <h2 className="text-24 font-400 text-hover-color">NodeJS</h2>
        </div>
        <div class="skill-card flex flex-col overflow-hidden items-center justify-center h-20 w-20 bg-bg-color rounded-20 gap-2.5">
          <img
            className="h-7.5 w-7.5 object-contain"
            src={ExpressJS}
            alt="ExpressJS logo"
          />
          <h2 className="text-24 font-400 text-hover-color">ExpressJS</h2>
        </div>
        <div class="skill-card flex flex-col overflow-hidden items-center justify-center h-20 w-20 bg-bg-color rounded-20 gap-2.5">
          <img
            className="h-7.5 w-7.5 object-contain"
            src={MongoDB}
            alt="MongoDB logo"
          />
          <h2 className="text-24 font-400 text-hover-color">MongoDB</h2>
        </div>
        <div className="skill-card flex flex-col overflow-hidden items-center justify-center h-20 w-20 bg-bg-color rounded-20 gap-2.5">
          <img
            className="h-7.5 w-7.5 object-contain"
            src={NextJS}
            alt="NextJS logo"
          />
          <h2 className="text-24 font-400 text-hover-color">NextJS</h2>
        </div>
        <div className="skill-card flex flex-col overflow-hidden items-center justify-center h-20 w-20 bg-bg-color rounded-20 gap-2.5">
          <img
            className="h-7.5 w-7.5 object-contain"
            src={Redux}
            alt="Redux logo"
          />
          <h2 className="text-24 font-400 text-hover-color">Redux</h2>
        </div>
        <div className="skill-card flex flex-col overflow-hidden items-center justify-center h-20 w-20 bg-bg-color rounded-20 gap-2.5">
          <img
            className="h-7.5 w-7.5 object-contain"
            src={Tailwind}
            alt="Tailwind logo"
          />
          <h2 className="text-24 font-400 text-hover-color">Tailwind CSS</h2>
        </div>
        <div className="skill-card flex flex-col overflow-hidden items-center justify-center h-20 w-20 bg-bg-color rounded-20 gap-2.5">
          <img
            className="h-7.5 w-7.5 object-contain"
            src={BootStrap}
            alt="BootStrap logo"
          />
          <h2 className="text-24 font-400 text-hover-color">BootStrap</h2>
        </div>
        <div className="skill-card flex flex-col overflow-hidden items-center justify-center h-20 w-20 bg-bg-color rounded-20 gap-2.5">
          <img
            className="h-7.5 w-7.5 object-contain"
            src={GitHub}
            alt="GitHub logo"
          />
          <h2 className="text-24 font-400 text-hover-color">GitHub</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
