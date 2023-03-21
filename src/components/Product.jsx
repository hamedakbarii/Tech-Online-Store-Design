import { Aviable ,  OutOfStock, PickedStar, UnPickedStar } from "./Icon";
let Product = ({item}) => {
let b = [] ; 
for(let i = 0 ; i < item.stars ; i++) {
    b.push(<PickedStar />) ; 
}
for(let i = item.stars ; i < 5; i++) {
    b.push(<UnPickedStar />) ; 
}
    return (
    <div className="flex flex-col p-2">
        <div className="block">
            <img className="h-[8rem] w-full object-contain object-center" src={item.img} />
        </div>
        <div className="flex flex-col">
            <p className="flex items-center">
                {
                    item.avaiblity ? <Aviable /> : <OutOfStock />
                }
                <span className="ml-3 text-lg">
                    {
                        item.avaiblity ? <span className="text-[#78A962]">In Stock</span> : <span className="text-[#C94D3F]">Check Availability</span>
                    }
                </span>
            </p>
            <div className="flex items-center">
                <div className="flex items-center mr-3">
                    {
                        b
                    }
                </div>
                <span className="flex items-center">
                    reviews({
                        item.review
                    })
                </span>
            </div>
            <p>
                {
                    item.title
                }
            </p>
            <p className="flex flex-col">
                <del className="text-sm text-gray-700">${
                    item.price
                }</del>
                <span className="text-lg font-semibold">
                    ${
                        item.offprice
                    }
                </span>
            </p>
        </div>
    </div>
    )    
}
export default Product ; 