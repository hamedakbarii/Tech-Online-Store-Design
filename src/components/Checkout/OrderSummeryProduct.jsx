import React from "react";

const OrderSummeryProduct = (props) => {
  return (
    <div className="w-full flex my-1 py-4 px-2 justify-between gap-2">
      <img src={props.src} />
      <div className="flex flex-col">
        <span className="text-sm">
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...
        </span>
        <div className="flex justify-start gap-1">
          <span className="text-gray-300">Qty</span>
          <span className="font-semibold">1</span>
          <span className="text-md ml-6">$3,799.00</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummeryProduct;
