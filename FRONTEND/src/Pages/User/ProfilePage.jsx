import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPenToSquare } from "react-icons/fa6";
import { useUser } from "../../hooks/useUser";
import { VscSaveAs } from "react-icons/vsc";
import axios from "axios";
import { toast } from "react-toastify";
const ProfilePage = () => {
  const { data: user } = useUser();
  const [editMail, setEditMail] = useState(false)
  const [editphone, setEditPhone] = useState(false)
  const [form, setForm] = useState({ phone: "", email: "" });
  useEffect(() => {
    if (user) {
      const userInfo = {
        fullName: user?.fullName,
        phone: user?.phone,
        isPhoneVerified: user?.isPhoneVerified,
        email: user?.email,
        isEmailVerified: user?.isEmailVerified
      }
      setForm(userInfo)
    };
  }, [user])
  const originalPhone = (user?.phone || "").trim();
  const currentPhone = (form.phone || "").trim();
  const originalEmail = (user?.email || "").trim();
  const currentEmail = (form.email || "").trim();
  const hasChanged = user && (currentPhone !== originalPhone || currentEmail !== originalEmail);
  const navigate = useNavigate()

  const handleProfile = async (form) => {
    const phone = form.phone.trim();
    const email = form.email.trim();

    let updatedFileds = {}

    if (email !== user.email) {
      updatedFileds.email = email;
    }

    if (phone !== user.phone) {
      updatedFileds.phone = phone;
    }

    if (!phone.startsWith('+91')) {
      toast.error('Use +91 before your number');
      return;
    }
    if (Object.entries(updatedFileds).length < 0) return;
    try {
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/profile`, updatedFileds, { withCredentials: true });
      console.log(res)
      if (res.data.success) {
        toast.success("Profile Updated Successfully")
      }
    } catch (error) {
      toast.error("Profile update failed")
      console.error(error?.data?.message)
    }
  }
  const timeRemaiing = 24 * 60 * 60 * 1000 - (Date.now() - new Date(user?.lastProfileUpdate));
  const formatedTime = (ms) => {
    const totalMins = Math.floor(ms / 60000);
    const hours = Math.floor(totalMins / 60);
    const mins = totalMins % 60;
    if (hours === 0) return `${mins}m`;
    return `${hours}h ${mins}m`;
  }
  return (
    <div className="h-screen mt-20 bg-white p-4">
      <button onClick={() => navigate(-1)} className="mb-4 cursor-pointer text-black">← Back to Profile</button>
      <h1 className="text-2xl text-center font-bold mb-4">My Profile</h1>

      <div className={`bg-white p-7 m-auto rounded-2xl shadow-xl md:w-1/3`}>
        <div className="space-y-5">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg">{form?.fullName}</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <div className="flex items-center justify-between">
              {editMail ? <input type="text" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="text-lg border p-1 rounded-lg" /> : <p className="font-semibold text-lg">{form?.email}</p>}
              {editMail ? <VscSaveAs onClick={() => setEditMail(false)} className="cursor-pointer text-xl" /> : <FaPenToSquare onClick={() => { (timeRemaiing > 0) ? null : setEditMail(true) }} className={`${(timeRemaiing > 0) ? "cursor-not-allowed" : "cursor-pointer"}`} />}
            </div>
            {user?.isEmailVerified ? (
              <span className="text-green-600 text-xs font-medium px-2 py-0.5 rounded-full bg-green-100">
                ✔ Verified
              </span>
            ) : (
              <Link
                to="/verify/mail"
                className="text-xs px-2 py-0.5 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                Not Verified
              </Link>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <div className="flex items-center justify-between">
              {editphone ? <input type="tel" maxLength="13" pattern="^\d{12}$" placeholder="91XXXXXXXXXX" value={form?.phone ?? ""} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="text-lg border p-1 rounded-lg" /> : <p className="font-semibold text-lg">{form?.phone || "Phone Not Available"}</p>}
              {editphone ? <VscSaveAs onClick={() => setEditPhone(false)} className="cursor-pointer text-xl" /> : <FaPenToSquare onClick={() => { (timeRemaiing > 0) ? null : setEditPhone(true) }} className={`${(timeRemaiing > 0) ? "cursor-not-allowed" : "cursor-pointer"}`} />}
            </div>
            {editphone && <span className="text-sm text-gray-600">Use +91 before your number.</span>}
            {form.phone && (form?.isPhoneVerified ? (
              <span className="text-green-600 text-xs font-medium px-2 py-0.5 rounded-full bg-green-100">
                ✔ Verified
              </span>
            ) : (
              <Link
                to="/verify/phone"
                className="text-xs px-2 py-0.5 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                Not Verified
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {hasChanged && (<button onClick={() => handleProfile(form)} className="px-4 py-2 bg-green-500 text-white rounded-lg animate-fadeIn">Save Changes</button>)}
        </div>
      </div>
      <div className="flex justify-center mt-15 font-semibold">
        {timeRemaiing > 0 && <div>You updated your profile recently. Try again in {formatedTime(timeRemaiing)}.</div>}
      </div>
    </div >
  );
};

export default ProfilePage;