import ProductsContainer from "./ProductsContainer";
import ProductSectionBanner from "./ProductSectionBanner";
import Product from "./Product";
const ProductItem = () => {
  let MsiProductInfo = [
    {
      avaiblity: false,
      stars: 4,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/MsiLaptops/MsiLaptop (1).png",
      id: 6,
    },
    {
      avaiblity: false,
      stars: 4,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/MsiLaptops/MsiLaptop (2).png",
      id: 7,
    },
    {
      avaiblity: false,
      stars: 3,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/MsiLaptops/MsiLaptop (3).png",
      id: 8,
    },
    {
      avaiblity: false,
      stars: 5,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/MsiLaptops/MsiLaptop (4).png",
      id: 9,
    },
    {
      avaiblity: false,
      stars: 2,
      review: 10,
      title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      price: 600,
      offprice: 590,
      img: "assets/MsiLaptops/MsiLaptop (5).png",
      id: 10,
    },
  ];
  return (
      <ProductsContainer>
        <ProductSectionBanner
          src={"assets/MsiLaptops/MsiLaptopBanner.png"}
          title={"Msi Laptops"}
        />
        <div className="pl-2 mt-4">
          {
            <Product ItemList={MsiProductInfo} slidesPerView={1.5} spaceBetween={30} />
          }
        </div>
      </ProductsContainer>
  );
};

export default ProductItem;
