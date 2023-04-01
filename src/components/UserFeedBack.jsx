import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './UserFeedBackSwiperStyle.css'

let UserFeedBackData = [
    {
        message : `My first order arrived today in perfect condition.  
        From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.
        I look forward to shopping on your site in the future and would highly recommend it.` , 
        user : 'hamed akbari'
    },
    {
        message : `My first order arrived today in perfect condition.  
        From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.
        I look forward to shopping on your site in the future and would highly recommend it.` , 
        user : 'maji amini'
    } , 
    {
        message : `My first order arrived today in perfect condition.  
        From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.
        I look forward to shopping on your site in the future and would highly recommend it.` , 
        user : 'hadis jahangiri'
    } , 
    {
        message : `My first order arrived today in perfect condition.  
        From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.
        I look forward to shopping on your site in the future and would highly recommend it.` , 
        user : 'amir akbrazadeh'
    } , 
]


let UserFeedBack = () => {
    return(
        <div className='container mx-auto px-4 mt-4'>
            <Swiper
                modules={[Navigation, Pagination,A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="relative"
            >
                <span className='w-full h-full top-0 left-0 absolute bg-[#eff5ff] rounded-lg'>

                </span>
                {UserFeedBackData &&
                    UserFeedBackData.map((item)=>
                        <SwiperSlide className='relative p-4 px-6 rounded-lg'>
                            <div className='flex flex-col'>
                                <p className='flex items-start text-lg text-justify before:block before:content-["“"] before:leading-[.7] before:mr-4 before:text-8xl'>
                                    {
                                        item.message
                                    }
                                </p>
                                <span className='flex items-center justify-end mt-4 before:block before:content-["-"] before:mr-2 text-lg font-semibold'>
                                    {
                                        item.user
                                    }
                                </span>
                                <button className='z-20 text-secondaryBlue border-2 border-secondaryBlue w-max py-1 px-4 mt-6 text-lg font-semibold rounded-full transation-all duration-[.2s] hover:bg-secondaryBlue hover:text-white'>
                                    Leave Us A Review
                                </button>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}
export default UserFeedBack ; 
/*
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
*/