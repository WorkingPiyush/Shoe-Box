import React from 'react'

function MenuBar({ open, SetOpen }) {
    return (
        <button onClick={() => SetOpen(!open)} className="flex flex-col justify-center items-center w-10 h-fit gap-2 text-xl md:hidden cursor-pointer">
            <span className={`block h-1 w-8 bg-black rounded transform transition-all duration-150 ease-in-out ${open ? "rotate-45 translate-y-3" : ""}`} />
            <span className={`block h-1 w-8 bg-black rounded transition-all duration-150 ease-in-out ${open ? "opacity-0" : ""}`} />
            <span className={`block h-1 w-8 bg-black rounded transform transition-all duration-150 ease-in-out ${open ? "-rotate-45 -translate-y-3 " : ""} `} />
        </button>
    )
}

export default MenuBar
