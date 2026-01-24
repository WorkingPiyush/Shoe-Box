import React from 'react'

function ImgCard({ props }) {
    return (
        <div className='bg-white m-2 w-70 hover:scale-120 cursor-pointer'>
            <img className='object-cover p-5 h-50' style={{
                width: '100%',
                height: '220px',
                objectFit: 'contain',
                transform: 'scaleX(-1)'
            }} src={props.imageUrl} alt="" />
            <h1 className='text-center font-bold text-2xl text-wrap'>{props.fullName}</h1>
            <p className='text-center'>${props.price}</p>
        </div>
    )
}

export default ImgCard
