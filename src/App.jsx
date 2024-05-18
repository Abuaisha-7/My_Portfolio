// import react from react
import React from "react";
// import the router and routes component from react-router
import { Routes, Route } from "react-router-dom";
// Import the Header component
import Header from "./markup/components/Header/Header";
// import the pages component
import Home from "./markup/pages/Home";
import About from "./markup/pages/About";
import Education from "./markup/pages/Education";
import Skills from "./markup/pages/Skills";
import Interests from "./markup/pages/Interests";
import Awards from "./markup/pages/Awards";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </>
  );
}

export default App;
