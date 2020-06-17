import React from "react";
import kebabcase from "lodash.kebabcase";

import "./Navigation.css";

export default class Navigation extends React.Component {
  links = ["Equipment", "NearMe", "Return", "Gallery"];

  createLinks = () => {
    return this.links.map((link) => {
      return (
        <li>
          {/* TODO: Use lodash to 'hyphenate' the navigation (lodash.kebabcase) */}
          {/* TODO: Use React Router to route to the correct 'page'/view */}
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
