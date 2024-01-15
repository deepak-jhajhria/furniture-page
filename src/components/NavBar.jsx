import React, { useEffect, useRef, useState } from 'react'
import { Cart, CrossIcon, Logo, SearchIcon } from './Icons'
import { Link, useLocation } from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const NavBar = ({timeline}) => {
    const location = useLocation(); const [isOpen, setOpen] = useState(false); const [search, setSearch] = useState(false); const [input, setInput] = useState([]);
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
    if (isOpen == true) { document.body.classList.add("overflow-hidden") }
    else { document.body.classList.remove("overflow-hidden") }
    function RemoveOverflow() {
        setOpen(false)
        document.body.classList.remove("overflow-hidden")
    }
    // animations 
    let navBar = useRef();
    useGSAP(() => {
        timeline.from(".logo", { y: 100, opacity: 0,duration:1 },);
        timeline.from([".link1", ".link2", ".link3", ".link4",], {
            y: 100, opacity: 0, skewY: 10,
            stagger: {
                amount: 0.4,
            },
        });
        timeline.from([".search"],{
            skewY: 10,opacity:0,
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
                        <Cart />
                    </div>
                    <div className='lg:hidden relative z-50 -mr-2'>
                        <Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded distance="md" direction='right' duration={0.5} color='#FFF' />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='w-full bg-gray-200 flex h-full fixed opacity-40 top-0 left-0 z-30'>
                </div>
            )}
            {search && (
                <div className='w-full bg-gray-200 flex h-full fixed opacity-40 top-0 left-0 z-30'>
                </div>
            )}
            {search && (
                <div>
                    <div className='bg-white max-w-[300px] xs:max-w-[380px] sm:max-w-[470px] md:max-w-[600px] min-h-[50px] sm:min-h-[80px] shadow-2xl rounded-full sm:rounded-[40px] fixed z-40 w-full flex flex-col justify-center items-center top-10 left-1/2 -translate-x-1/2'>
                        <div className='flex w-full items-center justify-between'>
                            <input className='px-10 text-black text-base sm:text-xl font-Poppins font-normal w-[90%] bg-transparent outline-none' placeholder='Search...' type="text" name="" id="" />
                            <span onClick={closeModal} className="cursor-pointer pr-10">
                                <CrossIcon />
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar
