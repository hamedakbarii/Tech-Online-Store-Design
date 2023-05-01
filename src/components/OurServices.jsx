import { DropUser, PriceTag, SupportHeadset } from "./Icon";

let OurServices = () => {
  return (
    <div className="mt-3 p-3 grid grid-cols md:grid-cols-3 md:mt-3 md:py-5 gap-3 w-full bg-[#F5F7FF]">
      <div className="flex flex-col items-center gap-2">
        <div className="p-4 bg-secondaryBlue rounded-full">
          <SupportHeadset />
        </div>
        <h4 className="text-xl font-semibold">Product Support</h4>
        <p className="text-lg text-center">
          Up to 3 years on-site warranty available for your peace of mind.
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="p-4 bg-secondaryBlue rounded-full">
          <DropUser />
        </div>
        <h4 className="text-xl font-semibold">Product Support</h4>
        <p className="text-lg text-center">
          With big discounts, free delivery and a dedicated support specialist.
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="p-4 bg-secondaryBlue rounded-full">
          <PriceTag />
        </div>
        <h4 className="text-xl font-semibold">Product Support</h4>
        <p className="text-lg text-center">
          Up to 70% off new Products, you can be sure of the best price.
        </p>
      </div>
    </div>
  );
};
export default OurServices;
