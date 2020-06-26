import React from "react";

import { FilterableProductTable as ProductTable } from "components/FilterableProductTable";

export class Equipment extends React.Component {
  render() {
    return (
      <main className="table">
        <ProductTable />
      </main>
    );
  }
}
