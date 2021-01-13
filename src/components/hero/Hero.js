import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="profile-picture">
        <img src="/images/avatar.jpg" alt="chase burr" />
      </div>
      <div className="about-container">
        <h1>Hi! I'm Chase Burr.</h1>
        <h2>Software Engineer</h2>
        <h3>
          I am a recent Computer Science graduate from Weber State University
          looking to get my feet wet in the Software Engineering world
        </h3>
      </div>
    </div>
  );
}

export default Hero;
