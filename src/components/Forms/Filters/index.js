import PropTypes from "prop-types";
import React from "react";

import { Form } from "components/Forms/Form";
import { Input } from "components/Forms/Input";

import styles from "./Filters.module.css";

export class Filters extends Form {
  static propTypes = {
    onChange: PropTypes.func,
  };

  inputs = [
    {
      hideLabel: false,
      labelText: "Indoor",
      inputType: "radio",
    },
    {
      hideLabel: false,
      labelText: "Outdoor",
      inputType: "radio",
    },
    {
      hideLabel: false,
      labelText: "Automotive",
      inputType: "radio",
    },
  ];

  renderInputs = (inputs) =>
    inputs.map(({ hideLabel, labelText, inputType }) => (
      <Input
        hideLabel={hideLabel}
        label={labelText}
        type={inputType}
        key={labelText}
        onChange={this.handleChange}
      />
    ));

  render() {
    return (
      <form className={styles.filters}>
        <Input label="Equipment" type="search" />
        <div className={styles.container}>{this.renderInputs(this.inputs)}</div>
      </form>
    );
  }
}
