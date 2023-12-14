import React from "react";
import "./About.css";
import { Element } from "react-scroll";
import about from "../../images/about-pic.png";
import Card from "../../components/card/card";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaGithub,
  FaGit,
} from "react-icons/fa";

function About() {
  return (
    <Element name="about">
      <div className="section-about">
        <div className="about-header">
          <h1>About Me</h1>
        </div>
        <div className="about-content">
          <div className="about-img">
            <img src={about} alt="about-img" height={"300px"} width={"275px"} />
          </div>
          <div className="about-right">
            <div className="about-upper">
              <Card ctype="card-primary card-experience">
                <img
                  src={require("../../assets/users.png")}
                  alt=""
                  height={"30px"}
                  width={"30px"}
                />
                Experience<div>2+ Years</div>
                <div>Front-end Development</div>
              </Card>
              <Card ctype="card-primary card-experience">
                <img
                  src={require("../../assets/badge.png")}
                  alt=""
                  height={"30px"}
                  width={"30px"}
                />
                Education<div>B.E - Electronics and Telecommunication</div>
              </Card>
            </div>
            <div className="about-lower">
              <p>
                Hardworking and passionate internship/job seeker with strong
                organizational skills eager to secure entry-level Software
                Developer position. Ready to help team achieve company goals.
                Learning Web Development and developing new skills. Passionate
                learner. Responsible and obedient, fulfilling roles as T&P
                Student Coordinator and Class Representative. Words and actions
                aligned with a thriving passion for creating a career in the
                technical industry.
              </p>
            </div>
            <div className="skills">
              <h2>My Skills</h2>
              <ul>
                <li>
                  <FaHtml5 size={"20px"} />
                  HTML
                </li>
                <li>
                  <FaCss3 size={"20px"} />
                  CSS
                </li>
                <li>
                  <FaJs size={"20px"} />
                  Javascript
                </li>
                <li>
                  <FaReact size={"20px"} />
                  React
                </li>
                <li>
                  <FaGit size={"20px"} />
                  Git
                </li>
                <li>
                  <FaGithub size={"20px"} />
                  GitHub
                </li>
                <li>
                  <FaFigma size={"20px"} />
                  Figma
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default About;
