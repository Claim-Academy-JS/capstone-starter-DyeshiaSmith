import PropTypes from "prop-types";
import React from "react";

import { ProductRow } from "./ProductRow";

import "./ProductTable.css";

const renderTBody = (products) => {
  return products.map(({ _id: id, name, price, location }) => {
    return (
      <ProductRow
        id={id}
        name={name}
        price={price}
        location={location}
        key={id}
      />
    );
  });
};

export const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Equipment</th>
          <th>Price</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>{renderTBody(products)}</tbody>
    </table>
  );
};
ProductTable.propTypes = {
  products: PropTypes.array,
};
