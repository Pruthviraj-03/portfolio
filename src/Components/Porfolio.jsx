import React from "react";
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
  return (
    <div
      className="flex flex-col items-center justify-center py-50 px-100"
      id="portfolio"
    >
      <h1 className="text-70 font-700 text-hover-color font-Libre">
        Portfolio
      </h1>
      <div className="portfolio-cards">
        <div className="portfolio-card relative h-30 w-30 bg-bg-color rounded-20 overflow-hidden items-center justify-center gap-2.5">
          <img className="relative h-30 w-30 object-cover" src={img1} alt="" />
          <div className="overlay">
            <h3 className="text-hover-color text-24 font-700">
              E-sports Org Website
            </h3>
            <p className="text-hover-color text-16 text-center">
              turning point e-sports org website using html and css.
            </p>
            <Link to="https://github.com/Pruthviraj-03/tp_e-sports.git">
              <button className="cursor-pointer flex items-center justify-center flex-row gap-10 text-12 text-body-color rounded-8 bg-yellow-color w-108 h-36">
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div className="portfolio-card relative h-30 w-30 bg-bg-color rounded-20 overflow-hidden items-center justify-center gap-2.5">
          <img className="relative h-30 w-30 object-cover" src={img2} alt="" />
          <div className="overlay">
            <h3 className="text-hover-color text-24 font-700">Music Web App</h3>
            <p className="text-hover-color text-16 text-center">
              simple music web app using html, css and js.
            </p>
            <Link to="https://github.com/Pruthviraj-03/music_web_app.git">
              <button className="cursor-pointer flex items-center justify-center flex-row gap-10 text-12 text-body-color rounded-8 bg-yellow-color w-108 h-36">
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div className="portfolio-card relative h-30 w-30 bg-bg-color rounded-20 overflow-hidden items-center justify-center gap-2.5">
          <img className="relative h-30 w-30 object-cover" src={img3} alt="" />
          <div className="overlay">
            <h3 className="text-hover-color text-24 font-700">
              Covid Data Tracker
            </h3>
            <p className="text-hover-color text-16 text-center">
              covid data tracker web app using rest api and react.
            </p>
            <Link to="https://github.com/Pruthviraj-03/covid_data_tracker.git">
              <button className="cursor-pointer flex items-center justify-center flex-row gap-10 text-12 text-body-color rounded-8 bg-yellow-color w-108 h-36">
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div className="portfolio-card relative h-30 w-30 bg-bg-color rounded-20 overflow-hidden items-center justify-center gap-2.5">
          <img className="relative h-30 w-30 object-cover" src={img4} alt="" />
          <div className="overlay">
            <h3 className="text-hover-color text-24 font-700">
              Cryptoverse Website
            </h3>
            <p className="text-hover-color text-16 text-center">
              cryptoverse crypto currency data website using react and redux
              toolkit.
            </p>
            <Link to="https://github.com/Pruthviraj-03/cryptoverse.git">
              <button className="cursor-pointer flex items-center justify-center flex-row gap-10 text-12 text-body-color rounded-8 bg-yellow-color w-108 h-36">
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div className="portfolio-card relative h-30 w-30 bg-bg-color rounded-20 overflow-hidden items-center justify-center gap-2.5">
          <img className="relative h-30 w-30 object-cover" src={img5} alt="" />
          <div className="overlay">
            <h3 className="text-hover-color text-24 font-700">To-Do Web-App</h3>
            <p className="text-hover-color text-16 text-center">
              to-do-list in react, redux toolkit and local storage.
            </p>
            <Link to="https://github.com/Pruthviraj-03/to-do-list.git">
              <button className="cursor-pointer flex items-center justify-center flex-row gap-10 text-12 text-body-color rounded-8 bg-yellow-color w-108 h-36">
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div className="portfolio-card relative h-30 w-30 bg-bg-color rounded-20 overflow-hidden items-center justify-center gap-2.5">
          <img className="relative h-30 w-30 object-cover" src={img6} alt="" />
          <div className="overlay">
            <h3 className="text-hover-color text-24 font-700">
              To-Do Web-App in MERN
            </h3>
            <p className="text-hover-color text-16 text-center">
              to-do-list using mern stack.
            </p>
            <Link to="https://github.com/Pruthviraj-03/todo_mern.git">
              <button className="cursor-pointer flex items-center justify-center flex-row gap-10 text-12 text-body-color rounded-8 bg-yellow-color w-108 h-36">
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div className="portfolio-card relative h-30 w-30 bg-bg-color rounded-20 overflow-hidden items-center justify-center gap-2.5">
          <img className="relative h-30 w-30 object-cover" src={img3} alt="" />
          <div className="overlay">
            <h3 className="text-hover-color text-24 font-700">
              ModaZen e-com webapp
            </h3>
            <p className="text-hover-color text-16 text-center">
              e-commerce web-app using mern stack.
            </p>
            <Link to="https://github.com/Pruthviraj-03/ecommerce_mern.git">
              <button className="cursor-pointer flex items-center justify-center flex-row gap-10 text-12 text-body-color rounded-8 bg-yellow-color w-108 h-36">
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div className="portfolio-card relative h-30 w-30 bg-bg-color rounded-20 overflow-hidden items-center justify-center gap-2.5">
          <img className="relative h-30 w-30 object-cover" src={img1} alt="" />
          <div className="overlay">
            <h3 className="text-hover-color text-24 font-700">
              Music School Website
            </h3>
            <p className="text-hover-color text-16 text-center">
              music_school website using next.js and aceternity ui library.
            </p>
            <Link to="https://github.com/Pruthviraj-03/music_school.git">
              <button className="cursor-pointer flex items-center justify-center flex-row gap-10 text-12 text-body-color rounded-8 bg-yellow-color w-108 h-36">
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Porfolio;
