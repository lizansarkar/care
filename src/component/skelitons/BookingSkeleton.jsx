"use client";
import React from "react";

export default function BookingSkeleton() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="bg-white border border-slate-100 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 animate-pulse"
        >
          {/* Image Skeleton */}
          <div className="h-32 w-full md:w-48 rounded-2xl bg-slate-200" />

          {/* Info Skeleton */}
          <div className="flex-1 space-y-4 w-full">
            <div className="flex gap-3">
              <div className="h-8 w-48 bg-slate-200 rounded-lg" />
              <div className="h-6 w-20 bg-slate-100 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-4 w-32 bg-slate-100 rounded" />
              <div className="h-4 w-32 bg-slate-100 rounded" />
              <div className="h-6 w-24 bg-slate-200 rounded" />
              <div className="h-4 w-40 bg-slate-100 rounded" />
            </div>
          </div>

          {/* Button Skeleton */}
          <div className="space-y-3 w-full md:w-fit">
            <div className="h-12 w-full md:w-32 bg-slate-200 rounded-xl" />
            <div className="h-4 w-20 bg-slate-100 rounded mx-auto" />
          </div>
        </div>
      ))}
    </div>
  );
}
