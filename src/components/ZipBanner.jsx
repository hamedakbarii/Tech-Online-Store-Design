import React from "react";
import { ZipIcon } from "./Icon";

const ZipBanner = () => {
  return (
    <section className="bg-[#F5F7FF] p-2 flex flex-col justify-center items-center gap-3 mt-4 container mx-auto md:flex-row">
      <div className="iconSvg relative">
        <ZipIcon />
      </div>

      <div className="text-center flex flex-col items-center text-[#272560] md:flex-row gap-2">
        <span className="block">
          <span className="font-[550]">own</span> it now, up to 6 months
          interest free
        </span>{" "}
        <span className="underline text-lg">learn more</span>
      </div>
    </section>
  );
};

export default ZipBanner;
