import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ThreeDot } from "react-loading-indicators";
import { FaArrowCircleRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { CartContext } from "../../Context/CartContext";
import { useUser } from "../../hooks/useUser";
import axios from "axios";
import PaymentMode from "../../components/PaymentMode";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export default function OrderCheckout() {
  const queryClient = useQueryClient();
  const { data: user } = useUser();
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(addresses[0]?._id);
  const [modalOpen, SetModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPaymentModel, setShowPaymentModel] = useState(false)
  const [Payment, setPayment] = useState();
  const [paymentProcess, setPaymentProcess] = useState(false)
  const timeoutRef = useRef(null);
  const { register, handleSubmit, reset, setValue, watch, formState: { errors }, } = useForm({
    defaultValues: { name: "", phone: "", house: "", locality: "", city: "", pincode: "", country: "" }
  });
  function MrptoCurrency(input) {
    return input.toLocaleString('en-IN')
  }
  const closeModal = () => SetModalOpen(false);
  useEffect(() => {
    const loadAddress = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/address`, {
          withCredentials: true
        });
        setAddresses(res.data);
        setSelectedAddress(addresses[0]?._id)
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadAddress();
  }, [user]);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowPaymentModel(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPaymentModel(false);
    }, 250); // small delay prevents flicker
  };
  const onSubmit = async (data) => {
    if (!data.house.length) return;
    const newAddress = {
      _id: Date.now(),
      name: data.name,
      phone: data.phone,
      house: data.house,
      locality: data.locality,
      pincode: data.pincode,
      country: data.country,
    };
    setAddresses(prev => [...prev, newAddress])
    setSelectedAddress(newAddress._id);
    reset()
    closeModal();
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const delivery = 0;
  const total = subtotal + delivery;
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-6xl">
        <ThreeDot color={["#205788", "#2a72b1", "#3d8cd1", "#66a4db"]} />
      </div>
    );

  }
  const loadScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    })
  }
  const handelPayment = async (method) => {
    if (paymentProcess) return;

    if (!selectedAddress) {
      toast.error("Please select Delivery Address");
      return;
    }

    if (!method || !["online", "cod"].includes(method)) {
      toast.error("Invalid payment method");
      return;
    }

    if (method === 'online') {
      if (!window.Razorpay) {
        await loadScript();
      }

      try {
        setPaymentProcess(true);
        const { data: { order, payment } } = await axios.post(`${import.meta.env.VITE_API_URL}/pay/createOrder`, {
          cartId: cart[0].cartId,
          address: addresses.find((i) => i._id === selectedAddress),
          paymentMethod: method,
        }, { withCredentials: true });
        console.log(order, payment)
        if (!payment?.id || !payment?.amount) {
          toast.error("Invalid order");
          return
        }
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          amount: payment.amount,
          currency: payment.currency || "INR",
          name: "Shoe Box",
          description: "Pay for your order",
          order_id: payment.id,
          handler: async function (response) {
            const verifyPay = await axios.post(`${import.meta.env.VITE_API_URL}/pay/verifyPayment`, {
              order_id: payment.id,
              payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }, { withCredentials: true }
            )
            if (verifyPay.data.success) {
              toast.success("Payment Verified")
              navigate('/profile');
            } else {
              toast.error("Payment Verification Failed");
            }
          },
          modal: { ondismiss: () => { toast.error("Payment cancelled") } },
          prefill: {
            name: `${user.name}`,
            email: `${user.email}`,
            contact: "9999999999",
          },
        }
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on('payment.failed', (res) => {
          toast.error("Payment failed");
          console.log(res)
        })
      } catch (error) {
        console.error(error);
        toast.error("Payment Verification Failed");
      } finally {
        setPaymentProcess(false)
      }
    }

    if (method === 'cod') {
      setPaymentProcess(true);
      try {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/pay/createOrder`, {
          cartId: cart[0].cartId,
          address: addresses.find((i) => i._id === selectedAddress),
          paymentMethod: method,
        }, { withCredentials: true });

        if (res.data.success) {
          toast.dismiss();
          queryClient.invalidateQueries(['cart', user?.id])
          toast.success("Order Placed")
          navigate('/profile');
        }
      } catch (error) {
        console.log(error.message);
      }
    }

  }
  return (
    <div className="min-h-screen mt-20 p-5">
      {/* address section */}
      <div className="bg-white border rounded-2xl shadow p-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">Select Delivery Address</h2>
          <button onClick={() => SetModalOpen(true)} className="text-sm bg-black text-white px-3 py-1 rounded-lg cursor-pointer"><span className="font-bold text-xl">+</span> Add Address</button>
        </div>
        {/* Address section */}
        <div className="grid md:grid-cols-2 gap-4">
          {addresses.map((addr) => (
            <div key={addr._id} onClick={() => setSelectedAddress(addr._id)}
              className={`p-5 border rounded-xl border-gray-50 cursor-pointer ${selectedAddress === addr._id
                ? "border-black bg-gray-200"
                : "border-gray-200"
                }`}>
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
            </div>
          ))}
        </div>
      </div>
      {/* Main Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          {cart.map((item) => (
            < div key={`${item.productId}-${item.quantity}`}
              className="flex justify-between items-center border-b py-3"
            >

              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-gray-400 ">{item.details}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="font-medium">₹{MrptoCurrency(item.price * item.quantity)}</p>
            </div>
          ))}
        </div>
        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow p-4 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹`{MrptoCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹{MrptoCurrency(delivery)}</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>
              <span>₹{MrptoCurrency(total)}</span>
            </div>
          </div>
          <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="relative">
            {showPaymentModel && <PaymentMode mop={setPayment} model={setShowPaymentModel} />}
            <button className="w-full mt-4 bg-black text-white py-2 rounded-xl hover:opacity-90">{Payment === "cod" ? "Pay On Delivery" : (Payment === "online" ? "Pay Online (UPI/CARD/NETBANKING)" : "Select Payment Method")}</button>
            {Payment && <span onClick={() => handelPayment(Payment)} className="w-30 flex justify-center items-center cursor-pointer gap-2 m-auto mt-2 bg-black text-white py-2 rounded-xl hover:opacity-90">Continue <FaArrowCircleRight /></span>}
          </div>
        </div>
      </div>
      {/* Modal */}
      {
        modalOpen && (
          <div className="fixed bg-black/70 inset-0 bg-opacity-40 flex justify-center items-center z-999">
            <div className="bg-white shadow-xl p-6 rounded-2xl w-[95%] sm:w-105 space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Add New Address</h2>
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
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

                <div className="flex justify-end gap-2 mt-2">
                  <button onClick={closeModal} className="px-4 py-2 bg-gray-300 rounded-xl font-semibold cursor-pointer hover:bg-gray-400 transition" >
                    Cancel
                  </button>
                  <button type='submit' className="px-4 py-2 bg-black text-white rounded-xl font-semibold cursor-pointer hover:bg-gray-800 transition" >
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
}
