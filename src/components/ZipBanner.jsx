import React from "react";
import { ZipIcon } from "./Icon";

const ZipBanner = () => {
  return (
    <section className="bg-[#F5F7FF] p-2 flex flex-col justify-center items-center gap-3 mt-4 container mx-auto">
      <div className="iconSvg relative">
        <ZipIcon />
      </div>

      <h4 className="text-center flex flex-col items-center text-[#272560]">
        <span className="block">
          <span className="font-[550]">own</span> it now, up to 6 months
          interest free
        </span>{" "}
        <span className="underline text-lg">learn more</span>
      </h4>
    </section>
  );
};

export default ZipBanner;
