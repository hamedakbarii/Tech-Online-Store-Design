import React from "react";
import { ArrowDown } from "../Icon";
import { Facebook } from "../Icon";
import { Instagram } from "../Icon";
const NavbarTop = () => {
  return (
    <section className="bg-[#000] flex justify-between items-center text-white p-2">
      <div className="flex items-center p-2">
        <p className="text-[#ACACAC]">
          Mon-Thu : <span className="text-white"> 9:00 AM - 5:30 PM</span>{" "}
        </p>

        <span className="p-2">
          <ArrowDown />
        </span>
      </div>

      <div className="flex">
        <h4 className="text-[#ACACAC]">
          Visit our showroom in 1234 Street Adress City Address, 1234{" "}
          <span className="underline text-white font-semibold cursor-pointer">
            Contact Us
          </span>
        </h4>
      </div>
      <div className="flex justify-center items-center gap-3">
        <h4 className="font-semibold">Call Us: (00) 1234 5678</h4>
        <Facebook />
        <Instagram />
      </div>
    </section>
  );
};

export default NavbarTop;
