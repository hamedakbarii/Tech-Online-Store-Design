import React, { useState } from "react";
import { filterItems } from "../utils";
import { ArrowDown2, CloseIcon } from "./Icon";
import { filterOptions } from "../utils";
const Filter = ({ setShowFilter }) => {
  const filterItemsHandler = (event) => {
    let itemName = event.target.textContent;
    // let selectedName = filterOptions.filter((item => Object.entries(item)[0][0] == itemName));
    let filteredItem = filterOptions.filter(item => item.title == itemName)
    // console.log(itemName);
    filteredItem[0].items.map(data => (
      console.log(data)
    ))
  };
  return (
    <div>
      <div className="flex justify-between items-center border-b">
        <h3 className="text-xl font-semibold  p-2">Filter By</h3>
        <span onClick={() => setShowFilter(false)}>
          <CloseIcon />
        </span>
      </div>
      {filterItems.map((item) => (
        <div
          className="flex justify-between items-center p-2 font-semibold"
          onClick={(event) => filterItemsHandler(event)}
        >
          <span>{item}</span>
          <span className="text-xs font-light">
            <ArrowDown2 />
          </span>
        </div>
      ))}
      <button className="text-white border-2 border-[#0156FF] bg-[#0156FF] px-10 py-2 font-semibold flex m-auto rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]">
        Apply Filters(2)
      </button>
    </div>
  );
};

export default Filter;
