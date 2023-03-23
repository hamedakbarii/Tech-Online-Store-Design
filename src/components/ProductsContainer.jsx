import React from "react";

const ProductsContainer = ({ children }) => {
  return <div className="container grid grid-cols-6 p-2 gap-3">{children}</div>;
};

export default ProductsContainer;
