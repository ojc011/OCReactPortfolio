import React from "react";
import MeOnWater from "../../img/ocean.jpg";
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
            I'm an early-career software engineer with a background in front end development as well as back end. I am looking forward to dive into the industry and contribute as much as I can!
          </p>
          <p className="bio">
            Some of the skills I bring to the table:
            <ul>
              <li>Adobe Creative Suite (special love for Illustrator)</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>HTML & CSS</li>
              <li>Node</li>
              <li>Express</li>
              <li>SQL</li>
              <li>Logo & Web Design</li>
              <li>Project Management</li>
            </ul>
          </p>
          <p>I look forward to working with you!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
