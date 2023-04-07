import React, { useState } from "react";
import ProductPage from "../components/Products/ProductPage";
import { Navigate, useParams } from "react-router-dom";
import { products } from "../utils";
function ProductDetails() {
  let params = useParams();

  
  const [data, setData] = useState(products);
  return (
    <div>
      <ProductPage />
    </div>
  );
}

export default ProductDetails;
