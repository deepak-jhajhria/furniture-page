import CommonBtn from './CommonBtn'
import product1 from '../assets/images/dealsinglesofa1.webp'
import product2 from '../assets/images/dealsinglesofa2.webp'
import product3 from '../assets/images/dealsinglesofa3.webp'
import { Review } from './Icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectFade, Virtual } from 'swiper/modules';
import { useCallback, useRef } from 'react'
const TrendingProducts = () => {
  const sliderRefSecond = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRefSecond.current) return;
    sliderRefSecond.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRefSecond.current) return;
    sliderRefSecond.current.swiper.slideNext();
  }, []);
  const Items = [
    { img: product1, productName: "Single Sofa", review: (<Review />), price: "₹ 1200.00", cartPrice: "₹ 1200.00" },
    { img: product3, productName: "Single Sofa", review: (<Review />), price: "₹ 1200.00", cartPrice: "₹ 1200.00" },
    { img: product2, productName: "Single Sofa", review: (<Review />), price: "₹ 1200.00", cartPrice: "₹ 1200.00" },
    { img: product3, productName: "Single Sofa", review: (<Review />), price: "₹ 1200.00", cartPrice: "₹ 1200.00" },
  ]
  const SwiperItems = Items.map((items, index) => (
    <SwiperSlide key={index}>
      <div className='w-full bg-white duration-300 shadow-[0_0_0_0_rgba(0,0,0,0.12)] hover:shadow-2xl sm:hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] sm:mb-4'>
        <div className='px-[23px] py-[18px] '>
          <img className='w-full' src={items.img} alt={items.productName} />
          <div className='flex items-center justify-between mt-5'>
            <p className='text-black font-Poppins font-medium text-lg sm:text-xl leading-normal'>{items.productName}</p>
            <span>{items.review}</span>
          </div>
          <div className='flex w-full items-center gap-[6px] mt-4 pb-4 sm:pb-6 md:pb-7 lg:pb-[35px]'>
            <p className='text-black text-xl sm:text-2xl lg:text-[28px] font-Poppins font-semibold leading-normal'>{items.price}</p>
            <p className='text-[#C4C4C4] text-[11px] font-Poppins font-semibold leading-normal'>{items.cartPrice}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ))
  return (
    <div className='bg-[#F7F7F8] relative pb-10 sm:pb-16 md:pb-20 lg:pb-[94px] mt-10 xs:mt-16 sm:mt-[100px] md:mt-[150px] lg:mt-[200px] xl:mt-[266px]'>
      <div className=' overflow-x-hidden'>
        <div className='container max-w-[1320px] pt-8 sm:pt-10 md:pt-12 lg:pt-[64px] relative z-20'>
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
            <div className='lg:col-span-1'>
              <p className='text-[#BD7D41] text-lg sm:text-xl font-Poppins font-normal headingLine'>Shopping Store</p>
              <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 md:mt-4 lg:mt-6 leading-normal'>Buy trending furniture Products.</h2>
              <p className=' font-Poppins text-lg font-normal text-[#4B4B4B] leading-normal max-w-[422px] mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta</p>
              <div className='mt-7 sm:mt-8 md:mt-10 flex gap-[14px]'>
                <button onClick={handlePrev} className='group prev-arrow duration-300'><span className="w-10 h-10 rounded-lg shadow-[2px_7px_16px_rgba(0,0,0,0.08)] duration-300 flex items-center bg-white group-hover:bg-black justify-center"><svg className="fill-black group-hover:fill-white w-5" xmlns="http://www.w3.org/2000/svg" height="8" viewBox="0 0 42 16" fill="none">
                  <path d="M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM42 9H1V7H42V9Z" />
                </svg></span></button>
                <button onClick={handleNext} className='group next-arrow '><span className="w-10 h-10 rounded-lg shadow-[2px_7px_16px_rgba(0,0,0,0.08)] duration-300 flex items-center bg-white group-hover:bg-black justify-center"><svg className="fill-black group-hover:fill-white w-5" xmlns="http://www.w3.org/2000/svg" height="8" viewBox="0 0 42 16" fill="none">
                  <path d="M41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM0 9H41V7H0V9Z" />
                </svg></span></button>
              </div>
            </div>
            <div className='lg:col-span-2 mt-10 sm:mt-16 md:mt-20 lg:mt-0'>
              <div className='ovrFlowSwiper lg:ml-28'>
                <Swiper ref={sliderRefSecond} modules={[EffectFade, Virtual]} loop={true} autoplay={{ delay: 500, disableOnInteraction: false }} slidesPerView={1} breakpoints={{ 592: { slidesPerView: 2, }, 1350: { slidesPerView: 2.5, }, }} spaceBetween={27} className="mySwiper">
                  {SwiperItems}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className='flex max-w-[250px] xs:max-w-[360px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[741px] min-h-[100px] sm:min-h-[150px] lg:min-h-[330px] xl:min-h-[417px] bg-gradient-to-l from-[#8C939B] to-[#243040] w-full absolute max-lg:bottom-0 lg:top-0  right-0 z-0 translate-y-[25px] sm:translate-y-[45px] lg:-translate-y-[113px] xl:-translate-y-[153px] md:-translate-x-0 max-xs:ml-5'></span>
    </div>
  )
}

export default TrendingProducts
