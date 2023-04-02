import React from "react";
import { ZipIcon } from "../Icon";
import ShoppingCartRouter from "./ShoppingCartRouter";
import ShoppingCartSummerySection from "./ShoppingCartSummerySection";

const ShoppingCart = () => {
  return (
    <div className="container mx-auto px-2">
      <ShoppingCartRouter />
      <h1 className="mb-4 text-2xl font-semibold">Shopping Cart</h1>
      <ShoppingCartSummerySection />

      
    </div>
  );
};

export default ShoppingCart;
