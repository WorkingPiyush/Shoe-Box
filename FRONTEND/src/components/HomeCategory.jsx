import React from 'react'

function HomeCategory() {
    return (
        <div className='h-fit w-[20%] shadow-xl/30'>
            <div className=' p-2 shadow-[0px_6px_0px_0px_rgba(0,0,0,0.1)]'>
                <h1 className='p-4 uppercase w-full font-bold'>Campany</h1>
                <div className='px-4 flex items-center justify-start gap-2'>
                    <input type="checkbox" id="Bata" name="Bata" value="Bata" />
                    <label className='font-bold text-black cursor-pointer' htmlFor="Bata">Bata</label>
                </div>
                <div className=' px-4 flex items-center justify-start gap-2'>
                    <input type="checkbox" id="Relaxo" name="Relaxo" value="Relaxo" />
                    <label className='font-bold text-black cursor-pointer' htmlFor="Relaxo">Relaxo</label>
                </div>
                <div className=' px-4 flex items-center justify-start gap-2'>
                    <input type="checkbox" id="Sparx" name="Sparx" value="Sparx" />
                    <label className='font-bold text-black cursor-pointer' htmlFor="Sparx">Sparx</label>
                </div>
                <div className=' px-4 flex items-center justify-start gap-2'>
                    <input type="checkbox" id="Campus" name="Campus" value="Campus" />
                    <label className='font-bold text-black cursor-pointer' htmlFor="Campus">Campus</label>
                </div>
                <div className=' px-4 flex items-center justify-start gap-2'>
                    <input type="checkbox" id="Red Tape" name="Red Tape" value="Red Tape" />
                    <label className='font-bold text-black cursor-pointer' htmlFor="Red Tape">Red Tape</label>
                </div>
                <div className=' px-4 flex items-center justify-start gap-2'>
                    <input type="checkbox" id="Mochi" name="Mochi" value="Mochi" />
                    <label className='font-bold text-black cursor-pointer' htmlFor="Mochi">Mochi</label>
                </div>
            </div>
            <div className='shadow-[0px_6px_0px_0px_rgba(0,0,0,0.1)] p-2'>
                <h1 className='p-4 uppercase w-full font-bold'>Condition</h1>
                <div className=' px-4 flex items-center justify-start gap-2'>
                    <input type="checkbox" id="New" name="New" value="New" />
                    <label className='font-bold text-black cursor-pointer' htmlFor="New">New</label>
                </div>
                <div className=' px-4 flex items-center justify-start gap-2'>
                    <input type="checkbox" id="Used" name="Used" value="Used" />
                    <label className='font-bold text-black cursor-pointer' htmlFor="Used">Used</label>
                </div>
                <div className=' px-4 flex items-center justify-start gap-2'>
                    <input type="checkbox" id="Refurbished" name="Refurbished" value="Refurbished" />
                    <label className='font-bold text-black cursor-pointer' htmlFor="Refurbished">Refurbished</label>
                </div>
            </div>
            <div className='shadow-[0px_6px_0px_0px_rgba(0,0,0,0.1)] p-2 pb-8'>
                <h1 className='p-4 uppercase w-full font-bold'>Shipment</h1>
                <div className=' px-4 flex items-center justify-start gap-2'>
                    <input type="checkbox" id="Free" name="Free" value="Free" />
                    <label className='font-bold text-black cursor-pointer' htmlFor="Free">Free</label>
                </div>
                <div className=' px-4 flex items-center justify-start gap-2'>
                    <input type="checkbox" id="Premium" name="Premium" value="Premium" />
                    <label className='font-bold text-black cursor-pointer' htmlFor="Premium">Premium</label>
                </div>
            </div>
        </div>
    )
}

export default HomeCategory
