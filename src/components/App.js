import React from "react";
import { Switch, Route } from "react-router-dom";
import "../stylesheets/App.css";
import Home from "./Home";
import Shows from "./Shows";
import Music from "./Music";
import About from "./About";
import Store from "./Store";

const App = () => {
  return (
    <div className={"app"}>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/shows"} component={Shows} />
        <Route exact path={"/music"} component={Music} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/store"} component={Store} />
      </Switch>
    </div>
  );
};

export default App;
