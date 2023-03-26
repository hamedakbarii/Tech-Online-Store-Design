import React, { useState } from "react";
import Button from "../Button";
import Li from "./Li";
import Logo from "../Logo";
import NavbarTop from "./NavbarTop";
import {
  ArrowDown,
  CloseIcon,
  Magnfier,
  Search,
  Shop,
  UserIcon,
  ShopingCart,
  Icon,
} from "../Icon";
import HamburgerMenue from "./HamburgerMenu";
export default function Header() {
  let navUl = [
    "Laptops",
    "Desktop PCs",
    "Networking devices",
    "Printers & Scanners",
    "Pc parts",
    "All Other Products",
    "Repairs",
  ];
  const [ActiveHamburger, setActiveHamburger] = useState(false);
  return (
    <div className="relative">
      <NavbarTop />
      <nav
        className="xlHeader:container w-full block mx-auto px-4 py-2 
      xlHeader:bg-white bg-[#0156FF] relative z-10"
      >
        <div className="flex items-center justify-between container mx-auto px-2 gap-4">
          <div className="flex items-center gap-2">
            <HamburgerMenue HandleHamburgerActivation={setActiveHamburger} />
            {ActiveHamburger ? (
              <div className="absolute -top-[3.9rem] left-0 w-full bg-white px-5 py-2">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between ">
                    <span>
                      <Icon color={"#0156FF"} />
                    </span>
                    <span
                      onClick={() => {
                        setActiveHamburger(false);
                      }}
                    >
                      <CloseIcon />
                    </span>
                  </div>

                  <span className="border-b-2 border-gray-400 mt-4"></span>

                  <div className="flex flex-col mt-4 gap-2">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">Laptops</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">Desktop PCs</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">Networking Devices</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">Printers & Scanners</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">PC Parts</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">All Other Products</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-base">Repairs</p>
                      <span className="-rotate-[90deg]">
                        <ArrowDown color={"black"} />
                      </span>
                    </div>
                  </div>

                  <button className="text-secondaryBlue border-2 border-secondaryBlue w-max py-1 px-4 mt-6 mb-4 text-lg font-semibold rounded-full transation-all duration-[.2s] bg-white hover:bg-secondaryBlue hover:text-white text-secondaryBlue">
                    Our Deals
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          <div className="flex items-center w-full bg-white p-2 py-1 rounded-full">
            <Magnfier />
            <input
              className="w-full p-2 focus:outline-0 focus:border-0 bg-transparent"
              type="search"
              placeholder="Search Here"
            />
          </div>
          <div className="flex items-center gap-2">
            <ShopingCart />
            <UserIcon />
          </div>
        </div>
        <div className="xlHeader:flex items-center justify-between hidden">
          <Logo />
          <ul className="flex justify-center items-center px-2">
            {navUl.map((item) => (
              <Li key={item} data={item} />
            ))}
            <button className="py-1 transition-all px-5 rounded-2xl font-semibold text-[#0156FF] mx-2 hover:bg-[#0156FF] hover:text-white border-2 border-solid border-secondaryBlue">
              Our Deals
            </button>
          </ul>
          <div className="flex justify-center items-center gap-4">
            <Search />
            <div className="relative">
              <Shop />
              <span className="absolute font-semibold text-[.7rem] -top-2 -right-2 bg-[#0156FF] text-white rounded-full w-4 h-4 flex justify-center items-center">
                2
              </span>
            </div>
            <img
              src="./assets/profile/hamed.jpg"
              alt="hamed"
              className="rounded-full w-10 cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
