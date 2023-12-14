import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  return (
    <header className="section-header">
      <div>Vishal Sanap</div>
      <nav>
        <ul>
          <li>
            <Link to="home" smooth={true} offset={-77} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-77} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} offset={-77} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-77} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
