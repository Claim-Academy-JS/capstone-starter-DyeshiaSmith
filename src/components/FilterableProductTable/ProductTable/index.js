import PropTypes from "prop-types";
import React from "react";

import { ProductRow } from "./ProductRow";

import "./ProductTable.css";

const renderTBody = (products) => {
  return products.map(
    ({
      _id: id,
      price,
      equipment,
      // Renaming this to avoid confusion 😕
      type: equipmentType,
    }) => {
      return (
        <ProductRow
          // 'id' not displayed but used to track what was clicked on
          id={id}
          price={price}
          equipment={equipment}
          equipmentType={equipmentType}
          key={id}
        />
      );
    }
  );
};

export const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Equipment</th>
          <th>Price</th>
          <th>Type</th>
          <th>Rent</th>
        </tr>
      </thead>
      <tbody>{renderTBody(products)}</tbody>
    </table>
  );
};
ProductTable.propTypes = {
  products: PropTypes.array,
};
