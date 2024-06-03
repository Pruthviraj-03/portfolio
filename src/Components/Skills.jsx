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
    <div className="skills" id="skills">
      <h1>My Skills</h1>
      <div class="cards">
        <div class="skill-card">
          <img src={HTML} alt="HTML logo" />
          <h2>HTML</h2>
        </div>
        <div class="skill-card">
          <img src={CSS} alt="CSS logo" />
          <h2>CSS</h2>
        </div>
        <div class="skill-card">
          <img src={JavaScript} alt="JavaScript logo" />
          <h2>JavaScript</h2>
        </div>
        <div class="skill-card">
          <img src={ReactJS} alt="ReactJS logo" />
          <h2>ReactJS</h2>
        </div>
        <div class="skill-card">
          <img src={NodeJS} alt="NodeJS logo" />
          <h2>NodeJS</h2>
        </div>
        <div class="skill-card">
          <img src={ExpressJS} alt="ExpressJS logo" />
          <h2>ExpressJS</h2>
        </div>
        <div class="skill-card">
          <img src={MongoDB} alt="MongoDB logo" />
          <h2>MongoDB</h2>
        </div>
        <div class="skill-card">
          <img src={NextJS} alt="NextJS logo" />
          <h2>NextJS</h2>
        </div>
        <div class="skill-card">
          <img src={Redux} alt="Redux logo" />
          <h2>Redux</h2>
        </div>
        <div class="skill-card">
          <img src={Tailwind} alt="Tailwind logo" />
          <h2>Tailwind CSS</h2>
        </div>
        <div class="skill-card">
          <img src={BootStrap} alt="BootStrap logo" />
          <h2>BootStrap</h2>
        </div>
        <div class="skill-card">
          <img src={GitHub} alt="GitHub logo" />
          <h2>GitHub</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
