import React from 'react'
import ImgCard from './ImgCard';

const indianShoeCollection = [
    {
        id: 1,
        fullName: "Bata Men's Branded Casual Sneakers",
        brand: "Bata",
        imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop",
        price: 1299
    },
    {
        id: 2,
        fullName: "Relaxo Sparx White Running Shoes",
        brand: "Relaxo",
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
        price: 1049
    },
    {
        id: 3,
        fullName: "Sparx SM-679 Performance Sports",
        brand: "Sparx",
        imageUrl: "https://www.jiomart.com/images/product/original/rvarjpwoth/sparx-men-sm-679-white-black-sports-shoes-product-images-rvarjpwoth-2-202205270822.jpg?im=Resize=(600,750)",
        price: 1199
    },
    {
        id: 4,
        fullName: "STOMP Off White Men's Sneakers",
        brand: "Campus",
        imageUrl: "https://www.campusshoes.com/cdn/shop/files/STOMP_22G-13389_OFFWHT-CREAM_02_900x.jpg?v=1767873657",
        price: 1899
    },
    {
        id: 5,
        fullName: "Red Tape Men White Walking Sneakers",
        brand: "Red Tape",
        imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
        price: 1499
    },
    {
        id: 6,
        fullName: "Men White Walking Shoes",
        brand: "Mochi",
        imageUrl: "https://redtape.com/cdn/shop/files/RSO2165_3.jpg?v=1758797535",
        price: 1345
    },
    {
        id: 7,
        fullName: "NORTH PLUS Black Men's Running Shoes",
        brand: "Campus",
        imageUrl: "https://www.campusshoes.com/cdn/shop/products/11G-677-G-BLK_1.jpg?v=1757593914",
        price: 1599
    },
    {
        id: 8,
        fullName: "Dial Lace ETPU Athleisure Shoes for Men",
        brand: "Red Tape",
        imageUrl: "https://redtape.com/cdn/shop/files/RSO4322_4..jpg?v=1766137825",
        price: 1352
    },
    {
        id: 9,
        fullName: "Sparx SM-734 Casual White",
        brand: "Sparx",
        imageUrl: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=800&auto=format&fit=crop",
        price: 949
    },
    {
        id: 10,
        fullName: "Bata Power Walking Sneakers",
        brand: "Bata",
        imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
        price: 1799
    }
];


function HomeImgSection() {
    return (
        <div className='p-4 bg-gray-100 rounded-2xl grid grid-cols-2 place-items-center justify-evenly relative md:flex md:flex-wrap md:justify-evenly'>
            <h1 className='absolute left-5 -top-8 font-bold text-3xl italic'>Featured Shoes</h1>
            {indianShoeCollection.map((shoe) => {
                return <ImgCard key={shoe.id} props={shoe} />
            })}
        </div>
    )
}

export default HomeImgSection
