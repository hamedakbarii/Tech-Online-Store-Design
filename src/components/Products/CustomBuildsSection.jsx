import React from "react";
import SwiperProduct from "./SwiperProduct";
import ProductsContainer from "./ProductsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import {customBuildsProducts} from "./../../utils"
const ProductSection = (children) => {
  return (
    <ProductsContainer>
      <ProductSectionBanner
        src={"assets/CustomBuilds/image30.png"}
        title={"Custom Builds"}
      />
      <div className="pl-2 mt-4">
        {
          <SwiperProduct
            ItemList={customBuildsProducts}
            slidesPerView={1.5}
            spaceBetween={30}
          />
        }
      </div>
    </ProductsContainer>
  );
};

export default ProductSection;
