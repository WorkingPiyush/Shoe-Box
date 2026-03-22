import { QueryClient, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchUser } from '../api/userApi';


function OtpPage({ type, contact }) {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [error, seterror] = useState('')
    const [endTime, setEndTime] = useState(Date.now() + 30000);
    const [timeLeft, setTimeLeft] = useState(30);
    const inputRef = useRef([]);
    const queryClient = useQueryClient();
    useEffect(() => {
        if (!type || !contact) {
            navigate('/userprofile')
        }
    }, [type, contact])

    const navigate = useNavigate()
    const getOtp = (arr) => arr.join('');
    function maskPhone(phone) {
        const visible = phone.slice(-4);
        const masked = phone.slice(0, -4).replace(/\d/g, "*");
        return masked + visible;
    }
    function maskEmail(email) {
        const [name, domain] = email.split("@");

        if (name.length <= 2) return email;

        return (
            name[0] +
            "*".repeat(name.length - 2) +
            name[name.length - 1] +
            "@" +
            domain
        );
    }
    function maskContact(value) {
        if (!type || !contact) return;
        if (value.includes("@")) {
            return maskEmail(value);
        } else {
            return maskPhone(value);
        }
    }
    const sendOtp = async () => {
        const data = {
            type: type,
            contact: contact
        }
        try {
            setEndTime(Date.now() + 30000);
            const res = await axios.post('http://localhost:3000/auth/otp/send', data, { withCredentials: true })
            if (res.data.success) {
                console.log(res.data)
                toast.success(`Otp Sent on your ${type}`)
            }
        } catch (error) {
            const msg = error.response?.data?.message
            toast.info(msg || "Something went wrong")
        }
    }
    const submitOtp = async (otpValue) => {
        if (otpValue.length < 6) {
            toast.error("Please Enter 6 digit otp")
            return
        };
        const data = {
            type: type,
            otp: otpValue
        }
        try {
            const res = await axios.post('http://localhost:3000/auth/otp/verify', data, { withCredentials: true })
            if (res.data.success) {
                console.log(res.data)
                queryClient.removeQueries(['user']);
                toast.success(`Otp Verified`)
                navigate("/profile", { replace: true });
            }
        } catch (error) {
            console.log(error)
            const msg = error.response?.data?.message
            seterror(msg || "Invalid OTP. Try again.")
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
        inputRef.current[Math.min(pastedVal.length, 5)].focus();
    }
    useEffect(() => {
        sendOtp();
    }, [])
    useEffect(() => {
        if (endTime === 0) return;
        const interval = setInterval(() => {
            const diff = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
            setTimeLeft(diff);
        }, 1000);

        return () => clearInterval(interval);
    }, [endTime])
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-lg gap-4">
            <div className='h-88 w-110 p-15 bg-white shadow-2xl flex flex-col gap-8 rounded-xl justify-center items-center' onPaste={handlePaste}>
                <h1 className="text-xl font-semibold">{type} Otp Verification</h1>
                <span className='text-sm text-center'>{`Enter the 6-digit code sent to ${maskContact(contact)}`}</span>
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
                <button disabled={otp.length < 6} onClick={() => submitOtp(getOtp(otp))} className="bg-green-500 cursor-pointer w-50 text-white px-8 py-2 rounded-xl hover:bg-green-600 disabled:text-gray-400 disabled:no-underline transition">
                    submit
                </button>
                {timeLeft ? `Resend in ${timeLeft}s` : <button className=" text-sm text-blue-600 hover:underline" onClick={sendOtp}>Resend Otp</button>}
            </div>
        </div>
    )
}

export default OtpPage
