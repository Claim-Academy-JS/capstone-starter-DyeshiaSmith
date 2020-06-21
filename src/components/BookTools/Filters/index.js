import React from 'react';

import "./Filters.css";

export class Filters extends Form {
  static propTypes= {
    onChange: PropTypes.func,
  };

  inputs = [
    {
      labelText: "Price Per Hour",
      inputType: "number",
    },
    {
      labelText: "Users",
      inputType:"",
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
    });
  };

  render() {
    return <form>{this.renderInputs(this.inputs)}</form>;
  }
}
