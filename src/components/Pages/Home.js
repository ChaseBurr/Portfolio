import React from "react";
import Hero from "./../hero/Hero";
import Project from "./../Project/Project";
import Footer from "./../Footer";

function Home() {
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
}

export default Home;
