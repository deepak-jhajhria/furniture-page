import React from 'react'
import { FacebookIcon, InstaIcon, Logo, TwitterIcon } from './Icons'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#243040]'>
            <div className='container max-w-[1320px] pt-[87px]'>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 w-full gap-8 lg:gap-0">
                    <div className=' col-span-2 sm:col-span-3 lg:col-span-4'>
                        <div className='flex flex-col gap-[23px]'>
                            <a className='flex items-center gap-[5px] sm:gap-2 uppercase font-Roboto font-bold text-white text-x xs:text-[22px] sm:text-2xl md:text-[30px] lg:text-[33px]' href="#"><Logo />FURNITURE</a>
                            <p className=' text-white font-Roboto font-normal leading-normal max-w-[338px] text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.</p>
                            <div className='flex gap-3'>
                                <InstaIcon />
                                <TwitterIcon />
                                <FacebookIcon />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <ul>
                            <li className='text-white font-Roboto text-sm font-medium leading-normal mb-[9px] relative after:absolute after:bg-[#BD7D41] after:h-[1px] after:w-[100px] xl:after:w-[130px] after:-bottom-[2px] after:left-0'>ABOUT STORE</li>
                            <li><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Home</Link></li>
                            <li className='mt-1'><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Shop</Link></li>
                            <li className='mt-1'><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Product</Link></li>
                            <li className='mt-1'><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Festival Offer</Link></li>
                            <li className='mt-1'><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Log in</Link></li>
                        </ul>
                    </div>
                    <div className='col-span-1'>
                        <ul>
                            <li className='text-white font-Roboto text-sm font-medium leading-normal mb-[9px] relative after:absolute after:bg-[#BD7D41] after:h-[1px] after:w-[100px] xl:after:w-[130px] after:-bottom-[2px] after:left-0'>BRANDS</li>
                            <li><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Album</Link></li>
                            <li className='mt-1'><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Shop</Link></li>
                            <li className='mt-1'><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Product</Link></li>
                            <li className='mt-1'><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Festival Offer</Link></li>
                            <li className='mt-1'><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Log in</Link></li>
                        </ul>
                    </div>
                    <div className='col-span-1'>
                        <ul>
                            <li className='text-white font-Roboto text-sm font-medium leading-normal mb-[9px] relative after:absolute after:bg-[#BD7D41] after:h-[1px] after:w-[100px] xl:after:w-[130px] after:-bottom-[2px] after:left-0'>CATEGORIES</li>
                            <li><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Single</Link></li>
                            <li className='mt-1'><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Aleeper Sofas</Link></li>
                            <li className='mt-1'><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Accent Chairs</Link></li>
                            <li className='mt-1'><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Festival Offer</Link></li>
                            <li className='mt-1'><Link className='text-white font-Roboto text-sm font-normal leading-normal'>Log in</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
