import React, { Fragment } from "react";

import { Navigation } from "./components";

import { Login } from "./components";

export const App = () => (
  <Fragment>
    <Login />
    <Navigation />
  </Fragment>
);
