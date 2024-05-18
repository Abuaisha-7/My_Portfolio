import React from "react";

const Skills = () => {
  return (
    <div>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages & Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
            <i className="fab fa-bootstrap"></i>
            </li>
            <li className="list-inline-item">
            <i className="fab fa-js"></i>
            </li>
            <li className="list-inline-item">
            <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
            <i className="fab fa-node"></i>
            </li>
            <li className="list-inline-item">
            <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
            <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
            <i className="fas fa-database"></i>
            </li>
           
          </ul>
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Mobile-First, Responsive Design
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Cross Browser Testing & Debugging
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Cross Functional Teams
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Agile Development & Scrum
            </li>
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default Skills;
