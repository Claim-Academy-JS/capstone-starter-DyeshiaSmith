import React from "react";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Return from "components/Return";
import { NearMe } from "./components/BookTools/NearMe";
import { Equipment } from "./components/BookTools/Equipment";

export default class App extends React.Component {
  render() {
    return <Navigation />;
  }
}
