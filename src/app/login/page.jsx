"use client";
import React, { useState } from "react"; // 🔹 useState ইম্পোর্ট করা হলো
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa"; // 🔹 চোখের আইকন যোগ করা হলো

export default function LoginPage() {
  // ১. পাসওয়ার্ড দেখানোর জন্য স্টেট
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন (আগের মতোই থাকবে) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[40%] bg-red-100 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-slate-200 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-12 relative z-10"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
            Welcome <span className="text-red-600">Back</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Please enter your details to login
          </p>
        </div>

        <form className="space-y-5">
          {/* Email (আগের মতোই) */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-red-600 transition-colors">
              <FaEnvelope size={18} />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-red-600 focus:bg-white transition-all text-slate-900 font-medium"
            />
          </div>

          {/* Password (এখানে পরিবর্তন করা হয়েছে) */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-red-600 transition-colors">
              <FaLock size={18} />
            </div>
            <input
              type={showPassword ? "text" : "password"} // 🔹 স্টেট অনুযায়ী টাইপ চেঞ্জ হবে
              placeholder="Password"
              className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-red-600 focus:bg-white transition-all text-slate-900 font-medium"
            />
            {/* 👁️ চোখের বাটন */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="#"
              className="text-xs font-bold text-slate-400 hover:text-red-600 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-600 py-4 rounded-2xl shadow-xl shadow-red-100 hover:bg-slate-950 transition-all duration-300 flex items-center justify-center group"
          >
            <span className="text-white !text-white font-black text-lg flex items-center gap-3 cursor-pointer">
              SIGN IN{" "}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </form>

        {/* Divider (আগের মতোই) */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-[1px] bg-slate-100"></div>
          <span className="px-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
            OR
          </span>
          <div className="flex-1 h-[1px] bg-slate-100"></div>
        </div>

        {/* Google Login (আগের মতোই) */}
        <button className="btn bg-white hover:bg-slate-50 text-black border-[#d6d5d565] w-full rounded-2xl py-7">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        <div className="mt-10 text-center text-slate-600 font-medium">
          Do not have an account?
          <Link
            href="/register"
            className="text-red-600 font-black hover:underline underline-offset-4 ml-1"
          >
            Register Now
          </Link>
        </div>
      </motion.div>

      <div className="absolute top-10 right-10 text-8xl font-black text-slate-200/30 -z-0 hidden lg:block select-none uppercase">
        Login
      </div>
    </div>
  );
}
