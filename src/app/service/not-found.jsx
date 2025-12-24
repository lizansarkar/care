"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const redirect = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    // আমরা h-screen ব্যবহার করছি যাতে পুরো স্ক্রিন জুড়ে ব্যাকগ্রাউন্ড থাকে
    <section className="min-h-screen w-full bg-slate-50 flex items-center justify-center px-6 relative overflow-hidden">
      {/* 🔹 ব্যাকগ্রাউন্ডের বড় টেক্সট ইফেক্ট */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[30vw] font-black text-slate-200/40 leading-none">
          404
        </h1>
      </div>

      <div className="max-w-3xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* আইকন বক্স */}
          <div className="inline-flex p-6 bg-red-600 rounded-[2.5rem] text-white shadow-2xl shadow-red-200 mb-8">
            <FaExclamationTriangle size={60} />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-4 uppercase tracking-tighter">
            Oops! Page <span className="text-red-600">Lost.</span>
          </h2>

          <p className="text-slate-500 text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
            The page you are looking for doesn't exist or has been moved. We are
            taking you back home shortly.
          </p>

          {/* কাউন্টডাউন ইন্ডিকেটর */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-bold tracking-widest uppercase">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              Redirecting in {countdown} Seconds
            </div>
          </div>

          {/* অ্যাকশন বাটনস */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            <Link
              href="/"
              className="w-full md:w-auto bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-red-200 hover:bg-slate-950 transition-all duration-500 flex items-center justify-center gap-3"
            >
              <FaHome size={22} /> TAKE ME HOME
            </Link>

            <button
              onClick={() => router.back()}
              className="w-full md:w-auto bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all duration-300"
            >
              GO BACK
            </button>
          </div>
        </motion.div>
      </div>

      {/* ডেকোরেশন এলিমেন্টস */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-slate-900/5 rounded-full blur-3xl"></div>
    </section>
  );
}
