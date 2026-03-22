import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddValidSchema } from '../../Schema/AddValidSchema';
import { useNavigate } from 'react-router-dom';
import { LuHousePlus } from "react-icons/lu";
import axios from 'axios';
import { updateAddress, createAddress, deleteAddress } from '../../Services/AddressServices';
import { toast } from 'react-toastify';
import { ThreeDot } from 'react-loading-indicators';
import { useUser } from '../../hooks/useUser';

function AddressPage() {
  const [addresses, SetAddresses] = useState([]);
  const [modalOpen, SetModalOpen] = useState(false);
  const [editingAddress, SetEditingAddress] = useState(null);
  const [loadingLocation, SetLoadingLocation] = useState(false);
  const [loading, setLoading] = useState(true);
  const { data: user } = useUser();
  const navigate = useNavigate()
  const { register, handleSubmit, reset, setValue, watch, formState: { errors }, } = useForm({
    resolver: zodResolver(AddValidSchema), defaultValues: { label: "", name: "", phone: "", house: "", locality: "", city: "", pincode: "", country: "" }
  });
  const locality = watch("locality");
  const city = watch("city");
  const country = watch("country");
  const selectedLabel = watch("label");
  const labelTiles = ["Home", "Office", "Other"]
  // getting the user's address
  useEffect(() => {
    const loadAddress = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/address`, {
          withCredentials: true
        });
        SetAddresses(res.data);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadAddress();
  }, [user]);
  const openModal = (addr = null) => {
    if (addr) {
      SetEditingAddress(addr._id);
      reset(addr);
    } else {
      SetEditingAddress(null);
      reset({ label: "", name: "", phone: "", house: "", locality: "", city: "", pincode: "", country: "" });
    }
    SetModalOpen(true);
  };

  const closeModal = () => SetModalOpen(false);
  const onSubmit = async (data) => {
    try {
      let savedAddress;

      if (editingAddress) {
        // for the already existing address the user can update the address here..
        try {
          savedAddress = await updateAddress({ id: editingAddress, data: data });
          SetAddresses(prev => prev.map(addr => addr._id === editingAddress ? savedAddress : addr))
        } catch (error) {
          console.error(error);
          toast.error(error);
        }
      } else {
        try {
          // for the new address the user can add the address here..
          savedAddress = await createAddress(data);
          SetAddresses(prev => [...prev, savedAddress]);
        } catch (error) {
          console.error(error);
          toast.error(error);
        }
      }
      closeModal();
    } catch (err) {
      console.error("Address save failed", err);
      SetAddresses(addresses);
    }

  };
  const removeAddress = async (id) => {
    let prev = addresses;
    SetAddresses(prev => prev.filter(addr => addr._id !== id));
    try {
      await deleteAddress(id);
    } catch (error) {
      SetAddresses(prev);
    }
  }
  const handleLocation = async () => {
    if (locality && city) {
      toast.info("Address already filled, Address will be updated");
    };
    SetLoadingLocation(true)
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        // console.log(lat, lng, accuracy);
        // checking the user's location accuracy
        if (accuracy > 1000) {
          toast.warning("Location accuracy is low. Please check address once.");
        }

        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/location?lat=${lat}&lng=${lng}`, { withCredentials: true })
        const data = res.data;
        // console.log(data)
        setValue("country", data.country || "")
        setValue("locality", `${data.locality || ""} ${data.sector || ""}`)
        setValue("pincode", data.pincode || "",)
        setValue("city", data.city || "",)
      } catch (error) {
        toast.error("Failed to fetch location");
      } finally {
        SetLoadingLocation(false);
      }
    },
      (error) => {
        SetLoadingLocation(false);
        if (error.code === error.PERMISSION_DENIED) {
          toast.error("Location permission denied. Please enter address manually.");
        } if (error.code === error.POSITION_UNAVAILABLE) {
          toast.error("Location Not available.Try after some time");
        }
        else {
          console.log(error)
          toast.error("Unable to fetch location.");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 8000,
        maximumAge: 60000
      }
    )
  }
  // const handlePincode = async (e) => {
  //   if ((locality && city) || country) return;
  //   const pin = e.target.value;
  //   if (pin.length === 6) {
  //     const res = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
  //     const data = res.data;
  //     if (data[0].Status === "Success") {
  //       console.log(data)
  //       const post = data[0]?.PostOffice[0];
  //       setValue("city", post.state || "");
  //       setValue("locality", post.District || "");
  //       setValue("country", post.Country || "");
  //     }
  //   }
  // }
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <ThreeDot color={["#205788", "#2a72b1", "#3d8cd1", "#66a4db"]} />
      </div>
    );
  }
  return (
    <div className="min-h-screen mt-20 bg-white p-4">
      <button onClick={() => navigate(-1)} className="mb-4 cursor-pointer text-black">← Back to Profile</button>
      <h1 className="text-2xl font-bold mb-4">Saved Addresses ({addresses?.length || 0})</h1>
      <div className="space-y-4">
        {addresses.map((addr) => (
          <div key={addr._id} className="bg-white p-2 rounded-2xl shadow flex flex-col sm:flex-row justify-between hover:shadow-md transition">
            <div className="flex-1">
              <p className="font-semibold">{addr.label}</p>
              <p className="text-sm">{addr.name} | {addr.phone}</p>
              <div className='flex gap-1'>
                <p className="text-sm text-gray-500 mt-1">{addr.house}</p>
                <p className="text-sm text-gray-500 mt-1">{addr.locality}</p>
                <p className="text-sm text-gray-500 mt-1">{addr.city}</p>
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
        <div className="fixed bg-black/70 inset-0 bg-opacity-40 flex justify-center items-center z-999">
          <div className="bg-white shadow-xl p-6 rounded-2xl w-[95%] sm:w-105 space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">{editingAddress ? "Edit Address" : "Add New Address"}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
              <label className='flex items-center gap-2'><input type="checkbox" {...register('isDefault')} />Make this my default address</label>
              <div className="flex gap-2">
                {labelTiles.map((label) => {
                  const isSelected = selectedLabel === label;
                  return (<button key={label} type='button' onClick={() => setValue("label", label)} className={`px-3 py-1 rounded-full border transition cursor-pointer ${isSelected ? "bg-green-500 text-white border-green-500 scale-105" : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"}`}>{label}</button>)
                })}
              </div>
              {errors.label && (<p className="text-xs text-red-500">{errors.label.message}</p>)}

              <input placeholder="Name" {...register("name")} className={`w-full border p-2 rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"} `} />
              {errors.name && (<p className="text-xs text-red-500">{errors.name.message}</p>)}

              <input type="tel" maxLength={10} inputMode="numeric" {...register("phone")} placeholder="Phone" className={`w-full border p-2 rounded-lg ${errors.phone ? "border-red-500" : "border-gray-300"} `} />
              {errors.phone && (<p className="text-xs text-red-500">{errors.phone.message}</p>)}

              <input placeholder="Flat/House/Building Name" maxLength={120} {...register("house")} className={`w-full border p-2 rounded-lg ${errors.house ? "border-red-500" : "border-gray-300"} `} />
              <p className="text-xs text-gray-400">{120 - (watch('house')?.length || 0)} characters left</p>

              <input placeholder="Locality (i.e. Rohini)" {...register("locality")} className={`w-full border p-2 rounded-lg ${errors.locality ? "border-red-500" : "border-gray-300"} `} />
              {errors.locality && (<p className="text-xs text-red-500">{errors.locality.message}</p>)}

              <input placeholder="City (i.e. Delhi)" {...register("city")} className={`w-full border p-2 rounded-lg ${errors.city ? "border-red-500" : "border-gray-300"} `} />
              {errors.city && (<p className="text-xs text-red-500">{errors.city.message}</p>)}

              <input placeholder="State (i.e. Delhi)" {...register("state")} className={`w-full border p-2 rounded-lg ${errors.state ? "border-red-500" : "border-gray-300"} `} />
              {errors.state && (<p className="text-xs text-red-500">{errors.state.message}</p>)}

              <input placeholder="Pincode (i.e. 110085)" maxLength={6} {...register("pincode")} className={`w-full border p-2 rounded-lg ${errors.pincode ? "border-red-500" : "border-gray-300"} `} />

              <input placeholder="Country (i.e. India)" defaultValue="India" {...register("country")} className={`w-full border p-2 rounded-lg ${errors.country ? "border-red-500" : "border-gray-300"} `} />
              <button onClick={handleLocation} className="flex items-center cursor-pointer gap-2 mx-auto px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                {loadingLocation ? <ThreeDot color={["#205788", "#2a72b1", "#3d8cd1", "#66a4db"]} /> : <p>📍 Use My Current Location</p>}
              </button>

              <div className="flex justify-end gap-2 mt-2">
                <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded-xl font-semibold hover:bg-gray-400 transition" >
                  Cancel
                </button>
                <button type='submit' className="px-4 py-2 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition" >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div >
      )
      }
    </div >
  );
};


export default AddressPage
