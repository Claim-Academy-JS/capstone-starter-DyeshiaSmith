import React from "react";

import { ProductTable as Table } from "./ProductTable";

import { parseDollarPrice } from "utils";

import { Filters } from "components/Forms/Filters";

import "./FilterableProductTable.css";

export class FilterableProductTable extends React.Component {
  state = {
    products: [],
    activeProductFilters: [],
  };

  filterCBs = {
    equipment: (search) => ({ equipment }) =>
      equipment.toLowerCase().includes(search.toLowerCase()),
  };
  //search by indoor, Outdoor, Automotive
  //location
  //filter cbs
  //be able to filter by "Type" using radio buttons'

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

  inputs = [
    {
      labelTextContent: "Type",
      inputType: "checkbox",
      valType: "checked",
    },
    {
      labelTextContent: "Equipment",
      inputType: "Search",
    },
  ];

  handleChange = (filterUpdate) => {
    console.log(filterUpdate);
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
        <Filters onChange={this.handleChange} />
        <Table products={filteredProducts} />
      </main>
    );
  }
}
