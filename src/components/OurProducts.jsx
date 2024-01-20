import CommonBtn from './CommonBtn'
import product1 from '../assets/images/singlesofa4.webp'
import product2 from '../assets/images/singlesofa5.webp'
import product3 from '../assets/images/singlesofa6.webp'
import product4 from '../assets/images/singlesofa7.webp'
import product5 from '../assets/images/singlesofa8.webp'
import product6 from '../assets/images/singlesofa9.webp'
import { CrossIcon, Review } from './Icons'
import empty from '../assets/images/shopping.png'
import { useEffect, useState } from 'react'
import OverLay from './OverLay'

const OurProducts = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [alert, setAlert] = useState("");
    const [clear, setClear] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    const addToCart = (el) => {
        let AddItems = true
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === el.id) { AddItems === false }
        }
        if (AddItems) {
            setCart([...cart, el]);
            setIsOpen(true);
            setClear(false);
        }
        else setAlert(`${el.productName} is already in your cart`)
    };
    const clearAll = () => {
        setClear(true);
    };
    const removeToCart = (el) => {
        let items = [...cart]
        items = items.filter(cartItem => cartItem.id !== el.id)
        setCart(items)
        setAlert("");
    };
    const closeCart = () => {
        setIsOpen(false);
    };
    const products = [
        { id: 1, img: product1, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
        { id: 2, img: product2, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
        { id: 3, img: product3, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
        { id: 4, img: product4, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
        { id: 5, img: product5, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
        { id: 6, img: product6, productName: "Single Sofa", productPara: "Lorem ipsum dolor", review: (<Review />), price: "₹ 1200.00", cartBtn: (<CommonBtn cstm="!py-[10px] !px-3" text="ADD TO CART" />) },
    ]
    return (
        <div className='relative'>
            <div className='container max-w-[1320px] mt-14 sm:mt-20 md:mt-[100px] lg:mt-[135px] pb-8 sm:pb-10 lg:pb-[69px] relative'>
                <p className='text-[#BD7D41] text-lg sm:text-xl font-Poppins font-normal headingLine'>Shopping Store</p>
                <div className='flex w-full flex-col gap-4 sm:flex-row  sm:justify-between items-start sm:items-center mt-3'>
                    <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 md:mt-4 lg:mt-5'>Our Products</h2>
                    <CommonBtn text="VIEW ALL PRODUCT" />
                </div>
                <div> alert {alert}</div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:gap-5 xl:gap-[27px] my-8 sm:my-10 md:my-16 lg:my-[90px]'>
                    {products.map((el) => (
                        <div key={el.id} className='w-full bg-white duration-300 shadow-[0_0_0_0_rgba(0,0,0,0.12)] hover:shadow-[6px_13px_38px_0_rgba(0,0,0,0.12)] mb-4'>
                            <div className='px-[23px] py-[18px]'>
                                <img className='w-full' src={el.img} alt={el.productName} />
                                <div className='flex items-center justify-between mt-5'>
                                    <p className='text-black font-Poppins font-medium text-lg sm:text-xl leading-normal'>{el.productName}</p>
                                    <span>{el.review}</span>
                                </div>
                                <p className='text-[#4D4D4D] text-base sm:text-lg font-Poppins font-normal mt-4 leading-normal'>{el.productPara}</p>
                                <div className='flex w-full items-center justify-between mt-4 pb-5 sm:pb-7 md:pb-[35px]'>
                                    <p className='text-black text-xl sm:text-2xl xl:text-[28px] font-Poppins font-semibold leading-normal'>{el.price}</p>
                                    <div onClick={() => addToCart(el)}>{el.cartBtn}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isOpen && (<OverLay />)}
            {isOpen && (
                <div className='bg-white sm:max-w-[450px]  md:max-w-[500px] shadow-2xl h-full fixed z-50 w-full  top-0 right-0'>
                    <div className='p-8 flex flex-col justify-between h-full gap-20 overflow-y-scroll'>
                        <div>
                            <div className='flex items-center justify-between'>
                                <div onClick={closeCart} className="cursor-pointer pr-4">
                                    <CommonBtn cstm="!text-sm !py-2 !px-3 !rounded-2xl" text="close" />
                                </div>
                                <div onClick={clearAll}>
                                    <CommonBtn cstm="!text-sm !py-2 !px-3 !rounded-2xl" text="Clear All" />
                                </div>
                            </div>
                            <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 md:mt-4 lg:mt-6 leading-normal'>Products</h2>
                            <p className='text-[#243040] text-xl sm:text-2xl lg:text-3xl font-Poppins font-medium max-w-[436px] mt-7 md:mt-10 lg:mt-12 leading-normal'>Checkout</p>
                            {clear ? (<div><img className='mt-8' src={empty} alt="" /></div>) : (<div>
                                {
                                    cart.map((el) => (
                                        <div key={el.id}>
                                            <div className='bg-white rounded-lg shadow mt-6'>
                                                <div className='py-2 px-2 flex flex-col xs:flex-row w-full'>
                                                    <img className=' rounded-xl max-w-[200px]' src={el.img} alt="cart-items" />
                                                    <div className='flex w-full flex-col mt-3 sm:mt-0 ml-4'>
                                                        <div className='flex justify-between  items-center'>
                                                            <p className='text-[#243040] text-sm sm:text-base font-Poppins font-normal max-w-[436px] leading-normal'>{el.productName}</p>
                                                            <span onClick={() => removeToCart(el)} className=' cursor-pointer'>
                                                                <CrossIcon />
                                                            </span>
                                                        </div>
                                                        <p className='text-[#4D4D4D] text-base sm:text-sm font-Poppins font-normal mt-1 leading-normal'>{el.productPara}</p>
                                                        <div className='flex'>
                                                            <p className='text-black text-xs xl:text-[13px] mt-2 font-Poppins opacity-90 font-medium leading-normal'>{el.price}</p>
                                                            <p className='text-black text-[11px] xl:text-[12px] mt-2 font-Poppins opacity-60 ml-2 font-normal leading-normal line-through'>₹ 2000.00</p>
                                                        </div>
                                                        <div className='flex gap-2 mt-2'>
                                                            <p className='text-black text-xs xl:text-[13px] mt-1 font-Poppins font-medium leading-normal'>Quantity :</p>
                                                            <p className='text-black text-xs xl:text-[13px] mt-1 font-Poppins font-normal leading-normal'>1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>)
                            }
                        </div>
                        <CommonBtn text="Buy Now" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default OurProducts
