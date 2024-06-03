import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  return (
    <div className="contact-me" id="contact">
      <h1>Contact Me</h1>
      <div class="contact">
        <div class="contact-card">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="contact-icons"
          ></FontAwesomeIcon>
          <p>pruthvirajkurane03@gmail.com</p>
        </div>
        <div class="contact-card">
          <FontAwesomeIcon
            icon={faPhone}
            className="contact-icons"
          ></FontAwesomeIcon>
          <p>+91 8692848775</p>
        </div>
        <div class="contact-card">
          <FontAwesomeIcon
            icon={faLocation}
            className="contact-icons"
          ></FontAwesomeIcon>
          <p>Mumbai, India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
