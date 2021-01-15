import React from "react";
import Project from "./../Project/Project";

function Projects() {
  return (
    <>
      <h1 className="section-header">Projects</h1>
      <div className="project-page">
        <Project
          imgSrc="/images/Entertainment-App.png"
          imgAlt="Entertainment App"
          projectName="Entertainment App"
          projectDescription="Users can search for any Movie/TV Show and they will get a list of shows to watch related to their search."
          link="/projects/entertainment-app"
          language="ReactJS"
        />
        <Project
          imgSrc="/images/Athletic-shop.png"
          imgAlt="Athletic Store"
          projectName="Athletic Store"
          projectDescription="An Athletic Store to browse items from an API built and hosted by me."
          link="/projects/athletic-store"
          language="ReactJS"
        />
        <Project
          imgSrc="/images/gameoflife.png"
          imgAlt="Conway's Game of Life"
          projectName="Conway's Game of Life"
          projectDescription="This was a group project at Weber State University with 2 other students."
          link="/projects/gameoflife"
          language="C# / JavaScript"
        />
      </div>
    </>
  );
}

export default Projects;
