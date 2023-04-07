import React, { useState } from "react";

import { ArrowDown2, CloseIcon } from "./Icon";
import { filterOptions } from "../utils";
const Filter = ({ setShowFilter }) => {
  return (
    <div>
      <div className="flex justify-between items-center border-b">
        <h3 className="text-xl font-semibold  p-2">Filter By</h3>
        <span onClick={() => setShowFilter(false)}>
          <CloseIcon />
        </span>
      </div>
      {filterOptions.map((item) => (
        <div
          className="flex justify-between items-center p-2 font-semibold"
          // onClick={(event) => filterItemsHandler(event)}
        >
          <details className="w-full">
            <summary className="w-full list-none flex items-center justify-between">
              {item.title}
              <span className="text-xs font-light">
                <ArrowDown2 />
              </span>
            </summary>
            {item.title === "Color" ? (
              <div className="flex p-2 gap-2">
                <div className="w-4 h-4 rounded-full bg-black"></div>
                <div className="w-4 h-4 rounded-full bg-red-800"></div>
              </div>
            ) : (
              <>
                {item.items.map((category) => (
                  <p className="p-2 text-sm">{category}</p>
                ))}
              </>
            )}
          </details>
          {/* <span>{item}</span> */}
        </div>
      ))}
      <button className="text-white border-2 border-[#0156FF] bg-[#0156FF] px-10 py-2 font-semibold flex m-auto rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]">
        Apply Filters(2)
      </button>
    </div>
  );
};

export default Filter;
