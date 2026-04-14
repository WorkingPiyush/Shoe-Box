import { IoStarSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function ImgCard({ shoe }) {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/products/${shoe.gender}/${shoe.slug}`)} className='flex p-1'>
            <div className='bg-white/60 p-1 w-30 h-48 border border-dashed rounded-2xl cursor-pointer md:h-68 md:w-70 md:p-4'>
                <div className='w-30 h-50 inline'>
                    <img loading="lazy" className='p-1 h-[38%] w-50 md:h-[50%] md:w-full md:p-3' style={{
                        objectFit: 'contain',
                    }} src={shoe.thumbnail} alt="shoeImg" />
                    <p className='font-bold text-gray-400 text-center text-xs uppercase md:text-xl'>{shoe.brand}</p>
                    <h1 className='text-center font-bold text-sm text-wrap md:text-xl'>{shoe.name.length > 30 ? shoe.name.slice(0, 22) + "...." : shoe.name}</h1>
                </div>
                <div className='flex justify-around items-center my-2'>
                    <div className='bg-blue-500 flex justify-center items-center px-1 rounded md:gap-2 md:px-2'>
                        <IoStarSharp />
                        <p className='text-white'>{shoe.rating}</p>
                    </div>
                    <p className='text-center'>₹{shoe.price.toLocaleString('en-IN')}</p>
                </div>
            </div>
        </div>

    )
}

export default ImgCard
