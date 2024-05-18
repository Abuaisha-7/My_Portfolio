import React from "react";
// Import the Link component from react-router-dom
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Heyru
            <span className="text-primary">Bedru</span>
          </h1>
          <div className="subheading mb-5">
            Dire Dawa · Sabiyan, Meskelegna · (+251) 912-7973-88 ·
            <Link to="mailto:heyrubedru8086@gmail.com">
              heyrubedru8086@gmail.com
            </Link>
          </div>
          <p className="lead mb-5">
            I am experienced in leveraging agile frameworks to provide a robust
            synopsis for high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className="social-icons">
            <Link
              className="social-icon"
              to="https://github.com/Abuaisha-7"
            >
              <i className="fab fa-github"></i>
              
            </Link>
            <Link
              className="social-icon"
              to="https://www.linkedin.com/in/heyru-bedru-3b8540227"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
            <Link className="social-icon" to="https://t.me/Heyru8086">
              <i className="fab fa-telegram"></i>
            </Link>
            <Link className="social-icon" to="https://twitter.com/HeyruBedru">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className="social-icon"
              to="https://www.facebook.com/heyru.bedru"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default About;
