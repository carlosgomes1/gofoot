import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

import Owner from "../pages/Owner";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/owner" isPrivate component={Owner} />
  </Switch>
);

export default Routes;
