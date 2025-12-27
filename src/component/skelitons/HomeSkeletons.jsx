"use client";
import React from "react";

export default function HomeSkeletons() {
  return (
    <div className="relative w-full min-h-[600px] md:min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* 🌌 Background Decorative Blurs (সাদা ব্যাকগ্রাউন্ডের জন্য হালকা ইফেক্ট) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-50 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-100 rounded-full blur-[130px] animate-pulse delay-700"></div>
      </div>

      {/* 🎯 Content Center Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center animate-pulse">
        {/* Title Line 1 (Main Heading) */}
        <div className="h-12 md:h-16 w-64 md:w-[500px] bg-slate-200 rounded-2xl mb-4"></div>

        {/* Title Line 2 (Highlighted Part) */}
        <div className="h-12 md:h-16 w-48 md:w-[300px] bg-slate-100 rounded-2xl mb-8"></div>

        {/* Subtitle Lines (Description) */}
        <div className="space-y-3 mb-12 flex flex-col items-center">
          <div className="h-4 w-[280px] md:w-[450px] bg-slate-100 rounded-full"></div>
          <div className="h-4 w-[200px] md:w-[320px] bg-slate-50 rounded-full"></div>
        </div>

        {/* Buttons Skeleton */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          {/* Primary Button Placeholder (Reddish tint) */}
          <div className="h-16 w-48 bg-slate-50 rounded-full border border-slate-100/50 shadow-sm"></div>

          {/* Secondary Button Placeholder (Slate tint) */}
          <div className="h-16 w-48 bg-slate-100 rounded-full border border-slate-200/50"></div>
        </div>
      </div>

      {/* Bottom Curve/Design Placeholder */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50/50 to-transparent"></div>
    </div>
  );
}
