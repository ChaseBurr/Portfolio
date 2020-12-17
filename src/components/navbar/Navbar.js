import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/" className="nav-logo">
          <i className="fas fa-user-alt"></i>
        </Link>
        <ul className="nav-items">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/" className="nav-item">
            About
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
