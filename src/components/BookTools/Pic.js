import PropTypes from "prop-types";
import React from "react";

import "./Pic.css";

export const Pic = ({ name, pic }) => (
  <figure className="Pic">
    <img src={pic.large} alt="" />
    <figcaption>{name.first}</figcaption>
  </figure>
);
Pic.propTypes = {
  pic: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
};
