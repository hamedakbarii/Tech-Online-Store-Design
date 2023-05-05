import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Products/ProductCard";
import { products } from "../../../utils.js";
function GridView({ FilterProduct, filter }) {
  return (
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
  );
}

export default GridView;
