import React from "react";
import Button from "../Button";
import Li from "./Li";
import Logo from "../Logo";
import NavbarTop from "./NavbarTop";
import { Search, Shop } from "../Icon";

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
    <div>
      <NavbarTop />
      <nav className="flex justify-between items-center px-3 py-2">
        <Logo />

        <div>
          <ul className="flex justify-center items-center px-2">
            {navUl.map((item) => (
              <Li key={item} data={item} />
            ))}
            <Button title="Our Deals" border={"2px solid #0156FF"} />
          </ul>
        </div>

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
      </nav>
    </div>
  );
}
