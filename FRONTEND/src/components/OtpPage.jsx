import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function OtpPage({ type, contact }) {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [error, seterror] = useState('')
    const inputRef = useRef([]);
    const navigate = useNavigate()
    const getOtp = (arr) => arr.join('');
    const sendOtp = async () => {
        const data = {
            type: type,
            contact: contact
        }
        const res = await axios.post('http://localhost:3000/auth/otp/send', data, { withCredentials: true })
        if (res.data.success) {
            console.log(res.data)
            toast.success(`Otp Sent on your ${type}`)
        } else {
            toast.info(res.data.message)
        }
    }
    const submitOtp = async (otpValue) => {
        if (otpValue.length > 6) return;
        const data = {
            type: type,
            otp: otpValue
        }
        const res = await axios.post('http://localhost:3000/auth/otp/verify', data, { withCredentials: true })
        if (res.data.success) {
            console.log(res.data)
            toast.success(`Otp Verified`)
            navigate('/profile')
        } else {
            toast.info(res.data.message)
        }
    }
    const handleChange = (value, index) => {
        if (!/^\d*$/.test(value)) return; // only digits


        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputRef.current[index + 1].focus();
        }

        if (getOtp(newOtp).length === 6) {
            submitOtp(getOtp(newOtp));
        }
    }
    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRef.current[index - 1].focus();
        }
    }
    const handlePaste = (e) => {
        e.preventDefault();
        const pastedVal = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        const newOtp = pastedVal.split("");
        while (newOtp.length < 6) newOtp.push("")
        setOtp(newOtp);
        inputRef.current[Math.min(pastedVal.length, 6)].focus();
        if (pastedVal.length === 6) {
            submitOtp(getOtp(newOtp))
        }
    }
    useEffect(() => {
        sendOtp();
    }, [])

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-lg gap-4">
            <div className='h-59 w-95 p-15 bg-white shadow-2xl flex flex-col gap-8 rounded-xl justify-center items-center hover:h-60 hover:w-96 transition' onPaste={handlePaste}>
                <h1 className="text-xl font-semibold mb-3">{type} Otp Verification</h1>
                <div className="flex gap-2">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            inputMode='numeric'
                            pattern='[0-9]*'
                            maxLength={1}
                            value={digit}
                            ref={(el) => (inputRef.current[index] = el)}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="border border-gray-300 rounded-lg w-12 h-12 text-center text-xl"
                        />
                    ))}
                </div>
                {error && <span className="text-red-500 text-sm">{error}</span>}
                <button onClick={() => submitOtp(getOtp(otp))} className="bg-green-500 cursor-pointer w-50 text-white px-8 py-2 rounded-xl hover:bg-green-600 transition">
                    submit
                </button>

            </div>
        </div>
    )
}

export default OtpPage
