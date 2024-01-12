import React from 'react'

const CommonBtn = (props) => {
    return (
        <><button className={`${props.cstm} text-white py-3 sm:py-4 lg:py-[19px] px-8 sm:px-10 lg:px-12 bg-[#BD7D41] font-Poppins text-base sm:text-lg md:text-xl text-center font-semibold uppercase`}>{props.text}</button></>
    )
}

export default CommonBtn
