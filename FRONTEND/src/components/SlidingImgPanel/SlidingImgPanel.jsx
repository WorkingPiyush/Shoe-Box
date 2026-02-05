import React, { useEffect, useEffectEvent, useState } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function SlidingImgPanel({ imgList }) {
    const [imgIndex, setImgIndex] = useState(0);
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setImgIndex(prev => prev >= imgList.length - 1 ? 0 : prev + 1)
    //     }, 10000);
    //     return () => clearInterval(timer)
    // }, [imgList.length])

    const moveLeftImg = () => {
        setImgIndex(prev => prev <= 0 ? imgList.length - 1 : prev - 1)
    }
    const moveRightImg = () => {
        setImgIndex(prev => prev >= imgList.length - 1 ? 0 : prev + 1)
    }
    return (
        <div className='relative h-[40vh] w-full p-8 sm:h-[55vh] md:h-[80vh] my-20'>
            <img draggable="false" className='h-95 w-full object-contain select-none drag-none rounded-xl shadow-xl/30' src={imgList[imgIndex]} alt="ProductImg" />
            <div className='absolute inset-0 flex items-center justify-between px-6'>
                <MdKeyboardArrowLeft onClick={(e) => moveLeftImg(e)} className='h-8 w-8 sm:h-10 sm:w-10 cursor-pointer bg-gray-400 rounded-full active:scale-95' />
                <MdKeyboardArrowRight onClick={(e) => moveRightImg(e)} className='h-8 w-8 sm:h-10 sm:w-10 cursor-pointer bg-gray-400 rounded-full active:scale-95' />
            </div>
        </div>
    )
}

export default SlidingImgPanel
