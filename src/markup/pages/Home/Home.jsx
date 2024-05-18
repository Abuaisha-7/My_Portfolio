import React from "react";
// import css
import "./Home.css";

// import the pages component
import About from "../About";
import Education from "../Education";
import Skills from "../Skills";
import Interests from "../Interests";
import Awards from "../Awards";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div class="container-fluid p-0">
      <div className="App">
        <header className="App-header">
          <h1>My Portfolio</h1>
        </header>
        <main>
          <About />
          <Education />
          <Skills />
          <Interests />
          <Awards />
          <Projects />
        </main>
      </div>
    </div>
  );
};

export default Home;
