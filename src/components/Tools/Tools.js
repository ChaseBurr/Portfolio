import React from "react";
import "./Tools.css";

function Tools(props) {
   return (
      <div className="tool">
         <div
            className="progress-bar-fill"
            style={{ width: props.width }}
         ></div>
         <div className="progress-bar">
            <p>{`${props.progress}%`}</p>
         </div>
         <div className="language">{props.language}</div>
      </div>
   );
}

export default Tools;
