import sofa from '../assets/images/explorevideoimg.webp'
import CommonBtn from './CommonBtn'
import { Pause } from './Icons'

const Welcome = () => {
    return (
        <div className='container max-w-[1320px] mt-20 sm:mt-[134px] mb-10 sm:mb-16 md:mb-20 lg:mb-[113px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full items-center lg:items-start'>
                <div className='relative flex justify-center md:justify-start'>
                    <span className='flex max-w-[200px] sm:max-w-[300px] lg:max-w-[416px] min-h-[150px] sm:min-h-[250px] lg:min-h-[336px] bg-gradient-to-l from-[#8C939B] to-[#243040] w-full absolute -top-10 sm:-top-[64px]  md:left-0 -z-10 -translate-x-[30%] md:-translate-x-0 max-xs:ml-5'></span>
                    <div className='md:pl-[50px] max-w-[250px] sm:max-w-[350px] h-full lg:max-w-[506px] w-full max-h-[250px] sm:max-h-[350px] lg:max-h-[498px] relative'>
                        <img className='h-full w-full max-h-[250px] sm:max-h-[350px] lg:max-h-[498px]' src={sofa} alt="sofa" />
                        <div className=' absolute flex bg-white -bottom-[2px] -right-[2px]'>
                            <div className='p-2 sm:p-3 md:p-4 flex items-center gap-2'>
                                <p className=' text-[#243040] font-Poppins font-normal text-xs relative after:absolute after:w-10 sm:after:w-[50px] md:after:w-[66px] after:h-[1px] after:top-1/2 after:right-0 pr-12 sm:pr-[62px] md:pr-[78px] after:bg-[#243040]'>Explore Video</p>
                                <Pause />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:ml-5 mt-5 md:mt-0 w-full'>
                    <p className='text-[#BD7D41] text-lg sm:text-xl font-Poppins font-normal headingLine'>Welcome Our Story</p>
                    <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 md:mt-4 lg:mt-5'>We create the product you tell us you wish existed.</h2>
                    <p className='text-[#4D4D4D] text-base sm:text-lg font-Poppins font-normal max-w-[586px] mt-3 md:mt-4 lg:mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante et mattis</p>
                    <CommonBtn cstm="mt-5 sm:mt-7 md:mt-[34px]" text="READ MORE" />
                </div>
            </div>
        </div>
    )
}

export default Welcome