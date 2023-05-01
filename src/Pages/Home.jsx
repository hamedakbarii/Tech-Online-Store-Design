import React from "react";
import ZipBanner from "../components/ZipBanner";
import CustomBuildsSection from "../components/Products/CustomBuildsSection";
import NewProducts from "../components/Products/NewProducts";
import Hero from "../components/Hero";
import MsiProductSection from "../components/Products/MsiProductSection";
import Desktop from "../components/Products/Desktop";
import GamingMonitor from "../components/Products/GamingMonitor";
import ProductLogo from "../components/Products/ProductLogo";
import UserFeedBack from "../components/UserFeedBack";

const Home = () => {
  return (
    <div>
      <Hero />
      <NewProducts />
      <ZipBanner />
      <CustomBuildsSection />
      <MsiProductSection />
      <Desktop />
      <GamingMonitor />
      <ProductLogo gridCols = {"md:grid-cols-3"}/>
      <UserFeedBack />
    </div>
  );
};

export default Home;
