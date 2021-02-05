import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
