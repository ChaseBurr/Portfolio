import React from "react";
import Languages from "./Languages";

import styles from "./../css/About.module.scss";

export default function AboutSection({ about }) {
     return (
          <div
               className={styles.about_page}
               id="about"
               ref={(el) => (about = el)}
          >
               <div className={styles.profile}>
                    {/* <img src="/images/avatar.jpg" alt="" /> */}
                    <div className={styles.description}>
                         <h3 align="center">Hi! Nice to meet you!</h3>
                         <p align="center">
                              I'm a front end developer specializing in React.
                              I'm seeking full time employment or contract work.
                              I graduated from Weber State University in August
                              2020 and got my bachelors in Computer Science Want
                              to hire me? Feel free to send me an email at{" "}
                              <a href="mailto:chase@burr.dev">Chase@Burr.dev</a>{" "}
                              or reach out to me on{" "}
                              <a href="https://www.linkedin.com/in/chaseburr/">
                                   LinkedIn
                              </a>
                              .
                         </p>
                    </div>
                    <Languages />
               </div>
          </div>
     );
}

// nice to meet you,  I'm a full stack developer, with a preference for the backend.
// I'm seeking full time employment or contract Worker. I specialise in Mongodb, express, react nodejs stack. Want to hire me? Send me a email or linkedin message anytime
