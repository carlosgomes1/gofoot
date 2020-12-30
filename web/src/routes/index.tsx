import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" component={Register} />
  </Switch>
);

export default Routes;
