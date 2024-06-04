import React, { useState, useEffect } from "react";
import Logo from "../svg/carepy_logo-1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Header = ({ scrollToSection }) => {
  const [scrollInterval, setScrollInterval] = useState(null);

  const handleMouseDown = () => {
    const interval = setInterval(() => {
      window.scrollBy(0, -1);
    }, 0);
    setScrollInterval(interval);
  };

  const handleMouseUp = () => {
    clearInterval(scrollInterval);
    setScrollInterval(null);
  };

  useEffect(() => {
    return () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };
  }, [scrollInterval]);

  const handleRefreshPage = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };
  return (
    <div className="header">
      <div className="navbar">
        <img src={Logo} alt="logo" onClick={handleRefreshPage} />
        <ul>
          <li>
            <a className="a" onClick={() => scrollToSection("about")}>
              About
            </a>
          </li>
          <li>
            <a className="a" onClick={() => scrollToSection("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a className="a" onClick={() => scrollToSection("portfolio")}>
              Portfolio
            </a>
          </li>
          <li>
            <a className="a" onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </li>
        </ul>
        <div class="search">
          <input type="text" placeholder="search"></input>
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
        </div>
      </div>
      <div class="landing">
        <div class="intro">
          <h3>
            I'M <span>Pruthviraj</span>
            <br></br>MERN Stack & Full<br></br>Stack Developer
          </h3>
          <button
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            Contact Me
          </button>
        </div>
        <div class="socials">
          <div class="header-line"></div>
          <Link to="https://www.facebook.com/raj.kurane.750">
            <FontAwesomeIcon className="social-icons" icon={faFacebook} />
          </Link>
          <Link to="https://github.com/Pruthviraj-03?tab=repositories">
            <FontAwesomeIcon className="social-icons" icon={faGithub} />
          </Link>
          <Link to="https://www.linkedin.com/in/pruthviraj-kurane-152143302/">
            <FontAwesomeIcon className="social-icons" icon={faLinkedin} />
          </Link>
          <Link to="https://www.instagram.com/rajkurane_07/">
            <FontAwesomeIcon className="social-icons" icon={faInstagram} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
