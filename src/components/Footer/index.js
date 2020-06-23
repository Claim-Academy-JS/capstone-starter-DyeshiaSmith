import React from "react";
import styles from "./Footer.modules.css";

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <i src className="fas fa-envelope-open-text"></i>
        <i className="fas fa-phone"></i>
      </div>
    );
  }
}
