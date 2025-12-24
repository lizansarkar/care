import React from "react";

export default function ServiceSkeleton() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 animate-pulse">
      {/* ইমেজ প্লেসহোল্ডার */}
      <div className="h-56 bg-slate-200"></div>

      <div className="p-6">
        {/* টাইটেল প্লেসহোল্ডার */}
        <div className="h-6 bg-slate-200 rounded-md w-3/4 mb-4"></div>

        {/* ডেসক্রিপশন প্লেসহোল্ডার */}
        <div className="space-y-2 mb-6">
          <div className="h-3 bg-slate-100 rounded-md w-full"></div>
          <div className="h-3 bg-slate-100 rounded-md w-5/6"></div>
        </div>

        {/* ফুটার প্লেসহোল্ডার */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-50">
          <div className="w-20 h-10 bg-slate-100 rounded-lg"></div>
          <div className="w-12 h-12 bg-slate-100 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
}
