import BrandsContainer from "./BrandsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import SwiperProduct from "./SwiperProduct";
import { MsiProductsInfo } from "../../utils";
const ProductItem = () => {
  return (
    <BrandsContainer>
      <ProductSectionBanner
        src={"assets/MsiLaptops/MsiLaptopBanner.png"}
        title={"Msi Laptops"}
      />
      <div className="pl-2 mt-4 md:w-full">
        {
          <SwiperProduct
            ItemList={MsiProductsInfo}
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

export default ProductItem;
