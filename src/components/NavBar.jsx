import React from 'react'
import { Cart, Logo, SearchIcon } from './Icons'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
    const location = useLocation();
    return (
        <nav className='py-[15px]'>
            <div className='container max-w-[1320px] flex justify-between items-center'>
                <a className='flex items-center gap-[5px] sm:gap-2 uppercase font-Roboto font-bold text-white text-[22px] sm:text-2xl md:text-[30px] lg:text-[33px]' href="#"><Logo />FURNITURE</a>
                {/* <div className='flex items-center gap-10'>
                    <ul className='flex items-center gap-[55px]'>
                        <li><Link to="/" className={`${location.pathname === "/" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} text-white text-lg font-normal font-Roboto`}>HOME</Link></li>
                        <li><Link to="/about" className={`${location.pathname === "/about" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} text-white text-lg font-normal font-Roboto`}>ABOUT US</Link></li>
                        <li><Link to="/shop" className={`${location.pathname === "/shop" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} text-white text-lg font-normal font-Roboto`}>SHOP</Link></li>
                        <li><Link to="/contactus" className={`${location.pathname === "/contactus" && " !font-bold relative after:absolute after:w-full after:duration-300 after:h-[3px] after:bg-[#BD7D41] after:-bottom-4 after:left-0"} text-white text-lg font-normal font-Roboto`}>CONTACT US</Link></li>
                    </ul>
                    <div className='flex items-center gap-7'>
                        <SearchIcon />
                        <Cart />
                    </div>
                </div> */}
            </div>
        </nav>
    )
}

export default NavBar
