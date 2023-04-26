import BrandsContainer from "./BrandsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import SwiperProduct from "./SwiperProduct";
import { gamingMonitorProducts } from "./../../utils";
let GamingMonitor = () => {
  return (
    <BrandsContainer>
      <ProductSectionBanner
        src={"./assets/GamingMonitor/GamingMonitorBanner.png"}
        title={"Gaming Monitor"}
      />
      <div className="pl-2 mt-4 md:w-full">
        {
          <SwiperProduct
            ItemList={gamingMonitorProducts}
            slidesPerView={
              window.innerWidth <= 550
                ? 1.2
                : window.innerWidth <= 768
                ? 3
                : window.innerWidth > 768
                ? 4
                : 0
            }
            spaceBetween={50}
          />
        }
      </div>
    </BrandsContainer>
  );
};
export default GamingMonitor;
