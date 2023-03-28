import SwiperProduct from "./SwiperProduct";
let ProductList = [
  {
    avaiblity: true,
    stars: 2,
    review: 10,
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    price: 600,
    offprice: 590,
    img: "assets/newproducts/newproduct.png",
    id: 0,
  },
  {
    avaiblity: true,
    stars: 5,
    review: 1,
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    price: 600,
    offprice: 590,
    img: "assets/newproducts/newproduct (5).png",
    id: 1,
  },
  {
    avaiblity: false,
    stars: 3,
    review: 100,
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    price: 600,
    offprice: 590,
    img: "assets/newproducts/newproduct (4).png",
    id: 2,
  },
  {
    avaiblity: true,
    stars: 2,
    review: 10,
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    price: 600,
    offprice: 590,
    img: "assets/newproducts/newproduct (5).png",
    id: 3,
  },
  {
    avaiblity: true,
    stars: 2,
    review: 10,
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    price: 600,
    offprice: 590,
    img: "assets/newproducts/newproduct (6).png",
    id: 4,
  },
  {
    avaiblity: false,
    stars: 2,
    review: 10,
    title: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
    price: 600,
    offprice: 590,
    img: "assets/newproducts/newproduct.png",
    id: 5,
  },
];
let Products = () => {
  return (
    <>
      <div className="relative container flex flex-col mx-auto px-4 tablet:px-0">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-semibold">New Products</h2>
          <h4 className="underline text-[#0156FF] text-black">See All Products</h4>
        </div>

        {<SwiperProduct ItemList={ProductList} slidesPerView={2} spaceBetween={10} />}
      </div>
    </>
  );
};
export default Products;

/*
                <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                        <img className="h-[10rem] object-cover object-center" src="assets/newproducts/newproduct (2).png" />
                    </div>
                    <div className="flex flex-col">
                        <p className="flex items-center">
                            <Aviable />
                            <span className="ml-3 text-lg text-[#78A962]">
                                in stock
                            </span>
                        </p>
                        <div className="flex items-center">
                            <div className="flex items-center mr-3">
                                <PickedStar />
                                <PickedStar />
                                <PickedStar />
                                <PickedStar />
                                <UnPickedStar />
                            </div>
                            <span className="flex items-center">
                                reviews(4)
                            </span>
                        </div>
                        <p>
                            EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
                        </p>
                        <p className="flex flex-col">
                            <del className="text-sm text-gray-700">$500</del>
                            <span className="text-lg font-semibold">
                                $480
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                        <img className="h-[10rem] object-cover object-center" src="assets/newproducts/newproduct (2).png" />
                    </div>
                    <div className="flex flex-col">
                        <p className="flex items-center">
                            <Aviable />
                            <span className="ml-3 text-lg text-[#78A962]">
                                in stock
                            </span>
                        </p>
                        <div className="flex items-center">
                            <div className="flex items-center mr-3">
                                <PickedStar />
                                <PickedStar />
                                <PickedStar />
                                <PickedStar />
                                <UnPickedStar />
                            </div>
                            <span className="flex items-center">
                                reviews(4)
                            </span>
                        </div>
                        <p>
                            EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
                        </p>
                        <p className="flex flex-col">
                            <del className="text-sm text-gray-700">$500</del>
                            <span className="text-lg font-semibold">
                                $480
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                        <img className="h-[10rem] object-cover object-center" src="assets/newproducts/newproduct (2).png" />
                    </div>
                    <div className="flex flex-col">
                        <p className="flex items-center">
                            <Aviable />
                            <span className="ml-3 text-lg text-[#78A962]">
                                in stock
                            </span>
                        </p>
                        <div className="flex items-center">
                            <div className="flex items-center mr-3">
                                <PickedStar />
                                <PickedStar />
                                <PickedStar />
                                <PickedStar />
                                <UnPickedStar />
                            </div>
                            <span className="flex items-center">
                                reviews(4)
                            </span>
                        </div>
                        <p>
                            EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
                        </p>
                        <p className="flex flex-col">
                            <del className="text-sm text-gray-700">$500</del>
                            <span className="text-lg font-semibold">
                                $480
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                        <img className="h-[10rem] object-cover object-center" src="assets/newproducts/newproduct (2).png" />
                    </div>
                    <div className="flex flex-col">
                        <p className="flex items-center">
                            <Aviable />
                            <span className="ml-3 text-lg text-[#78A962]">
                                in stock
                            </span>
                        </p>
                        <div className="flex items-center">
                            <div className="flex items-center mr-3">
                                <PickedStar />
                                <PickedStar />
                                <PickedStar />
                                <PickedStar />
                                <UnPickedStar />
                            </div>
                            <span className="flex items-center">
                                reviews(4)
                            </span>
                        </div>
                        <p>
                            EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
                        </p>
                        <p className="flex flex-col">
                            <del className="text-sm text-gray-700">$500</del>
                            <span className="text-lg font-semibold">
                                $480
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                        <img className="h-[10rem] object-cover object-center" src="assets/newproducts/newproduct (2).png" />
                    </div>
                    <div className="flex flex-col">
                        <p className="flex items-center">
                            <Aviable />
                            <span className="ml-3 text-lg text-[#78A962]">
                                in stock
                            </span>
                        </p>
                        <div className="flex items-center">
                            <div className="flex items-center mr-3">
                                <PickedStar />
                                <PickedStar />
                                <PickedStar />
                                <PickedStar />
                                <UnPickedStar />
                            </div>
                            <span className="flex items-center">
                                reviews(4)
                            </span>
                        </div>
                        <p>
                            EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
                        </p>
                        <p className="flex flex-col">
                            <del className="text-sm text-gray-700">$500</del>
                            <span className="text-lg font-semibold">
                                $480
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center justify-center">
                        <img className="h-[10rem] object-cover object-center" src="assets/newproducts/newproduct (2).png" />
                    </div>
                    <div className="flex flex-col">
                        <p className="flex items-center">
                            <Aviable />
                            <span className="ml-3 text-lg text-[#78A962]">
                                in stock
                            </span>
                        </p>
                        <div className="flex items-center">
                            <div className="flex items-center mr-3">
                                <PickedStar />
                                <PickedStar />
                                <PickedStar />
                                <PickedStar />
                                <UnPickedStar />
                            </div>
                            <span className="flex items-center">
                                reviews(4)
                            </span>
                        </div>
                        <p>
                            EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
                        </p>
                        <p className="flex flex-col">
                            <del className="text-sm text-gray-700">$500</del>
                            <span className="text-lg font-semibold">
                                $480
                            </span>
                        </p>
                    </div>
                </div>

*/
