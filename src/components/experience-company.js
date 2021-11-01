import React from "react";

const ExperienceCompany = ({ link, one, two, three, four }) => {
  return (
    <div className="experience-company">
      <img src={link} alt="" />
      <div className="company">
        <p>{one}</p>
        <p>{two}</p>
        <p>{three}</p>
      </div>
      {four === "true" ? (
        <span className="editable">
          <i className="fas fa-pencil-alt"></i>
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default ExperienceCompany;
