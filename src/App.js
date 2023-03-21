import React from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products";
import Hero from "./Hero";
import Banner from "./components/Banner";
import CustomBuilds from "./components/CustomBuilds";
export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Banner />
      <CustomBuilds />
    </div>
  );
}
