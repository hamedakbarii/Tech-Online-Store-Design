import React, { useState } from "react";
import { filterItems } from "../utils";
import { ArrowDown2, CloseIcon } from "./Icon";

const Filter = ({setShowFilter}) => {

  return (
    <div>
      <div className="flex justify-between items-center border-b">
        <h3 className="text-xl font-semibold  p-2">Filter By</h3>
        <span onClick={() => setShowFilter(false)}>
          <CloseIcon />
        </span>
      </div>
      {filterItems.map((item) => (
        <div className="flex justify-between items-center p-2 font-semibold">
          <span>{item}</span>
          <span className="text-xs font-light">
            <ArrowDown2 />
          </span>
        </div>
      ))}
      <button className="text-white bg-[#0156FF] px-10 py-2 font-semibold flex m-auto rounded-3xl">
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
