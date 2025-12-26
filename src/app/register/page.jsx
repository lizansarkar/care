"use client";
import React, { useState, Suspense } from "react"; // Suspense যোগ করা হয়েছে (Next.js 15 recommendation)
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation"; // useSearchParams যোগ করা হয়েছে
import { signIn } from "next-auth/react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { postUser } from "@/actions/server/auth";

// মূল ফর্ম কন্টেন্ট
function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams(); // 👈 রিডাইরেক্ট ইউআরএল চেক করার জন্য
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  // যদি ইউআরএল-এ redirect থাকে তবে সেটি নিবে, নয়তো হোম পেজে পাঠাবে
  const redirectPath = searchParams.get("redirect") || "/";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ১. ডাটাবেসে ইউজার সেভ করা
      const response = await postUser(formData);

      if (response.success) {
        // ২. অটোমেটিক লগইন (NextAuth Session তৈরি)
        const loginRes = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (loginRes.ok) {
          alert("Registration and Login Successful!");
          router.push(redirectPath); // 👈 এখন সে নির্দিষ্ট পেজে ফিরে যাবে
          router.refresh();
        } else {
          router.push("/login");
        }
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error("Registration failed", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12 relative overflow-hidden">
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
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
            Join <span className="text-red-600">Care</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Create an account to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-red-600 transition-colors">
              <FaUser size={18} />
            </div>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-red-600 focus:bg-white transition-all text-slate-900 font-medium"
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-red-600 transition-colors">
              <FaEnvelope size={18} />
            </div>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-red-600 focus:bg-white transition-all text-slate-900 font-medium"
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-red-600 transition-colors">
              <FaPhone size={18} />
            </div>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-red-600 focus:bg-white transition-all text-slate-900 font-medium"
            />
          </div>

          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-red-600 transition-colors">
              <FaLock size={18} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-red-600 focus:bg-white transition-all text-slate-900 font-medium"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-red-600 py-4 rounded-2xl shadow-xl shadow-red-100 hover:bg-slate-950 transition-all duration-300 flex items-center justify-center group cursor-pointer ${
              loading ? "opacity-50" : ""
            }`}
          >
            <span className="text-white !text-white font-black text-lg flex items-center gap-3">
              {loading ? "CREATING..." : "CREATE ACCOUNT"}
              {!loading && (
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              )}
            </span>
          </button>
        </form>

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
    </div>
  );
}

// 👈 Next.js 15 এ useSearchParams ব্যবহার করলে Suspense দিয়ে র‍্যাপ করা লাগে
export default function RegisterPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <RegisterForm />
    </Suspense>
  );
}
