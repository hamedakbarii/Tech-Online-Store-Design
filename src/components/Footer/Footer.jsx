import { ArrowDown, Facebook, Instagram } from "../Icon";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#020203] pt-2 mt-2">
        <div className="pt-6 flex justify-center items-center">
          <div className="flex justify-center items-start flex-col">
            <h2 className="font-semibold text-white text-xl ">
              Sign Up To Our Newsletter.
            </h2>
            <h4 className="font-light text-[#FFFFFF] ">
              Be the first to hear about the latest offers.
            </h4>
          </div>
        </div>

        <div className="pt-4 flex justify-evenly items-center">
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border-solid border-2 text-white placeholder:text-white rounded px-4 py-2"
          />
          <button className="text-white bg-[#0156FF] px-6 py-2 text-lg font-semibold rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]">
            Subscribe
          </button>
        </div>

        <div className="flex flex-col justify-center items-center p-2 px-6">
          <div className="flex justify-between items-center border-b-[#A2A6B0] border-b-[1px] rounded-b cursor-pointer w-full p-2 pt-6">
            <h3 className="text-white">Information</h3>
            <ArrowDown />
          </div>

          <div className="flex justify-between items-center border-b-[#A2A6B0] border-b-[1px] rounded-b cursor-pointer w-full p-2 pt-6">
            <h3 className="text-white">Pc Parts</h3>
            <ArrowDown />
          </div>

          <div className="flex justify-between items-center border-b-[#A2A6B0] border-b-[1px] rounded-b cursor-pointer w-full p-2 pt-6">
            <h3 className="text-white">Desktop PCs</h3>
            <ArrowDown />
          </div>

          <div className="flex justify-between items-center border-b-[#A2A6B0] border-b-[1px] rounded-b cursor-pointer w-full p-2 pt-6">
            <h3 className="text-white">Laptops</h3>
            <ArrowDown />
          </div>

          <div className="flex justify-between items-center border-b-[#A2A6B0] border-b-[1px] rounded-b cursor-pointer w-full p-2 pt-6">
            <h3 className="text-white">Address</h3>
            <ArrowDown />
          </div>
        </div>

        <div className="flex justify-between items-center p-2 pt-4">
          <div className="flex justify-center items-center gap-2">
            <Facebook />
            <Instagram />
          </div>
          <span className="text-[#A2A6B0] text-sm">
            Copyright © 2020 Shop Pty. Ltd.
          </span>
        </div>

        <div className="flex justify-center items-center gap-2 py-4">
          <img
            src="./assets/FooterImg/paypal.png"
            alt="paypal"
            className="w-8 cursor-pointer"
          />
          <img
            src="./assets/FooterImg/visa.png"
            alt="visa"
            className="w-8 cursor-pointer"
          />
          <img
            src="./assets/FooterImg/maestro.png"
            alt="maestro"
            className="w-8 cursor-pointer"
          />
          <img
            src="./assets/FooterImg/discover.png"
            alt="discover"
            className="w-8 cursor-pointer"
          />
          <img
            src="./assets/FooterImg/american-express.png"
            alt="american-express"
            className="w-8 cursor-pointer"
          />
        </div>
      </footer>
    </>
  );
}
