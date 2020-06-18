import React from "react";
import kebabcase from "lodash.kebabcase";

import "font-awesome/css/font-awesome.min.css";

import "./Navigation.css";

export default class Navigation extends React.Component {
  links = ["Equipment", "NearMe", "Return", "Gallery"];

  createLinks = () => {
    return this.links.map((link) => {
      return (
        <li>
          <a href={kebabcase(link.toLowerCase())}>Equipment</a>
        </li>
      );
    });
  };

  render() {
    return (
      <nav className="Navigation">
        <ul>{this.createLinks()}</ul>
      </nav>
    );
  }
}
