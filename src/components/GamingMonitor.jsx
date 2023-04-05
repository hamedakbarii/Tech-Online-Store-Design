import ProductsContainer from "./ProductsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import SwiperProduct from "./SwiperProduct";
let DesktopProductInfo = [
    {
      avaiblity: false,
      stars: 5,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/GamingMonitor/GamingMonitor1.png",
      id: 6,
    },
    {
      avaiblity: false,
      stars: 1,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/GamingMonitor/GamingMonitor.png",
      id: 7,
    },
    {
      avaiblity: false,
      stars: 3,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/GamingMonitor/GamingMonitor.png",
      id: 8,
    },
    {
      avaiblity: false,
      stars: 5,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/GamingMonitor/GamingMonitor1.png",
      id: 9,
    },
    {
      avaiblity: false,
      stars: 2,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/GamingMonitor/GamingMonitor.png",
      id: 10,
    },
];
let GamingMonitor = () => {
    return(
        <ProductsContainer>
            <ProductSectionBanner src={"./assets/GamingMonitor/GamingMonitorBanner.png"} title={"Gaming Monitor"} />
            <div className="pl-2 mt-4">
              {
                  <SwiperProduct ItemList={DesktopProductInfo} slidesPerView={1.5} spaceBetween={50} />
              }
            </div>
        </ProductsContainer>
    )
}
export default GamingMonitor ; 