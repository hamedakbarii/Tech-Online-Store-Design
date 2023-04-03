import { DropUser, PriceTag, SupportHeadset } from "./Icon";

let OurServices = () => {
  return (
    <div className="container mt-3 p-3 grid grid-cols gap-3 w-full">
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
          Up to 3 yearrs on-site warranty available for your peace of mind.
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="p-4 bg-secondaryBlue rounded-full">
          <PriceTag />
        </div>
        <h4 className="text-xl font-semibold">Product Support</h4>
        <p className="text-lg text-center">
          Up to 3 years on-site warranty available for your peace of mind.
        </p>
      </div>
    </div>
  );
};
export default OurServices;
