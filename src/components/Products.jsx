import { Aviable, LeftSideIcon, OutOfStock, PickedStar, RightSideIcon, UnPickedStar } from "./Icon";
import Product from "./Product";
let data = [
    {
        avaiblity : true ,
        stars : 2 , 
        review : 10 , 
        title : 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...' , 
        price : 600 , 
        offprice : 590 ,
        img : 'assets/newproducts/newproduct.png' , 
        id : 0 , 
    } ,
    {
        avaiblity : true ,
        stars : 5 , 
        review : 1 , 
        title : 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...' , 
        price : 600 , 
        offprice : 590 ,
        img : 'assets/newproducts/newproduct (5).png' , 
        id : 1 , 
    } ,
    {
        avaiblity : false ,
        stars : 3 , 
        review : 100 , 
        title : 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...' , 
        price : 600 , 
        offprice : 590 ,
        img : 'assets/newproducts/newproduct (4).png' , 
        id : 2 , 
    } ,
    {
        avaiblity : true ,
        stars : 2 , 
        review : 10 , 
        title : 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...' , 
        price : 600 , 
        offprice : 590 ,
        img : 'assets/newproducts/newproduct (5).png' , 
        id : 3 , 
    } ,
    {
        avaiblity : true ,
        stars : 2 , 
        review : 10 , 
        title : 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...' , 
        price : 600 , 
        offprice : 590 ,
        img : 'assets/newproducts/newproduct (6).png' , 
        id : 4 , 
    } ,
    {
        avaiblity : false ,
        stars : 2 , 
        review : 10 , 
        title : 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...' , 
        price : 600 , 
        offprice : 590 ,
        img : 'assets/newproducts/newproduct.png' , 
        id : 5 , 
    }
]
let Products = () => {
    return (
        <div className="relative container flex flex-col mx-auto">
            <h2 className="mt-6 text-xl font-semibold">
                New Products
            </h2>
            <div className="relative grid grid-cols-6 gap-2 px-4">
                {
                    data.map((item) =>
                        <Product key={item.id} item={item} />
                    )
                }
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute w-full h-full top-[1.1rem] left-0 text-2xl">
                        <div className="absolute left-0 top-[50%] translate-y-[-50%] hover:pr-2 px-3 py-4 bg-[#6666667d] hover:bg-[#666666d6] transation-all duration-[0.2s] cursor-pointer  rounded-r-full flex items-center justify-center">
                            <LeftSideIcon color="#ebebeb"/>
                        </div>
                        <div className="absolute right-0 top-[50%] translate-y-[-50%] hover:pr-2 px-3 py-4 bg-[#6666667d] hover:bg-[#666666d6] transation-all duration-[0.2s] cursor-pointer  rounded-l-full flex items-center justify-center">
                            <RightSideIcon color="#ebebeb" />
                        </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Products ; 


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