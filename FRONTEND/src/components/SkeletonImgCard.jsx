import React from 'react'

function SkeletonImgCard() {
    return (
        <div className='flex p-1'>
            <div className='bg-gray-500/60 p-1 m-1 w-38 h-78 border border-dashed rounded-4xl cursor-pointer hover:shadow-lg hover:scale-101 md:h-68 md:w-70 md:p-4'>
            </div>
        </div>
    )
}

export default SkeletonImgCard
