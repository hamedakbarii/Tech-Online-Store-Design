import React, { useState } from "react";
import { products } from "../../utils.js";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

const PaginationProducts = ({filter}) => {
/*
products.filter(product=>
    product.tags.map(tag=>
      tag.toLowerCase()).some((tag) => {
        filter.category.map(item=>item.toLowerCase()).includes(tag) ||
        filter.brands.map(item=>item.toLowerCase()).includes(tag)
      }) && !product.avaiblity
    ) */
function FilterProduct(avaiblity){
  function LowerCaser(array){
    return array.map(item=>item.toLowerCase()) ; 
  }
  let c = [...filter.price]
  let a = products.filter(item=>
    LowerCaser(item.tags).some(item=>
      LowerCaser(filter.category).includes(item) || 
      LowerCaser(filter.brands).includes(item) ||
      LowerCaser(filter.filtername).includes(item) ||
      LowerCaser(filter.color).includes(item)
      //c.sort((a , b)=>parseFloat(a[0]) - parseFloat(b[0]))
      )||(c[0] ? item.price >= c.sort((a,b)=>parseFloat(a[0])-parseFloat(b[0]))[0][0] && item.price <= c.sort((a,b)=>parseFloat(a[0])-parseFloat(b[0]))[filter.price.length-1][1] : false) && item.avaiblity === avaiblity ) ; 
      console.log(a)
      return a ; 
}
  return (
    <div className="p-2">
      <h4 className="text-[#94a3b8] p-2 mt-5 text-sm font-normal">
        Items 1-35 of 61
      </h4>
      <div className="w-full grid grid-cols-2 gap-2 p-2">
          {FilterProduct(true).map((product) => (
            product.avaiblity ? <><Link key={product.id} to={`/product/${product.categoryTitle}/${product.id}`}>
            <ProductCard  {...product} />
            </Link></> : null
          ))}
          {
            FilterProduct(false).map((product) => (
              product.avaiblity===false ? <><Link key={product.id} to={`/product/${product.categoryTitle}/${product.id}`}>
              <ProductCard  {...product} />
              </Link></> : null
            ))
          }
      </div>
    </div>
  );
};

export default PaginationProducts;
