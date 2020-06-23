import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "components/Header";
import { Routes } from "./routes";
import Footer from "./components/Footer/index";

import "normalize.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
