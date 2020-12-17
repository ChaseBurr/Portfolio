import React from "react";
import "./Idea1.css";

function Idea1() {
  return (
    <div className="idea1-container">
      <div className="photography">
        <img
          src="/images/photography.JPG"
          alt="Hot Air balloon"
          className="photography-bkg"
        />
      </div>
      <div className="resume">
        <img src="/images/resume.jpg" alt="resume" className="resume-bkg" />
      </div>
    </div>
  );
}

export default Idea1;
