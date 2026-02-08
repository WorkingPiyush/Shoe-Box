import React from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

function Signup() {
    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const res = await fetch('http://localhost:3000/users/signup', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        const response = await res.json();
        reset()
        console.log(response.success)
        if (response.success) {
            navigate("/login")
        }
    };
    return (
        <div className='h-screen bg-gray-100 p-25'>
            <div className='flex h-full w-full mt-10 p-5'>
                <div className='w-1/2'>
                    <img className='h-102 rotate-10 px-4 py-2 cursor-pointer bg-blue-100 rounded-2xl p-5 shadow-2xl object-contain hidden md:block transition-colors duration-300 ease-in-out hover:scale-110' src="src/assets/Images/Type-of-Shoes/training-shoe.png" alt="productImg" />
                </div>
                <div className='w-full mt-5 p-8 md:w-1/2'>
                    <form className='flex flex-col gap-1 justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='font-bold text-3xl w-80'>Create Your Account</h1>
                        <input className='bg-gray-400 text-shadow-black h-10 w-90 p-2 rounded outline-none text-xl' placeholder='Name' {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        <input className='bg-gray-400 text-shadow-black h-10 w-90 p-2 rounded outline-none text-xl' placeholder='email' {...register("email", {
                            required: "Email is required", pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email",
                            }
                        })} />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        <select className='bg-gray-400 text-shadow-black h-10 w-90 p-2 rounded outline-none text-xl' {...register("gender", { required: "Select Gender" })}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <p className='text-red-500'>{errors.gender.message}</p>}
                        <input className='bg-gray-400 text-shadow-black h-10 w-90 p-2 rounded outline-none text-xl' placeholder='Password' {...register("password", { required: "Password is required", minLength: { value: 8, message: "Minimum 6 Charactors are required" }, maxLength: { value: 100, message: "Maximum Passoword length crossed" } })} />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        <button className='bg-black text-white cursor-pointer h-10 w-90' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
