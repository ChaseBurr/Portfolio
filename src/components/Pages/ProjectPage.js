import React from "react";

import EntertainmentApp from "./../../Projects/Entertainment-App/EntertainmentApp";

function ProjectPage({ match }) {
  console.log(match);
  return (
    <div className="project-page">
      <EntertainmentApp />
    </div>
  );
}

export default ProjectPage;
