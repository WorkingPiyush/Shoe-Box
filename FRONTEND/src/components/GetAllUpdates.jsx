import React from 'react'

function GetAllUpdates() {
    return (
        <div className='h-75 w-full px-2 py-10 md:px-4'>
            <div className='h-full relative'>
                <img className='object-cover h-full w-full md:h-60' src="src/assets/Images/getUpdates-bg.jpg" alt="get_Updates" />
                <div className='w-full h-full p-7 absolute top-0 flex flex-col items-center'>
                    <h2 className='font-extrabold text-3xl text-white text-center md:text-5xl text-wrap'>GET ALL OUR UPDATES</h2>
                    <div className='w-full gap-4 mt-4 justify-center flex items-center'>
                        <input className='bg-transparent border rounded font-bold text-gray-800 shadow-black py-3 px-4 w-48 placeholder:text-white md:w-80' type="email" name="email;" placeholder='PiyushKumar@gmail.com' id="email" />
                        <button className='uppercase bg-blue-600 text-white font-bold rounded h-full px-5 cursor-pointer active:scale-105 md:px-10'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetAllUpdates
