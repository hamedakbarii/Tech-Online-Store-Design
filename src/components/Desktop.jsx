import ProductsContainer from "./ProductsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import Product from "./Product";
let DesktopProductInfo = [
    {
      avaiblity: false,
      stars: 5,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/Desktop/Desktop.png",
      id: 6,
    },
    {
      avaiblity: false,
      stars: 1,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/Desktop/Desktop1.png",
      id: 7,
    },
    {
      avaiblity: false,
      stars: 3,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/Desktop/Desktop2.png",
      id: 8,
    },
    {
      avaiblity: false,
      stars: 5,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/Desktop/Desktop.png",
      id: 9,
    },
    {
      avaiblity: false,
      stars: 2,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/Desktop/Desktop2.png",
      id: 10,
    },
];
let Desktop = () => {
    return(
        <ProductsContainer>
            <ProductSectionBanner src={"./assets/Desktop/DesktopLaptop.png"} title={"Desktops"} />
            {
                <Product ItemList={DesktopProductInfo} slidesPerView={1.5} spaceBetween={50} />
            }
        </ProductsContainer>
    )
}
export default Desktop ; 