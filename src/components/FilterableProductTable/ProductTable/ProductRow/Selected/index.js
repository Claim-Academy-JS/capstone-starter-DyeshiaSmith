import PropTypes from "prop-types";
import React from "react";

import styles from "./Selected.module.css";

export class Selected extends React.Component {
  static propTypes = {
    onClick: PropTypes.func,
  };

  state = {
    isSelected: false,
  };

  handleSelected = () => {
    this.setState({ isSelected: !this.state.isSelected }, () => {
      this.props.onClick(this.state.isSelected);
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <input type="checkbox" />
      </div>
    );
  }
}
