import React from "react";
import { ArrowUp, ZipIcon } from "../Icon";
import { Link } from "react-router-dom";

const ShoppingCartSummerySection = () => {
  return (
    <section className="px-2 mb-4 flex flex-col justify-around items-start gap-2 bg-[#F5F7FF] py-4 rounded-lg">
      <div className="flex flex-col">
        <h4 className="font-bold text-lg">Summary</h4>

        <div className="flex flex-col mt-4">
          <div className="flex items-center justify-between">
            <p>Estimate Shipping and Tax</p> <ArrowUp />
          </div>
          <p className="text-gray-400">
            Enter your destination to get a shipping <br /> estimate.
          </p>
        </div>

        <div className="flex flex-col mt-4 after:block after:content-[''] after:border-b-2 after:border-b-gray-300 after:mt-4">
          <div className="flex items-center justify-between">
            <p>Apply Discount Code</p>
            <ArrowUp size="8" />
          </div>
        </div>

        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Subtotal</p>
            <p className="font-semibold">$43,544.00</p>
          </div>

          <div className="block">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Shipping</p>
              <p className="font-semibold">$21.00</p>
            </div>
            <p className="text-gray-500 mt-2 text-sm">
              (Standard Rate - Price may vary depending on the item/destination.
              Shop Staff will contact you.)
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Tax</p>
            <p className="font-semibold">$1.91</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">GST (10%)</p>
            <p className="font-semibold">$1.91</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-semibold">Order Total</p>
            <p className="font-semibold">$13,068.00</p>
          </div>

          <div className="flex flex-col">
            <Link to="/checkout">
              <button className="w-[330px] mt-4 text-white text-center border-2 flex justify-center border-[#0156FF] cursor-pointer bg-[#0156FF] px-10 py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
                Proceed to Checkout self-center
              </button>
            </Link>

            <Link to="/checkout">
              <button className="w-[330px] mt-4 bg-[orange] text-black text-center flex justify-center cursor-pointer px-10 py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
                Proceed to Checkout
              </button>
            </Link>

            <Link to="/checkout">
              <button className="w-[330px] mt-4 text-gray-500  text-center border-2 flex justify-center border-gray-500 cursor-pointer px-2 py-2 font-semibold  rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF] self-center">
                Checkout with Multiple Addresses
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4 w-full">
        <ZipIcon />
        <a className="max-w-[12rem] text-sm leading-5 flex items-center before:h-7 before:mr-2 before:block before:content-[''] before:border before:rounded-full before:border-secondaryBlue ">
          <span>
            own it now, up to 6 months interest free{" "}
            <span className="underline">learn more</span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default ShoppingCartSummerySection;
