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
      labelText: "Equipment",
      inputType: "search",
    },
    {
    {
      labelText: "Indoor",
      inputType: "Radio",
    },
    {
      labelText: "Outdoor",
      inputType: "Radio",
    },
    {
      labelText: "Automotive",
      inputType: "Radio",
    },
  ];

  handleChange = (event) => {
    this.props.onChange({
      [event.target.dataset.st]:
        event.target.type.toLowerCase() === "search"
          ? event.target.value
          : event.target.checked,
    });
  };

  render() {
    return (
      <form className={styles.form}>{this.renderInputs(this.inputs)}</form>
    );
  }
}
