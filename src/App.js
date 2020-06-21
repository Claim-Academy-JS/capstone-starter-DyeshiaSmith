import React, { Fragment } from "react";

import { Navigation, NearMe } from "./components";

import { Login } from "./components";

export const App = () => (
  <Fragment>
    <Login />
    <Navigation />
    <NearMe />
  </Fragment>
);
