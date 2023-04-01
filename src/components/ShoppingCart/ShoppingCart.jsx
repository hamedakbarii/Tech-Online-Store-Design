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
      <div className="flex items-center justify-center gap-2 mt-4">
        <ZipIcon />
        <a className="max-w-[12rem] text-sm leading-5 flex items-center before:h-7 before:mr-2 before:block before:content-[''] before:border before:rounded-full before:border-secondaryBlue ">
            <span>own it now, up to 6 months interest free <span className="underline">learn more</span></span>
        </a>
      </div>
    </div>
  );
};

export default ShoppingCart;
