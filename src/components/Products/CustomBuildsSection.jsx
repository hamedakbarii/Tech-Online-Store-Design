import React from "react";
import SwiperProduct from "./SwiperProduct";
import BrandsContainer from "./BrandsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import { customBuildsProducts } from "./../../utils";
const ProductSection = () => {
  return (
    <BrandsContainer>
      <ProductSectionBanner
        src={"assets/CustomBuilds/image30.png"}
        title={"Custom Builds"}
      />
      <div className="pl-2 mt-4 md:pl-0 md:w-full md:mt-0">
        {
          <SwiperProduct
            ItemList={customBuildsProducts}
            slidesPerView={
              window.innerWidth <= 550
                ? 1.2
                : window.innerWidth <= 768
                ? 3
                : window.innerWidth > 768
                ? 4
                : 0
            }
            spaceBetween={30}
          />
        }
      </div>
    </BrandsContainer>
  );
};

export default ProductSection;
