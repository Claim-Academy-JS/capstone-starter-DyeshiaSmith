import React from "react";

import { ProductTable as Table } from "./ProductTable";

import { Filters } from "../Forms/Filters";

import "./FilterableProductTable.css";

export class FilterableProductTable extends React.Component {
  state = {
    type: [],
    products: [],
    activeProductFilters: [],
  };

  filterCBs = {
    household: ({ household }) => household,
    outdoor: ({ outdoor }) => outdoor,
    automotive: ({ automotive }) => automotive,
    searchTerm: (search) => ({ product }) =>
      product.toLowerCase().includes(search.toLowerCase()),
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:3000/api/products/products");

    try {
      this.setState({
        products: await res.json(),
      });
    } catch (error) {
      console.error(error);
    }
  }

  inputs = [
    {
      labelTextContent: "Automotive",
      inputType: "checkbox",
      valType: "checked",
    },
    {
      labelTextContent: "Household",
      inputType: "checkbox",
      valType: "checked",
    },
    {
      labelTextContent: "Outdoor",
      inputType: "checkbox",
      valType: "checkbox",
    },
    {
      labelTextContent: "Search",
      inputType: "search",
    },
  ];

  handleChange = (filterUpdate) => {
    const keyToRemove = Object.keys(filterUpdate)[0];

    const productFilters = this.state.activeProductFilters.filter(
      (productFilter) => !(Object.keys(productFilter)[0] === keyToRemove)
    );

    productFilters.push(filterUpdate);

    const activeProductFilters = productFilters.filter((productFilter) => {
      console.log(Object.values(productFilter)[0]);
      return Object.values(productFilter)[0];
    });

    this.setState({ activeProductFilters });
  };

  render() {
    const filteredProducts = this.state.activeProductFilters.reduce(
      (accumulatedProducts, productFilter) => {
        return accumulatedProducts.filter(
          this.filterCBs[Object.keys(productFilter)[0]](
            Object.values(productFilter)[0]
          )
        );
      },
      this.state.products
    );

    return (
      <main className="filterInputs">
        <Table products={filteredProducts} />
        <Filters onChange={this.handleChange} />
      </main>
    );
  }
}
