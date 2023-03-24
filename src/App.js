import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products";
import Banner from "./components/Banner";
import ProductItem from "./components/ProductItem";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Banner />
      <ProductItem />
    </div>
  );
}
