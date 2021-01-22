import React from "react";
import Project from "./../Project/Project";

function Home() {
   return (
      <>
         <div className="container">
            <div className="about-container">
               <div className="about-content">
                  <h1>CHASE BURR</h1>
                  <hr />
                  <h2>Software Engineer</h2>
                  <p>
                     Computer Science graduate from Weber State University
                     seeking to improve my skills as a software engineer. Strong
                     foundation in Object Oriented programming and
                     troubleshooting. Quick learner and ability to adapt to new
                     languages. I may not have much experience job wise, but I
                     will dedicate a lot of time learning and adapting to new
                     environments.
                  </p>
                  <hr />
               </div>
               <div className="social-icons">
                  <a
                     href="http://github.com/chaseburr"
                     rel="noreferrer"
                     target="_blank"
                  >
                     <img src="/images/github-icon-1.svg" alt="" />
                  </a>
                  <a
                     href="http://linkedin.com/in/chaseburr"
                     rel="noreferrer"
                     target="_blank"
                  >
                     <img src="/images/linkedin-icon-2.svg" alt="" />
                  </a>
               </div>
            </div>
            <div className="recent-project-section">
               <h1 className="section-header">Projects in development</h1>
               <ul className="recent-projects">
                  <Project
                     imgSrc="/images/Netflix-Clone.png"
                     imgAlt="Netflix Clone"
                     projectName="Netflix Clone"
                     projectDescription="A clone of Netflix build with ReactJS"
                     link="https://chaseburr.github.io/Netflix-Clone/#/"
                     language="ReactJS"
                  />
                  <Project
                     imgSrc="/images/Athletic-shop.png"
                     imgAlt="Athletic Shop"
                     projectName="Athletic Shop"
                     projectDescription="An Athletic Shop to browse items from an API built and hosted by me."
                     link="https://chaseburr.github.io/Athletic-Shop/#/"
                     language="ReactJS"
                  />
               </ul>
            </div>
            <div className="recent-project-section">
               <h1 className="section-header">All Projects</h1>
               <ul className="recent-projects">
                  <Project
                     imgSrc="/images/Netflix-Clone.png"
                     imgAlt="Netflix Clone"
                     projectName="Netflix Clone"
                     projectDescription="A clone of Netflix build with ReactJS"
                     link="https://chaseburr.github.io/Netflix-Clone/#/"
                     language="ReactJS"
                  />
                  <Project
                     imgSrc="/images/Entertainment-App.png"
                     imgAlt="Entertainment App"
                     projectName="Entertainment App"
                     projectDescription="Users can search for any Movie/TV Show and they will get a list of shows to watch related to their search."
                     link="https://chaseburr.github.io/Entertainment-App/"
                     language="ReactJS"
                  />
                  <Project
                     imgSrc="/images/Athletic-shop.png"
                     imgAlt="Athletic Store"
                     projectName="Athletic Store"
                     projectDescription="An Athletic Store to browse items from an API built and hosted by me."
                     link="https://chaseburr.github.io/Athletic-Shop/#/"
                     language="ReactJS"
                  />
                  <Project
                     imgSrc="/images/gameoflife.png"
                     imgAlt="Conway's Game of Life"
                     projectName="Conway's Game of Life"
                     projectDescription="This was a group project at Weber State University with 2 other students."
                     link="/projects/"
                     language="C# / JavaScript"
                  />
                  <Project
                     imgSrc="/images/giphy.png"
                     imgAlt="Giphy"
                     projectName="Giphy Project"
                     projectDescription="This project uses the GIPHY API to grab gifs."
                     link="https://chaseburr.github.io/giphy-search/"
                     language="JavaScript"
                  />
               </ul>
            </div>
         </div>
      </>
   );
}

export default Home;
