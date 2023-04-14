import React, { useState } from "react";
import Filter from "./Filter";

const FilterItems = ({filter , setFilter}) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="p-2 flex flex-col gap-4">
      <div>
        <h3>MSI PS Series (20)</h3>
      </div>
      <div className="flex justify-between items-center gap-2">
        <button
          className="w-48 h-16 text-center border border-[#CACDD8]"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filter
        </button>
        <select className="w-48 h-16 text-center border border-[#CACDD8]">
          Sort By:
          <option value="">Position</option>
          <option value="">Category</option>
          <option value="">Price</option>
          <option value="">Color</option>
          <option value="">Name</option>
        </select>
      </div>
      {showFilter ? <Filter filter={filter} setFilter={setFilter} setShowFilter={setShowFilter}/> : null}
    </div>
  );
};

export default FilterItems;
