import React from "react";

const ProductSectionBanner = (props) => {
  return (
    <div className="text-white relative p-2 ">
      <img className="tablet:h-full h-[6rem] object-cover object-center w-full" src={props.src} alt="imageProduct" />
      <div className="p-2 absolute flex flex-col tablet:justify-center items-center flex-col top-0 left-0 right-0 bottom-0 z-10">
        <h4 className="text-white text-center text-3xl tablet:max-w-[7rem] w-full">
          {props.title}
        </h4>
        <span className="absolute bottom-3 underline">See All Products</span>
      </div>
    </div>
  );
};

export default ProductSectionBanner;
