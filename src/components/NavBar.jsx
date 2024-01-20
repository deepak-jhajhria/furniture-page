import React, { useEffect, useRef, useState } from 'react'
import { Cart, CrossIcon, Logo, SearchIcon } from './Icons'
import { Link, useLocation } from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import CommonBtn from './CommonBtn'
import cartItem from '../assets/images/cartimg.png'
import cartItem2 from '../assets/images/cartimg2.png'
import cartItem3 from '../assets/images/cartimg3.png'
import empty from '../assets/images/shopping.png'
import OverLay from './OverLay'
const NavBar = ({ timeline }) => {
    const location = useLocation();
    const [isOpen, setOpen] = useState(false);
    const [search, setSearch] = useState(false);
    const [input, setInput] = useState([]);
    const [addCart, setAddCart] = useState(false);
    const [clear, setClear] = useState(false);
    useEffect(() => {
        if (search) { document.body.classList.add('overflow-hidden'); }
        else { document.body.classList.remove('overflow-hidden'); }
    }, [search]);
    const openinput = (item) => {
        setInput([input, item]);
        setSearch(true);
    };
    const closeModal = () => {
        setSearch(false);
    };
    const closeCart = () => {
        setAddCart(false);
    };
    const clearAll = () => {
        setClear(true);
    };

    function RemoveOverflow() {
        setOpen(false)
        document.body.classList.remove("overflow-hidden")
    }
    if (isOpen) { document.body.classList.add("overflow-hidden") }
    else { document.body.classList.remove("overflow-hidden") }
    if (addCart === true) { document.body.classList.add("cartOverFlow") }
    else { document.body.classList.remove("cartOverFlow") }
    // animations 
    let navBar = useRef();
    useGSAP(() => {
        timeline.from(".logo", { y: 100, opacity: 0, duration: 1 },);
        timeline.from([".link1", ".link2", ".link3", ".link4",], {
            y: 100, opacity: 0, skewY: 10,
            stagger: {
                amount: 0.4,
            },
        });
        timeline.from([".search"], {
            skewY: 10, opacity: 0,
        })
    }, { scope: navBar });
    return (
        <nav ref={navBar} className='py-[15px]'>
            <div className='container max-w-[1320px] flex justify-between items-center'>
                <a className='flex items-center logo gap-[5px] sm:gap-2 uppercase font-Roboto font-bold text-white text-x xs:text-[22px] sm:text-2xl md:text-[30px] lg:text-[33px]' href="#"><Logo />FURNITURE</a>
                <div className='flex items-center gap-3 xs:gap-5 sm:gap-10'>
                    <ul className={`${isOpen ? "right-0" : "-right-full"} flex items-center gap-[55px] mobileview`}>
                        <li><Link to="/" onClick={RemoveOverflow} className={`${location.pathname === "/" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} link1 text-white text-lg font-normal font-Roboto`}>HOME</Link></li>
                        <li><Link to="/about" onClick={RemoveOverflow} className={`${location.pathname === "/about" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} link2 text-white text-lg font-normal font-Roboto`}>ABOUT US</Link></li>
                        <li><Link to="/shop" onClick={RemoveOverflow} className={`${location.pathname === "/shop" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} link3 text-white text-lg font-normal font-Roboto`}>SHOP</Link></li>
                        <li><Link to="/contactus" onClick={RemoveOverflow} className={`${location.pathname === "/contactus" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} link4 text-white text-lg font-normal font-Roboto`}>CONTACT US</Link></li>
                    </ul>
                    <div className='flex search items-center gap-5 xs:gap-7'>
                        <div onClick={() => openinput('item')} className=' cursor-pointer'>
                            <SearchIcon />
                        </div>
                        <div onClick={() => setAddCart(true)} className=' cursor-pointer'>
                            <Cart />
                        </div>
                    </div>
                    <div className='lg:hidden relative z-50 -mr-2'>
                        <Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded distance="md" direction='right' duration={0.5} color='#FFF' />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='w-full bg-[rgba(0,0,0,0.78)] flex h-full fixed top-0 left-0 z-30'>
                </div>
            )}
            {search && (
                <div className='w-full bg-[rgba(0,0,0,0.78)] flex h-full fixed  top-0 left-0 z-30'>
                </div>
            )}
            {search && (
                <div>
                    <div className='bg-white max-w-[300px] xs:max-w-[380px] sm:max-w-[470px] md:max-w-[500px] shadow-2xl rounded-lg sm:rounded-[20px] fixed z-40 w-full flex flex-col justify-center items-center top-10 left-1/2 -translate-x-1/2'>
                        <div className='flex w-full items-center justify-between'>
                            <input className='px-7 py-4 text-black text-base sm:text-xl font-Poppins font-normal w-[90%] bg-transparent outline-none' placeholder='Search...' type="search" name="" id="" />
                            <div onClick={closeModal} className="cursor-pointer pr-5">
                                <CommonBtn cstm="!text-sm !py-2 !px-3 !rounded-2xl" text="close" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {addCart && (<OverLay />)}
            {addCart && (
                <div>
                    <div className='bg-white  sm:max-w-[370px] md:max-w-[500px] overflow-y-scroll shadow-2xl h-full fixed z-40 w-full  top-0 right-0'>
                        <div className='p-8 flex flex-col justify-between h-full gap-5'>
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
                                    <div className='bg-white rounded-lg shadow mt-6'>
                                        <div className='py-2 px-2 flex w-full'>
                                            <img className=' rounded-xl max-w-[200px]' src={cartItem} alt="cart-items" />
                                            <div className='flex w-full flex-col ml-4'>
                                                <p className='flex justify-between  items-center'>
                                                    <p className='text-[#243040] text-sm sm:text-base font-Poppins font-normal max-w-[436px] leading-normal'>Single Sofa</p>
                                                    <span className=' cursor-pointer'>
                                                        <CrossIcon />
                                                    </span>
                                                </p>
                                                <p className='text-[#4D4D4D] text-base sm:text-sm font-Poppins font-normal mt-1 leading-normal'>Lorem ipsum dolor </p>
                                                <div className='flex'>
                                                    <p className='text-black text-xs xl:text-[13px] mt-2 font-Poppins opacity-90 font-medium leading-normal'>₹ 1200.00</p>
                                                    <p className='text-black text-[11px] xl:text-[12px] mt-2 font-Poppins opacity-60 ml-2 font-normal leading-normal line-through'>₹ 2000.00</p>
                                                </div>
                                                <div className='flex gap-2 mt-2'>
                                                    <p className='text-black text-xs xl:text-[13px] mt-1 font-Poppins font-medium leading-normal'>Quantity :</p>
                                                    <p className='text-black text-xs xl:text-[13px] mt-1 font-Poppins font-normal leading-normal'>1</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-white rounded-lg shadow mt-4'>
                                        <div className='py-2 px-2 flex w-full'>
                                            <img className=' rounded-xl max-w-[200px]' src={cartItem2} alt="cart-items" />
                                            <div className='flex w-full flex-col ml-4'>
                                                <div className='flex justify-between  items-center'>
                                                    <p className='text-[#243040] text-sm sm:text-base font-Poppins font-normal max-w-[436px] leading-normal'>Single Sofa</p>
                                                    <p className='text-[#243040] text-sm sm:text-base font-Poppins font-normal max-w-[436px] leading-normal'>Single Sofa</p>
                                                    <span className=' cursor-pointer'>
                                                        <CrossIcon />
                                                    </span></div>
                                                <p className='text-[#4D4D4D] text-base sm:text-sm font-Poppins font-normal mt-1 leading-normal'>Lorem ipsum dolor </p>
                                                <div className='flex'>
                                                    <p className='text-black text-xs xl:text-[13px] mt-2 font-Poppins opacity-90 font-medium leading-normal'>₹ 1200.00</p>
                                                    <p className='text-black text-[11px] xl:text-[12px] mt-2 font-Poppins opacity-60 ml-2 font-normal leading-normal line-through'>₹ 2000.00</p>
                                                </div>
                                                <div className='flex gap-2 mt-2'>
                                                    <p className='text-black text-xs xl:text-[13px] mt-1 font-Poppins font-medium leading-normal'>Quantity :</p>
                                                    <p className='text-black text-xs xl:text-[13px] mt-1 font-Poppins font-normal leading-normal'>1</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-white rounded-lg shadow mt-4'>
                                        <div className='py-2 px-2 flex w-full'>
                                            <img className=' rounded-xl max-w-[200px]' src={cartItem3} alt="cart-items" />
                                            <div className='flex w-full flex-col ml-4'>
                                                <p className='flex justify-between  items-center'>
                                                    <p className='text-[#243040] text-sm sm:text-base font-Poppins font-normal max-w-[436px] leading-normal'>Single Sofa</p>
                                                    <p className='text-[#243040] text-sm sm:text-base font-Poppins font-normal max-w-[436px] leading-normal'>Single Sofa</p>
                                                    <span className=' cursor-pointer'>
                                                        <CrossIcon />
                                                    </span>
                                                </p>
                                                <p className='text-[#4D4D4D] text-base sm:text-sm font-Poppins font-normal mt-1 leading-normal'>Lorem ipsum dolor </p>
                                                <div className='flex'>
                                                    <p className='text-black text-xs xl:text-[13px] mt-2 font-Poppins opacity-90 font-medium leading-normal'>₹ 1200.00</p>
                                                    <p className='text-black text-[11px] xl:text-[12px] mt-2 font-Poppins opacity-60 ml-2 font-normal leading-normal line-through'>₹ 2000.00</p>
                                                </div>
                                                <div className='flex gap-2 mt-2'>
                                                    <p className='text-black text-xs xl:text-[13px] mt-1 font-Poppins font-medium leading-normal'>Quantity :</p>
                                                    <p className='text-black text-xs xl:text-[13px] mt-1 font-Poppins font-normal leading-normal'>1</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                                }
                            </div>
                            <CommonBtn text="Buy Now" />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar
