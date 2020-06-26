import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

const links = ["Home", "Equipment", "About"];

const createLinks = () => {
  return links.map((link) => {
    return (
      <li key={link}>
        <NavLink to={"/" + link.toLowerCase()}>{link}</NavLink>
      </li>
    );
  });
};

export const Navigation = () => (
  <nav>
    <ul>{createLinks()}</ul>
  </nav>
);
