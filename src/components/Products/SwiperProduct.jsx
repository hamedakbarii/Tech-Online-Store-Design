// import Swiper core and required modules
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { PickedStar, UnPickedStar, OutOfStock, Aviable } from "../Icon";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductToBuy } from "../../App";
export let CalculateStars = ({ stars }) => {
  let b = [];
  for (let i = 0; i < stars; i++) {
    b.push(<PickedStar />);
  }
  for (let i = stars; i < 5; i++) {
    b.push(<UnPickedStar />);
  }
  return <p className="flex items-center">{b}</p>;
};
let SwiperProduct = ({ ItemList, spaceBetween, slidesPerView }) => {
  const store = useContext(ProductToBuy) ; 
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-full"
    >
      {ItemList &&
        ItemList.map((item,id) => (
          <SwiperSlide className="flex flex-col p-2 bg-[#F5F7FF] rounded-lg">
            <Link key={item.id} to={`/product/${item.categoryTitle}/${item.id}`} data-cate={item.categoryTitle} data-id={item.id} onClick={()=>{store[1]('4343334')}}>
            <p className="tablet:hidden flex items-center">
              {item.avaiblity ? <Aviable /> : <OutOfStock />}
              <span className="ml-1 text-sm">
                {item.avaiblity ? (
                  <span className="text-[#78A962]">In Stock</span>
                ) : (
                  <span className="text-[#C94D3F]">Check Availability</span>
                )}
              </span>
            </p>
            <div className="flex items-center justify-center mt-2">
              <img
                className="h-[9rem] w-full object-contain object-center"
                src={item.img}
              />
            </div>
            <div className="flex flex-col mt-2">
              <p className="tablet:flex hidden items-center">
                {item.avaiblity ? <Aviable /> : <OutOfStock />}
                <span className="ml-1 text-sm">
                  {item.avaiblity ? (
                    <span className="text-[#78A962]">In Stock</span>
                  ) : (
                    <span className="text-[#C94D3F]">Check Availability</span>
                  )}
                </span>
              </p>
              <div className="tablet:flex-row flex flex-col items-center flex-wrap tablet:justify-between justify-center">
                <span className="flex items-center mr-3 mt-1">
                  <CalculateStars stars={item.stars} />
                </span>
                <span className="flex items-center">
                  reviews({item.review})
                </span>
              </div>
              <p>{item.title}</p>
              <p className="flex flex-col">
                <del className="text-sm text-gray-700">${item.price}</del>
                <span className="text-lg font-semibold">${item.offprice}</span>
              </p>
            </div>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
export default SwiperProduct;
/*




*/
