"use client";
import React from "react";

export default function AboutSkeletons() {
  return (
    <section className="relative py-24 bg-white overflow-hidden min-h-screen flex items-center">
      {/* 🌌 Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-20 right-[-5%] w-96 h-96 bg-red-50 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-20 left-[-5%] w-80 h-80 bg-slate-100 rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 🖼️ Left Side: Image Skeleton */}
          <div className="relative">
            {/* Main Image Box */}
            <div className="relative z-10 w-full aspect-square bg-slate-200 rounded-[3rem] border-8 border-white shadow-2xl"></div>

            {/* Decorative element behind image */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-50 rounded-[3rem] -z-10"></div>

            {/* Experience Badge Placeholder */}
            <div className="absolute bottom-10 -left-8 z-20 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-50">
              <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
              <div className="space-y-2">
                <div className="h-5 w-16 bg-slate-200 rounded"></div>
                <div className="h-3 w-24 bg-slate-100 rounded"></div>
              </div>
            </div>
          </div>

          {/* 📝 Right Side: Content Skeleton */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* Badge */}
              <div className="h-8 w-32 bg-red-50 rounded-full border border-red-100"></div>

              {/* Heading Lines */}
              <div className="h-12 w-full bg-slate-200 rounded-2xl"></div>
              <div className="h-12 w-3/4 bg-slate-200 rounded-2xl"></div>

              {/* Paragraphs */}
              <div className="space-y-3 pt-4">
                <div className="h-4 w-full bg-slate-100 rounded-md"></div>
                <div className="h-4 w-full bg-slate-100 rounded-md"></div>
                <div className="h-4 w-5/6 bg-slate-100 rounded-md"></div>
              </div>
            </div>

            {/* Stats/Features Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="p-6 bg-slate-50 rounded-3xl space-y-3 border border-slate-100"
                >
                  <div className="w-10 h-10 bg-slate-200 rounded-xl"></div>
                  <div className="h-5 w-24 bg-slate-200 rounded-md"></div>
                  <div className="h-3 w-32 bg-slate-100 rounded-md"></div>
                </div>
              ))}
            </div>

            {/* Button Placeholder */}
            <div className="h-16 w-56 bg-slate-900/10 rounded-full mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
