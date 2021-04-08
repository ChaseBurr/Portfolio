import React from "react";

import Project from "./Project/Project";

export default function Projects() {
     return (
          <div className="project-list">
               <Project
                    imgSrc="Social-App.png"
                    link="https://social-app.chaseburr.com/"
                    projectName="Social App"
                    projectDescription="A fullstack Social Media App"
                    language="ReactJS + GraphQL"
               />
               <Project
                    imgSrc="Netflix-Clone.png"
                    link="https://chaseburr.github.io/Netflix-Clone/"
                    projectName="Netflix Clone"
                    projectDescription="A Netflix clone made with ReactJS"
                    language="ReactJS"
               />
               <Project
                    imgSrc="Hulu-Clone.png"
                    link="https://chaseburr.github.io/Hulu-Clone/"
                    projectName="Hulu Clone"
                    projectDescription="A Hulu clone made with ReactJS"
                    language="ReactJS"
               />
               <Project
                    imgSrc="Entertainment-App.png"
                    link="https://chaseburr.github.io/Entertainment-App/"
                    projectName="Entertainment App"
                    projectDescription="A project that uses's themoviedb.org API"
                    language="ReactJS"
               />
               <Project
                    imgSrc="Athletic-Shop.png"
                    link="https://chaseburr.github.io/Athletic-Shop/"
                    projectName="Athletic Store"
                    projectDescription="An athletic store that is meant to demonstrate my ability of ReactJS"
                    language="ReactJS"
               />
               <Project
                    imgSrc="giphy.png"
                    link="https://chaseburr.github.io/giphy-search/"
                    projectName="Giphy"
                    projectDescription="A simple Giphy project using Giphy's API"
                    language="JavaScripts"
               />
               <Project
                    imgSrc="gameoflife.png"
                    link="https://github.com/ChaseBurr/CS3750AS3"
                    projectName="Conway's Game of Life"
                    projectDescription="Conway's game of life recreated in C# and JavaScript"
                    language="C# / JavaScript"
               />
          </div>
     );
}
