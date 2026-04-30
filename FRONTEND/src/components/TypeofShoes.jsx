import shoe1 from '@/assets/Images/Type-of-Shoes/running-shoe.png'
import shoe2 from '@/assets/Images/Type-of-Shoes/running-shoe.png'
import shoe3 from '@/assets/Images/Type-of-Shoes/Sneakers.png'
import shoe4 from '@/assets/Images/Type-of-Shoes/basketballl-shoe.png'
import shoe5 from '@/assets/Images/Type-of-Shoes/gym-shoe.png'
import shoe6 from '@/assets/Images/Type-of-Shoes/walking-shoe.png'
import { CategoryContext } from '../Context/CategoryFilterContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const shoeImg = [
    { id: 1, src: shoe1, title: "Runnig Shoes", filter: "Sports shoes" },
    { id: 5, src: shoe5, title: "Sports Shoes", filter: "Sports shoes" },
    { id: 3, src: shoe3, title: "Sneakers Shoes", filter: "Sneakers" },
    { id: 2, src: shoe2, title: "Casual Shoes", filter: "Casual shoes" },
    { id: 6, src: shoe6, title: "Walking Shoes", filter: "Casual shoes" },
    { id: 4, src: shoe4, title: "Training Shoes", filter: "Sports shoes" },
]


function TypeofShoes() {
    const { setSelectCategory } = useContext(CategoryContext); ``
    const navigate = useNavigate();

    const Handelfilter = (filter) => {
        setSelectCategory(filter);
        navigate('/products/male');
    }
    return (
        <div className='w-full my-8 flex items-center gap-10 overflow-x-scroll scroll-smooth md:overflow-auto md:justify-center'>
            {shoeImg.map((item) => {
                return (
                    <div key={item.id} onClick={() => Handelfilter(item.filter)} className='shrink-0 justify-center lg:shrink'>
                        <img loading='lazy' className='h-20 border-2 border-black rounded-full p-2 fill-black drop-shadow-lg drop-shadow-black cursor-pointer md:h-28' src={item.src} alt="shoeimages" />
                        <h3 className='text-center font-bold my-4'>{item.title}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default TypeofShoes
