import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarList from "./NavbarList";
import Logo from "../Logo";
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
import UserProfileMenu from "./UserProfileMenu";
const NavbarMain = () => {
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
  const [ActiveUserProfileMenu, setActiveUserProfileMenu] = useState(false);
  return (
    <>
      <nav
        className="xlHeader:container w-full block mx-auto px-4 py-2 
      xlHeader:bg-white bg-[#0156FF] relative z-10"
      >
        <div className="flex items-center justify-between container mx-auto px-2 gap-4 w-full">
          <div className="flex items-center gap-2">
            <HamburgerMenue HandleHamburgerActivation={setActiveHamburger} />
            {ActiveHamburger ? (
              <div className="absolute top-0 left-0 w-full md:h-screen md:w-1/2 bg-white px-5 py-2 ">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between border-b border-gray-300 py-2 ">
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

                  <div className="flex flex-col mt-4 gap-2">
                    {navUl.map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between md:p-2"
                      >
                        <p className="text-lg font-base">{item}</p>
                        <span className="-rotate-[90deg]">
                          <ArrowDown color={"black"} />
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="text-secondaryBlue border-2 border-secondaryBlue w-max md:w-52 py-1 px-4 my-6 text-lg font-semibold rounded-full transation-all duration-[.2s] bg-white hover:bg-secondaryBlue hover:text-white">
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
            <Link to="./shoppingcart">
              <ShopingCart />
            </Link>
            <UserIcon
              HandleUserDataShow={setActiveUserProfileMenu}
              UserDataShow={ActiveUserProfileMenu}
            />
            {ActiveUserProfileMenu ? (
              <UserProfileMenu toggleProfile={setActiveUserProfileMenu} />
            ) : null}
          </div>
        </div>

        <div className="xlHeader:flex items-center justify-between hidden">
          <Logo />
          <ul className="flex justify-center items-center px-2">
            {navUl.map((item) => (
              <NavbarList key={item} data={item} />
            ))}
            <button className="py-1 transition-all px-5 rounded-2xl font-semibold text-[#0156FF] mx-2 hover:bg-[#0156FF] hover:text-white border-2 border-solid border-secondaryBlue">
              Our Deals
            </button>
          </ul>
          <div className="flex justify-center items-center gap-4">
            <Search />

            <img
              src="./assets/profile/hamed.jpg"
              alt="hamed"
              className="rounded-full w-10 cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMain;
