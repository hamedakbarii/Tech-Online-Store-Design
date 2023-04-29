import React, { useState } from "react";
import Filter from "./Filter";
import { GridView, ListView } from "./Icon";
const FilterItems = ({ filter, setFilter }) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="p-2 flex flex-col gap-4">
      <div>
        <h3 className="font-bold text-xl">MSI PS Series (20)</h3>
      </div>
      <div className="flex justify-between items-center gap-2 md:hidden">
        <button
          className="w-48 h-16 text-center border border-[#CACDD8]"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filter
        </button>
        <select className="w-48 h-16 text-center border border-[#CACDD8]">
          <option value=""> Position</option>
          <option value="">Category</option>
          <option value="">Price</option>
          <option value="">Color</option>
          <option value="">Name</option>
        </select>
      </div>
      {/* TabletView */}
      <div className="hidden md:grid grid-cols-6 gap-1 w-full">
        <div className="bg-[#F5F7FF] col-span-2 p-2 overflow-scroll w-full">
          <Filter
            filter={filter}
            setFilter={setFilter}
            setShowFilter={setShowFilter}
          />
        </div>
        <div className="col-span-4 w-full">
          <div className="flex justify-between items-center">
            <div>items 1-35 of 61</div>
            <div className="flex items-center">
              <select className="p-4 rounded-lg text-center border border-[#CACDD8]">
                <option value="">Position</option>
                <option value="">Category</option>
                <option value="">Price</option>
                <option value="">Color</option>
                <option value="">Name</option>
              </select>
              <GridView />
              <ListView />
            </div>
          </div>
        </div>
      </div>
      {/* TabletView */}
      {showFilter ? (
        <Filter
          filter={filter}
          setFilter={setFilter}
          setShowFilter={setShowFilter}
        />
      ) : null}
    </div>
  );
};

export default FilterItems;
