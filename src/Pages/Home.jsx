import React from "react";
import Banner from "../components/Banner";
import CustomBuildsSection from "../components/CustomBuildsSection";
import Products from "../components/Products";
import Hero from "../components/Hero";
import MsiProductSection from "../components/MsiProductSection";
import Desktop from "../components/Desktop";
import GamingMonitor from "../components/GamingMonitor";
import ProductLogo from "../components/ProductLogo";
import UserFeedBack from "../components/UserFeedBack";
import OurServices from "../components/OurServices";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Banner />
      <CustomBuildsSection />
      <MsiProductSection />
      <Desktop />
      <GamingMonitor />
      <ProductLogo />
      <UserFeedBack />
      <OurServices />
    </div>
  );
};

export default Home;
