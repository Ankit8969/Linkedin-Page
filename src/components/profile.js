import React from "react";
import "../styles/profile.css";
import Dashboard from "./dashboard";
import Featured from "./featured";
import "../styles/featured.css";
import Activity from "./activity";
import About from "./about";
import Multiple from "./multiple";
import Add1 from "./add1";
import Add3 from "./add3";
import Add2 from "./add2";

const Profile = () => {
  return (
    <section className="profile-section">
      <div className="profile-box">
        <div className="profile">
          <div className="profile-background">
            <img src="./images/image-1.png" alt="" />
            <div className="profile-background-icon">
              <i class="fas fa-pencil-alt"></i>
            </div>
          </div>
          <div className="profile-image">
            <img src="./images/image-3.jfif" alt="" />
          </div>
        </div>

        <div
          style={{
            paddingLeft: "30px",
            paddingBottom: "40px",
            paddingRight: "20px",
          }}
          className="making-box"
        >
          <div className="profile-text">
            <div className="profile-text-1">
              <h3>Ankit Kumar</h3>
              <p className="looking-for">
                Looking for React.js (Intern) || Programmar
              </p>
              <p className="talks-about">
                Talks about #webdevlopment and #competitivecoding
              </p>
              <p className="address">
                Kolkata, West Bengal, India
                <a href="https://linkedin.com">Contact info</a>
              </p>
            </div>
            <div className="profile-text-2">
              <div>
                <div className="profile-company">
                  <img src="./images/image-5.jfif" alt="" />
                </div>
                <div className="profile-company-name">
                  <a href="https://www.linkedin.com/in/ankit-kumar-938646180/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BZzwXYTr0QvSdUegMehufZQ%3D%3D#">
                    <p> Supero Software Private Limited</p>
                  </a>
                </div>
              </div>
              <div style={{ maginTop: "10px" }}>
                <div className="profile-company">
                  <img src="./images/image-4.jfif" alt="" />
                </div>
                <div className="profile-company-name">
                  <a href="https://www.linkedin.com/in/ankit-kumar-938646180/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BZzwXYTr0QvSdUegMehufZQ%3D%3D#">
                    <p>
                      Maulana Abul Kalam Azad University of Technology West
                      Bengal formerly WBUT
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="followers">
            <span>
              <a
                href="https://www.linkedin.com/feed/followers/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BZzwXYTr0QvSdUegMehufZQ%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                1,123 followers
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/search/results/people/?network=%5B%22F%22%5D&origin=MEMBER_PROFILE_CANNED_SEARCH&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BZzwXYTr0QvSdUegMehufZQ%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                500+ connections
              </a>
            </span>
          </p>

          <div className="profile-btn-group-1">
            <button>Open to</button>
            <button>Add section</button>
            <button>More</button>
          </div>

          <div className="open-to-work">
            <p>Open to work</p>
            <p>
              Frontend Web Developer, Software Engineer and React Developer Role
            </p>
            <p>
              <a href="https://www.linkedin.com/in/ankit-kumar-938646180/opportunities/job-opportunities/details/?profileUrn=urn%3Ali%3Afs%5Fnormalized%5Fprofile%3AACoAACrPObwBJirsGX9XxrAcR4y4Y5Lhx1CTBsk&trk=opento_sprofile_details&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BZzwXYTr0QvSdUegMehufZQ%3D%3D">
                See all details
              </a>
            </p>
            <div className="profile-background-icon">
              <i class="fas fa-pencil-alt"></i>
            </div>
          </div>
        </div>

        <Dashboard />
        <Featured />
        <Activity />

        <About />
        <Multiple />
      </div>
      <div className="profile-add">
        <Add1 />
        <Add2 />
        <Add3 name="People also viewed" />
        <Add3 name="You may also know" />
      </div>
    </section>
  );
};

export default Profile;
