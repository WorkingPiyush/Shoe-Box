import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const initialAddresses = [
  {
    id: 1,
    label: "Home",
    name: "Piyush Kumar",
    phone: "8595594378",
    address: "A-60/2 GT Karnal Road, Bela, Gaya, Bihar, India",
  },
  {
    id: 2,
    label: "Work",
    name: "Piyush Kumar",
    phone: "8595594378",
    address: "Plot 23, Industrial Area, Gaya, Bihar, India",
  },
];

function AddressPage() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const navigate = useNavigate()
  const [form, setForm] = useState({ label: "", name: "", phone: "", address: "" });

  const openModal = (addr = null) => {
    if (addr) {
      setEditingAddress(addr.id);
      setForm(addr);
    } else {
      setEditingAddress(null);
      setForm({ label: "", name: "", phone: "", address: "" });
    }
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleSave = () => {
    if (editingAddress) {
      // Edit existing address
      setAddresses(prev => prev.map(addr => addr.id === editingAddress ? form : addr));
    } else {
      // Add new address
      const newAddress = { ...form, id: Date.now() };
      setAddresses(prev => [...prev, newAddress]);
    }
    closeModal();
  };

  const removeAddress = (id) => setAddresses(prev => prev.filter(addr => addr.id !== id));

  return (
    <div className="min-h-screen mt-20 bg-white p-4">
      <button onClick={() => navigate(-1)} className="mb-4 cursor-pointer text-black">← Back to Profile</button>
      <h1 className="text-2xl font-bold mb-4">Saved Addresses ({addresses.length})</h1>

      <div className="space-y-4">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className="bg-white p-4 rounded-2xl shadow flex flex-col sm:flex-row justify-between hover:shadow-md transition"
          >
            <div className="flex-1">
              <p className="font-semibold">{addr.label}</p>
              <p className="text-sm">{addr.name} | {addr.phone}</p>
              <p className="text-sm text-gray-500 mt-1">{addr.address}</p>
            </div>
            <div className="flex gap-2 mt-3 sm:mt-0">
              <button
                onClick={() => openModal(addr)}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => removeAddress(addr.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Address Button */}
      <button
        onClick={() => openModal()}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto bg-green-500 text-white py-3 rounded-2xl font-semibold hover:bg-green-600 transition"
      >
        + Add New Address
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl w-[90%] sm:w-1/2 space-y-4">
            <h2 className="text-xl font-semibold">{editingAddress ? "Edit Address" : "Add New Address"}</h2>
            <input
              type="text"
              placeholder="Label (Home, Work)"
              value={form.label}
              onChange={(e) => setForm({ ...form, label: e.target.value })}
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border p-2 rounded-lg"
            />
            <textarea
              placeholder="Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
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

export default AddressPage
