import React from 'react'

// import the pages component
import About from "./markup/pages/About";
import Education from "./markup/pages/Education";
import Skills from "./markup/pages/Skills";
import Interests from "./markup/pages/Interests";
import Awards from "./markup/pages/Awards";

const Home = () => {
  return (
    <div class="container-fluid p-0">
    <About />
    <Education/>
    <Skills/>
    <Interests/>
    <Awards/>
    </div>
  )
}

export default Home