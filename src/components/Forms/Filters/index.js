import PropTypes from "prop-types";
import React from "react";

import { Form } from "../Form";

import styles from "./Filters.module.css";

export class Filters extends Form {
  static propTypes = {
    onChange: PropTypes.func,
  };

  inputs = [
    {
      labelText: "Price",
      inputType: "",
    },
    {
      labelText: "Products",
      inputType: "search",
    },
    {
      labelText: "Search",
      inputType: "Search",
    },
    {
      labelText: "Location",
      inputType: "",
    },
    {
      labelText: "Type",
      inputType: "Search",
    },
    {
      labelText: "Submit",
      inputType: "Submit",
    },
  ];

  handleChange = (event) => {
    this.props.onChange({
      [event.target.dataset.st]:
        event.target.type === "search"
          ? event.target.checked
          : event.target.value,
    });
  };

  render() {
    return (
      <form className={styles.form}>{this.renderInputs(this.inputs)}</form>
    );
  }
}
