import React, { useState, useRef, useContext } from "react";
import OtpPage from "../../components/OtpPage";
import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

const UserVerification = () => {
      const { data: user } = useUser();
    const userMail = user?.email;
    const userPhone = user?.phone;
    const { type } = useParams();
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-white p-6 rounded-2xl shadow-lg gap-4">
            {type === "mail" ? (<OtpPage type="mail" contact={userMail} />) : type === "phone" ? (<OtpPage type="phone" contact={userPhone} />) : (<div>Invalid type</div>)}
        </div>
    );
};

export default UserVerification;

