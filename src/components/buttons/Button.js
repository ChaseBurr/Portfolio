import React from "react";

import "./Button.css";

export default function Button(props) {
     return (
          <a href={props.goTo} className="btn center">
               <span>View My Work</span>
          </a>
     );
}
