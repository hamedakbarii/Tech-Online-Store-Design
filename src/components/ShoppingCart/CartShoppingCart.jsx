import React from "react";
import { DeleteIcon, EditIcon } from "../Icon";

const CartShoppingCart = (props) => {
  return (
    <div>
      <div className="flex justify-between gap-4 px-2 m-2">
        <img src={props.src} alt="case" />
        <span className="inline-block w-[300px] text-sm">
          MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,
          1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty
        </span>
      </div>
      <div>
        <ul className="p-4 m-2 flex flex-col gap-2 border-b border-gray-300">
          <div className="grid grid-cols-4 w-full font-bold">
            <li>Price</li>
            <li>Qty</li>
            <li>Subtotal</li>
            <li>
              <DeleteIcon />
            </li>
          </div>
          <div className="grid grid-cols-4 w-full font-bold">
            <li>$4,349.00</li>
            <li>
              <input type="number" defaultValue={1} min={1} />
            </li>
            <li>$13,047.00</li>
            <li>
              <EditIcon />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CartShoppingCart;
