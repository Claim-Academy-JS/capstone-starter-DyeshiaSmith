import PropTypes from "prop-types";
import React from "react";

import camelCase from "camelcase";

import "./Input.css";

export class Input extends React.Component {
  static defaultProps = {
    hideLabel: true,
    type: "text",
    value: "value",
  };

  static propTypes = {
    hideLabel: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func,
    st: PropTypes.string,
    type: PropTypes.string,
  };

  camelCaseLabel = camelCase(this.props.label);

  className = this.props.hideLabel ? "hiddenLabel" : "label";

  render() {
    return (
      <div>
        <label htmlFor={this.camelCaseLabel} className={this.className}>
          {this.props.label}
        </label>
        <input
          id={this.camelCaseLabel}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.label}
          data-st={this.props.st || this.camelCaseLabel}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
