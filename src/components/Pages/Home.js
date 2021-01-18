import React from "react";
import Hero from "./../hero/Hero";
import Project from "./../Project/Project";
import Footer from "./../Footer";

function Home() {
  return (
    <>
      <Hero />
      <div className="container">
        <h1 className="section-header">Current Projects</h1>
        <ul className="recent-projects">
          <Project
            imgSrc="/images/Entertainment-App.png"
            imgAlt="Entertainment App"
            projectName="Entertainment App"
            projectDescription="Users can search for any Movie/TV Show and they will get a list of shows to watch related to their search."
            link="/projects/entertainment-app"
            language="ReactJS"
          />
          <Project
            imgSrc="/images/athletic-shop.png"
            imgAlt="Athletic Shop"
            projectName="Athletic Shop"
            projectDescription="An Athletic Shop to browse items from an API built and hosted by me."
            link="/projects/athletic-shop"
            language="ReactJS"
          />
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Home;
