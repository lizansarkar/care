"use client";
import React from "react";

export default function ContactSkeletons() {
  return (
    <section className="relative py-24 bg-white overflow-hidden min-h-screen flex items-center">
      {/* 🌌 Background Elements (আসল পেজের সাথে মিল রাখার জন্য) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-20 left-[-10%] w-96 h-96 bg-red-50 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-20 right-[-10%] w-80 h-80 bg-slate-100 rounded-full blur-[100px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full animate-pulse">
        {/* 🏆 Header Skeleton */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="h-8 w-32 bg-slate-100 rounded-full mb-6"></div>
          <div className="h-12 w-64 md:w-96 bg-slate-200 rounded-2xl mb-4"></div>
          <div className="h-12 w-48 bg-slate-100 rounded-2xl"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* 📍 Left Side: Contact Info Skeleton */}
          <div className="space-y-8 lg:pr-12 lg:mt-10">
            <div className="space-y-4">
              <div className="h-8 w-48 bg-slate-200 rounded-lg"></div>
              <div className="h-4 w-full bg-slate-100 rounded-md"></div>
              <div className="h-4 w-3/4 bg-slate-100 rounded-md"></div>
            </div>

            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-5 p-4 rounded-2xl border border-slate-50">
                  <div className="w-12 h-12 bg-slate-200 rounded-xl"></div>
                  <div className="space-y-2">
                    <div className="h-3 w-20 bg-slate-100 rounded"></div>
                    <div className="h-5 w-48 bg-slate-200 rounded-md"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 📝 Right Side: Form Skeleton (বুকিং ফর্মের অবয়ব) */}
          <div className="bg-white rounded-[3rem] shadow-xl shadow-slate-100 border border-slate-100 overflow-hidden">
            {/* Dark Header Placeholder */}
            <div className="bg-slate-200 h-32 w-full flex flex-col items-center justify-center space-y-3">
              <div className="h-6 w-40 bg-slate-300 rounded-lg"></div>
              <div className="h-3 w-32 bg-slate-300 rounded-md opacity-50"></div>
            </div>

            <div className="p-8 md:p-10 space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <div className="h-3 w-20 bg-slate-100 ml-2 rounded"></div>
                  <div className="h-14 bg-slate-50 rounded-2xl border border-slate-100"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-20 bg-slate-100 ml-2 rounded"></div>
                  <div className="h-14 bg-slate-50 rounded-2xl border border-slate-100"></div>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <div className="h-3 w-20 bg-slate-100 ml-2 rounded"></div>
                <div className="h-14 bg-slate-50 rounded-2xl border border-slate-100"></div>
              </div>

              {/* Message Area */}
              <div className="space-y-2">
                <div className="h-3 w-24 bg-slate-100 ml-2 rounded"></div>
                <div className="h-32 bg-slate-50 rounded-2xl border border-slate-100"></div>
              </div>

              {/* Button Placeholder */}
              <div className="h-16 bg-slate-200 rounded-2xl w-full mt-4 shadow-inner"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}