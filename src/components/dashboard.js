import React from "react";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="dashboard-your">
        <div className="dashboard-your-1">
          <p>Your Dashboard</p>
          <p>
            <i>Public to you</i>
          </p>
        </div>
        <div className="dashboard-your-2">
          <span style={{ color: "#8D949B" }}>
            <i class="far fa-star"></i>
          </span>
          <span>All Star</span>
        </div>
      </div>
      <div className="dashboard-views">
        <div>
          <p>240</p>
          <p>Who viewed your profile</p>
        </div>
        <div
          style={{
            borderRight: "1px solid #EBEBEB",
            borderLeft: "1px solid #EBEBEB",
            paddingLeft: "10px",
            marginRight: "10px",
          }}
        >
          <p>1,465</p>
          <p>Video views</p>
        </div>
        <div>
          <p>57</p>
          <p>Search appearance</p>
        </div>
      </div>
      <div className="dashboard-creater">
        <div className="individual">
          <span>
            <i class="fas fa-satellite-dish"></i>
          </span>
          <div>
            <p>Creator mode: On</p>
            <p>
              Grow your audience and get discovered by highlighting content on
              your profile.
            </p>
          </div>
        </div>
        <div className="individual">
          <span>
            <i class="fas fa-user-friends"></i>
          </span>
          <div>
            <p>My Network</p>
            <p>Manage your connections, events, and interests.</p>
          </div>
        </div>
        <div className="individual">
          <span>
            <i class="far fa-address-card"></i>
          </span>
          <div>
            <p>Salary insights</p>
            <p>See how your salary compares to others in the community.</p>
          </div>
        </div>
        <div className="individual">
          <span>
            <i class="fas fa-caret-square-down"></i>
          </span>
          <div>
            <p>My items</p>
            <p>Keep track of your jobs, courses and articles.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
