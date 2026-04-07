import React, { useContext,  } from 'react'
import { IoStarSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import CheckBox from '../components/CheckBox';
import SlidingImgPanel from '../components/SlidingImgPanel';
import { ItemSizeContext } from '../Context/ShoeSizeContext';
import { toast } from 'react-toastify';
import { useUser } from '../hooks/useUser';
import { CartToBackend, localCart } from '../Services/cartServices.js';
import { WishListContext } from '../Context/WishListContext.jsx';
import { WishListToBackend } from '../Services/WishListServices.js';
import AddtoCartBtn from '../components/Buttons/AddtoCartBtn.jsx';
import { useQueryClient } from '@tanstack/react-query';
import { CartContext } from '../Context/CartContext.jsx';

function ProductViewSection({ item }) {
    const { setWishList, wishList } = useContext(WishListContext)
    const queryClient = useQueryClient();
    const { shoeSize } = useContext(ItemSizeContext);
    const { refetch } = useContext(CartContext);
    const { data: user } = useUser();

    const handleAddToCart = async (product, shoeSize) => {
        // if the user not selected the shoe size
        if (shoeSize.length === 0) {
            toast.error("Please Select Shoe Size")
            return;
        }
        try {
            if (user) {
                await CartToBackend({ productId: product._id, quantity: 1, shoeSize: shoeSize });
                queryClient.setQueryData(['cart', user?._id || 'guest'], old => {
                    const existing = old.find(i => i.productId === product._id && i.shoeSize === shoeSize);
                    if (existing) return old.map(i => i.productId === product._id && i.shoeSize === shoeSize ? { ...i, quantity: i.quantity + 1 } : i);
                    return [...old, { productId: product._id, shoeSize, quantity: 1 }];
                });
                toast.success("Shoe Added");
                refetch()
            } else {
                localCart({ productId: product._id, quantity: 1, shoeSize: shoeSize })
                toast.success("Shoe Added");
                refetch()
            }
        } catch (error) {
            console.error("Add to cart failed", error);
        }
    }
    const AddToWishList = (product) => {
        if (user) {
            try {
                const exists = wishList.find((item) => item.productId === product._id)
                let updatedList;
                if (exists) {
                    updatedList = wishList.filter((item) => item.productId !== product.id)
                } else {
                    updatedList = [
                        ...wishList,
                        { productId: product._id }
                    ]
                }
                setWishList(updatedList)
                WishListToBackend({ productId: product.id });
            } catch (error) {
                toast.error("WishList Error")
                console.log(error)
            }
        } else {
            // local user updating his wishlist
            const exists = wishList.find((item) => item.productId === product._id)
            let updatedList;
            if (exists) {
                updatedList = wishList.filter((item) => !(item.productId === product._id))
            } else {
                updatedList = [
                    ...wishList,
                    { productId: product._id }
                ]
            }
            setWishList(updatedList)
            localStorage.setItem("wishlist", JSON.stringify(updatedList));
        }
    }
    let date = new Date();
    date.setDate(date.getDate() + 7);
    let currentDate = date.toLocaleDateString("de-DE");
    return (
        <div className='h-screen py-20 flex flex-col md:flex-row'>
            <div className=' w-full p-4 flex flex-col justify-around items-center rounded-3xl md:w-1/2'>
                <SlidingImgPanel imgList={item.images} />
            </div>
            <div className=' text-black w-full p-8 md:w-1/2 md:p-15 md:text'>
                <h5 className='text-2xl p-4 font-bold md:w-full md:p-0 md:text-3xl'>{item.name}</h5>
                <div className='flex'><span className='md:text-xl'>(</span><h1 className='text-gray-400 inline font-semibold uppercase'>{item.brand}</h1><span className='md:text-xl'>)</span></div>
                <h2 className='font-bold text-xl'>₹{item.price}</h2>
                <p className='flex gap-1 items-center text-amber-400 text-sm'><IoStarSharp /><span className='font-bold'>{item.rating}</span></p>
                <p className='first-letter:uppercase text-sm'>{item.description}</p>
                <p className='first-letter:uppercase text-bold mb-4'>{item.category} Shoes</p>
                <p className=''>Size Available</p>
                <CheckBox size={item.sizes} />
                <p className='mt-5'>Free shipping availale for new users</p>
                <b>Estimate date of delivery: {currentDate}</b>
                <div className='flex gap-2 mt-10'>
                    <AddtoCartBtn handleAddToCart={handleAddToCart} item={item} shoeSize={shoeSize} />
                    <div className='h-12 w-14 bg-black rounded flex justify-center items-center cursor-pointer'>
                        {wishList.some(prod => prod.productId === item._id) ? <FaHeart onClick={() => AddToWishList(item)} className='h-10 w-10 text-pink-500' /> : <FaHeart onClick={() => AddToWishList(item)} className='h-10 w-10 text-white' />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductViewSection