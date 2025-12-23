"use client";
import React from "react";
import Link from "next/link";

export default function Banner() {
  // 🔹 এই পাথটি ভিডিও কাটার জন্য (Clip Path) এবং বিদ্যুৎ চালানোর জন্য (SVG) একই রাখা হয়েছে
  const heartPath = "0% 0%, 100% 0%, 100% 90%, 85% 90%, 83% 82%, 81% 98%, 79% 90%, 65% 90%, 63% 85%, 61% 95%, 59% 90%, 45% 90%, 43% 75%, 40% 100%, 37% 90%, 25% 90%, 23% 85%, 21% 95%, 19% 90%, 0% 90%";
  
  // 🔹 SVG এর জন্য একই পয়েন্টগুলোকে কোঅর্ডিনেটে রূপান্তর (Spark এর রাস্তা)
  const svgPath = "M0,90 L19,90 L21,95 L23,85 L25,90 L37,90 L40,100 L43,75 L45,90 L59,90 L61,95 L63,85 L65,90 L79,90 L81,98 L83,82 L85,90 L100,90";

  return (
    <div className="relative h-[80vh] md:h-[95vh] w-full bg-white overflow-hidden flex items-center justify-center">
      
      {/* 🔹 ১. মেইন ভিডিও ব্যাকগ্রাউন্ড (Clip Path দিয়ে হার্টবিট আকারে কাটা) */}
      <div 
        className="absolute inset-0 z-10 w-full h-full bg-black"
        style={{ clipPath: `polygon(${heartPath})` }}
      >
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-70">
          <source src="/bannervd2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 🔹 ২. হার্টবিট স্পার্ক (SVG যা ভিডিওর বর্ডার দিয়ে দৌড়াবে) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          {/* স্পার্ক বা কারেন্ট যেটা বর্ডারের ওপর দিয়ে যাবে */}
          <path
            d={svgPath}
            fill="none"
            stroke="#ff0000" // কারেন্টের রঙ (লাল)
            strokeWidth="0.3" 
            strokeDasharray="10, 90" // স্পার্কের দৈর্ঘ্য
            strokeLinecap="round"
            className="animate-pulse-spark"
            style={{ filter: "drop-shadow(0 0 2px #ff0000)" }}
          />
        </svg>
      </div>

      {/* 🔹 ৩. ব্যানার টেক্সট কন্টেন্ট */}
      <div className="relative z-30 text-center px-6 max-w-5xl -mt-20">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          Find the Perfect <span className="text-red-500">Care</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
          Trusted professional care services for babies, elderly, and home nursing.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link href="/service" className="btn-primary px-10 py-4 shadow-xl">
            Book a Service
          </Link>
          <Link href="/about" className="px-10 py-3.5 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all font-bold">
            Learn More
          </Link>
        </div>
      </div>

      {/* 🔹 ৪. স্পার্ক দৌড়ানোর অ্যানিমেশন */}
      <style jsx>{`
        @keyframes sparkMove {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: -100; }
        }
        .animate-pulse-spark {
          animation: sparkMove 3s linear infinite;
        }
      `}</style>
    </div>
  );
}