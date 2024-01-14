import CommonBtn from './CommonBtn'
import product1 from '../assets/images/singlesofa4.webp'
import product2 from '../assets/images/singlesofa5.webp'
import product3 from '../assets/images/singlesofa6.webp'
import product4 from '../assets/images/singlesofa7.webp'
import product5 from '../assets/images/singlesofa8.webp'
import product6 from '../assets/images/singlesofa9.webp'
import { Review } from './Icons'
import { useEffect, useState } from 'react'

const OurProducts = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);
    const addToCart = (item) => {
        setCart([...cart, item]);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const products = [
        { img: product1, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
        { img: product2, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
        { img: product3, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
        { img: product4, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
        { img: product5, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
        { img: product6, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
    ]
    return (
        <div className='relative'>
            <div className='container max-w-[1320px] mt-14 sm:mt-20 md:mt-[100px] lg:mt-[135px] pb-8 sm:pb-10 lg:pb-[69px] relative'>
                <p className='text-[#BD7D41] text-lg sm:text-xl font-Poppins font-normal headingLine'>Shopping Store</p>
                <div className='flex w-full flex-col gap-4 sm:flex-row  sm:justify-between items-start sm:items-center mt-3'>
                    <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 md:mt-4 lg:mt-5'>Our Products</h2>
                    <CommonBtn text="VIEW ALL PRODUCT" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full lg:gap-5 xl:gap-[27px] my-8 sm:my-10 md:my-16 lg:my-[90px]'>
                    {products.map((items, index) => (
                        <div key={index} className='w-full bg-white duration-300 shadow-[0_0_0_0_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] mb-4'>
                            <div className='px-[23px] py-[18px]'>
                                <img className='w-full' src={items.img} alt={items.productName} />
                                <div className='flex items-center justify-between mt-5'>
                                    <p className='text-black font-Poppins font-medium text-lg sm:text-xl leading-normal'>{items.productName}</p>
                                    <span>{items.review}</span>
                                </div>
                                <p className='text-[#4D4D4D] text-base sm:text-lg font-Poppins font-normal mt-4 leading-normal'>{items.productPara}</p>
                                <div className='flex w-full items-center justify-between mt-4 pb-5 sm:pb-7 md:pb-[35px]'>
                                    <p className='text-black text-xl sm:text-2xl lg:text-[28px] font-Poppins font-semibold leading-normal'>{items.price}</p>
                                    <div onClick={() => addToCart('item')}>{items.cartBtn}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {isOpen && (
                        <div>
                            <div className='bg-white max-w-[300px] xs:max-w-[380px] sm:max-w-[470px] md:max-w-[600px] min-h-[250px] sm:min-h-[300px] md:min-h-[500px] shadow-2xl rounded-3xl sm:rounded-[40px] fixed w-full flex flex-col justify-center items-center z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                                <div>
                                    <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 md:mt-4 lg:mt-5 text-center'>Successfully added to cart!</h2>
                                    <div className='flex justify-center mt-5' onClick={closeModal}><CommonBtn text="close" /></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {isOpen && (
                <div className='w-full bg-gray-200 flex h-full absolute opacity-30 top-0 left-0'>
                </div>
            )}
        </div>
    )
}

export default OurProducts
