import React from "react";
import { NavLink } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";
//use font awesome for icons at the bottom

import "./Navigation.css";

const links = ["Home", "Equipment", "About", "Return"];

const createLinks = () => {
  return links.map((link) => {
    return (
      <li key={link}>
        <NavLink to={"/" + link.toLowerCase()} activeClassName="isActiveLink">
          {link}
        </NavLink>
      </li>
    );
  });
};

export const Navigation = () => (
  <nav>
    <ul>{createLinks()}</ul>
  </nav>
);
