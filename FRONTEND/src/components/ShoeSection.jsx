import React from 'react'
import HomeCategory from './HomeCategory'
import HomeImgSection from './HomeImgSection'

function ShoeSection() {
    return (
        <div className='h-full w-full p-8 flex gap-10'>
            <HomeCategory />
            <HomeImgSection/>
        </div>
    )
}

export default ShoeSection
