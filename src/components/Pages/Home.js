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
               <button className="btn btn-primary">
                  View My Work <i className="fas fa-arrow-down"></i>
               </button>
            </div>
            <div className="particles">
               <Particles />
            </div>
            <div className="navbar">
               <ul>
                  <li className="nav-item">
                     <a href="#font-page" className="active">
                        home
                     </a>
                  </li>
                  <li className="nav-item">
                     <a href="#about">about</a>
                  </li>
                  <li className="nav-item">
                     <a href="#portfolio">portfolio</a>
                  </li>
                  <li className="nav-item">
                     <a href="#contact">contact</a>
                  </li>
               </ul>
            </div>
         </div>
         <div className="about-section" id="about">
            <h1 className="section-header">ABOUT</h1>
            <hr />
            <div className="profile">
               <img src="/images/avatar.jpg" alt="" />
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
            <div className="profile-description">
               <h3 align="center">Who's this guy?</h3>
               <p align="center">
                  I'm a recent Computer Science graduate from{" "}
                  <b>Weber State University</b> in Utah with a passion for
                  programming.
               </p>
            </div>
         </div>
         <div className="project-section" id="portfolio">
            <h1 className="section-header">PROJECTS</h1>
            <div className="project-list">
               <Project
                  imgSrc="/images/Netflix-Clone.png"
                  link="https://chaseburr.com/github.io/Netflix-Clone/"
                  projectName="Netflix Clone"
                  projectDescription="A Netflix clone made with ReactJS"
                  language="ReactJS"
               />
               <Project
                  imgSrc="/images/Entertainment-App.png"
                  link="https://chaseburr.com/github.io/Entertainment-App/"
                  projectName="Entertainment App"
                  projectDescription="A project that uses's themoviedb.org API"
                  language="ReactJS"
               />
               <Project
                  imgSrc="/images/Athletic-Shop.png"
                  link="https://chaseburr.com/github.io/Athletic-Shop/"
                  projectName="Athletic Store"
                  projectDescription="An athletic store that is meant to demonstrate my ability of ReactJS"
                  language="ReactJS"
               />
               <Project
                  imgSrc="/images/giphy.png"
                  link="https://chaseburr.com/github.io/Netflix-Clone/"
                  projectName="Netflix Clone"
                  projectDescription="A Netflix clone made with ReactJS"
                  language="ReactJS"
               />
               <Project
                  imgSrc="/images/gameoflife.png"
                  link="https://github.com/ChaseBurr/CS3750AS2"
                  projectName="Conway's Game of Life"
                  projectDescription="Conway's game of life recreated in C# and JavaScript"
                  language="C# / JavaScript"
               />
            </div>
         </div>
      </>
   );
};
