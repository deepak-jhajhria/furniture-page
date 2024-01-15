import gsap, { Power3 } from 'gsap'
import NavBar from './NavBar'
import CommonBtn from './CommonBtn'
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
// import mac from '../assets/images/macbook.webp'
const Header = ({timeline}) => {
    let tl = new gsap.timeline();
    let ease = Power3.easeOut();
    let header = useRef();
    useGSAP(() => {
        timeline.from([".hTag",".pTag"], {
            opacity: 0,
            stagger: {
                amount: 0.4,
            },
            y: '200',
            delay:1.5
        });
        timeline.from([".Btn"], {
            ease: ease,
            opacity: 0,
            scale: 1.6

        });
    });
    return (
        <div ref={header} className='bg-[url(./assets/images/headerbg2.webp)] bg-cover bg-center w-full min-h-[550px] sm:min-h-[650px] md:min-h-[750px] lg:min-h-[932px]'>
            <NavBar timeline={tl} ease={ease}/>
            <div className=' container max-w-[1320px] flex justify-center'>
                <div className='max-w-[908px] mx-auto mt-10 sm:mt-16  md:mt-20 lg:mt-[135px] relative'>
                    <h1 className='hTag font-Poppins font-bold text-3xl sm:text-4xl md:text-5xl !leading-normal text-white text-center'>Awesome Design Best Furniture For Your Interior</h1>
                    <p className='text-white pTag text-center font-Poppins font-normal text-base sm:text-lg md:text-xl mt-3 sm:mt-4 md:mt-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
                    <div className='flex justify-center mt-4 sm:mt-7 Btn md:mt-10 lg:mt-[51px]'>
                        <CommonBtn text="SHOP NOW" />
                    </div>
                    {/* <img className=' absolute -bottom-[68%] left-[25%] max-[483px]:hidden sm:-bottom-[58%] md:-bottom-[53%] w-[100px] h-[60px] sm:w-[120px] md:w-[150px] sm:h-[70px] md:h-[86px] lg:w-[207px] lg:h-[109px] lg:-bottom-[70%] sm:left-[30%] md:left-[28%] lg:left-1/4' src={mac} alt="laptop" /> */}
                </div>
            </div>
        </div>
    )
}

export default Header
