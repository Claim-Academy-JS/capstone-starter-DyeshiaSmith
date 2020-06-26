import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./components";
import { Routes } from "./Routes";

import "normalize.css";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <Header />
        <Routes />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
