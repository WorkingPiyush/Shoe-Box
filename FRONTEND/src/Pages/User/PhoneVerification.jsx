import React, { useState, useRef } from "react";

const PhoneVerification = ({ onVerify }) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const inputsRef = useRef([]);

    const handleChange = (value, index) => {
        if (!/^\d*$/.test(value)) return; // only digits
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleSubmit = async () => {
        const otpValue = otp.join("");
        if (otpValue.length < 4) {
            setError("Please enter complete OTP");
            return;
        }

        setLoading(true);
        setError("");
        try {
            const success = await onVerify(otpValue);
            if (!success) setError("Invalid OTP");
        } catch {
            setError("Verification failed");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-lg gap-4">
            <h1 className="text-xl font-semibold">Phone Otp Verification</h1>
            <div className="flex gap-2">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={digit}
                        ref={(el) => (inputsRef.current[index] = el)}
                        onChange={(e) => handleChange(e.target.value, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="border border-gray-300 rounded-lg w-12 h-12 text-center text-xl"
                    />
                ))}
            </div>
            {error && <span className="text-red-500 text-sm">{error}</span>}
            <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-green-500 cursor-pointer w-72 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition"
            >
                {loading ? "Verifying..." : "Verify OTP"}
            </button>
        </div>
    );
};

export default PhoneVerification;

