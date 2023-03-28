import React, { useState } from "react";
import { filterItems } from "../utils";
import { ArrowDown2, CloseIcon } from "./Icon";

const Filter = () => {
  
  
  return (
    <div>
      <div className="flex justify-between items-center border-b">
        <h3 className="text-xl font-semibold  p-2">Filter By</h3>
        <span>
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
    </div>
  );
};

export default Filter;
