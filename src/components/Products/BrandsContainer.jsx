import React from "react";

const BrandsContainer = ({ children }) => {
  return <div className="container mx-auto flex tablet:flex-row flex-col mt-4 gap-3">{children}</div>;
};

export default BrandsContainer;
