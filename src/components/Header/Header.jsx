import React from "react";
import Button from "../Button";
import Li from "./Li";
import Logo from "../Logo";
import NavbarTop from "./NavbarTop";
import { Magnfier, Search, Shop, UserIcon } from "../Icon";
import HamburgerMenue from "./HamburgerMenu";
import { ShopingCart } from "../Icon";
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
  return (
    <div className="relative">
      <NavbarTop />
      <nav
        className="xlHeader:container w-full block mx-auto px-4 py-2 
      xlHeader:bg-white bg-[#0156FF] relative z-10"
      >
        <div className="flex items-center justify-between container mx-auto px-2 gap-4">
          <div className="flex items-center gap-2 relative">
            <HamburgerMenue />
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
