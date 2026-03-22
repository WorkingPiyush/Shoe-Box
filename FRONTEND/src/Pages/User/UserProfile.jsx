import React, { useContext, useEffect } from "react";
import Loading from "../../components/Loading";
import { useUser } from "../../hooks/useUser";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaHeart, FaMapMarkerAlt, FaUser, FaQuestionCircle } from "react-icons/fa";
import { fetchUser } from "../../api/userApi";

const profileOptions = [
  { label: "Orders", icon: <FaShoppingBag />, path: "/orders" },
  { label: "Wish List", icon: <FaHeart />, path: "/wishlist" },
  { label: "Saved Addresses", icon: <FaMapMarkerAlt />, path: "/address" },
  { label: "Profile", icon: <FaUser />, path: "/userprofile" },
  { label: "Help & Support", icon: <FaQuestionCircle />, path: "/help" },
];

const UserProfile = () => {
  const { data: user } = useUser();
  if (!user) return <Loading />;
  return (
    <div className="h-screen  bg-gray-100 p-4 flex flex-col items-center">
      {/* Header */}
      <div className="bg-white w-full mt-25 max-w-md rounded-2xl shadow-lg p-6 mb-6 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-red-950 text-white flex items-center justify-center text-3xl font-bold mb-3">
          {user.fullName?.charAt(0)}
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">{user?.fullName}</h2>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-gray-500">{user?.email}</span>
          {user?.isEmailVerified ? (
            <span className="text-green-600 text-xs font-medium px-2 py-0.5 rounded-full bg-green-100">
              ✔ Verified
            </span>
          ) : (
            <Link
              to="/Updateprofile"
              className="text-xs px-2 py-0.5 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
            >
              Not Verified
            </Link>
          )}
        </div>
      </div>

      {/* Options Grid */}
      <div className="w-full max-w-md grid grid-cols-2 sm:grid-cols-3 gap-4">
        {profileOptions.map((opt) => (
          <Link key={opt.label} to={opt.path}>
            <div className="bg-white flex flex-col items-center justify-center gap-2 p-4 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
              <div className="text-2xl text-green-500">{opt.icon}</div>
              <span className="text-sm font-medium text-gray-800 text-center">{opt.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;