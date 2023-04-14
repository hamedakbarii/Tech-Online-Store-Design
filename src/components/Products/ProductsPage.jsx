import React, { useEffect} from "react";
import { useImmer } from 'use-immer'
import ProductRouter from "./ProductRouter";
import FilterItems from "./../FilterItems";
import PaginationProducts from "./PaginationProducts";
const ProductsPage = ({ children }) => {
  const [filter , setFilter] = useImmer({
    'category' : [] , 
    'price' : [2000,3000,4000,1000] , 
    'color' : [] , 
    'filterName' : [] , 
    'brand' : [] , 
  })
  useEffect(()=>{console.log(filter)},[filter])
  return (
    <>
      <ProductRouter />
      <FilterItems filter={filter} setFilter={setFilter} />

      <PaginationProducts filter={filter} />
    </>
  );
};

export default ProductsPage;
