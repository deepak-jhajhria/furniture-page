import { useState, useEffect } from 'react';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        isVisible &&
        <div onClick={scrollToTop} className='fixed bottom-5 right-3 sm:right-5 z-50'>
            {/* <button className="bg-[#535F6D] group duration-300  hover:bg-black fixed bottom-5 right-3 sm:right-5 rounded-full p-3 z-50"><span><svg class="h-4 w-4  duration-300 group-hover:text-white sm:w-6 sm:h-6  text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
            </svg></span></button> */}
            <button class="rounded-full hover:w-[100px] sm:hover:w-[140px] hover:duration-300 hover:bg-[#535F6D] relative before:absolute before:-bottom-5 backToTop before:text-white before:text-[0px] hover:before:text-sm sm:hover:before:text-xl before:duration-300 hover:before:bottom-3 hover:before:duration-300 group z-50 w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] bg-[rgb(20,20,20)] font-semibold flex items-center justify-center shadow-[0_0_0_4px_rgba(180,160,255,0.253)] hover:shadow-[0_0_0_4px_rgba(251,251,255,0.253)] overflow-hidden">
                <svg class=" w-3 duration-300 fill-white group-hover:translate-y-[200%]" viewBox="0 0 384 512">
                    <path
                        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                    ></path>
                </svg>
            </button>

        </div>
    );
}

export default ScrollToTopButton;