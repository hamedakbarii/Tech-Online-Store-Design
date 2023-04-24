import { useState } from "react";
import {
  ArrowDown,
  Comparison,
  HeartLike,
  IntelIconSvg,
  NovelLetter,
  PayPalIconSvg,
  ZipIcon,
} from "./../Icon";
import WomanBehindLaptop from "../../WomanBehindLaptop.png";

import AboutProduct from "../ProductDetails/TabSection/AboutProduct";
import Details from "../ProductDetails/TabSection/Details";
import Specs from "../ProductDetails/TabSection/Specs";
import ProductSupport from "../ProductDetails/ProductSupport";
import Features from "../ProductDetails/Features";

const ProductPage = ({ data }) => {
  const [productCount, setProductCount] = useState(1);
  const [productSec, setProductSec] = useState("About Product");

  const [ProductInformationChanger, setProductInformationChanger] = useState([
    {
      title: "About Product",
      active: true,
      index: 0,
    },
    {
      title: "Details",
      active: false,
      index: 1,
    },
    {
      title: "Specs",
      active: false,
      index: 2,
    },
  ]);

  const [ProductInformationChangerIndex, setProductInformationChangerIndex] =
    useState(0);
  let ProductInformationFunctionHandler = (index, item) => {
    let temp = [
      {
        title: "About Product",
        active: false,
        index: 0,
      },
      {
        title: "Details",
        active: false,
        index: 1,
      },
      {
        title: "Specs",
        active: false,
        index: 2,
      },
    ];
    temp[index].active = true;
    setProductInformationChanger([...temp]);
    setProductSec(item);
  };
  return (
    <div className="flex flex-col container mx-auto mt-4">
      <div className=" relative flex flex-col items-center justify-center">
        <img src={`/${data[0].img}`} className="object-cover object-center" />
        <div className="absolute top-2 left-4 flex flex-col items-center gap-2">
          <HeartLike />
          <Comparison />
          <NovelLetter />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <ZipIcon />
          <a className="max-w-[12rem] text-sm leading-5 flex items-center before:h-7 before:mr-2 before:block before:content-[''] before:border before:rounded-full before:border-secondaryBlue ">
            <span>
              own it now, up to 6 months interest free <span>learn more</span>
            </span>
          </a>
        </div>
      </div>
      {/*
                about product section
            */}
      <div className="flex flex-col mt-4">
        <div className="flex items-center">
          {ProductInformationChanger.map((item, index) =>
            item.active ? (
              <div key={index} className="block cursor-pointer">
                <span
                  activate--data={item.active ? "active" : "deactive"}
                  onClick={(e) => {
                    ProductInformationFunctionHandler(index, item.title);
                  }}
                  className="pb-2 px-2 translate-y-0 text-black font-[550] flex flex-col after:border-b-2 after:border-b-black after:block after:content-[''] transation-all duration-[.5s]"
                >
                  {item.title}
                </span>
              </div>
            ) : (
              <div className="block cursor-pointer">
                <span
                  activate--data={item.active ? "active" : "deactive"}
                  onClick={(e) => {
                    ProductInformationFunctionHandler(index, item.title);
                  }}
                  className="pb-2 px-2 translate-y-2 text-gray-500 font-[550] flex flex-col after:border-b-2 after:border-b-transparent after:block after:content-[''] transation-all duration-[.5s]"
                >
                  {item.title}
                </span>
              </div>
            )
          )}
        </div>
        <div className="block px-4 mt-2">
          <h3 className="text-3xl font-bold mt-2">{data[0].title}</h3>
          <p className="text-secondaryBlue font-[400] mt-2">
            Be the first to review this product
          </p>
        </div>
        {productSec === "About Product" ? (
          <AboutProduct />
        ) : productSec === "Details" ? (
          <Details />
        ) : productSec === "Specs" ? (
          <Specs />
        ) : null}
        <div className="px-4 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4 mt-4">
            <div className="flex items-center gap-2">
              <span>{productCount}</span>
              <div className="flex flex-col">
                <span
                  onClick={() => {
                    setProductCount(productCount + 1);
                  }}
                  className="rotate-[180deg] p-2"
                >
                  <ArrowDown color="gray" size="10" />
                </span>
                <span
                  onClick={() => {
                    if (productCount <= 1) {
                      return null;
                    } else {
                      setProductCount(productCount - 1);
                    }
                  }}
                  className="p-2"
                >
                  <ArrowDown color="gray" size="10" />
                </span>
              </div>
            </div>
            <div className="flex tablet:flex-row flex-col w-full gap-2">
              <button className="h-12 px-6 w-[100%] flex items-center justify-center bg-secondaryBlue text-white border-2 border-transparent transation-all duration-[.2s] hover:text-secondaryBlue hover:bg-transparent hover:border-secondaryBlue rounded-full text-lg font-semibold">
                Add to Cart
              </button>
              <button className="h-12 px-6 w-[100%] flex items-center justify-center bg-[#FFB800] text-white border-2 border-transparent transation-all duration-[.2s] hover:text-secondaryBlue hover:bg-transparent hover:border-[#FFB800] rounded-full text-lg font-semibold">
                <PayPalIconSvg />
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center text-lg font-semibold mt-2">
            <p>
              On Sale from <span className="font-[600]">$6,000.43</span>
            </p>
          </div>
        </div>
      </div>
      {/*
                OutPlay Section */}
      <div className="relative grid grid-cols-1 grid-rows-[1.5fr_1fr] pb-6">
        <span className="gradientBlack w-full h-full top-0 left-0 absolute z-[+1]"></span>
        <div className="clip-path-inset0 relative">
          <img
            className="w-full h-full fixed top-0 left-0 object-cover"
            src="/assets/Cpu/intelCpu.png"
          />
        </div>
        <div className="px-4 z-[10]">
          <h3 className="max-w-[14rem] text-white font-semibold text-4xl">
            Outplay the Competittion
          </h3>
          <div className="block text-white">
            <p className="mt-4">
              Experience a 40% boost in computing from last generation. MSI
              Desktop equips the 10th Gen. Intel® Core™ i7 processor with the
              upmost computing power to bring you an unparalleled gaming
              experience.
            </p>
            <p className="mt-4">
              *Performance compared to i7-9700. Specs varies by model.
            </p>
          </div>
        </div>
      </div>
      <div
        className="px-4 h-[18rem] bg-[length:100%_100%] bg-no-repeat bg-right-bottom"
        style={{ backgroundImage: `url(${WomanBehindLaptop})` }}
      >
        <div className="flex flex-col gap-4 mt-10">
          <ProductSupport title="Product Support" />
          <ProductSupport title="FAQ" />
          <ProductSupport title="Our Buyer Guide" />
        </div>
      </div>
      <div className="px-4 flex flex-col items-center justify-center py-6 gap-8 lineargradiant text-white">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-2xl font-semibold">Features</h2>
          <p className="text-center">
            The MPG series brings out the best in gamers by allowing full
            expression in color with advanced RGB lighting control and
            synchronization.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <Features />
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
