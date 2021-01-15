import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

function Project(props) {
  return (
    <>
      <div className="project">
        <img src={props.imgSrc} alt={props.imgAlt} />
        <Link to={props.link}>
          <div className="project-overlay">
            <div className="overlay"></div>
            <div className="project-info">
              <h1 className="project-title">{props.projectName}</h1>
              <h2 className="project-description">
                {props.projectDescription}
              </h2>
            </div>
          </div>
          {props.language ? (
            <figure className="language-figure">{props.language}</figure>
          ) : (
            <></>
          )}
        </Link>
      </div>
    </>
  );
}

export default Project;
