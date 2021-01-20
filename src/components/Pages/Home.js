import React from "react";
import Hero from "./../hero/Hero";
import Project from "./../Project/Project";
import Footer from "./../Footer";

function Home() {
<<<<<<< HEAD
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
                  link="https://chaseburr.github.io/Entertainment-App/#/"
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
=======
  return (
    <>
      <Hero />
      <div className="container">
        <div className="recent-project-section">
          <h1 className="section-header">Projects in development</h1>
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
              imgSrc="/images/Athletic-shop.png"
              imgAlt="Athletic Shop"
              projectName="Athletic Shop"
              projectDescription="An Athletic Shop to browse items from an API built and hosted by me."
              link="/projects/athletic-shop"
              language="ReactJS"
            />
          </ul>
        </div>
      </div>
      <div className="technical-section">
        <h1 className="section-header">Technical Abilities</h1>
        <ul>
          <div className="languages">
            <ul>
              <h2>Languages</h2>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>C++</li>
              <li>C#</li>
              <li>Java</li>
            </ul>
          </div>
        </ul>
      </div>
      <Footer />
    </>
  );
>>>>>>> 426413091d453db9c9ac8c2629dfadecb1cbd7c1
}

export default Home;
