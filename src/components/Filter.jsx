import React, { useEffect, useState } from "react";

import { ArrowDown2, CloseIcon } from "./Icon";
import { filterOptions } from "../utils";
const Filter = ({ setShowFilter }) => {
  const [filter , setFilter] = useState([]) ; 
  function a (category) {
    let a = [...filter] ; 
    a.splice(filter.findIndex(object => object.productCategoryItem === category) , 1)
    setFilter(a) ; 
  }
  useEffect(()=>{console.log(filter)},[filter])
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
                  <p className="p-2 text-sm" onClick={(e)=>{
                    filter.some(Item => Item.productCategoryItem === category) ? (
                      a(category)
                    ) : (setFilter([...filter , {
                      productCategory : item.title , 
                      productCategoryItem : category , 
                    }])) ; 
                    e.currentTarget.classList.toggle('bg-green-400')
                }}>{category}</p>
                ))}
              </>
            )}
          </details>
          {/* <span>{item}</span> */}
        </div>
      ))}
      <button className="text-white border-2 border-[#0156FF] bg-[#0156FF] px-10 py-2 font-semibold flex m-auto rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]">
        Apply Filters {filter.length}
      </button>
    </div>
  );
};

export default Filter;
