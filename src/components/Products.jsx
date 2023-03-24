import Product from "./Product";
import {
  Aviable,
  LeftSideIcon,
  OutOfStock,
  PickedStar,
  RightSideIcon,
  UnPickedStar,
} from "./Icon";

let Products = () => {
  return (
    <>
    <div className="relative container flex flex-col mx-auto px-4 tablet:px-0">
      <div className="flex justify-between items-center">
        <h2 className="mt-6 text-xl font-semibold">New Products</h2>
        <h4 className="underline text-[#0156FF]">See All Products</h4>
      </div>
      {
        <Product />
      }
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
