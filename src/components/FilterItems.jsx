import React from "react";

const FilterItems = () => {
  return (
    <div className="p-2 flex flex-col gap-4">
      <div>
        <h3>MSI PS Series (20)</h3>
      </div>
      <div className="flex justify-between items-center gap-2">
        <button className="w-48 h-16 text-center border border-[#CACDD8]">Filter</button>
        <select className="w-48 h-16 text-center border border-[#CACDD8]">
          Sort By:
          <option value="">Position</option>
          <option value="">Category</option>
          <option value="">Price</option>
          <option value="">Color</option>
          <option value="">Name</option>
        </select>
      </div>
    </div>
  );
};

export default FilterItems;
