import shoe1 from '/src/assets/Images/Type-of-Shoes/running-shoe.png'
import shoe2 from '/src/assets/Images/Type-of-Shoes/gym-shoe.png'
import shoe3 from '/src/assets/Images/Type-of-Shoes/Sneakers.png'
import shoe4 from '/src/assets/Images/Type-of-Shoes/basketballl-shoe.png'
import shoe5 from '/src/assets/Images/Type-of-Shoes/running-shoe.png'
import shoe6 from '/src/assets/Images/Type-of-Shoes/walking-shoe.png'

const shoeImg = [
    { id: 1, src: shoe1, title: "Runnig Shoes" },
    { id: 5, src: shoe5, title: "Sports Shoes" },
    { id: 3, src: shoe3, title: "Sneakers Shoes" },
    { id: 2, src: shoe2, title: "Gym Shoes" },
    { id: 6, src: shoe6, title: "Walking Shoes" },
    { id: 4, src: shoe4, title: "Training Shoes" },
]

function TypeofShoes() {
    return (
        <div className=' h-fit w-full my-8 px-10 gap-10 grid grid-cols-1 place-items-center justify-around sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 '>
            {shoeImg.map((item) => {
                return <div key={item.id}>
                    <img className='h-25 w-fit border-2 border-black rounded-full overflow-hidden p-2 fill-black drop-shadow-lg drop-shadow-black cursor-pointer' src={item.src} alt="shoeimages" />
                    <h3 className='text-center font-bold my-4'>{item.title}</h3>
                </div>
            })}
        </div>
    )
}

export default TypeofShoes
