import React from "react";
import { Link } from "react-router-dom";
const ProductSectionBanner = (props) => {
  return (
    <div className="text-white relative">
      <img
        className="h-[6rem] w-full md:h-[300px] md:min-w-[30vw]"
        src={props.src}
        alt="imageProduct"
      />
      <div className="p-2 absolute flex items-center flex-col top-0 left-0 right-0 bottom-0 z-10 md:absolute md:top-[40%]">
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
