import React from "react";

import { Input } from "./Input";

export class Form extends React.Component {
  handleChange = (event) => {
    this.setState({
      [event.target.dataset.st]:
        event.target.type === "search"
          ? event.target.checked
          : event.target.value,
    });
  };

  processFormData = (formControls, datasetKey = "st") =>
    Array.from(formControls)
      .filter(({ dataset }) => dataset[datasetKey])
      .map(({ dataset, value }) => ({ [dataset[datasetKey]]: value }))
      .reduce((accumulatedData, currentData) => ({
        ...accumulatedData,
        ...currentData,
      }));

  renderInputs = (inputs) =>
    inputs.map(({ labelText, inputType }) => (
      <Input
        label={labelText}
        type={inputType}
        key={labelText}
        onChange={this.handleChange}
      />
    ));
}
