import BrandsContainer from "./BrandsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import SwiperProduct from "./SwiperProduct";
import { desktopProductsInfo } from "./../../utils";
let Desktop = () => {
  return (
    <BrandsContainer>
      <ProductSectionBanner
        src={"./assets/Desktop/DesktopLaptop.png"}
        title={"Desktops"}
      />
      <div className="pl-2 mt-4 md:w-full">
        {
          <SwiperProduct
            ItemList={desktopProductsInfo}
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
export default Desktop;
