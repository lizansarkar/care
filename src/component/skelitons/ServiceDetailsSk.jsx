import React from "react";

export default function ServiceDetailsSk() {
  return (
    <div className="bg-white min-h-screen pb-20 animate-pulse">
      {/* 🔹 হিরো সেকশন স্কেলিটন */}
      <div className="relative h-[450px] w-full bg-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-12">
          <div className="h-4 bg-slate-300 rounded w-24 mb-6"></div>
          <div className="space-y-4">
            <div className="h-12 bg-slate-300 rounded-xl w-2/3"></div>
            <div className="h-12 bg-slate-300 rounded-xl w-1/2"></div>
          </div>
        </div>
      </div>

      {/* 🔹 কন্টেন্ট গ্রিড স্কেলিটন */}
      <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* বাম পাশ (Content Area) */}
        <div className="lg:col-span-8">
          <div className="h-8 bg-slate-200 rounded-lg w-48 mb-6"></div>
          <div className="space-y-3 mb-10">
            <div className="h-4 bg-slate-100 rounded w-full"></div>
            <div className="h-4 bg-slate-100 rounded w-full"></div>
            <div className="h-4 bg-slate-100 rounded w-4/5"></div>
          </div>

          <div className="h-7 bg-slate-200 rounded-lg w-40 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-16 bg-slate-50 border border-slate-100 rounded-2xl"
              ></div>
            ))}
          </div>
        </div>

        {/* ডান পাশ (Sticky Card) */}
        <div className="lg:col-span-4">
          <div className="bg-white border-2 border-slate-50 p-8 rounded-[3rem] shadow-sm">
            <div className="h-3 bg-slate-100 rounded w-20 mx-auto mb-4"></div>
            <div className="h-12 bg-slate-200 rounded-xl w-32 mx-auto mb-8"></div>

            <div className="bg-slate-50 p-6 rounded-3xl space-y-4 mb-8">
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-full"></div>
            </div>

            <div className="h-16 bg-slate-200 rounded-[2rem] w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
