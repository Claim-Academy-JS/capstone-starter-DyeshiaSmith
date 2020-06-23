import PropTypes from "prop-types";
import React from "react";

import { ProductRow } from "./ProductRow";

import "./ProductTable.css";

const renderTBody = (products) => {
  return products.map(({ _id: id, users, price, location, equipment }) => {
    return (
      <ProductRow
        id={id}
        users={users}
        price={price}
        location={location}
        equipment={equipment}
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
          <th>
            <span role="img" aria-label="green heart"></span> Select
          </th>
        </tr>
      </thead>
      <tbody>{renderTBody(products)}</tbody>
    </table>
  );
};
ProductTable.propTypes = {
  products: PropTypes.array,
};
