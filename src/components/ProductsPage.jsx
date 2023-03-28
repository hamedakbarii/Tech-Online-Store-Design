import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ProductRouter from "./ProductRouter";
import FilterItems from "./FilterItems";
import PaginationProducts from "./PaginationProducts";

const ProductsPage = ({ children }) => {
  return (
    <>
      <Header />
      <ProductRouter />
      <FilterItems />

      <PaginationProducts />
      <Footer />
    </>
  );
};

export default ProductsPage;
