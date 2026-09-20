import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import img1 from '@/assets/Images/hero-images/hero-image-1.webp'
import img2 from '@/assets/Images/hero-images/hero-image-2.webp'
import img3 from '@/assets/Images/hero-images/hero-image-3.webp'
import img4 from '@/assets/Images/hero-images/hero-image-4.jpg'
import img5 from '@/assets/Images/hero-images/hero-image-5.jpg'
const imgList = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
];


function Hero() {
    const [imgIndex, setImgIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

    useEffect(() => {
        if (!imgList.length) return;

        const timer = setTimeout(() => {
            setImgIndex(prev => prev >= imgList.length - 1 ? 0 : prev + 1)
        }, 10000);

        return () => clearTimeout(timer)
    }, [imgList.length, imgIndex])

    const moveLeftImg = () => {
        setImgIndex(prev => prev <= 0 ? imgList.length - 1 : prev - 1)
    };

    const moveRightImg = () => {
        setImgIndex(prev => prev >= imgList.length - 1 ? 0 : prev + 1)
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX)
    };

    const hanldeTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;


        // swipe left to right
        if (distance > minSwipeDistance) {
            setImgIndex((prev) =>
                Math.min(prev + 1, imgList.length - 1)
            );
        }

        // swipe right to left
        if (distance < minSwipeDistance) {
            setImgIndex((prev) =>
                Math.max(prev - 1, 0)
            );
        }
    };


    return (
        <div
            onTouchStart={handleTouchStart}
            onTouchMove={hanldeTouchMove}
            onTouchEnd={handleTouchEnd}
            className='relative h-[40vh] w-[90%] rounded-xl overflow-hidden mx-auto sm:h-[55vh] md:h-[75vh] my-25'>
            <div className='flex transition-transform duration-500 ease-in-out h-full' style={{ transform: `translateX(-${imgIndex * 100}%)` }}>
                {imgList.map((item, i) => (
                    <img key={i} src={item.src} alt={`slide-${i}`} draggable="false" className="w-full shrink-0 object-cover h-full select-none rounded-xl shadow-xl/30" />
                ))}
            </div>

            <div className='absolute inset-0 flex items-center justify-between px-6'>
                <MdKeyboardArrowLeft onClick={(e) => moveLeftImg(e)} className='h-8 w-8 sm:h-10 sm:w-10 cursor-pointer bg-gray-400 rounded-full active:scale-95' />
                <MdKeyboardArrowRight onClick={(e) => moveRightImg(e)} className='h-8 w-8 sm:h-10 sm:w-10 cursor-pointer bg-gray-400 rounded-full active:scale-95' />
            </div>
        </div>
    )
}

export default Hero
