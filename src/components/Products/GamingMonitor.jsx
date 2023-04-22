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
      <div className="pl-2 mt-4">
        {
          <SwiperProduct
            ItemList={gamingMonitorProducts}
            slidesPerView={1.5}
            spaceBetween={50}
          />
        }
      </div>
    </BrandsContainer>
  );
};
export default GamingMonitor;
