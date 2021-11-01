import React from "react";

const arr = [1, 2, 3, 4, 5, 6, 7];

const Add3 = ({ name }) => {
  return (
    <div className="add3">
      <h3>{name}</h3>
      {arr.map((item) => {
        return (
          <div className="add-people">
            <div className="people"></div>
            <div className="people-about">
              <p>Random Person</p>
              <p>SDE-II at Intuit</p>
              <button>Message</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Add3;
