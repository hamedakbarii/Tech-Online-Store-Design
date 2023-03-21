import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products";
import Hero from "./Hero";
import Banner from "./components/Banner";
export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Banner />
    </div>
  );
}
