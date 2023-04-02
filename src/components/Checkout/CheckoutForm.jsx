import React from "react";

const CheckoutForm = () => {
  return (
    <>
      <form className="flex flex-col justify-center gap-2 p-2">
        <div className="flex flex-col border-b border-gray-300">
          <label className="font-semibold" htmlFor="Email">
            Email Address
          </label>
          <input
            className="border border-gray-300 p-2 rounded-lg mt-1"
            type="email"
            name="email"
          />
          <span className="text-gray-300 mt-3 py-4">
            You can create an account after checkout.
          </span>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="firstName">
            First Name
          </label>
          <input
            className="border border-gray-300 p-2 rounded-lg mt-1"
            type="text"
            name="firstName"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="LastName">
            Last Name
          </label>
          <input
            className="border border-gray-300 p-2 rounded-lg mt-1"
            type="text"
            name="LastName"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="Company">
            Company
          </label>
          <input
            className="border border-gray-300 p-2 rounded-lg mt-1"
            type="text"
            name="Company"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="StreetAddress">
            Street Address
          </label>
          <input
            className="border border-gray-300 p-2 rounded-lg mt-1"
            type="text"
            name="StreetAddress"
          />
          <input
            className="border border-gray-300 p-2 rounded-lg mt-1"
            type="text"
            name="StreetAddress2"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="City">
            City
          </label>
          <input
            className="border border-gray-300 p-2 rounded-lg mt-1"
            type="text"
            name="City"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="State">
            State/Province
          </label>
          <select
            className="border border-gray-300 p-2 rounded-lg mt-1"
            name=""
            id=""
          >
            <option value="-1">
              Please, select a region, state or province
            </option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="Postal Code">
            Zip/Postal Code
          </label>
          <input
            className="border border-gray-300 p-2 rounded-lg mt-1"
            type="number"
            name="Postal Code"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="Country">
            Country
          </label>
          <select className="border border-gray-300 p-2 rounded-lg mt-1">
            <option value="United States">United States</option>
          </select>
        </div>
        <div className="flex flex-col border-b border-gray-300 py-5">
          <label className="font-semibold" htmlFor="Phone Number">
            Phone Number
          </label>
          <input
            className="border border-gray-300 p-2 rounded-lg mt-1"
            type="number"
            name="Phone Number"
          />
        </div>
        <div>
          <h3>Standard rate</h3>
        </div>
        <div className="w-full flex justify-around items-baseline gap-4">
          <input type="radio" forHtml="standard" name="standard" />
          <span>
            Price may vary depending on the item/destination. Shop Staff will
            contact you. $21.00
          </span>
          <span className="font-semibold">$21.00</span>
        </div>
        <div>
          <h3>Pickup from store</h3>
        </div>
        <div className="w-full flex justify-around items-baseline gap-4">
          <input type="radio" forHtml="standard" name="standard" />
          <span>1234 Street Adress, City Address, 1234 $0.00</span>
          <span className="font-semibold">$0.00</span>
        </div>
        <div>
          <button className="px-10 py-3 bg-[#007aff] text-white rounded-lg ">
            Next
          </button>
        </div>
        <div></div>
      </form>
    </>
  );
};

export default CheckoutForm;
