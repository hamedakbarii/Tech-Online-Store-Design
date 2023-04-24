import React from "react";

const AboutProduct = () => {
  return (
    <>
      <div className="flex flex-col px-4 pt-4 animate-Accardion origin-top overflow-hidden">
        <p className="font-[400] mt-2">
          MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM,
          512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years
          Warranty Gaming Desktop
        </p>
        <div className="flex items-center gap-4 px-4 mt-4">
          <div className="p-[.05rem] border-2 border-secondaryBlue rounded-full flex items-center justify-center">
            <div className="w-10 h-10 bg-[#4B4D4F] rounded-full"></div>
          </div>
          <div className="p-[.05rem] border-2 border-transparent rounded-full flex items-center justify-center">
            <div className="w-10 h-10 bg-[#EAE8EB] rounded-full"></div>
          </div>
          <div className="p-[.05rem] border-2 border-transparent rounded-full flex items-center justify-center">
            <div className="w-10 h-10 bg-[#F2E9DC] rounded-full"></div>
          </div>
        </div>
        <div className="px-4 mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold flex flex-col justify-center items-center tablet:flex-row">
            Have a Question?
            <span className="font-[500] text-secondaryBlue underline tablet:ml-2">
              {" "}
              Contact Us{" "}
            </span>
          </p>
          <span>SKU D5515AI</span>
        </div>
      </div>
    </>
  );
};

export default AboutProduct;
