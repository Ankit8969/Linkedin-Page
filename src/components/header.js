import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className="outer-box">
          <div className="header-left">
            <div className="header-left-logo">
              <i class="fab fa-linkedin"></i>
            </div>
            <div className="header-left-search">
              <span>
                <i class="fas fa-search"></i>
              </span>
              <input type="text" placeholder="search" />
            </div>
          </div>
          <div className="header-right">
            <div className="right-icon">
              <i class="fas fa-home"></i>
              <span>Home</span>
            </div>
            <div className="right-icon">
              <i class="fas fa-users"></i>
              <span>My Network</span>
            </div>
            <div className="right-icon">
              <i class="fas fa-briefcase"></i>
              <span>Jobs</span>
            </div>
            <div className="right-icon">
              <i class="fas fa-comment-dots"></i>
              <span>Messaging</span>
            </div>
            <div className="right-icon">
              <i class="fas fa-bell"></i>
              <span>Notifications</span>
            </div>
            <div className="right-icon profile">
              <div className="face"></div>
              <span>Me</span>
            </div>
            <div className="right-icon">
              <i class="fas fa-th"></i>
              <span>Work</span>
            </div>
            <div className="right-icon premimum">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <span>Try Premium for Free</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="add">
        <p>
          <a href="https://www.linkedin.com/" style={{ all: "unset" }}>
            <span>Full Stack Development</span> 10 Month Course. Online Live
            classes with IIT Roorkee faculty Ad--
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Header;
