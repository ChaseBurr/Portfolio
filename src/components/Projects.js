import { motion } from "framer-motion";
import React from "react";

import Project from "./Project/Project";
import Section from "./Section";
const secondaryColor = "#2d3436";

const projects = [
     {
          imgSrc: "Social-App.png",
          link: "https://social-app.chaseburr.com/",
          name: "Social App",
          shortDescription: "A fullstack Social Media App",
          fullDescription:
               "In this project I used the MERNG stack (MongoDB, ExpressJS, ReactJS, NodeJS, GraphQL). This was one of the more difficult projects, but it was still fun.",
          language: "ReactJS + GraphQL",
          properties: {
               rotation: 1,
          },
     },
     {
          imgSrc: "Entertainment-App.png",
          link: "https://entertainment-app.vercel.app/",
          name: "Entertainment App",
          shortDescription: "A project that uses TheMovieDB.org's API",
          language: "ReactJS + NextJS",
          fullDescription:
               "This is one of my favorite project I've created. Using Framer Motion and TheMovieDB I was able to create a user friendly Entertainment website designed to search and browse shows",
          properties: {
               rotation: -1,
          },
     },
     {
          imgSrc: "Netflix-Clone.png",
          link: "https://chaseburr.github.io/Netflix-Clone/",
          name: "Netflix Clone",
          shortDescription: "A Netflix clone made with ReactJS",
          language: "ReactJS",
          fullDescription:
               "I decided to re-create Netflix's UI (not the backend yet) to show my CSS abilities.",
          properties: {
               rotation: 1,
          },
     },
     {
          imgSrc: "Hulu-Clone.png",
          link: "https://chaseburr.github.io/Hulu-Clone/",
          name: "Hulu Clone",
          shortDescription: "A Hulu clone made with ReactJS",
          language: "ReactJS",
          fullDescription:
               "I decided to re-create Hulu's UI (not the backend yet) to show my CSS abilities. I used random gradients to simulate Hulu's UI.",
          properties: {
               rotation: -1,
          },
     },

     {
          imgSrc: "Athletic-Shop.png",
          link: "https://chaseburr.github.io/Athletic-Shop/",
          name: "Athletic Store",
          shortDescription:
               "An athletic store that is meant to demonstrate my ability of ReactJS",
          fullDescription:
               "This project is still in development, but is planned to have a full stack design.",
          language: "ReactJS",
          properties: {
               rotation: 1,
          },
     },
     {
          imgSrc: "giphy.png",
          link: "https://chaseburr.github.io/giphy-search/",
          name: "Giphy",
          shortDescription: "A simple Giphy project using Giphy's API",
          language: "JavaScripts",
          fullDescription:
               "This was one of my first projects using an API. Using the users search I fetched data from Giphy's API and displayed the gifs below.",
          properties: {
               rotation: -1,
          },
     },
     {
          imgSrc: "gameoflife.png",
          link: "https://github.com/ChaseBurr/CS3750AS3",
          name: "Conway's Game of Life",
          shortDescription:
               "Conway's game of life recreated in C# and JavaScript",
          fullDescription:
               "This was one of the projects I worked on while I was attending Weber State University. Our group was assigned to create Conway's Game of Life for out final project. This project really got me into JavaScript. Before this project, I primarily used Java/C++.",
          language: "C# / JavaScript",
          properties: {
               rotation: 1,
          },
     },
];

export default function Projects({ projectSection, minHeight }) {
     return (
          <>
               <Section
                    header="PROJECTS"
                    backgroundColor={secondaryColor}
                    minHeight={minHeight}
               >
                    {projectSection && (
                         <div className="project-list">
                              {projects.map((project, i) => (
                                   <TransitionIn duration={i} key={i}>
                                        <Project
                                             key={i}
                                             imgSrc={project.imgSrc}
                                             link={project.link}
                                             projectName={project.name}
                                             projectDescription={
                                                  project.shortDescription
                                             }
                                             fullDescription={
                                                  project.fullDescription
                                             }
                                             language={project.language}
                                             properties={project.properties}
                                        />
                                   </TransitionIn>
                              ))}
                         </div>
                    )}
               </Section>
          </>
     );
}

function TransitionIn({ duration, children }) {
     return (
          <motion.div
               initial={{ opacity: 0, y: 1000 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 + duration * 0.5 }}
          >
               {children}
          </motion.div>
     );
}
