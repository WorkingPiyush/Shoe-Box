import React from 'react'

function ImgCard({ props }) {
    return (
        <div className='flex p-1'>
            <div className='bg-white border border-dashed hover:shadow-lg m-1 w-40 hover:scale-110 h-76 rounded-4xl cursor-pointer md:h-80 md:w-70'>
                <img className='p-3 h-50 w-full max-md:h-40 max-md:w-50' style={{
                    objectFit: 'contain',
                }} src={props.imageUrl || props.image} alt="" />
                <h1 className='text-center font-bold text-xl text-wrap md:text-2xl'>{props.fullName || props.name}</h1>
                <p className='text-center'>${props.price}</p>
            </div>
        </div>
    )
}

export default ImgCard
