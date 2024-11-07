import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import img1 from "../images/aperture-vintage-HF1IO60tQdc-unsplash.jpg";
import img2 from "../images/martin-martz-3_x1FRGAEwY-unsplash.jpg";
import img3 from "../images/vimal-s-bVplevb7Bhk-unsplash.jpg";
import img4 from "../images/warren-umoh-K7M7dQO-HrA-unsplash.jpg";
import img5 from "../images/warren-umoh-pnMjGMOs2Xw-unsplash.jpg";
import img6 from "../images/warren-umoh-VL12rhr4mi0-unsplash.jpg";

const Porfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  const portfolioApi = [
    {
      id: 1,
      img: img1,
      h3: "E-sports Org Website",
      p: "turning point e-sports org website using html and css.",
      link: "https://github.com/Pruthviraj-03/tp_e-sports.git",
    },
    {
      id: 2,
      img: img2,
      h3: "Music Web App",
      p: "simple music web app using html, css and js.",
      link: "https://github.com/Pruthviraj-03/music_web_app.git",
    },
    {
      id: 3,
      img: img3,
      h3: "Covid Data Tracker",
      p: "covid data tracker web app using rest api and react.",
      link: "https://github.com/Pruthviraj-03/covid_data_tracker.git",
    },
    {
      id: 4,
      img: img4,
      h3: "Cryptoverse Website",
      p: " cryptoverse crypto currency data website using react and redux toolkit.",
      link: "https://github.com/Pruthviraj-03/cryptoverse.git",
    },
    {
      id: 5,
      img: img5,
      h3: "To-Do Web-App",
      p: " to-do-list in react, redux toolkit and local storage.",
      link: "https://github.com/Pruthviraj-03/to-do-list.git",
    },
    {
      id: 6,
      img: img6,
      h3: "ModaZen e-com webapp",
      p: "e-commerce web-app using mern stack.",
      link: "https://github.com/Pruthviraj-03/ecommerce_mern.git",
    },
    {
      id: 7,
      img: img3,
      h3: "tp-coin crypto webapp",
      p: "crypto currency exchange web-app using mern stack.",
      link: "https://github.com/Pruthviraj-03/tp-coin.git",
    },
    {
      id: 8,
      img: img1,
      h3: "Music School Website",
      p: "music_school website using next.js and aceternity ui library.",
      link: "https://github.com/Pruthviraj-03/music_school.git",
    },
    {
      id: 9,
      img: img2,
      h3: "Event Promotion Website.",
      p: "Nexus Group Event promotion web development task.",
      link: "https://github.com/Pruthviraj-03/Nexux-Group.git",
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
          className="flex flex-col items-center justify-center py-50 px-100 tablet:px-50"
          id="portfolio"
        >
          <h1 className="text-70 font-700 text-hover-color font-Libre tablet:text-55">
            Portfolio
          </h1>
          <div className="portfolio-cards tablet:flex tablet:flex-wrap">
            {portfolioApi.map((project) => (
              <div
                className="portfolio-card relative h-60 laptop:h-48vh tablet:h-30vh w-30 tablet:w-41 bg-bg-color rounded-20 overflow-hidden items-center justify-center gap-2.5"
                key={project.id}
              >
                <img
                  className="relative h-60 laptop:h-48vh tablet:h-30vh w-30 tablet:w-41 object-cover"
                  src={project.img}
                  alt=""
                />
                <div className="overlay tablet:h-full tablet:w-full">
                  <h3 className="text-hover-color text-24 font-700">
                    {project.h3}
                  </h3>
                  <p className="text-hover-color text-16 text-center">
                    {project.p}
                  </p>
                  <Link to={project.link}>
                    <button className="cursor-pointer flex items-center justify-center flex-row gap-10 text-12 text-body-color rounded-8 bg-yellow-color w-108 h-36">
                      See More
                      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isMobile && (
        <div
          className="flex flex-col items-center justify-center p-18 w-full overflow-hidden"
          id="portfolio"
        >
          <h1 className="text-40 font-700 text-hover-color font-Libre">
            Portfolio
          </h1>
          <div className="flex flex-col gap-15 mt-20">
            {portfolioApi.map((project) => {
              return (
                <div
                  className="portfolio-card relative h-250 w-full bg-bg-color rounded-xl gap-10 overflow-hidden items-center justify-center"
                  key={project.id}
                >
                  <img
                    className="relative h-full w-full object-cover"
                    src={project.img}
                    alt=""
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col h-full w-full bg-[#34353ba2] items-center justify-center p-6 gap-10">
                    <h3 className="text-hover-color text-24 font-700">
                      {project.h3}
                    </h3>
                    <p className="text-hover-color text-16 text-center">
                      {project.p}
                    </p>
                    <Link to={project.link}>
                      <button className="cursor-pointer flex items-center justify-center flex-row gap-10 text-12 text-body-color rounded-8 bg-yellow-color w-108 h-36">
                        See More
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Porfolio;
