import "./css/Global.scss";
import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import WorkSection from "./components/WorkSection";
import Navbar from "./components/Navbar";

// Images
import "./images/giphy.png";
import "./images/Athletic-Shop.png";
import "./images/gameoflife.png";
import "./images/Entertainment-App.png";
import "./images/Hulu-Clone.png";
import "./images/Netflix-Clone.png";
import "./images/Social-App.png";

function App() {
     const [sticky, setSticky] = useState(false);
     const [aboutSection, setAboutSection] = useState(false);
     const [projectSection, setProjectSection] = useState(false);
     const [footerSection, setFooterSection] = useState(false);
     const [workSection, setWorkSection] = useState(false);

     useEffect(() => {
          function handleScroll() {
               setSticky(window.scrollY > 950 ? true : false);
               setAboutSection(window.scrollY > 340 ? true : false);
               setProjectSection(window.scrollY > 850 ? true : false);
               setWorkSection(window.scrollY > 3839 ? true : false);
               setFooterSection(window.scrollY > 3975 ? true : false);
          }

          window.addEventListener("scroll", handleScroll);
          return () => {
               window.removeEventListener("scroll", handleScroll);
          };
     }, []);

     return (
          <>
               <Navbar
                    sticky={sticky}
                    setAboutSection={setAboutSection}
                    setProjectSection={setProjectSection}
                    setWorkSection={setWorkSection}
               />
               <Hero />
               <AboutSection aboutSection={aboutSection} minHeight={620} />
               <Projects projectSection={projectSection} minHeight={3000} />
               <WorkSection workSection={workSection} minHeight={300} />
               {footerSection && <footer>&copy; Chase Burr 2021</footer>}
          </>
     );
}

export default App;
