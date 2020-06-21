import React from "react";
import styles from "./Login.css";
import { Button } from "./Button";

import { authenticateUser } from "api";
export class Login extends React.Component {
  state = {
    buttonTexts: ["Login", "Register"],
    inputs: [
      {
        inputType: "Text",
        labelText: "Username",
      },
      {
        inputType: "password",
        labelText: "Password",
      },
    ],
    isLoggedIn: false,
    password: "",
    username: "",
  };

  registrationInputs = [
    {
      inputType: "Text",
      labelText: "Name",
    },
    {
      inputType: "email",
      labelText: "Email",
    },
  ];

  handleRegistration = () => {
    const currentInputs = this.state.inputs;
    this.setState({
      buttonTexts: [...this.state.buttonTexts].reverse(),
      inputs:
        currentInputs.length > 2
          ? currentInputs.slice(0, 2)
          : currentInputs.concat(this.registrationInputs),
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        {this.renderInputs(this.state.inputs)}
        <Button buttonText={this.state.buttonTexts[0]} />
        <Button
          buttonClass="plain"
          buttonText={this.state.buttonTexts[1]}
          label="Register?"
          type="button"
          onClick={this.handleRegistration}
        />
      </form>
    );
  }
}
