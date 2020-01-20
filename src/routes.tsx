import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Login, Dashboard, New } from "./pages";

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/new" component={New}></Route>
      </Switch>
    </HashRouter>
  );
};

export default Routes;
