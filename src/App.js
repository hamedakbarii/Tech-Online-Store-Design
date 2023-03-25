import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products";
import Banner from "./components/Banner";
import ProductItem from "./components/ProductItem";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import Desktop from "./components/Desktop";
import ProductLogo from "./components/ProductLogo";
import UserFeedBack from "./components/UserFeedBack";
import OurServices from "./components/OurServices";
export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Banner />
      <ProductSection />
      <ProductItem />
      <Desktop />
      <ProductLogo />
      <UserFeedBack />
      <OurServices />
    </div>
  );
}
