import React, { useEffect, useState } from "react";
import ProductPage from "../components/Products/ProductPage";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductToBuy } from "../App";
import { products } from "../utils";
function ProductDetails() {
  let { category } = useParams();
  let { id } = useParams();
  const [ValidCategory, setValidCategory] = useState("wait");
  useEffect(() => {
    let ProductCategories = [
      "newCategory",
      "custombuilds",
      "Msiproductinfo",
      "Desktops",
      "gamingmonitor",
    ];
    let result = ProductCategories.includes(category);
    {
      result ? setValidCategory(true) : setValidCategory(false);
    }
  }, []);
  const store = useContext(ProductToBuy);
  let result = products.filter(
    (item) => item.id === Number(id) && item.categoryTitle === category
  );
  return (
    <div>
      {store[0]}
      {ValidCategory === "wait" ? (
        <p>waiting</p>
      ) : ValidCategory ? (
        <ProductPage data={result} />
      ) : (
        <>
          <h1 className="text-red-500 text-4xl">Please Enter A Valid Url !</h1>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
