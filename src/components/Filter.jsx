import React from "react";

import { ArrowDown2, CloseIcon } from "./Icon";
import { filterOptions } from "../utils";
const Filter = ({ setShowFilter, filter, setFilter }) => {
  const HandleSetFilter = (filter, setFilter, ItemTitle, Category) => {
    if (filter[`${ItemTitle.toLowerCase()}`].indexOf(Category) !== -1) {
      setFilter((draft) => {
        draft[`${ItemTitle.toLowerCase()}`].splice(
          filter[`${ItemTitle.toLowerCase()}`].indexOf(Category),
          1
        );
      });
    } else {
      setFilter((draft) => {
        draft[`${ItemTitle.toLowerCase()}`] = [
          ...draft[`${ItemTitle.toLowerCase()}`],
          Category,
        ];
      });
    }
  };
 
  return (
    <div className="md:flex flex-col md:bg-[#F5F7FF] md:p-2 md:max-h-[500px] md:overflow-y-scroll">
      <div className="flex justify-between items-center border-b">
        <h3 className="text-xl font-semibold p-2 w-full text-center">Filter By</h3>

        <span className="md:hidden" onClick={() => setShowFilter(false)}>
          <CloseIcon />
        </span>
      </div>
      <div className="text-center flex justify-center mt-2">
        <button className="hidden md:block p-2 border-2 border-[#A2A6B0] rounded-3xl w-[180px] text-[#A2A6B0]">
          Clear Filter
        </button>
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
                <div
                  className="w-4 h-4 rounded-full bg-black"
                  onClick={(e) => {
                    HandleSetFilter(filter, setFilter, item.title, "black");
                  }}
                ></div>
                <div
                  className="w-4 h-4 rounded-full bg-red-800"
                  onClick={(e) => {
                    HandleSetFilter(filter, setFilter, item.title, "red");
                  }}
                ></div>
              </div>
            ) : item.title === "Price" ? (
              <>
                {item.items.map((category) => (
                  <p
                    className="p-2 text-sm flex items-center before:block before:transition-all before:p-0 "
                    onClick={(e) => {
                      HandleSetFilter(filter, setFilter, item.title, category);
                      if (e.currentTarget.classList.contains("before:p-2")) {
                        e.currentTarget.classList.remove(
                          "before:p-2",
                          "before:rounded-full",
                          "before:mr-4",
                          "before:bg-green-700"
                        );
                      } else {
                        e.currentTarget.classList.add(
                          "before:p-2",
                          "before:rounded-full",
                          "before:mr-4",
                          "before:bg-green-700"
                        );
                      }
                    }}
                  >
                    {category[0]}.00$ - {category[1]}.00$
                  </p>
                ))}
              </>
            ) : (
              <>
                {item.items.map((category) => (
                  <p
                    className="p-2 text-sm flex items-center before:block before:transition-all before:p-0 "
                    onClick={(e) => {
                      HandleSetFilter(filter, setFilter, item.title, category);
                      if (e.currentTarget.classList.contains("before:p-2")) {
                        e.currentTarget.classList.remove(
                          "before:p-2",
                          "before:rounded-full",
                          "before:mr-4",
                          "before:bg-green-700"
                        );
                      } else {
                        e.currentTarget.classList.add(
                          "before:p-2",
                          "before:rounded-full",
                          "before:mr-4",
                          "before:bg-green-700"
                        );
                      }
                    }}
                  >
                    {category}
                  </p>
                ))}
              </>
            )}
          </details>
          {/* <span>{item}</span> */}
        </div>
      ))}
      <button className="text-white border-2 border-[#0156FF] bg-[#0156FF] px-10 py-2 font-semibold flex m-auto rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] md:my-2">
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;

/*
 */
