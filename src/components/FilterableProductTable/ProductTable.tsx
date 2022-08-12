import React from "react";
import {
  FilterableProduct,
  PRODUCTS,
} from "../../contants/FilterableProductTable";

export const ProductTable = () => {
  let rows: Array<FilterableProduct> = PRODUCTS;

  return (
    <div>
      {rows.map((item, index) => (
        <p>{item.category}</p>
      ))}
    </div>
  );
};
