import React from "react";
import ShoppingCartRouter from "./ShoppingCartRouter";
import ShoppingCartSummerySection from "./ShoppingCartSummerySection";
import CartShoppingCart from "./CartShoppingCart";

const ShoppingCartComp = () => {
  return (
    <div className="container mx-auto px-2">
      <ShoppingCartRouter />
      <h1 className="mb-4 text-2xl font-semibold">Shopping Cart</h1>
      <div className="md:flex md:flex-row-reverse ">
        <div>
          <ShoppingCartSummerySection />
        </div>
        <div>
          <CartShoppingCart src="./assets/ShoppingCart/1.png" />
          <CartShoppingCart src="./assets/ShoppingCart/2.png" />
          <div className="flex justify-center items-center m-4 container mx-auto px-6">
            <button className="w-full bg-black text-white font-semibold text-center px-4 py-3 rounded-3xl hover:bg-[#007aff] transition-all duration-[0.3s] ">
              Update Shopping Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartComp;
