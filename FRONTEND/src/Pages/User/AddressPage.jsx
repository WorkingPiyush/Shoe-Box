import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LuHousePlus } from "react-icons/lu";
import axios from 'axios';
import { updateAddress, createAddress, deleteAddress } from '../../Services/AddressServices';
import { toast } from 'react-toastify';
// const initialAddresses = [
//   {
//     id: 1,
//     label: "Home",
//     name: "Piyush Kumar",
//     phone: "8595594378",
//     house: "B-29, Rohini",
//     locality: "Rohini Delhi",
//     city: "Delhi",
//     state: "Delhi",
//     pincode: "110085",
//     country: "India"

//   },
//   {
//     id: 2,
//     label: "Work",
//     name: "Piyush Kumar",
//     phone: "8595594378",
//     house: "B-29, Rohini",
//     locality: "Rohini Delhi",
//     city: "Delhi",
//     state: "Delhi",
//     pincode: "110085",
//     country: "India"
//   },
// ];

function AddressPage() {
  const [addresses, setAddresses] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()
  const [form, setForm] = useState({ label: "", name: "", phone: "", house: "", locality: "", state: "", pincode: "", country: "" });
  // getting the user's address
  useEffect(() => {
    const loadAddress = async () => {
      const res = await axios.get('http://localhost:3000/api/address', { withCredentials: true });
      setAddresses(res.data);
    }
    loadAddress()
  }, [])

  const openModal = (addr = null) => {
    if (addr) {
      setEditingAddress(addr._id);
      setForm(addr);
    } else {
      setEditingAddress(null);
      setForm({ label: "", name: "", phone: "", house: "", locality: "", state: "", pincode: "", country: "" });
    }
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  const handleSave = async () => {
    const errors = {};
    Object.entries(form).forEach(([key, value]) => {
      if (!String(value ?? "").trim()) {
        errors[key] = true;
      }
    });

    setErrors(errors);
    if (Object.keys(errors).length > 0) return;
    try {
      let savedAddress;

      if (editingAddress) {
        try {
          savedAddress = await updateAddress({ id: editingAddress, data: form });
          setAddresses(prev => prev.map(addr => addr._id === editingAddress ? savedAddress : addr))
        } catch (error) {
          console.error(error);
          toast.error(error);
        }
      } else {
        try {
          savedAddress = await createAddress(form);
          setAddresses(prev => [...prev, savedAddress]);
        } catch (error) {
          console.error(error);
          toast.error(error);
        }
      }
      closeModal();
    } catch (err) {
      console.error("Address save failed", err);
      setAddresses(addresses);
    }

  };
  const removeAddress = async (id) => {
    console.log(id)
    setAddresses(prev => prev.filter(addr => addr._id !== id));
    await deleteAddress(id);
  }
  return (
    <div className="h-screen mt-20 bg-white p-4">
      <button onClick={() => navigate(-1)} className="mb-4 cursor-pointer text-black">← Back to Profile</button>
      <h1 className="text-2xl font-bold mb-4">Saved Addresses ({addresses.length})</h1>

      <div className="space-y-4">
        {addresses.map((addr) => (
          <div key={addr._id} className="bg-white p-2 rounded-2xl shadow flex flex-col sm:flex-row justify-between hover:shadow-md transition">
            <div className="flex-1">
              <p className="font-semibold">{addr.label}</p>
              <p className="text-sm">{addr.name} | {addr.phone}</p>
              <div className='flex gap-1'>
                <p className="text-sm text-gray-500 mt-1">{addr.house}</p>
                <p className="text-sm text-gray-500 mt-1">{addr.locality}</p>
                <p className="text-sm text-gray-500 mt-1">{addr.state}</p>
                <p className="text-sm text-gray-500 mt-1">{addr.pincode}</p>
                <p className="text-sm text-gray-500 mt-1">{addr.country}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-3 sm:mt-0">
              <button onClick={() => openModal(addr)} className="px-4 py-2 bg-blue-500 text-white rounded-xl font-semibold cursor-pointer hover:bg-blue-600 transition">
                Edit
              </button>
              <button
                onClick={() => removeAddress(addr._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-xl font-semibold cursor-pointer hover:bg-red-600 transition"
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
        className={`fixed bottom-4 ${modalOpen ? "hidden" : "flex"} items-center gap-1 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto bg-green-500 text-white p-3 rounded-2xl cursor-pointer font-semibold hover:bg-green-600 transition`}
      >
        <LuHousePlus className='text-2xl font-extrabold' /> Add New Address
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed bg-black/70 inset-0 bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white border mt-10 p-4 rounded-2xl w-[90%] sm:w-1/4 space-y-3">
            <h2 className="text-xl font-semibold">{editingAddress ? "Edit Address" : "Add New Address"}</h2>
            <input type="text" required placeholder="Tag (Home, 2nd Love)" value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value }, setErrors({ ...errors, label: false }))} className={`w-full border p-2 rounded-lg ${errors.label ? "border-red-500" : "border-gray-300"} `} />
            <input type="text" required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value }, setErrors({ ...errors, name: false }))} className={`w-full border p-2 rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"} `} />
            <input type="text" required placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value }, setErrors({ ...errors, phone: false }))} className={`w-full border p-2 rounded-lg ${errors.phone ? "border-red-500" : "border-gray-300"} `} />
            <input type="text" required placeholder="Flat/House/Building Name" value={form.house} onChange={(e) => setForm({ ...form, house: e.target.value }, setErrors({ ...errors, house: false }))} className={`w-full border p-2 rounded-lg ${errors.house ? "border-red-500" : "border-gray-300"} `} />
            <input type="text" required placeholder="Loclity (i.e. Rohini)" value={form.locality} onChange={(e) => setForm({ ...form, locality: e.target.value }, setErrors({ ...errors, locality: false }))} className={`w-full border p-2 rounded-lg ${errors.locality ? "border-red-500" : "border-gray-300"} `} />
            <input type="text" required placeholder="City/State (i.e. Delhi)" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value }, setErrors({ ...errors, state: false }))} className={`w-full border p-2 rounded-lg ${errors.state ? "border-red-500" : "border-gray-300"} `} />
            <input type="text" required placeholder="Pincode (i.e. 110085)" value={form.pincode} onChange={(e) => setForm({ ...form, pincode: e.target.value }, setErrors({ ...errors, pincode: false }))} className={`w-full border p-2 rounded-lg ${errors.pincode ? "border-red-500" : "border-gray-300"} `} />
            <input type="text" required placeholder="Country (i.e. India)" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value }, setErrors({ ...errors, country: false }))} className={`w-full border p-2 rounded-lg ${errors.country ? "border-red-500" : "border-gray-300"} `} />
            <div className="flex justify-end gap-2 mt-2">
              <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded-xl font-semibold hover:bg-gray-400 transition" >
                Cancel
              </button>
              <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition" >
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
