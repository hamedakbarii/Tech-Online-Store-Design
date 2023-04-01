import React from "react";
import { ArrowUp } from "../Icon";

const ShoppingCartSummerySection = () => {
  return (
    <section className="px-2 mb-4 flex flex-col justify-around items-start gap-2 bg-[#F5F7FF] py-2 rounded-lg">
      <div className="flex flex-col">
        <h4 className="font-semibold text-lg">Summary</h4>
        <div className="flex flex-col mt-4">
          <div className="flex items-center justify-between">
            <p>Estimate Shipping and Tax</p> <ArrowUp />
          </div>
          <p className="text-gray-400">
            Enter your destination to get a shipping estimate.
          </p>
        </div>
        <div className="flex flex-col mt-4 after:block after:content-[''] after:border-b-2 after:border-b-gray-300 after:mt-4">
          <div className="flex items-center justify-between">
            <p>
              Apply Discount Code
            </p>
            <ArrowUp size='8'  />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
              <p className="font-semibold">Subtotal</p>
              <p className="font-semibold">$43,544.00</p>
          </div>
          <div className="block">
            <div className="flex items-center justify-between">
                <p className="font-semibold">Subtotal</p>
                <p className="font-semibold">$43,544.00</p>
            </div>
            <p className="text-gray-500 mt-2 text-sm">
              (Standard Rate - Price may vary depending on the item/destination. Shop Staff will contact you.)
            </p>
          </div>
          <div className="flex items-center justify-between">
              <p className="font-semibold">Subtotal</p>
              <p className="font-semibold">$43,544.00</p>
          </div>
          <div className="flex items-center justify-between">
              <p className="font-semibold">Subtotal</p>
              <p className="font-semibold">$43,544.00</p>
          </div>
          <div className="flex items-center justify-between">
              <p className="font-semibold">Subtotal</p>
              <p className="font-semibold">$43,544.00</p>
          </div>
          <div className="flex flex-col">
              <button className="w-[330px] mt-4 text-white text-center border-2 flex justify-center border-[#0156FF] cursor-pointer bg-[#0156FF] px-10 py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
                Proceed to Checkout self-center
              </button>
              <button className="w-[330px] mt-4 bg-[orange] text-black text-center flex justify-center cursor-pointer px-10 py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
                Proceed to Checkout
              </button>
              <button className="w-[330px] mt-4 text-gray-500  text-center border-2 flex justify-center border-[gray-500] cursor-pointer px-2 py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
                Checkout with Multiple Addresses
              </button>
          </div>
        </div>
      </div>
      {/* 
      <div className="flex justify-between items-center w-full">
        <span>Estimate Shipping and Tax</span>
        <ArrowUp />
      </div>
      <span className="text-gray-500 flex justify-between items-center w-full">
        Enter your destination to get a shipping estimate.
      </span>
      <div className="border-b-2 flex justify-between items-center w-full">
        <span>Apply Discount Code</span>
        <ArrowUp />
      </div>
      <div className="flex justify-between items-center w-full">
        <span>Subtotal</span>
        <span>$13,047.00</span>
      </div>
      <div className="flex justify-between items-center w-full">
        <span>Shipping </span>
        <span>$21.00</span>
      </div>
      <span className="text-gray-500">
        (Standard Rate - Price may vary depending on the item/destination. Shop
        Staff will contact you.)
      </span>
      <div className="flex justify-between items-center w-full">
        <span>Tax </span>
        <span>$1.91</span>
      </div>
      <div className="flex justify-between items-center w-full">
        <span>GST (10%) </span>
        <span>$1.91</span>
      </div>
      <div className="flex justify-between items-center w-full">
        <span>Order Total </span>
        <span>$13,068.00</span>
      </div>
      <button className="w-[330px] mt-4 text-white text-center border-2 flex justify-center border-[#0156FF] cursor-pointer bg-[#0156FF] px-10 py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
        Proceed to Checkout self-center
      </button>
      <button className="w-[330px] mt-4 bg-[orange] text-black text-center flex justify-center cursor-pointer px-10 py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
        Proceed to Checkout
      </button>
      <button className="w-[330px] mt-4 text-gray-500  text-center border-2 flex justify-center border-[gray-500] cursor-pointer px-10 py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
        Checkout with Multiple Addresses
      </button>*/}
    </section>
  );
};

export default ShoppingCartSummerySection;
