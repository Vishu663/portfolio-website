import React, { PureComponent } from "react";
import "./Home.css";
import { Element, Link } from "react-scroll";
import vishal from "../../images/vishalog.JPG";
import LinkedIn from "../../images/linkedin.png";
import github from "../../images/github.png";

export default class Home extends PureComponent {
  render() {
    return (
      <Element name="home">
        <div className="section-home">
          <img src={vishal} alt="Profile" height={"275px"} width={"275px"} />
          <div className="info">
            <h3>Hello I'm</h3>
            <h1>Vishal Sanap</h1>
            <h3>Software Developer | Web Developer </h3>
            <div className="info-btn">
              <button
                onClick={() =>
                  window.open(
                    require("../../assets/Vishal Resume.pdf"),
                    "_blank"
                  )
                }
              >
                Download CV
              </button>
              <button>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </button>
            </div>
            <div className="info-logo">
              <a href="https://www.linkedin.com/in/vishal-sanap-83537119b/">
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
                  height={"40px"}
                  width={"40px"}
                />
              </a>
              <a href="https://github.com/Vishu663">
                <img src={github} alt="github" height={"40px"} width={"40px"} />
              </a>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
