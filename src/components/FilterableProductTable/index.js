import React from "react";

import { ProductTable as Table } from "./ProductTable";

import { makeRequest } from "../../api/index";
import { parseDollarPrice } from "utils";

import { Filters } from "../Forms/Filters";

import "./FilterableProductTable.css";

export class FilterableProductTable extends React.Component {
  //may need to filter more and how to filter cbs
  state = {
    products: [],
    activeProductFilters: [],
  };

  filterCBs = {
    inStockOnly: (_) => ({ stocked }) => stocked,
    maxPrice: (maxPrice) => ({ price }) =>
      parseDollarPrice(price) <= parseFloat(maxPrice),
    search: (search) => ({ name }) =>
      name.toLowerCase().includes(search.toLowerCase()),
  };

  async componentDidMount() {
    try {
      this.setState({
        products: await makeRequest(
          "http://localhost:5000/api/products/products"
        ),
      });
    } catch (error) {
      console.error(error);
    }
  }

  inputs = [
    {
      labelTextContent: "Price",
      inputType: "number",
    },
    {
      labelTextContent: "BookTool",
      inputType: "button",
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
      <main className="main">
        <Filters onChange={this.handleChange} />
        <Table products={filteredProducts} />
      </main>
    );
  }
}

// figure out exactly what this will do to my table
