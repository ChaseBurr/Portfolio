import React from "react";
import Languages from "./Languages";
import Section from "./Section";

import styles from "./../css/About.module.scss";
import { motion } from "framer-motion";
const primaryColor = "#171715";
const secondaryColor = "#2d3436";
export default function AboutSection({ aboutSection, minHeight }) {
     return (
          <>
               <Section
                    header="about"
                    backgroundColor={primaryColor}
                    hrColor={secondaryColor}
                    minHeight={minHeight}
                    hr
               >
                    <div className={styles.about_page}>
                         {aboutSection && (
                              <div className={styles.profile}>
                                   <motion.div
                                        initial={{ opacity: 0, y: 1000 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                   >
                                        <div className={styles.description}>
                                             <h3 align="center">
                                                  Hi! Nice to meet you!
                                             </h3>
                                             <p align="center">
                                                  I'm a front end developer
                                                  specializing in React. I'm
                                                  seeking full time employment
                                                  or contract work. I graduated
                                                  from Weber State University in
                                                  August 2020 and got my
                                                  bachelors in Computer Science
                                                  Want to hire me? Feel free to
                                                  send me an email at{" "}
                                                  <a href="mailto:chase@burr.dev">
                                                       Chase@Burr.dev
                                                  </a>{" "}
                                                  or reach out to me on{" "}
                                                  <a href="https://www.linkedin.com/in/chaseburr/">
                                                       LinkedIn
                                                  </a>
                                                  .
                                             </p>
                                        </div>
                                   </motion.div>
                                   <Languages />
                              </div>
                         )}
                    </div>
               </Section>
          </>
     );
}

// nice to meet you,  I'm a full stack developer, with a preference for the backend.
// I'm seeking full time employment or contract Worker. I specialise in Mongodb, express, react nodejs stack. Want to hire me? Send me a email or linkedin message anytime
