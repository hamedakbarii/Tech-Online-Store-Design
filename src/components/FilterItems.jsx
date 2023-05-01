import React, { useState } from "react";
import Filter from "./Filter";
import { GridView, ListView } from "./Icon";
import PaginationProducts from "./Products/PaginationProducts";
import ProductLogo from "./Products/ProductLogo";
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
        {/* leftSide */}
        <div className=" col-span-2 p-2 overflow-scroll w-full">
          
          <Filter
            filter={filter}
            setFilter={setFilter}
            setShowFilter={setShowFilter}
          />
          <div className="md:bg-[#F5F7FF] mt-2 p-2 flex flex-col justify-center items-center gap-3">
            <h3 className="font-bold">Brands</h3>
            <button className="w-[200px] text-[#A2A6B0] border-2 border-[#A2A6B0] p-2 rounded-2xl">All Brands</button>
          </div>
          <div>
            <ProductLogo gridCols={"md:grid-cols-2"}/>
          </div>
        </div>
        {/* leftSide */}
        {/* rightSide */}
        <div className="col-span-4 w-full">
          <PaginationProducts filter={filter} />
        </div>
        {/* rightSide */}
      </div>
      {/* TabletView */}
      {/* brands */}

      {/* brands */}
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
