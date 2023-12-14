import React from "react";
import "./Projects.css";
import { Element } from "react-scroll";

function Projects() {
  return (
    <Element name="projects">
      <div className="section-projects">
        <h1>My Projects</h1>
        <div className="project-list">
          <div class="card">
            <div class="card-inner">
              <div class="card-face front">
                <h2>AIRBNB CLONE</h2>
                <img
                  src={require("../../assets/Airbnb-clone-ipad.JPG")}
                  alt="project-1"
                  width={"300px"}
                  height={"300px"}
                />
              </div>
              <div class="card-face back">
                <p>
                  This is an AIRBNB clone website that is made using the MERN
                  stack which uses MongoDB as database and React, Node and
                  Express.js as Frontend, Backend and framework respectively.
                  You can book a hotel with total functionality and as a user
                  canalso check the bookings and manage your hotels.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-inner">
              <div class="card-face front">
                <h2>WEBPRINT</h2>
                <img
                  src={require("../../assets/webprint-ipad.PNG")}
                  alt="project-2"
                  width={"300px"}
                  height={"300px"}
                />
              </div>
              <div class="card-face back">
                <p>
                  This is an simple website that I made using Jinga HTML
                  andFlask framework to Login, Register and Logout a user. I
                  used SQLite as database to store the notes and the user data
                  from the website.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-inner">
              <div class="card-face front">
                <h2>USER AUTH</h2>
                <img
                  src={require("../../assets/login.PNG")}
                  alt="project-3"
                  width={"300px"}
                  height={"300px"}
                />
              </div>
              <div class="card-face back">
                <p>
                  This is an 3D printing project where we implement the use
                  ofcloud computing and web development. I have created an
                  interface to manage and print the tasks usingReactJS which has
                  its UI in Figma, Backend in Node JS, Databasein MongoDB and
                  uses AWS to remotely print the design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Projects;
