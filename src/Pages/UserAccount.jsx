import React from "react";
import { ArrowDown2 } from "../components/Icon";
import OurServices from "../components/OurServices";

const UserAccount = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-[#F5F7FF] container mx-auto my-4 p-2 border-b-2 border-b-gray-300">
        <h2 className="font-bold text-black ">Account Dashboard</h2>
        <ArrowDown2 />
      </div>

      <div className="flex flex-col justify-center items-start gap-2 border-b-2 border-gray-300 my-2 container mx-auto py-2">
        <h1 className="font-bold text-2xl">My Dashboard</h1>
        <h3 className="text-[#212121] font-normal">Account Information</h3>
      </div>

      <div className="border-b-2 border-gray-300 container mx-auto">
        <div className="container mx-auto flex flex-col justify-center items-start gap-4 py-2">
          <h3 className="font-bold text-black">Contact Information</h3>

          <div className="flex flex-col justify-center items-start">
            <h3 className="text-black font-semibold">Alex Driver</h3>
            <h3 className="text-black font-semibold">ExampeAdress@gmail.com</h3>

            <div className="flex justify-center items-center gap-6 py-2">
              <a href="#" className="text-[#0156FF] underline font-normal">
                Edit
              </a>
              <a href="#" className="text-[#0156FF] underline font-normal">
                Change Password
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center container mx-auto gap-4 py-2">
          <h2 className="font-bold">Newsletters</h2>
          <h3 className="font-semibold text-[#000000] w-60">
            You don't subscribe to our newsletter.
          </h3>
          <a href="#" className="font-normal underline text-[#0156FF]">
            Edit
          </a>

          <div className="flex justify-center items-center gap-4">
            <p className="text-[#212121] font-semibold">Address Book</p>
            <a href="#" className="font-normal underline text-[#0156FF]">
              Menage Addresses
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-4 flex flex-col justify-center items-start gap-6">
        <div className="flex flex-col justify-center items-start gap-4">
          <h3 className="font-bold">Default Billing Address</h3>
          <p className="font-semibold text-[#000000] w-56">
            You have not set a default billing address.
          </p>
          <a href="#" className="font-normal underline text-[#0156FF]">
            Edit Address
          </a>
        </div>

        <div className="flex flex-col justify-center items-start gap-4">
          <h3 className="font-bold">Default Shipping Address</h3>
          <p className="font-semibold text-[#000000] w-56">
            You have not set a default billing address.
          </p>
          <a href="#" className="font-normal underline text-[#0156FF]">
            Edit Address
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 container mx-auto">
        <div className="bg-[#F5F7FF] flex flex-col justify-center items-center gap-4 w-full p-2">
          <h1 className="font-bold text-xl">Compare Products</h1>
          <h3 className="font-normal">You have no items to compare.</h3>
        </div>

        <div className="bg-[#F5F7FF] flex flex-col justify-center items-center gap-4 w-full p-2">
          <h1 className="font-bold text-xl">My Wish List</h1>
          <h3 className="font-normal">You have no items in your wish list.</h3>
        </div>
      </div>

      <OurServices />
    </>
  );
};

export default UserAccount;
