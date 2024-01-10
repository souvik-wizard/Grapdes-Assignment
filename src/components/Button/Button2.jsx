import React from 'react'

export const Button2 = ({text,className}) => {
    return (
        <button href="#"
            className={` ${className} px-4 rounded-full m-auto hover:bg-[#30A981] border-2 border-black hover:border-white lg:hover:border-white lg:hover:text-white`}>{text}</button>
    )
}
