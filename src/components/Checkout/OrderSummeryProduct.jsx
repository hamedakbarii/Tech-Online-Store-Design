import React from "react";

const OrderSummeryProduct = (props) => {
  return (
    <div className="flex my-2">
      <img src={props.src} alt="" />
      <div className="flex flex-col ml-2">
        <span className="text-sm w-[300px]">
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...
        </span>
        <div className="flex justify-start gap-1">
          <span className="text-gray-300">Qty</span>
          <span className="font-semibold">1</span>
          <span className="ml-6">$3,799.00</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummeryProduct;
