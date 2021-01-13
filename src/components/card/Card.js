import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ children, path, imgAlt, text, src, label }) {
  return (
    <>
      <li className="card">
        <Link to={path} className="card-link">
          <figure className="card-picture-wrap" data-category={label}>
            <img className="card-image" alt={imgAlt} src={src} />
          </figure>
          <div className="card-info">
            <h5 className="card-text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default Card;
