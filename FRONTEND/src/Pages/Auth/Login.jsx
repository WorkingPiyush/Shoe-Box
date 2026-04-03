import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";
import { useQueryClient } from '@tanstack/react-query';
import OAuth from "../../components/OAuth";
import { toast } from "react-toastify";
import { fetchUser } from "../../api/userApi";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        data,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        const user = await queryClient.fetchQuery({
          queryKey: ['user'],
          queryFn: fetchUser,
        });
        queryClient.setQueryData(['user'], user);
        localStorage.removeItem("cart");
        localStorage.removeItem("wishlist");
        reset();
        navigate("/", { replace: true });
      }
    } catch (err) {
      toast.error("Invalid credentials")
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      {loading ? <Loading /> : ""}
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white text-black rounded-2xl shadow-2xl overflow-hidden border border-black">

        {/* Left Image */}
        <div className="hidden md:flex items-center justify-center bg-white p-10">
          <img
            className="object-contain w-80 hover:scale-105 transition duration-500"
            src="src/assets/Images/Type-of-Shoes/training-shoe.png"
            alt="product"
          />
        </div>

        {/* Login Form */}
        <div className="p-10">
          <h1 className="text-3xl text-center font-semibold mb-6">
            Welcome Back
          </h1>

          <form className="flex flex-col gap-5 relative" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white text-black border border-gray-300 focus:border-black rounded-lg p-3 outline-none transition"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-0.5">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-white text-black border border-gray-300 focus:border-black rounded-lg p-3 outline-none transition"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-400 text-xs mt-0.5">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition duration-300 disabled:opacity-50"
            >
              {loading ? "Login..." : "Login"}
            </button>

            <div className="flex justify-center items-center flex-col">
              ---- OR ----
              <OAuth />
            </div>
            <p className="text-sm text-gray-400 text-center mt-3">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-black hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
          {/* <Loading /> */}
        </div>
      </div>
    </div>
  );
}

export default Login;