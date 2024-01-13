import bigsofa from '../assets/images/singlesofabig.webp'
import CommonBtn from './CommonBtn'

const WoodenSofa = () => {
    return (
        <div className='bg-[#F7F7F8] relative mb-[25px] sm:mb-[45px] xl:mb-[65px]'>
            <div className='container max-w-[1320px] pt-8 sm:pt-10 md:pt-12 lg:pt-[64px] relative z-20'>
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
                    <div className='lg:col-span-1'>
                        <p className='text-[#BD7D41] text-lg sm:text-xl font-Poppins font-normal headingLine'>Shopping Store</p>
                        <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 md:mt-4 lg:mt-6 leading-normal'>Wooden Sofa Starts From ₹1200.00</h2>
                        <CommonBtn cstm="mt-5 sm:mt-7 md:mt-[53px]" text="Shop Now" />
                    </div>
                    <div className='lg:col-span-2 flex justify-center w-full mt-7 lg:mt-0'>
                        <img src={bigsofa} alt="big sofa" />
                    </div>
                </div>
            </div>
            <span className='flex max-w-[200px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[741px] min-h-[100px] sm:min-h-[150px] lg:min-h-[230px] xl:min-h-[270px] bg-gradient-to-l from-[#8C939B] to-[#243040] w-full absolute bottom-0  right-0 z-0 translate-y-[25px] sm:translate-y-[45px] xl:translate-y-[65px] md:-translate-x-0 max-xs:ml-5'></span>
        </div>
    )
}

export default WoodenSofa
