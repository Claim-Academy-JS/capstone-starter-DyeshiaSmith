import React from "react";

import { ProductTable as Table } from "./ProductTable";

import { Filters } from "components/Forms/Filters";

import "./FilterableProductTable.css";

export class FilterableProductTable extends React.Component {
  state = {
    // Index 0 - search term
    // Index 1 - 🔘
    activeProductFilters: [],
    products: [],
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:5000/api/products/products");

    try {
      this.setState({
        products: await res.json(),
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (event) => {
    const activeProductFilters = [];
    if (event.target.type === "search") {
      activeProductFilters[0] = event.target.value;
    } else {
      activeProductFilters[1] = event.target.dataset.st;
    }

    this.setState({ activeProductFilters });
  };

  render() {
    const [searchTerm, equipmentType] = this.state.activeProductFilters;

    let filteredProducts = this.state.products;

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(({ equipment }) =>
        equipment.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (equipmentType) {
      filteredProducts = filteredProducts.filter(
        ({ type }) => type.toLowerCase() === equipmentType
      );
    }

    return (
      <main>
        <Filters onChange={this.handleChange} />
        <Table products={filteredProducts} />
      </main>
    );
  }
}
