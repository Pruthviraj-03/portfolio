import React, { useState, useEffect } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

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
        <div className="h-50 w-100 p-100 tablet:w-full" id="about">
          <h1 className="text-70 font-700 text-hover-color font-Libre tablet:text-55">
            About
          </h1>
          <div className="flex items-start">
            <div className="h-2.5 w-250 bg-yellow-color mr-32 tablet:w-full tablet:mr-0"></div>
            <p className="text-hover-color text-20">
              I am a passionate and ambitious BScIT student with a keen interest
              in
              <span className="text-yellow-color">
                {" "}
                MERN stack development{" "}
              </span>{" "}
              also with a passion for creating efficient and user-friendly web
              applications. I am comfortable working with both front-end and
              backend technologies, API integration, database management. I am
              always eager to expand my knowledge and skills in the
              ever-evolving field of web development.
            </p>
          </div>
        </div>
      )}

      {isMobile && (
        <div
          className="h-auto w-ful p-18 flex items-center justify-center flex-col gap-10 mt-30"
          id="about"
        >
          <h1 className="text-40 font-700 text-hover-color font-Libre">
            About
          </h1>
          <div className="flex items-start">
            <p className="text-hover-color text-18">
              I am a passionate and ambitious BScIT student with a keen interest
              in
              <span className="text-yellow-color">
                {" "}
                MERN stack development{" "}
              </span>{" "}
              also with a passion for creating efficient and user-friendly web
              applications. I am comfortable working with both front-end and
              backend technologies, API integration, database management. I am
              always eager to expand my knowledge and skills in the
              ever-evolving field of web development.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
