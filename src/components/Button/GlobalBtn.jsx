import React from 'react'

function GlobalBtn({ text }) {
    return (
        <button
            class="px-4 md:ml-0 w-36 h-12 text-white rounded-full m-auto bg-[#30A981] hover:border-white lg:hover:border-white lg:hover:bg-white lg:hover:drop-shadow-md lg:hover:text-[#30A981]">{text}</button>
    )
}

export default GlobalBtn