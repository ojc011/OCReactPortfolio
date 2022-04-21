import React from "react";
// import logo from './logo.svg';
// import NavBar from "./components/NavBar";
import "./App.css";
import Main from "./views/Main";
// import waterImage from "./img/water-rotated.jpg";
import Projects from "./views/Projects";
import Resume from "./views/Resume";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Main />
        <Projects />
        <About />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}

export default App;
