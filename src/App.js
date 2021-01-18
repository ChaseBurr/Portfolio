import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./components/Pages/Home";
import Idea1 from "./components/Pages/Idea1";
import Projects from "./components/Pages/Projects";
import ProjectPage from "./components/Pages/ProjectPage";
import Resume from "./components/Pages/Resume";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/projects/:projectName" component={ProjectPage} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/idea1" component={Idea1} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
