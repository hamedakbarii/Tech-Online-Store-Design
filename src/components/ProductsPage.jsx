import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ProductRouter from "./ProductRouter";
import FilterItems from "./FilterItems";
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
