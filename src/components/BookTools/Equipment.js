import React from "react";
import { getAllProducts } from "api";

export default class Equipment extends React.Component {
  render() {
    return getAllProducts.then((data) => <div>{data.json()}</div>);
  }
}
