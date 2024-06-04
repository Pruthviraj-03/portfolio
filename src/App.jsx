import React, { useRef } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Porfolio";
import Education from "./Components/Education";
import ContactMe from "./Components/ContactMe";

const App = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "portfolio":
        portfolioRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="body overflow-x-hidden p-0 m-0 font-roboto bg-body-color">
      <Header scrollToSection={scrollToSection} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <Education />
      <div ref={contactRef}>
        <ContactMe />
      </div>
    </div>
  );
};

export default App;
