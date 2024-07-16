import React, { useState, useEffect } from "react";
import Logo from "../svg/carepy_logo-1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import bgImage from "../svg/model_bw.png";

const Header = ({ scrollToSection }) => {
  const [scrollInterval, setScrollInterval] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

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
        <div className="header h-screen w-screen px-100 py-36 relative tablet:px-50">
          <div className="navbar flex justify-between items-center fixed w-90">
            <img
              className="h-56 w-56 object-contain cursor-pointer"
              src={Logo}
              alt="logo"
              onClick={handleRefreshPage}
            />
            <ul className="flex gap-30 cursor-pointer">
              <li className="list-none my-0 mx-10px cursor-pointer tablet:mx-5">
                <Link
                  className="a hover:text-hover-color no-underline text-text-color"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </Link>
              </li>
              <li className="list-none my-0 mx-10px cursor-pointer tablet:mx-5">
                <Link
                  className="a hover:text-hover-color no-underline text-text-color"
                  onClick={() => scrollToSection("skills")}
                >
                  Skills
                </Link>
              </li>
              <li className="list-none my-0 mx-10px cursor-pointer tablet:mx-5">
                <Link
                  className="a hover:text-hover-color no-underline text-text-color"
                  onClick={() => scrollToSection("portfolio")}
                >
                  Portfolio
                </Link>
              </li>
              <li className="list-none my-0 mx-10px cursor-pointer tablet:mx-5">
                <Link
                  className="a hover:text-hover-color no-underline text-text-color"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="search h-48 w-200 bg-bg-color p-4 rounded-10 flex items-center justify-around">
              <input
                className="w-80 text-hover-color border-none bg-transparent outline-none"
                type="text"
                placeholder="search"
              ></input>
              <FontAwesomeIcon className="text-text-color" icon={faSearch} />
            </div>
          </div>
          <div className="h-90 flex bg-transparent items-center justify-between">
            <div className="intro flex flex-col">
              <h3 className="text-hover-color font-400 text-32 ml-10 tablet:ml-0">
                I'M{" "}
                <span className="text-yellow-color font-600 text-3.5">
                  Pruthviraj
                </span>
                <br></br>MERN Stack & Full<br></br>Stack Developer
              </h3>
              <button
                className="h-48 w-144 mt-2.5 ml-10 tablet:ml-0 bg-transparent rounded-8 text-yellow-color text-16 hover:bg-yellow-color hover:text-body-color"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                Contact Me
              </button>
            </div>
            <div className="socials flex flex-col items-center gap-10 mt-35 tablet:mt-15">
              <div className="bg-yellow-color h-17 w-2.5"></div>
              <Link to="https://www.facebook.com/raj.kurane.750">
                <FontAwesomeIcon
                  className="text-hover-color text-34 mb-10p cursor-pointer"
                  icon={faFacebook}
                />
              </Link>
              <Link to="https://github.com/Pruthviraj-03?tab=repositories">
                <FontAwesomeIcon
                  className="text-hover-color text-34 mb-10p cursor-pointer"
                  icon={faGithub}
                />
              </Link>
              <Link to="https://www.linkedin.com/in/pruthviraj-kurane-152143302/">
                <FontAwesomeIcon
                  className="text-hover-color text-34 mb-10p cursor-pointer"
                  icon={faLinkedin}
                />
              </Link>
              <Link to="https://www.instagram.com/rajkurane_07/">
                <FontAwesomeIcon
                  className="text-hover-color text-34 mb-10p cursor-pointer"
                  icon={faInstagram}
                />
              </Link>
            </div>
          </div>
          <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 h-screen w-70 laptop:w-80 tablet:w-93 tablet:h-70">
            <img className="h-full w-full" src={bgImage} alt="Background" />
          </div>
        </div>
      )}

      {isMobile && (
        <div className="h-auto w-full p-18 overflow-hidden">
          <div className="navbar flex flex-row fixed w-full h-auto items-center gap-20">
            <img
              className="h-56 w-56 object-contain cursor-pointer"
              src={Logo}
              alt="logo"
              onClick={handleRefreshPage}
            />

            <div className="search h-43 w-60 bg-bg-color p-4 rounded-10 flex items-center justify-around">
              <input
                className="w-80 text-hover-color border-none bg-transparent outline-none"
                type="text"
                placeholder="search"
              ></input>
              <FontAwesomeIcon className="text-text-color" icon={faSearch} />
            </div>
            <FontAwesomeIcon
              className="text-xl text-white cursor-pointer"
              icon={faBars}
            />
          </div>
          <div className="h-auto mt-50 flex bg-transparent items-center justify-between relative">
            <div className="intro flex flex-col mt-50">
              <h3 className="text-hover-color font-400 text-16">
                I'M{" "}
                <span className="text-yellow-color font-600 text-32">
                  Pruthviraj
                </span>
                <br></br>MERN Stack & Full<br></br>Stack Developer
              </h3>
              <button
                className="h-48 w-70 mt-2.5 bg-transparent rounded-8 text-yellow-color text-16 hover:bg-yellow-color hover:text-body-color"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                Contact Me
              </button>
            </div>
            <div className="socials flex flex-col items-center gap-10 mt-50">
              <div className="bg-yellow-color h-17 w-2.5"></div>
              <Link to="https://www.facebook.com/raj.kurane.750">
                <FontAwesomeIcon
                  className="text-hover-color text-24 mb-5 cursor-pointer"
                  icon={faFacebook}
                />
              </Link>
              <Link to="https://github.com/Pruthviraj-03?tab=repositories">
                <FontAwesomeIcon
                  className="text-hover-color text-24 mb-5 cursor-pointer"
                  icon={faGithub}
                />
              </Link>
              <Link to="https://www.linkedin.com/in/pruthviraj-kurane-152143302/">
                <FontAwesomeIcon
                  className="text-hover-color text-24 mb-5 cursor-pointer"
                  icon={faLinkedin}
                />
              </Link>
              <Link to="https://www.instagram.com/rajkurane_07/">
                <FontAwesomeIcon
                  className="text-hover-color text-24 mb-5 cursor-pointer"
                  icon={faInstagram}
                />
              </Link>
            </div>
          </div>
          <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 h-50 w-90 mt-50">
            <img className="h-full w-full" src={bgImage} alt="Background" />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
