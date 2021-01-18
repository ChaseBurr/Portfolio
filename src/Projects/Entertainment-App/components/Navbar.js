import React from "react";

// Components
import Search from "./Search.js";

function Navbar(props) {
  function updateData(data) {
    props.searchData(data);
  }
  return (
    <>
      <nav className="movie-project">
        <div className="navbar">
          <div className="logo">
            <a href="/projects/entertainment-app">ENTERTAINMENT FINDER</a>
          </div>
          <Search newData={updateData} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
