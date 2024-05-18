import React from 'react'

// import the pages component
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Interests from "./Interests";
import Awards from "./Awards";

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