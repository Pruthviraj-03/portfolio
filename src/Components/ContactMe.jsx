import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
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
        <div
          className="w-screen p-100 flex flex-col items-center justify-center tablet:p-50"
          id="contact"
        >
          <h1 className="text-70 text-hover-color font-Libre font-700 tablet:text-55">
            Contact Me
          </h1>
          <div className="flex gap-24 tablet:flex tablet:flex-col tablet:gap-0">
            <div className="bg-yellow-color p-10px rounded-8 flex items-center justify-center flex-row gap-10 mt-7.5 tablet:mt-30">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              <p>pruthvirajkurane03@gmail.com</p>
            </div>
            <div className="bg-yellow-color p-10px rounded-8 flex items-center justify-center flex-row gap-10 mt-7.5 tablet:mt-30">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              <p>+91 8692848775</p>
            </div>
            <div className="bg-yellow-color p-10px rounded-8 flex items-center justify-center flex-row gap-10 mt-7.5 tablet:mt-30">
              <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
      )}

      {isMobile && (
        <div
          className="w-full h-auto p-18 flex flex-col items-center justify-center gap-24"
          id="contact"
        >
          <h1 className="text-40 text-hover-color font-Libre font-700">
            Contact Me
          </h1>
          <div className="flex flex-col gap-24">
            <div className="bg-yellow-color p-7px rounded-8 flex items-center justify-center flex-row gap-10">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              <p>pruthvirajkurane03@gmail.com</p>
            </div>
            <div className="bg-yellow-color p-7px rounded-8 flex items-center justify-center flex-row gap-10">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              <p>+91 8692848775</p>
            </div>
            <div className="bg-yellow-color p-7px rounded-8 flex items-center justify-center flex-row gap-10">
              <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactMe;
