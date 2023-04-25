import React from "react";
import { Link, link } from "react-router-dom";
const ProductSectionBanner = (props) => {
  return (
    <div className="text-white relative">
      <img
        className="h-[6rem] object-cover object-center w-full"
        src={props.src}
        alt="imageProduct"
      />
      <div className="p-2 absolute flex  items-center flex-col top-0 left-0 right-0 bottom-0 z-10">
        <h4 className="text-white text-center text-3xl  w-full">
          {props.title}
        </h4>
        <span className="absolute bottom-3 underline">
          <Link to="/product"> See All Products</Link>
        </span>
      </div>
    </div>
  );
};

export default ProductSectionBanner;
