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
      <div className="pl-2 mt-4">
        {
          <SwiperProduct
            ItemList={MsiProductsInfo}
            slidesPerView={1.5}
            spaceBetween={30}
          />
        }
      </div>
    </BrandsContainer>
  );
};

export default ProductItem;
