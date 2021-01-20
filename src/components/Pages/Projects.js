import React from "react";
import Project from "./../Project/Project";

function Projects() {
   return (
      <>
         <h1 className="section-header">Projects</h1>
         <div className="projects-page">
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
               link="http://www.chaseburr.com/projects/athletic-shop"
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
         </div>
      </>
   );
}

export default Projects;
