import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
