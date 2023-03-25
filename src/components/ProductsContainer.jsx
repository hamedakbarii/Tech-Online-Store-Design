import React from "react";

const ProductsContainer = ({ children }) => {
  return <div className="container flex tablet:flex-row flex-col p-2 gap-3">{children}</div>;
};

export default ProductsContainer;
