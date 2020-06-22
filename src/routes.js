import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { About } from "./components";

import { FilterableProductTable as Equipment } from "./components/FilterableProductTable";
import { Home } from "./components";

export const Routes = () => (
  <Switch>
    <Route exact path="/home">
      <Home />
    </Route>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route exact path="/Equipment">
      <Equipment />
    </Route>
    <Route exact path="/About">
      <About />
    </Route>
    {/*<Route exact path="/return">
      <Return />
    </Route> */}
  </Switch>
);
