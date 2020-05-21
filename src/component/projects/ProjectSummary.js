import React from "react";

const ProjectSummary = (props) => {
  return (
    <div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title"> {props.project.title}</span>
          <p>Created By jay</p>
          <p className="grey-text"> 1 jan. 2020</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
