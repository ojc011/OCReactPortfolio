import React from "react";
import MeOnWater from "../../img/me.png";
import "./style.css";

function About() {
  return (
    <div className="viewThree" id="about">
      <div className="row">
        <div className="col-md about-left">
          <img src={MeOnWater} className="about-photo img-fluid" alt="Me"></img>
        </div>
        <div className="col-md">
          <h3 className="viewTitle" id="aboutTitle">
            ABOUT
          </h3>
          <p className="bio">
            A bit about myself
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
