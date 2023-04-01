import React from "react";

import ShoppingCartRouter from "./ShoppingCartRouter";
import ShoppingCartSummerySection from "./ShoppingCartSummerySection";

const ShoppingCart = () => {
  return (
    <div>
      <ShoppingCartRouter />
      <h3 className="p-2 mb-4">Shopping Cart</h3>
      <ShoppingCartSummerySection />
    </div>
  );
};

export default ShoppingCart;
