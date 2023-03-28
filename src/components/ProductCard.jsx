import React from "react";
import { OutOfStock, Aviable } from "./Icon";
import { CalculateStars } from "./SwiperProduct";

const ProductCard = (props) => {
  return (
    <div className="mt-4 border p-5">
      <div className="available flex items-center">
        <span className="flex items-center">
          {props.avaiblity ? <Aviable /> : <OutOfStock />}
          <span className="ml-1 text-sm">
            {props.avaiblity ? (
              <span className="text-[#78A962]">In Stock</span>
            ) : (
              <span className="text-[#C94D3F]">Check Availability</span>
            )}
          </span>
        </span>
      </div>
      <div className="image-container">
        <div className="flex items-center justify-center mt-2">
          <img
            className="h-[9rem] w-full object-contain object-center"
            src={props.img}
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <span className="flex items-center mr-3 mt-1">
          <CalculateStars stars={props.stars} />
        </span>
        <span className="text-gray-400 text-sm">Reviews({props.review})</span>
      </div>
      <div className="product-info mt-2">
        <p>{props.title}</p>
        <p className="flex flex-col">
          <del className="text-sm text-gray-700">${props.price}</del>
          <span className="text-lg font-semibold">${props.offprice}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
