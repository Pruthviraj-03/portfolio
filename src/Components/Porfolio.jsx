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
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div class="portfolio-cards">
        <div class="portfolio-card">
          <img src={img1} alt="" />
          <div class="overlay">
            <h3>E-sports Org Website</h3>
            <p>turning point e-sports org website using html and css.</p>
            <Link to="https://github.com/Pruthviraj-03/tp_e-sports.git">
              <button>
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div class="portfolio-card">
          <img src={img2} alt="" />
          <div class="overlay">
            <h3>Music Web App</h3>
            <p>simple music web app using html, css and js.</p>
            <Link to="https://github.com/Pruthviraj-03/music_web_app.git">
              <button>
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div class="portfolio-card">
          <img src={img3} alt="" />
          <div class="overlay">
            <h3>Covid Data Tracker</h3>
            <p>covid data tracker web app using rest api and react.</p>
            <Link to="https://github.com/Pruthviraj-03/covid_data_tracker.git">
              <button>
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div class="portfolio-card">
          <img src={img4} alt="" />
          <div class="overlay">
            <h3>Cryptoverse Website</h3>
            <p>
              cryptoverse crypto currency data website using react and redux
              toolkit.
            </p>
            <Link to="https://github.com/Pruthviraj-03/cryptoverse.git">
              <button>
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div class="portfolio-card">
          <img src={img5} alt="" />
          <div class="overlay">
            <h3>To-Do Web-App</h3>
            <p>to-do-list in react, redux toolkit and local storage.</p>
            <Link to="https://github.com/Pruthviraj-03/to-do-list.git">
              <button>
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div class="portfolio-card">
          <img src={img6} alt="" />
          <div class="overlay">
            <h3>To-Do Web-App in MERN</h3>
            <p>to-do-list using mern stack.</p>
            <Link to="https://github.com/Pruthviraj-03/todo_mern.git">
              <button>
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div class="portfolio-card">
          <img src={img3} alt="" />
          <div class="overlay">
            <h3>ModaZen e-com webapp</h3>
            <p>e-commerce web-app using mern stack.</p>
            <Link to="https://github.com/Pruthviraj-03/ecommerce_mern.git">
              <button>
                See More
                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
              </button>
            </Link>
          </div>
        </div>
        <div class="portfolio-card">
          <img src={img1} alt="" />
          <div class="overlay">
            <h3>Music School Website</h3>
            <p>music_school website using next.js and aceternity ui library.</p>
            <Link to="https://github.com/Pruthviraj-03/music_school.git">
              <button>
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
