import React, { useState } from "react";

import NavbarTop from "./NavbarTop";

import NavbarMain from "./NavbarMain";
export default function Header() {
  return (
    <div className="relative">
      <NavbarTop />

      <NavbarMain />
    </div>
  );
}
