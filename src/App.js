import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Pages/Home";
import Idea1 from "./components/Pages/Idea1";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/idea1" component={Idea1} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
