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

export default function Languages() {
     return (
          <div className={styles.tools}>
               {/* <h1>Languages & Tools</h1> */}
               <div className={styles.languages}>
                    <div className={styles.lang_row_4}>
                         <img
                              src={webpack_logo}
                              alt="webpack"
                              className={styles.icon_big}
                         />
                         <img
                              src={CSS_logo}
                              alt="CSS 3"
                              className={styles.icon_big}
                         />
                         <img
                              src={html_logo}
                              alt="Html5"
                              className={styles.icon_big}
                         />
                         <img
                              src={javascript_logo}
                              alt="JavaScript"
                              className={styles.icon_big}
                         />
                    </div>
                    <div className={styles.lang_row_5}>
                         <img
                              src={python_logo}
                              alt="Python"
                              className={styles.icon_big}
                         />
                         <img
                              src={sass_logo}
                              alt="SASS"
                              className={styles.icon_big}
                         />
                         <img
                              src={cpp_logo}
                              alt="C++"
                              className={styles.icon_big}
                         />
                         <img
                              src={cs_logo}
                              alt="C#"
                              className={styles.icon_big}
                         />
                         <img
                              src={java_logo}
                              alt="Java"
                              className={styles.icon_big}
                         />
                    </div>
                    <div className={styles.lang_row_4}>
                         <img
                              src={react_logo}
                              alt="ReactJS"
                              className={styles.icon_big}
                         />
                         <img
                              src={node_logo}
                              alt="NodeJS"
                              className={styles.icon_big}
                         />
                         <img
                              src={mongo_logo}
                              alt="MongoDB"
                              className={styles.icon_big}
                         />
                         <img
                              src={heroku_logo}
                              alt="Heroku"
                              className={styles.icon_big}
                         />
                    </div>
               </div>
          </div>
     );
}
