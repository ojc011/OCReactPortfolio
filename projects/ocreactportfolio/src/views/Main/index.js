import React from "react";
import NavBar from "../../components/NavBar";
import Me from "../../img/me.png";
import "./style.css";

function MainPage() {
  return (
    <div className="row">
      <NavBar />

      <div className="col-md">
        <div className="mobile-image"></div>
        <div className="intro-text alignCenter">
          <h2 className="mobile-title">OLIVER CRONK</h2>
          <br></br>
          <h3 className="intro">
            Full-Stack Web Developer. <br></br>
            Bringing brands to life through design and interaction.
          </h3>
          <br></br>
          <br></br>
          <button type="button" className="readMore btn btn-info" href="#">
            Read More
          </button>
        </div>
      </div>
      <div className="col-md">
        <div className="right-image"></div>
      </div>
    </div>
  );
}

export default MainPage;

// this page is the landing page with short intro sentence and split screen water and dust
