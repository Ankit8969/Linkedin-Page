import React, { useState } from "react";
import "../styles/about.css";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="about">
      <div className="about-header">
        <span>About</span>
        <span>
          <i className="fas fa-pencil-alt"></i>
        </span>
      </div>
      <p>
        Hello, My name is Ankit and I am currently in my final year and In my
        free time I mostly like to do Competitive Programming and making Web
        Projects
        {!show ? (
          <span className="see-more" onClick={() => setShow(!show)}>
            ... see more
          </span>
        ) : (
          ""
        )}
        {show ? (
          <p>
            Web-Dev Skills : Html, Css, Js, Bootstrap, Node.js, Express.js,
            MongoDb, MySql, React.js
          </p>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

export default About;
