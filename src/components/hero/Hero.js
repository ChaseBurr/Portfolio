import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="profile-picture">
        <img src="/images/avatar.jpg" alt="chase burr" />
      </div>
      <div className="about-container">
        <h1>Hi! I'm Chase Burr</h1>
        <h2>Software Engineer</h2>
        <p>
          Computer Science graduate seeking to improve my skills as a software
          engineer. Strong foundation in Object Oriented programming and
          troubleshooting. Quick learner and ability to adapt to new languages.
          I may not have much experience job wise, but I will dedicate a lot of
          time learning and adapting to new environments.
        </p>
      </div>
    </div>
  );
}

export default Hero;
