import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <div 
      className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden flex items-center justify-center bg-black"
      style={{
        clipPath: "ellipse(150% 100% at 50% 0%)",
      }}
    >
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-10 min-w-full min-h-full object-cover"
      >
        <source src="/bannervd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Dark Overlay */}
      <div className="absolute z-20 w-full h-full bg-black/50 backdrop-brightness-75"></div>

      {/* 🔹 Banner Content */}
      <div className="relative z-30 text-center px-4 md:px-10 max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
          Find the Perfect <span className="text-red-500">Care</span> for Your
          Loved Ones
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Trusted professional care services for babies, elderly, and home
          nursing. Your family's safety is our first priority.
        </p>

        {/* 🔹 Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/service"
            className="btn-primary w-full sm:w-auto text-lg py-4 px-10"
          >
            Book a Service
          </Link>
          <Link
            href="/about"
            className="px-10 py-3.5 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}