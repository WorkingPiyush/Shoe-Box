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
        imageUrl: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=800&auto=format&fit=crop",
        price: 1199
    },
    {
        id: 4,
        fullName: "Campus Custom Men's Sneakers",
        brand: "Campus",
        imageUrl: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
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
        fullName: "Mochi Women White Casual Sneakers",
        brand: "Mochi",
        imageUrl: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop",
        price: 1345
    },
    {
        id: 7,
        fullName: "Campus North Plus Running Shoes",
        brand: "Campus",
        imageUrl: "https://images.unsplash.com/photo-1584735175315-9d58238a0b21?q=80&w=800&auto=format&fit=crop",
        price: 1599
    },
    {
        id: 8,
        fullName: "Red Tape Classic Sporty Shoes",
        brand: "Red Tape",
        imageUrl: "https://images.unsplash.com/photo-1512374382149-4332c6c02151?q=80&w=800&auto=format&fit=crop",
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
        <div className='w-[90%] bg-amber-800 flex flex-wrap'>
            {indianShoeCollection.map((shoe) => {
                return <ImgCard props={shoe} />
            })}
        </div>
    )
}

export default HomeImgSection
