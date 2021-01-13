import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/" className="nav-logo">
          Chase Burr
        </Link>
        <ul className="nav-items">
          <Link to="/projects" className="nav-item">
            Projects
          </Link>
          <Link to="/" className="nav-item">
            Resume
          </Link>
          <Link to="/" className="nav-item">
            Contact
          </Link>
          <Link to="/idea1" className="nav-item">
            Idea1
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
