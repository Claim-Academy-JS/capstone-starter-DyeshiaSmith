import React from "react";
import styles from "./Footer.modules.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <i className="fas fa-envelope-open-text"></i>
        <i className="fas fa-phone"></i>
      </div>
    );
  }
}
