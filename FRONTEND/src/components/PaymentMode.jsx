import React, { useState } from 'react'

function PaymentMode({ mop, model }) {
    const setPaymentMethod = (method) => {
        mop(method);
        model(false);
    }
    return (
        <div className='absolute w-full right- z-999' >
            <div className="bg-white rounded-2xl shadow p-4 h-fit">
                <div className="space-y-2 text-sm">
                    <div className='flex flex-col gap-2'>
                        <span onClick={() => setPaymentMethod("online")} className='w-full bg-black text-white p-2 cursor-pointer rounded-xl hover:opacity-90 hover:scale-102'>Pay Online (UPI/CARD/NETBANKING)</span>
                        <span onClick={() => setPaymentMethod("cod")} className='w-full bg-black text-white p-2 cursor-pointer rounded-xl hover:opacity-90 hover:scale-102'>Pay On Delivery</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PaymentMode;