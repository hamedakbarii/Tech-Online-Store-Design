import React, { useState } from "react";
import { products } from "../../utils.js";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { GridView, ListView } from "../Icon.jsx";

const PaginationProducts = ({ filter }) => {
  function FilterProduct(avaiblity) {
    function LowerCaser(array) {
      return array.map((item) => item.toLowerCase());
    }
    let c = [...filter.price];
    let a = products.filter(
      (item) =>
        LowerCaser(item.tags).some(
          (item) =>
            LowerCaser(filter.category).includes(item) ||
            LowerCaser(filter.brands).includes(item) ||
            LowerCaser(filter.filtername).includes(item) ||
            LowerCaser(filter.color).includes(item)
          //c.sort((a , b)=>parseFloat(a[0]) - parseFloat(b[0]))
        ) ||
        ((c[0]
          ? item.price >=
              c.sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]))[0][0] &&
            item.price <=
              c.sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]))[
                filter.price.length - 1
              ][1]
          : false) &&
          item.avaiblity === avaiblity)
    );
    console.log(a);
    return a;
  }
  return (
    <div className="p-2">
      <div className="hidden md:flex justify-between "> 
        <h4 className="text-[#94a3b8] p-2 mt-5 text-sm font-normal md:mt-0 ">
          Items 1-35 of 61
        </h4>
        <div className="flex items-center">
          <select className="p-4 rounded-lg text-center border border-[#CACDD8]">
            <option value="">Position</option>
            <option value="">Category</option>
            <option value="">Price</option>
            <option value="">Color</option>
            <option value="">Name</option>
          </select>
          <GridView />
          <ListView />
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 p-2">
        {FilterProduct(true).map((product) =>
          product.avaiblity ? (
            <>
              <Link
                key={product.id}
                to={`/product/${product.categoryTitle}/${product.id}`}
              >
                <ProductCard {...product} />
              </Link>
            </>
          ) : null
        )}
        {FilterProduct(false).map((product) =>
          product.avaiblity === false ? (
            <>
              <Link
                key={product.id}
                to={`/product/${product.categoryTitle}/${product.id}`}
              >
                <ProductCard {...product} />
              </Link>
            </>
          ) : null
        )}
        {filter.category.length ||
        filter.brands.length ||
        filter.price.length ||
        filter.filtername.length ||
        filter.color.length > 0 ? null : (
          <>
            {products.map((product) => (
              <>
                <Link
                  key={product.id}
                  to={`/product/${product.categoryTitle}/${product.id}`}
                >
                  <ProductCard {...product} />
                </Link>
              </>
            ))}
          </>
        )}
      </div>
      {/* gridIcons */}
    </div>
  );
};

export default PaginationProducts;
