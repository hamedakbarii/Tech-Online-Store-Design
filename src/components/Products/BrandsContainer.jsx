import React from "react";

const BrandsContainer = ({ children }) => {
  return (
    <div className="container mx-auto flex flex-col mt-4 gap-3 md:flex-row md:items-center justify-between">{children}</div>
  );
};

export default BrandsContainer;
