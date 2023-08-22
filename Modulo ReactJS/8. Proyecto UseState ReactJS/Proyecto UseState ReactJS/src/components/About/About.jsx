import React from "react";
import "./About.css";

const About = ({ aboutMe }) => {
  return (
    <div>
      <div className="about card">
        <h4>About Me</h4>
        <ul>
          {aboutMe.map((about) => {
            return (
              <li key={about.info}>
                <p>{about.info}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default About;
