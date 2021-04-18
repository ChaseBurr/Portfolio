import React, { useState, useEffect } from "react";
import styles from "./../css/Navbar.module.scss";

export default function Navbar({ sticky }) {
     const [homeActive, setHomeActive] = useState(true);
     const [aboutActive, setAboutActive] = useState(false);
     const [projectActive, setProjectActive] = useState(false);
     const [workActive, setWorkActive] = useState(false);

     useEffect(() => {
          function activeNavbar() {
               if (window.scrollY < 950) {
                    setAboutActive(false);
                    setHomeActive(true);
               } else if (window.scrollY >= 950 && window.scrollY < 1570) {
                    setHomeActive(false);
                    setProjectActive(false);
                    setAboutActive(true);
               } else if (window.scrollY >= 1570 && window.scrollY < 4120) {
                    setAboutActive(false);
                    setProjectActive(true);
                    setWorkActive(false);
               } else if (window.scrollY >= 4120) {
                    setProjectActive(false);
                    setWorkActive(true);
               }
          }
          window.addEventListener("scroll", activeNavbar);
          return () => {
               window.removeEventListener("scroll", activeNavbar);
          };
     }, []);
     return (
          <div className={`${styles.navbar} ${sticky ? "sticky" : ""}`}>
               <ul>
                    <li
                         className={styles.nav_item}
                         onClick={() => window.scrollTo(0, 0)}
                    >
                         <a className={`home ${homeActive && "active"}`}>
                              home
                         </a>
                    </li>
                    <li
                         className={styles.nav_item}
                         onClick={() => {
                              window.scrollTo(0, 952);
                         }}
                    >
                         <a className={`about ${aboutActive ? "active" : ""}`}>
                              about
                         </a>
                    </li>
                    <li
                         className={styles.nav_item}
                         onClick={() => {
                              window.scrollTo(0, 1572);
                         }}
                    >
                         <a
                              className={`portfolio ${
                                   projectActive ? "active" : ""
                              }`}
                         >
                              portfolio
                         </a>
                    </li>
                    <li
                         className={styles.nav_item}
                         onClick={() => {
                              window.scrollTo(0, 4127);
                         }}
                    >
                         <a className={`work ${workActive && "active"}`}>
                              work history
                         </a>
                    </li>
                    <li className={styles.nav_item}>
                         <a
                              href="https://linkedin.com/in/chaseburr"
                              target="_blank"
                              rel="noopener noreferrer"
                         >
                              contact
                         </a>
                    </li>
               </ul>
               <div className={styles.social_links}>
                    <a
                         href="https://github.com/chaseburr"
                         target="_blank"
                         rel="noopener noreferrer"
                    >
                         <i className="fab fa-github github"></i>
                    </a>
                    <a
                         href="https://linkedin.com/in/chaseburr"
                         target="_blank"
                         rel="noopener noreferrer"
                    >
                         <i className="fab fa-linkedin linkedin"></i>
                    </a>
               </div>
          </div>
     );
}
