import React from "react";
import "./Project/Project.scss";

export default function ProjectFull({
     imgSrc,
     link,
     projectName,
     projectDescription,
     language,
}) {
     return (
          <div>
               <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setProjectClick(true)}
               >
                    <div className="project">
                         <img
                              src={`./images/${props.imgSrc}`}
                              alt={props.imgAlt}
                         />
                         {/* <a
                                   href={props.link}
                                   target="_blank"
                                   rel="noreferrer"
                              > */}
                         <div className="project-overlay">
                              <div className="overlay"></div>
                              <div className="project-info">
                                   <h1 className="project-title">
                                        {props.projectName}
                                   </h1>
                                   <h2 className="project-description">
                                        {props.projectDescription}
                                   </h2>
                              </div>
                         </div>
                         {props.language ? (
                              <figure className="language-figure">
                                   {props.language}
                              </figure>
                         ) : (
                              <></>
                         )}
                         {/* </a> */}
                    </div>
               </motion.div>
          </div>
     );
}
