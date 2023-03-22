import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products";
import Hero from "./Hero";
import Banner from "./components/Banner";
import ProductSection from "./components/ProductSection";
import ProductSectionBanner from "./components/ProductSectionBanner";
export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Banner />
      <ProductSection />
      <ProductSection />
    </div>
  );
}
