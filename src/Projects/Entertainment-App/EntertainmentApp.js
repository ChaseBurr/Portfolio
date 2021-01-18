import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components

// Pages
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import MoviePage from "./Pages/MoviePage";
import NotFound from "./Pages/NotFound";

function EntertainmentApp() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/projects/entertainment-app" component={Home} />
          <Route
            exact
            path="/projects/entertainment-app/movies"
            component={Movies}
          />
          <Route
            exact
            path="/projects/entertainment-app/movies/:id"
            component={MoviePage}
          />
          <Route
            exact
            path="/projects/entertainment-app/?search"
            component={MoviePage}
          />

          {/* Needs to be at bottom */}
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default EntertainmentApp;
