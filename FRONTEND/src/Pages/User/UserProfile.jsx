import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import Loading from "../../components/Loading";

const UserProfile = () => {
  const userA = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    address: "221B Baker Street, London",
    orders: 12,
    joined: "March 2024",
  };
  const { user } = useContext(UserContext);
  console.log(user)
  if (!user) return <Loading />;
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6">

        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-red-950 text-white flex items-center justify-center text-2xl font-bold">
            {user.name.charAt(0)}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-sm text-gray-500">
              {user.email}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Info Section */}
        <div className="space-y-3 text-sm">
          <InfoItem label="Phone" value="+91-8595594378" />
          <InfoItem label="Address" value="Rohini, Delhi" />
          <InfoItem label="Total Orders" value={user.orders} />
          <InfoItem label="Member Since" value={user.joined} />
        </div>

        {/* Button */}
        <button className="mt-6 w-full bg-red-950 cursor-pointer hover:bg-red-900 transition text-white py-2 rounded-lg font-medium">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium text-gray-800">{value}</span>
  </div>
);

export default UserProfile;