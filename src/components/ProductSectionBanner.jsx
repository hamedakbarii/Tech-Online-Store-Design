import React from "react";

const ProductSectionBanner = (props) => {
  return (
    <div className="text-white relative">
      <img src={props.src} alt="imageProduct" />
      <div className="absolute flex justify-center items-center flex-col top-0 left-0 right-0 bottom-0 z-10">
        <h4 className="text-white text-center text-3xl max-w-[7rem]">
          {props.title}
        </h4>
        <span className="absolute bottom-3">See All Products</span>
      </div>
    </div>
  );
};

export default ProductSectionBanner;
