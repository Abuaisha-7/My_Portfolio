import React from "react";

const Education = () => {
  return (
    <div>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Evangadi Coding Academy</h3>
              <div className="subheading mb-3">Fullstack Application Development Program</div>
              <div>Fullstack Web Development (MERN Stack)</div>
             
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">August 2023 - May 2024</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Udacity</h3>
              <div className="subheading mb-3">Programming Fundamentals</div>
              <div>Web Development</div>
             
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary p-5
              ">August 22, 2024</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Dire Dawa University</h3>
              <div className="subheading mb-3">Bachelor of Science</div>
              <div>Civil Enginnering</div>
              <p>CGPA: 3.58 (with Destinition)</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">November 2011 - June 2016</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">Ethio-italy Polytechnic College</h3>
              <div className="subheading mb-3">
                Information and communication technology - Hardware and network
                service
              </div>
              <p>Level - 4</p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">November 2018 - June 2021</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default Education;
