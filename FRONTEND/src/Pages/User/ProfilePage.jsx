import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState({
    name: "Piyush Kumar",
    email: "piyush@example.com",
    mobile: "8595594378",
  });

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
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <div className="bg-white p-6 rounded-2xl shadow space-y-4">
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="font-semibold text-lg">{profile.name}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="font-semibold text-lg">{profile.email}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Mobile</p>
          <p className="font-semibold text-lg">{profile.mobile}</p>
        </div>
        <button
          onClick={openModal}
          className="mt-4 w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
        >
          Edit Profile
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl w-[90%] sm:w-1/2 space-y-4">
            <h2 className="text-xl font-semibold">Edit Profile</h2>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
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
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              className="w-full border p-2 rounded-lg"
            />
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded-xl font-semibold hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
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