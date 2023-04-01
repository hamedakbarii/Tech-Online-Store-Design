import React from "react";
import OurServices from "../components/OurServices";

const Register = () => {
  return (
    <div>
      <div className="p-4">
        <span>
          Home <span className="text-[##0156FF]">›</span> Customer Login
        </span>
      </div>
      <h3 className="p-4">Customer Login</h3>
      <section className="p-2 bg-[#F5F7FF] mx-4">
        <h4 className="font-bold">Registered Customers</h4>
        <h6 className="mt-1 font-[400]">
          If you have an account, sign in with your email address.
        </h6>
        <form className="flex flex-col w-full mt-4 gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="Name">Your Name</label>
            <input
              className="border-2 px-2 m-auto w-full"
              type="text"
              name="Name"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Your Email</label>
            <input
              className="border-2 px-2 m-auto w-full"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="flex justify-between p-2">
            <input
              type="submit"
              value={"Submit"}
              className="text-white border-2 self-start border-[#0156FF] cursor-pointer bg-[#0156FF] px-10 py-2 font-semibold flex rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]"
            />
            <a href="forget password" className="text-blue-500">
              Forgot Your Password?
            </a>
          </div>
        </form>
      </section>

      <section className="p-2 bg-[#F5F7FF] m-4">
        <h4 className="font-bold py-2">New Customer?</h4>
        <h6 className="mt-1 font-[400]">
          Creating an account has many benefits:
        </h6>
        <ul className="mt-3 flex flex-col gap-2">
          <li>• Check out faster </li>
          <li>• Keep more than one address</li>
          <li>• Track orders and more</li>
        </ul>
        <button className="mt-4 text-white border-2 self-start border-[#0156FF] cursor-pointer bg-[#0156FF] px-10 py-2 font-semibold flex rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]">
          Create An Account
        </button>
      </section>
      <section className="bg-[#F5F7FF] w-full p-2">
        <OurServices />
      </section>
    </div>
  );
};

export default Register;
