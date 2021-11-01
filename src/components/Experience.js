import React from "react";

const Experience = ({ experience }) => {
  return (
    <div className="experience-about">
      <span>{experience}</span>
      <span>
        <i className="fas fa-plus"></i>
      </span>
    </div>
  );
};

export default Experience;
