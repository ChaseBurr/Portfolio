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
               <Link to="/" className="nav-item">
                  Home
               </Link>
               <Link to="/projects" className="nav-item">
                  Projects
               </Link>
               <Link to="/resume" className="nav-item">
                  Resume
               </Link>
               <Link to="/photography" className="nav-item">
                  Contact
               </Link>
               <Link to="/photography" className="nav-item">
                  Photography
               </Link>
            </ul>
         </nav>
      </>
   );
};

export default Navbar;
