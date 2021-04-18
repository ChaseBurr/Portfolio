import React from "react";

import styles from "./../css/Section.module.scss";

export default function Section(props) {
     return (
          <section
               className={`${styles.section} ${props.classes && props.classes}`}
               style={{
                    backgroundColor: props.backgroundColor,
                    minHeight: `${props.minHeight}px`,
               }}
          >
               <h1 className={styles.sectionHeader}>{props.header}</h1>
               {props.hr && (
                    <hr style={{ border: `2px solid ${props.hrColor}` }} />
               )}
               <div className="section-content">{props.children}</div>
          </section>
     );
}
