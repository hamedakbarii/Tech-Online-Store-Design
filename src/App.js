import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products";
import Banner from "./components/Banner";
import ProductItem from "./components/MsiProductSection";
import Hero from "./components/Hero";
import ProductSection from "./components/CustomBuildsSection";
import Desktop from "./components/Desktop";
import ProductLogo from "./components/ProductLogo";
import UserFeedBack from "./components/UserFeedBack";
import OurServices from "./components/OurServices";
import Footer from "./components/Footer/Footer";
import { ArrowDown, MessageIcon } from "./components/Icon";
import GamingMonitor from "./components/GamingMonitor";
import ProductsPage from "./components/ProductsPage";
import ProductPage from "./components/ProductPage";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import Register from "./components/Pages/Register/Register";

export default function App() {
  return (
    <div className="relative">
      {/* <Header /> */}
       {/* <Hero />
      <Products />
      <Banner />
      <ProductSection />
      <ProductItem />
      <Desktop />
      <GamingMonitor />
      <ProductLogo />
      <UserFeedBack />
      <OurServices />
      <Footer /> 
      <ProductsPage /> */}
      {/* <ContactUs /> */}
      <Register />
      {/* <ProductPage /> */}
      {/* <div className="flex flex-col fixed right-4 bottom-8 z-[20] gap-2">
        <span className="w-12 h-12 bg-secondaryBlue flex items-center justify-center rounded-full rotate-[180deg]">
          <ArrowDown />
        </span>
        <span className="w-12 h-12 bg-secondaryBlue flex items-center justify-center rounded-full">
          <MessageIcon />
        </span>
      </div> */}
    </div>
  );
}
