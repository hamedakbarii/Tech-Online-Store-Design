import React, { useState } from "react";
import ProductRouter from "./ProductRouter";
import FilterItems from "./../FilterItems";
import PaginationProducts from "./PaginationProducts";

const ProductsPage = ({ children }) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      <ProductRouter />
      <FilterItems />

      <PaginationProducts />
    </>
  );
};

export default ProductsPage;
