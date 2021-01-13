import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <>
      <div className="project">
        <img src={props.imgSrc} alt={props.imgAlt} />
        <div className="project-info">
          <h1 className="project-title">{props.projectName}</h1>
          <h2 className="project-description">{props.projectDescription}</h2>
        </div>
      </div>
    </>
  );
}

export default Project;
