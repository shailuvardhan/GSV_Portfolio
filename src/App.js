import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/project" component={Project} />
      <Route path="/not-found" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
