import React from 'react'
import CommonBtn from './CommonBtn'

const FestivalOffer = () => {
    const OfferItems = [
        {
            bgImg: "bg-[url(./assets/images/discountsofa.webp)] w-full bg-cover bg-center",
            title: "Festival Offer",
            heading: "Upto 40% Off",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            btn: (<CommonBtn cstm="!py-[10px] !px-3 my-6 xs:my-8 md:my-[43px]" text="ADD TO CART" />)
        },
        {
            bgImg: "bg-[url(./assets/images/discountsofa2.webp)] w-full bg-cover bg-center",
            title: "Festival Offer",
            heading: "Upto 40% Off",
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            btn: (<CommonBtn cstm="!py-[10px] !px-3 my-6 xs:my-8 md:my-[43px]" text="ADD TO CART" />)
        },
    ]
    return (
        <div className='container max-w-[1320px] my-20'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
                {
                    OfferItems.map((items, index) => (
                        <div key={index} className={items.bgImg}>
                            <div className=' py-5 sm:py-8 px-4 xs:px-16 sm:px-[107px]'>
                                <p className='headingLine2 before:-left-4 max-xs:pl-12 xs:before:-left-[60px] sm:before:-left-[107px] text-black text-xl font-Poppins font-normal leading-normal'>{items.title}</p>
                                <h2 className='text-[#BD7D41] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 md:mt-4 lg:mt-6 leading-normal'>{items.heading}</h2>
                                <p className=' font-Poppins font-normal text-lg leading-normal text-[#3F3F3F] mt-5 max-w-[262px]'>{items.para}</p>
                                {items.btn}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FestivalOffer
