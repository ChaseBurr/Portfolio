import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Project.scss";

function Project(props) {
     return (
          <>
               <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="project-full"
               >
                    <div className="flex h-100 p-40">
                         <motion.div
                              className="imagePlaceholder"
                              initial={{
                                   rotate: 1 * props.properties.rotation,
                              }}
                              whileHover={{
                                   scale: 1.05,
                                   rotate: props.properties.rotation * -1,
                              }}
                         >
                              <img src={`./images/${props.imgSrc}`} alt="" />
                         </motion.div>
                         <div className="content flex flex-col w-80">
                              <h1>{props.projectName}</h1>
                              <hr />
                              <p className="description">
                                   {props.fullDescription}
                              </p>

                              <h6>
                                   View the website live{" "}
                                   <a href={props.link} target="_blank">
                                        here
                                   </a>
                              </h6>
                         </div>
                    </div>
               </motion.div>
          </>
     );
}

export default Project;
