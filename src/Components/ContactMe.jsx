import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <div
      className="w-screen p-100 flex flex-col items-center justify-center"
      id="contact"
    >
      <h1 className="text-70 text-hover-color font-Libre font-700">
        Contact Me
      </h1>
      <div className="flex gap-24">
        <div className="bg-yellow-color p-10px rounded-8 flex gap-10 mt-7.5">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <p>pruthvirajkurane03@gmail.com</p>
        </div>
        <div className="bg-yellow-color p-10px rounded-8 flex gap-10 mt-7.5">
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <p>+91 8692848775</p>
        </div>
        <div className="bg-yellow-color p-10px rounded-8 flex gap-10 mt-7.5">
          <FontAwesomeIcon icon={faLocation} className="mt-5"></FontAwesomeIcon>
          <p>Mumbai, India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
