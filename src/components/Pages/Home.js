import React from "react";
import Hero from "./../hero/Hero";
import Project from "./../Project/Project";

function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <h1 className="section-header">Recent Projects</h1>
        <ul className="recent-projects">
          <Project
            imgSrc="/images/Entertainment-App.png"
            imgAlt="Entertainment App"
            projectName="Entertainment App"
            projectDescription="Users can search for any Movie/TV Show and they will get a list of shows to watch related to their search."
            link=""
          />
          <Project
            imgSrc="/images/Athletic-shop.png"
            imgAlt="Entertainment App"
            projectName="Entertainment App"
            projectDescription="Users can search for any Movie/TV Show and they will get a list of shows to watch related to their search."
            link=""
          />
        </ul>
      </div>
    </>
  );
}

export default Home;
