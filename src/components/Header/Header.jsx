import React from "react";
import Button from "../Button";
import Icon2 from "../Icon2";
import Li from "./Li";
import Logo from "../Logo";
import NavbarTop from "./NavbarTop";

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
            <Button
              title="Our Deals"
              border={"2px solid rgb(59 130 246 / var(--tw-text-opacity))"}
            />
          </ul>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Icon2 custom={"fas fa-search"} />
          <Icon2 custom={"fas fa-shop "} />
          <img
            src="./assets/profile/hamed.jpg"
            alt="hamed"
            className="rounded-full w-10"
          />
        </div>
      </nav>
    </div>
  );
}
