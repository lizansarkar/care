"use client";
import React from "react";
import Link from "next/link";

export default function Banner() {
  const heartPath = "0% 0%, 100% 0%, 100% 95%, 95% 95%, 94% 92%, 93% 97%, 92% 95%, 85% 95%, 84% 90%, 83% 99%, 82% 95%, 75% 95%, 74% 93%, 73% 97%, 72% 95%, 60% 95%, 59% 88%, 57% 100%, 55% 95%, 45% 95%, 44% 92%, 43% 98%, 42% 95%, 30% 95%, 29% 90%, 27% 100%, 25% 95%, 15% 95%, 14% 93%, 13% 97%, 12% 95%, 0% 95%";
  
  const svgPath = "M0,95 L12,95 L13,97 L14,93 L15,95 L25,95 L27,100 L29,90 L30,95 L42,95 L43,98 L44,92 L45,95 L55,95 L57,100 L59,88 L60,95 L72,95 L73,97 L74,93 L75,95 L82,95 L83,99 L84,90 L85,95 L92,95 L93,97 L94,92 L95,95 L100,95";

  return (
    <div className="relative h-[80vh] md:h-[95vh] w-full bg-white overflow-hidden flex items-center justify-center">
      
      <div 
        className="absolute inset-0 z-10 w-full h-full bg-black"
        style={{ clipPath: `polygon(${heartPath})` }}
      >
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-70">
          <source src="/bannervd.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path
            d={svgPath}
            fill="none"
            stroke="#ff0000"
            strokeWidth="0.15"
            strokeDasharray="50, 40"
            strokeLinecap="round"
            className="animate-pulse-spark"
            style={{ filter: "drop-shadow(0 0 3px #ffffff)" }}
          />
        </svg>
      </div>

      <div className="relative z-30 text-center px-6 max-w-5xl -mt-10 md:-mt-20">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
          Find the Perfect <span className="text-red-500">Care</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
          Trusted professional care services for babies, elderly, and home nursing.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link href="/service" className="btn-primary w-full sm:w-auto px-10 py-4 shadow-xl">
            Book a Service
          </Link>
          <Link href="/about" className="px-10 py-3.5 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all font-bold w-full sm:w-auto">
            Learn More
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes sparkMove {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: -100; }
        }
        .animate-pulse-spark {
          animation: sparkMove 4.5s linear infinite; /* গতি সামান্য বাড়ানো হয়েছে */
        }
      `}</style>
    </div>
  );
}