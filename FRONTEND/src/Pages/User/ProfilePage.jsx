import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import Loading from "../../components/Loading";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    if (user) setProfile(user);
  }, [user])
  const navigate = useNavigate()

  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(profile);

  const openModal = () => {
    setForm(profile);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleSave = () => {
    setProfile(form);
    closeModal();
  };

  return (
    <div className="min-h-screen mt-20 bg-white p-4">
      <button onClick={() => navigate(-1)} className="mb-4 cursor-pointer text-black">← Back to Profile</button>
      <h1 className="text-2xl text-center font-bold mb-4">My Profile</h1>

      <div className={`bg-white p-6 m-auto rounded-2xl shadow-xl md:w-1/2  ${modalOpen ? 'hidden' : "block"}`}>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-semibold text-lg">{profile?.fullName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold text-lg">{profile?.email}</p>
            {user?.isEmailVerified ? (
              <span className="text-green-600 text-xs font-medium px-2 py-0.5 rounded-full bg-green-100">
                ✔ Verified
              </span>
            ) : (
              <Link
                to="/verify"
                className="text-xs px-2 py-0.5 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                Not Verified
              </Link>
            )}
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold text-lg">{profile?.phone || "Phone Not Available"}</p>
            {profile.phone && (user?.isPhoneVerified ? (
              <span className="text-green-600 text-xs font-medium px-2 py-0.5 rounded-full bg-green-100">
                ✔ Verified
              </span>
            ) : (
              <Link
                to="/verify"
                className="text-xs px-2 py-0.5 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                Not Verified
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              onClick={openModal}
              className="mt-4 w-60 bg-blue-500 cursor-pointer text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex justify-center items-center z-999">
          <div className="bg-white p-6 rounded-2xl w-[90%] sm:w-1/3 space-y-4">
            <h2 className="text-xl font-semibold">Edit Profile</h2>
            <input
              type="text"
              placeholder="Name"
              value={form.fullName}
              readOnly
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Mobile"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border p-2 rounded-lg"
            />
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 cursor-pointer bg-gray-300 rounded-xl font-semibold hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 cursor-pointer bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;