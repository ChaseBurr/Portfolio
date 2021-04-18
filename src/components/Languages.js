import React from "react";

import webpack_logo from "./../images/languages/webpack-logo.png";
import CSS_logo from "./../images/languages/css3-logo.png";
import html_logo from "./../images/languages/html5-logo.png";
import cpp_logo from "./../images/languages/cpp-logo.png";
import cs_logo from "./../images/languages/cs-logo.png";
import java_logo from "./../images/languages/java-logo.png";
import sass_logo from "./../images/languages/sass-logo.png";
import mongo_logo from "./../images/languages/mongo-logo.png";
import react_logo from "./../images/languages/react-logo.png";
import heroku_logo from "./../images/languages/heroku-logo.png";
import node_logo from "./../images/languages/node-logo.png";

import python_logo from "./../images/languages/python-logo.png";
import javascript_logo from "./../images/languages/JavaScript-logo.png";

import styles from "./../css/Tools.module.scss";
import { motion } from "framer-motion";

const languages = {
     top: [
          {
               src: webpack_logo,
               alt: "webpack",
               className: styles.icon_big,
          },
          {
               src: CSS_logo,
               alt: "CSS 3",
               className: styles.icon_big,
          },
          {
               src: html_logo,
               alt: "Html 5",
               className: styles.icon_big,
          },
          {
               src: javascript_logo,
               alt: "JavaScript",
               className: styles.icon_big,
          },
     ],
     mid: [
          {
               src: python_logo,
               alt: "webpack",
               className: styles.icon_big,
          },
          {
               src: sass_logo,
               alt: "webpack",
               className: styles.icon_big,
          },
          {
               src: cpp_logo,
               alt: "webpack",
               className: styles.icon_big,
          },
          {
               src: cs_logo,
               alt: "webpack",
               className: styles.icon_big,
          },
          {
               src: java_logo,
               alt: "webpack",
               className: styles.icon_big,
          },
     ],
     bottom: [
          {
               src: react_logo,
               alt: "webpack",
               className: styles.icon_big,
          },
          {
               src: node_logo,
               alt: "webpack",
               className: styles.icon_big,
          },
          {
               src: mongo_logo,
               alt: "webpack",
               className: styles.icon_big,
          },
          {
               src: heroku_logo,
               alt: "webpack",
               className: styles.icon_big,
          },
     ],
};

export default function Languages() {
     return (
          <div className={styles.tools}>
               {/* <h1>Languages & Tools</h1> */}
               <div className={styles.languages}>
                    <div className={styles.lang_row_4}>
                         {languages.top.map((lang, i) => (
                              <motion.div
                                   initial={{ y: 1000, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   transition={{ duration: 0.6 + i / 3 }}
                              >
                                   <img
                                        key={i}
                                        src={lang.src}
                                        alt={lang.alt}
                                        className={lang.className}
                                   />
                              </motion.div>
                         ))}
                    </div>
                    <div className={styles.lang_row_5}>
                         {languages.mid.map((lang, i) => (
                              <motion.div
                                   initial={{ y: 1000, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   transition={{ duration: 0.6 + i / 2 }}
                              >
                                   <img
                                        key={i}
                                        src={lang.src}
                                        alt={lang.alt}
                                        className={lang.className}
                                   />
                              </motion.div>
                         ))}
                    </div>
                    <div className={styles.lang_row_4}>
                         {languages.bottom.map((lang, i) => (
                              <motion.div
                                   initial={{ y: 1000, opacity: 0 }}
                                   animate={{ y: 0, opacity: 1 }}
                                   transition={{ duration: 0.6 + i }}
                              >
                                   <img
                                        key={i}
                                        src={lang.src}
                                        alt={lang.alt}
                                        className={lang.className}
                                   />
                              </motion.div>
                         ))}
                    </div>
               </div>
          </div>
     );
}
