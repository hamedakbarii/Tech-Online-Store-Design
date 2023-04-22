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
import OurServices from "../components/OurServices";
// import { useParams } from "react-router-dom";

const Home = () => {
  // let params = useParams();
  return (
    <div>
      <Hero />
      <NewProducts />
      <ZipBanner />
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
