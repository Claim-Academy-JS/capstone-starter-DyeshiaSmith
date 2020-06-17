import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Return from "components/ReturnTool";
import { NearMe } from "./components/BookTools/NearMe";
import { Equipment } from "./components/BookTools/Equipment";

export default class App extends React.Component {
  render() {
    return <Login />;
  }
}
