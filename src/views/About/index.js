import React from 'react';
import MeOnWater from '../../img/me.png';
import './style.css';

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
          <div className="row align-self-center bioText">
            <p className="bio">
              I'm an early-career software engineer with a background in front
              end development as well as back end. I am looking forward to dive
              into the industry and contribute as much as I can!
            </p>
            <p className="bio">
              <span className="skillHeader">
                Some of the skills I bring to the table:
              </span>
              <ul className=" skillList text-center">
                <br></br>
                <li className="skill">Python</li>
                <li className="skill">Ruby / Ruby on Rails"</li>
                <li className="skill">JavaScript</li>
                <li className="skill">ReactJS</li>
                <li className="skill">Redux</li>
                <li className="skill">Context API</li>
                <li className="skill">React Hooks</li>
                <li className="skill">Firebase</li>
                <li className="skill">React Router</li>
                <li className="skill">Styled Components</li>
                <li className="skill">GraphQL</li>
                <li className="skill">Testing</li>
                <li className="skill">HTML & CSS</li>
                <li className="skill">Node</li>
                <li className="skill">Express</li>
                <li className="skill">SQL</li>
                <li className="skill">PostgreSQL</li>
              </ul>
            </p>
            <br></br>
            <h3 className="bio">I look forward to working with you!</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
