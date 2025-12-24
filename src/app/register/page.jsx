"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* 🔹 ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[40%] bg-red-100 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[40%] bg-slate-200 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-12 relative z-10"
      >
        {/* লোগো বা টাইটেল */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
            Join <span className="text-red-600">Care</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Create an account to get started
          </p>
        </div>

        <form className="space-y-5">
          {/* Full Name */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-red-600 transition-colors">
              <FaUser size={18} />
            </div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-red-600 focus:bg-white transition-all text-slate-900 font-medium"
            />
          </div>

          {/* Email */}
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

          {/* Phone */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-red-600 transition-colors">
              <FaPhone size={18} />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-red-600 focus:bg-white transition-all text-slate-900 font-medium"
            />
          </div>

          {/* Password */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-red-600 transition-colors">
              <FaLock size={18} />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-red-600 focus:bg-white transition-all text-slate-900 font-medium"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 !text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-red-100 hover:bg-slate-900 hover:shadow-slate-200 transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer"
          >
            CREATE ACCOUNT
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        {/* লিঙ্ক টু লগইন */}
        <div className="mt-8 text-center text-slate-600 font-medium">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-red-600 font-black hover:underline underline-offset-4 ml-1"
          >
            Sign In
          </Link>
        </div>
      </motion.div>

      {/* ডেকোরেটিভ টেক্সট */}
      <div className="absolute bottom-10 left-10 text-8xl font-black text-slate-200/30 -z-0 hidden lg:block select-none">
        SIGNUP
      </div>
    </div>
  );
}
