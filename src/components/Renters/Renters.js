import React from "react";

import getAllProducts from "../api/index";

export class bookTools extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      this.setState({ products: await getAllProducts() });
    } catch (error) {
      console.error(error);
    }
  }
}
