import React from "react";
import { ZipIcon } from "./Icon";

const Banner = () => {
  return (
    <section className="bg-[#F5F7FF] p-2 flex flex-col justify-center items-center gap-3 mt-4">
      <div className="iconSvg relative">
        <ZipIcon />
      </div>

      <h4 className="text-center">own it now, up to 6 months interest free learn more</h4>
    </section>
  );
};

export default Banner;
