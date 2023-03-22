import React from "react";
import Product from "./Product";
import ProductSectionBanner from "./ProductSectionBanner";

const ProductSection = (children) => {
  let productInfo = [
    {
      avaiblity: false,
      stars: 4,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/CustomBuilds/case-1.png",
      id: 6,
    },
    {
      avaiblity: false,
      stars: 4,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/CustomBuilds/case-2.png",
      id: 7,
    },
    {
      avaiblity: false,
      stars: 3,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/CustomBuilds/case-3.png",
      id: 8,
    },
    {
      avaiblity: false,
      stars: 5,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/CustomBuilds/case-4.png",
      id: 9,
    },
    {
      avaiblity: false,
      stars: 2,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/CustomBuilds/case-5.png",
      id: 10,
    },
  ];

  return (
    <section className="container grid grid-cols-6 p-2">
      <ProductSectionBanner src={"assets/CustomBuilds/image30.png"} />
      {productInfo.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ProductSection;
