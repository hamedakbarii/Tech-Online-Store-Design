import ProductsContainer from "./ProductsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import SwiperProduct from "./SwiperProduct";
import {desktopProductsInfo} from "./../../utils"
let Desktop = () => {
  return (
    <ProductsContainer>
      <ProductSectionBanner
        src={"./assets/Desktop/DesktopLaptop.png"}
        title={"Desktops"}
      />
      <div className="pl-2 mt-4">
        {
          <SwiperProduct
            ItemList={desktopProductsInfo}
            slidesPerView={1.5}
            spaceBetween={30}
          />
        }
      </div>
    </ProductsContainer>
  );
};
export default Desktop;
