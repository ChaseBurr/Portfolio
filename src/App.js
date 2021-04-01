import "./css/Global.scss";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

// Images
import "./images/giphy.png";
import "./images/Athletic-Shop.png";
import "./images/gameoflife.png";
import "./images/Entertainment-App.png";
import "./images/Hulu-Clone.png";
import "./images/Netflix-Clone.png";
import "./images/Social-App.png";

// Pages
import Home from "./components/Pages/Home";

function App() {
     useEffect(() => {
          axios.post(
               process.env.REACT_APP_SLACK,
               JSON.stringify({
                    blocks: [
                         {
                              type: "divider",
                         },
                         {
                              type: "section",
                              fields: [
                                   {
                                        type: "mrkdwn",
                                        text: "Portfolio Loaded",
                                   },
                                   {
                                        type: "mrkdwn",
                                        text: new Date().toUTCString(),
                                   },
                              ],
                         },
                         {
                              type: "divider",
                         },
                    ],
               })
          );
     }, []);

     return (
          <Router>
               <Switch>
                    <Route exact path="/" component={Home} />
               </Switch>
          </Router>
     );
}

export default App;
