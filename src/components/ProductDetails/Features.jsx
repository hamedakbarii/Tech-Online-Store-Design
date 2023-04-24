import React from "react";

const Features = () => {
  return (
    <>
      <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full">
        <img src="/assets/Features/intel.png" alt="technology" />
      </div>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="text-center text-sm">
          <span className="font-semibold text-md">Intel® Core™ i7 </span>
          processor with the upmost computing power to bring you an unparalleled
          gaming experience.
        </div>

        <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full">
          <img src="/assets/Features/rtx.png" alt="technology" />
        </div>
        <div className="text-center text-sm">
          The new
          <span className="font-semibold ml-1 text-md">
            GeForce® RTX SUPER™{" "}
          </span>
          Series has more cores and higher clocks for superfast performance
          compared to previous-gen GPUs. processor with the upmost computing
          power to bring you an unparalleled gaming experience.
        </div>

        <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full">
          <img src="/assets/Features/ssd.png" alt="ssd" />
        </div>
        <div className="text-center text-sm">
          Unleash the full potential with the latest
          <span className="font-semibold text-md"> SSD technology </span>
          ,the NVM Express. 6 times faster than traditional SATA SSD. processor
          with the upmost computing power to bring you an unparalleled gaming
          experience.
        </div>

        <div className="w-20 h-20 flex items-center justify-center bg-black rounded-full">
          <img src="/assets/Features/ddr4.png" alt="technology" />
        </div>
        <div className="text-center text-sm">
          I Featuring the latest
          <span className="font-semibold text-md"> 10th Gen Intel® Core™ </span>
          processors, memory can support up to DDR4 2933MHz to delivers an
          unprecedented gaming experience. processor with the upmost computing
          power to bring you an unparalleled gaming experience.
        </div>
      </div>
    </>
  );
};

export default Features;
