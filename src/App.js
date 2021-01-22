import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import ProjectPage from "./components/Pages/ProjectPage";
import Resume from "./components/Pages/Resume";

console.log("eNv", process.env);

function App() {
   return (
      <div className="App">
         <Router>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/projects" component={Projects} />
               <Route exact path="/resume" component={Resume} />
            </Switch>
         </Router>
      </div>
   );
}

export default App;
