/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Project from "./../Project/Project";
import Tool from "./../Tools/Tools";
import Particles from "react-particles-js";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
   return (
      <>
         <div className="front-page" id="font-page">
            <div className="font-page-content">
               <h1>
                  Hello, I'm <span>Chase Burr</span>
               </h1>
               <h3>I'm a Software Engineer</h3>
               <a href="#portfolio">
                  <button className="btn btn-primary">
                     View My Work <i className="fas fa-arrow-down"></i>
                  </button>
               </a>
            </div>
            <div className="particles">
               <Particles />
            </div>
            <div className="navbar">
               <ul>
                  <li className="nav-item">
                     <a href="#font-page" className="home active">
                        home
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="about" href="#about">
                        about
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="portfolio" href="#portfolio">
                        portfolio
                     </a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-contact" href="#contact">
                        contact
                     </a>
                  </li>
               </ul>
               <div className="social-links">
                  <a href="https://github.com/chaseburr" target="_blank">
                     <i className="fab fa-github github"></i>
                  </a>
                  <a href="https://linkedin.com/in/chaseburr" target="_blank">
                     <i className="fab fa-linkedin linkedin"></i>
                  </a>
               </div>
            </div>
         </div>
         <div className="about-section" id="about">
            <h1 className="section-header">ABOUT</h1>
            <hr />
            <div className="profile">
               {/* <img src="/images/avatar.jpg" alt="" /> */}
               <div className="profile-description">
                  <h3 align="center">Who's this guy?</h3>
                  <p align="center">
                     Engaged, creative Computer Science graduate from{" "}
                     <b>Weber State University</b>
                     seeking to improve skills as a software engineer. Strong
                     foundation in Object Oriented programming and
                     troubleshooting. Quick learner and ability to adapt to new
                     languages. I may not have much experience job wise, but I
                     will dedicate a lot of time learning and adapting to new
                     environments.
                  </p>
               </div>
               <ul className="tools">
                  <Tool progress="95" width="450px" language="html" />
                  <Tool progress="80" width="400px" language="css" />
                  <Tool progress="85" width="425px" language="javascript" />
                  <Tool progress="70" width="350px" language="C++" />
                  <Tool progress="70" width="350px" language="C#" />
                  <Tool progress="85" width="425px" language="Python" />
                  <Tool progress="50" width="250px" language="Java" />
               </ul>
            </div>
         </div>
         <div className="project-section" id="portfolio">
            <h1 className="section-header">PROJECTS</h1>
            <div className="project-list">
               <Project
                  imgSrc="/images/Netflix-Clone.png"
                  link="https://chaseburr.github.io/Netflix-Clone/"
                  projectName="Netflix Clone"
                  projectDescription="A Netflix clone made with ReactJS"
                  language="ReactJS"
               />
               <Project
                  imgSrc="/images/Entertainment-App.png"
                  link="https://chaseburr.github.io/Entertainment-App/"
                  projectName="Entertainment App"
                  projectDescription="A project that uses's themoviedb.org API"
                  language="ReactJS"
               />
               <Project
                  imgSrc="/images/Athletic-Shop.png"
                  link="https://chaseburr.github.io/Athletic-Shop/"
                  projectName="Athletic Store"
                  projectDescription="An athletic store that is meant to demonstrate my ability of ReactJS"
                  language="ReactJS"
               />
               <Project
                  imgSrc="/images/giphy.png"
                  link="https://chaseburr.github.io/giphy-search/"
                  projectName="Giphy"
                  projectDescription="A simple Giphy project using Giphy's API"
                  language="JavaScripts"
               />
               <Project
                  imgSrc="/images/gameoflife.png"
                  link="https://github.com/ChaseBurr/CS3750AS3"
                  projectName="Conway's Game of Life"
                  projectDescription="Conway's game of life recreated in C# and JavaScript"
                  language="C# / JavaScript"
               />
            </div>
         </div>
         <div className="contact" id="contact">
            <form action="" className="contact-form">
               <h1>Contact Me</h1>
               <input placeholder="Name" name="name" type="text" />
               <input placeholder="Email" name="email" type="email" />
               <input placeholder="Message" name="message" type="text" />
               <button className="btn">Submit</button>
            </form>
         </div>
      </>
   );
};
