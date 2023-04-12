import React, { useState } from "react";
import { products } from "../../utils.js";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const PaginationProducts = () => {
  const [showFilter, setShowFilter] = useState(false);
 
  return (
    <div className="p-2">
      <h4 className="text-[#94a3b8] p-2 mt-5 text-sm font-normal">
        Items 1-35 of 61
      </h4>

      <div className="w-full grid grid-cols-2 gap-2 p-2">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.categoryTitle}/${product.id}`}>
          <ProductCard  {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PaginationProducts;
