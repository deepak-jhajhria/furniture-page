import CommonBtn from './CommonBtn'
import product1 from '../assets/images/dealsinglesofa1.webp'
import product2 from '../assets/images/dealsinglesofa2.webp'
import product3 from '../assets/images/dealsinglesofa3.webp'
import { Review } from './Icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Virtual } from 'swiper/modules';
import { useCallback, useRef } from 'react'
const DealProduct = () => {
    const sliderRef = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    const Items = [
        { img: product1, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
        { img: product3, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
        { img: product2, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
        { img: product3, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
    ]
    const SwiperItems = Items.map((items, index) => (
        <SwiperSlide>
            <div key={index} className='w-full bg-white duration-300 shadow-[0_0_0_0_rgba(0,0,0,0.12)] hover:shadow-2xl sm:hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] sm:mb-4'>
                <div className='px-[23px] py-[18px] '>
                    <img className='w-full' src={items.img} alt={items.productName} />
                    <div className='flex items-center justify-between mt-5'>
                        <p className='text-black font-Poppins font-medium text-lg sm:text-xl leading-normal'>{items.productName}</p>
                        <span>{items.review}</span>
                    </div>
                    <p className='text-[#4D4D4D] text-base sm:text-lg font-Poppins font-normal mt-4 leading-normal'>{items.productPara}</p>
                    <div className='flex w-full items-center justify-between mt-4 pb-4 sm:pb-6 md:pb-7 lg:pb-[35px]'>
                        <p className='text-black text-xl sm:text-2xl lg:text-[28px] font-Poppins font-semibold leading-normal'>{items.price}</p>
                        <div>{items.cartBtn}</div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    ))
    return (
        <div className='w-full'>
            <div className='container max-w-[1320px] pt-7 md:pt-0'>
                <p className='text-[#BD7D41] text-lg sm:text-xl font-Poppins font-normal headingLine'>Shopping Store</p>
                <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 md:mt-4 lg:mt-6 leading-normal'>Latest Deal</h2>
            </div>
            <div className='container max-w-[1556px] pb-10 sm:px-[60px] md:px-[70px] lg:px-[95px] xl:px-[120px] relative mt-5 sm:mt-9 md:mt-11 lg:mt-[66px]'>
                <div>
                    <Swiper ref={sliderRef} modules={[Virtual]} loop={true} autoplay={{ delay: 500, disableOnInteraction: false }} slidesPerView={1} breakpoints={{ 992: { slidesPerView: 2, }, 1350: { slidesPerView: 3, }, }} spaceBetween={27} className="mySwiper">
                        {SwiperItems}
                    </Swiper>
                    <button onClick={handlePrev} className='group prev-arrow duration-300 absolute max-sm:-translate-x-[130%] max-sm:-bottom-10 left-1/2 sm:left-2 sm:top-1/2 z-30 -translate-y-1/2'><span className="w-[50px] sm:w-[60px] lg:w-20 xl:w-[99px] h-[50px] sm:h-[60px] lg:h-20 xl:h-[99px] rounded-full shadow-[2px_7px_16px_rgba(0,0,0,0.08)] duration-300 flex items-center bg-white group-hover:bg-black justify-center"><svg class="fill-black group-hover:fill-white w-6 sm:w-8 lg:w-[42px]" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 42 16" fill="none">
                        <path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM42 9H1V7H42V9Z" />
                    </svg></span></button>
                    <button onClick={handleNext} className='group next-arrow absolute max-sm:translate-x-[130%] max-sm:-bottom-10 right-1/2 sm:right-2 sm:top-1/2 z-30 -translate-y-1/2'><span className="w-[50px] sm:w-[60px] lg:w-20 xl:w-[99px] h-[50px] sm:h-[60px] lg:h-20 xl:h-[99px] rounded-full shadow-[2px_7px_16px_rgba(0,0,0,0.08)] duration-300 flex items-center bg-white group-hover:bg-black justify-center"><svg class="fill-black group-hover:fill-white w-6 sm:w-8 lg:w-[42px]" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 42 16" fill="none">
                        <path d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z" />
                    </svg></span></button>
                </div>
            </div>
        </div>
    )
}

export default DealProduct
