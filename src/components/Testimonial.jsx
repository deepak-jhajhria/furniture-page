import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import {Controller, EffectFade, Thumbs } from 'swiper/modules';
import image1 from '../assets/images/testimonial.webp'
import image2 from '../assets/images/testimonial2.webp'
import image3 from '../assets/images/testimonial3.webp'
import image4 from '../assets/images/testimonial4.webp'
import image5 from '../assets/images/testimonial5.webp'
import image6 from '../assets/images/testimonial6.webp'
import image7 from '../assets/images/testimonial7.webp'
const Testimonial = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const SlideData = [
        { img:image1, name:"Treepi Shoty", work:"Teacher",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img:image2, name:"Treepi Shoty", work:"Teacher",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img:image3, name:"Treepi Shoty", work:"Teacher",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img:image4, name:"Treepi Shoty", work:"Teacher",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img:image5, name:"Treepi Shoty", work:"Teacher",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img:image6, name:"Treepi Shoty", work:"Teacher",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img:image7, name:"Treepi Shoty", work:"Teacher",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img:image1, name:"Treepi Shoty", work:"Teacher",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
        { img:image4, name:"Treepi Shoty", work:"Teacher",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien." },
    ]
    return (
        <div className='container max-w-[1320px]'>
            <p className='text-[#BD7D41] text-lg sm:text-xl font-Poppins font-normal headingLine'>Customer Says</p>
            <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 leading-normal'>Testimonial</h2>
            <div className='mt-[51px] mb-[109px]'>
                <div>
                    <Swiper loop={true}  spaceBetween={55} breakpoints={{450: { slidesPerView: 3, }, 700: { slidesPerView: 5, }, 1024: { slidesPerView: 7, }, }} centeredSlides={true} slidesPerView={1} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[Controller, Thumbs]} className="mySwiper2">
                        {
                            SlideData.map((items,index)=>(
                                <SwiperSlide key={index}>
                                    <img src={items.img} alt="img" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='mt-5'>
                    <Swiper onSwiper={setThumbsSwiper} centeredSlides={true} loop={true} spaceBetween={10} slidesPerView={1}  watchSlidesProgress={true} effect={'fade'} modules={[EffectFade, Thumbs]} className="mySwiper" >
                        {
                            SlideData.map((items,index)=>(
                                <SwiperSlide key={index}>
                                    <h2 className='text-black text-lg font-Poppins font-semibold leading-normal text-center'>{items.name}</h2>
                                    <p className='text-[#4D4D4D] text-xs font-Poppins font-light leading-normal text-center'>{items.work}</p>
                                    <p className='text-black font-Poppins font-light leading-normal text-xs mt-3 max-w-[350px] mx-auto text-center'>{items.bio}</p>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
