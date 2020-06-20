import React from "react";
import styles from "./Login.css";

import { authenticateUser } from "api";
export default class Login extends React.Component {
  // Using ES class fields
  state = {
    loggedIn: false,
    username: "",
    password: "",
    error: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.dataset.input]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    //add error handling
    return (
      <div className="main-div">
        <main className="login-main">
          <form className="login-form" onSubmit={this.handleSubmit}>
            {/* TODO: Refactor this to use just one Input component */}
            <input
              type="text"
              title="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}
              data-input="username"
            />
            <input
              type="password"
              title="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
              data-input="password"
            />
            <button
              type="submit"
              className="button"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    );
  }
}
