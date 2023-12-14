import React from "react";
import "./Contact.css";
import { Element } from "react-scroll";
import Card from "../../components/card/card";

function Contact() {
  return (
    <Element name="contact">
      <div className="section-contact">
        <div className="contact-header">
          <h4>Get in touch</h4>
          <h1>Contact Me</h1>
        </div>
        <div className="contact-content">
          <Card ctype="card-third card-contact">
            <img
              src={require("../../assets/email.png")}
              alt=""
              height={"30px"}
              width={"30px"}
            />
            vishalsanap664@gmail.com |
            <img
              src={require("../../images/linkedin.png")}
              alt=""
              height={"25px"}
              width={"25px"}
            />
            <a href="https://www.linkedin.com/in/vishal-sanap-83537119b/">
              LinkedIn
            </a>
          </Card>
        </div>
        <div className="footer">
          <footer>Copyright © 2023 Vishal Sanap. All Rights Reserved.</footer>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
