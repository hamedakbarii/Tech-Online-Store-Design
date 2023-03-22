import React from "react";

const ProductsContainer = ({ children }) => {
  return <div className="container grid grid-cols-6 p-2">{children}</div>;
};

export default ProductsContainer;
