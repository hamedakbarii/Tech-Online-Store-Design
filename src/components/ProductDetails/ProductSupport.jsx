import React from "react";
import { LongArrow } from "./../Icon";
const ProductSupport = ({ title }) => {
  return (
    <>
      <div className="flex items-center justify-between w-[80%] max-w-[15rem] border border-gray-400 rounded p-2">
        <span>{title}</span>
        <LongArrow />
      </div>
    </>
  );
};

export default ProductSupport;
