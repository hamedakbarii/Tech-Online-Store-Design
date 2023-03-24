import React from "react";
import { ArrowDown } from "../Icon";
import { Facebook } from "../Icon";
import { Instagram } from "../Icon";
import Logo from "../Logo";
const NavbarTop = () => {
  return (
    <section className="bg-[#000] w-full">
      <div className="flex justify-between items-center text-white p-2 container mx-auto relative">
        <div className="absolute z-10 p-3 rounded-full left-3 top-[5%] bg-[#0156FF]">
          <Logo color="white" />
        </div>
        <div className="flex items-center p-2 xlHeader:ml-0 ml-[4rem]">
          <p className="text-[#ACACAC]">
            Mon-Thu : <span className="text-white"> 9:00 AM - 5:30 PM</span>{" "}
          </p>
          <span className="p-2">
            <ArrowDown />
          </span>
        </div>
        <div className="flex ">
          <h4 className="text-[#ACACAC]">
            <span className="xlHeader:block hidden">
              Visit our showroom in 1234 Street Adress City Address, 1234{" "}
            </span>
            <span className="underline text-white font-semibold cursor-pointer">
              Contact Us
            </span>
          </h4>
        </div>
        <div className="xlHeader:flex hidden justify-center items-center gap-3">
          <h4 className="font-semibold">Call Us: (00) 1234 5678</h4>
          <Facebook />
          <Instagram />
        </div>
      </div>
    </section>
  );
};

export default NavbarTop;
