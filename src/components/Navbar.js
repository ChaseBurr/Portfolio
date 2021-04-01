import React from "react";

import styles from "./../css/Navbar.module.scss";

export default function Navbar({ navbar }) {
     return (
          <div className={styles.navbar} ref={(el) => (navbar = el)}>
               <ul>
                    <li className={styles.nav_item}>
                         <a href="#font-page" className="home active">
                              home
                         </a>
                    </li>
                    <li className={styles.nav_item}>
                         <a className="about" href="#about">
                              about
                         </a>
                    </li>
                    <li className={styles.nav_item}>
                         <a className="portfolio" href="#portfolio">
                              portfolio
                         </a>
                    </li>
                    {/* <li className={styles.nav_item}>
                         <a className="work" href="#work">
                              work history
                         </a>
                    </li> */}
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
