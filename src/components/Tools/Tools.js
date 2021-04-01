import React from "react";
import styles from "./../../css/Tools.module.scss";

function Tools(props) {
     return (
          <div className={styles.tools}>
               <div className={styles.language}>{props.language}</div>
          </div>
     );
}

export default Tools;
