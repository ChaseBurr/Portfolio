import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Images
import "./images/giphy.png";
import "./images/Athletic-Shop.png";
import "./images/gameoflife.png";
import "./images/Entertainment-App.png";
import "./images/Hulu-Clone.png";
import "./images/Netflix-Clone.png";

// Pages
import Home from "./components/Pages/Home";

function App() {
     return (
          <div className="App">
               <Router>
                    <Switch>
                         <Route exact path="/" component={Home} />
                    </Switch>
               </Router>
          </div>
     );
}

export default App;
