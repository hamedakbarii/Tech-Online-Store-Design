import React, { useEffect } from "react";
import { useImmer } from "use-immer";
import ProductRouter from "./ProductRouter";
import FilterItems from "./../FilterItems";
import PaginationProducts from "./PaginationProducts";
const ProductsPage = ({ children }) => {
  const [filter, setFilter] = useImmer({
    category: [],
    price: [],
    color: [],
    filtername: [],
    brands: [],
    filterprice: [0, 0],
  });
  useEffect(() => {
    // console.log([...filter.price].sort((a, b) => a[0] - b[0])) ;
  }, [filter]);
  return (
    <>
      <div className="hidden md:block">
        <img
          className="w-full"
          src="assets/TabletView/Products/image 26.png"
          alt=""
        />
      </div>
      <ProductRouter />
      <FilterItems filter={filter} setFilter={setFilter} />
      <div className="md:hidden">
        <PaginationProducts filter={filter} />
      </div>
    </>
  );
};

export default ProductsPage;
