import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      name: "",
      username: "",
      password: "",
      error: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.ListeningStateChangedEvent({ [e.target.title]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "test" && password === "test") {
      this.setState({ loggedin: true });
    } else {
      this.setState({ err: "Error please check username or password" });
    }
  };

  render() {
    return (
      <div className="main">
        <form className="login-form">
          <input
            type="text"
            title="username"
            placeholder="username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            title="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <button type="submit" className="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
