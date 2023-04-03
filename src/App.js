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
import ContactUs from "./Pages/ContactUs";
import Register from "../src/Pages/Register";
import router from "./routes";
import { useRoutes } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart/ShoppingCartComp";
import AboutUs from "./components/AboutUs";
export default function App() {
  let routes = useRoutes(router);
  return (
    <div className="relative">
      <Header />

      {/* <ProductsPage />  */}
      {/* <ContactUs /> 
      <Register />*/}
      {/* <ProductPage /> */}
      {/* <div className="flex flex-col fixed right-4 bottom-8 z-[20] gap-2">
        <span className="w-12 h-12 bg-secondaryBlue flex items-center justify-center rounded-full rotate-[180deg]">
          <ArrowDown />
        </span>
        <span className="w-12 h-12 bg-secondaryBlue flex items-center justify-center rounded-full">
          <MessageIcon />
        </span>
      </div> */}
     {/* {routes}
       <ShoppingCart /> */}

       <AboutUs />
      <Footer />
    </div>
  );
}
