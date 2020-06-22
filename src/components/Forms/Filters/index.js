import PropTypes from "prop-types";
import React from "react";

import { Form } from "../Form";

// 'styles' is not a named export
import styles from "./Filters.module.css";

export class Filters extends Form {
  static propTypes = {
    onChange: PropTypes.func,
  };

  inputs = [
    {
      labelText: "Price",
      inputType: "number",
    },
    {
      labelText: "Users",
      inputType: "",
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
      inputType: "",
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
