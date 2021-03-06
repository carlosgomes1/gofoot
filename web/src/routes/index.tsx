import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

import Owner from "../pages/Owner";
import New from "../pages/New";
import Field from "../pages/Field";
import Responsible from "../pages/Responsible";
import NewResponsible from "../pages/NewResponsible";

import NotFound from "../pages/NotFound";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/owner" isPrivate component={Owner} />
    <Route path="/new" isPrivate component={New} />
    <Route path="/field" isPrivate component={Field} />
    <Route path="/responsible" isPrivate component={Responsible} />
    <Route path="/newResponsible" isPrivate component={NewResponsible} />
    <Route path="/" component={NotFound} />
  </Switch>
);

export default Routes;
