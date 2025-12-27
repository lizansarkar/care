"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaTag,
} from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
  };

  return (
    <section className="relative py-8 bg-white overflow-hidden min-h-screen flex items-center">
      {/* 🌌 Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-20 left-[-10%] w-96 h-96 bg-red-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-20 right-[-10%] w-80 h-80 bg-slate-100 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* 🏆 Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[3px]">
              Contact Us
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Let’s Start a <br />
            <span className="text-red-600 relative inline-block">
              Conversation
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 📍 Contact Information (বাকি ডাটা একই আছে) */}
          <div className="space-y-8 lg:pr-12 lg:mt-1">
            <div>
              <h3 className="text-2xl font-black text-slate-800 mb-4">
                Get in Touch
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                Have questions about our nursing or baby care services? Our team
                is here to help you 24/7.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <FaPhoneAlt />,
                  label: "Call Us",
                  detail: "+880 1234 567 890",
                  bg: "bg-blue-50",
                  color: "text-blue-600",
                },
                {
                  icon: <FaEnvelope />,
                  label: "Email Us",
                  detail: "support@care.xyz",
                  bg: "bg-red-50",
                  color: "text-red-600",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  label: "Location",
                  detail: "Dhanmondi, Dhaka, Bangladesh",
                  bg: "bg-slate-100",
                  color: "text-slate-600",
                },
              ].map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300"
                >
                  <div
                    className={`w-12 h-12 ${info.bg} ${info.color} flex items-center justify-center rounded-xl text-xl shadow-sm`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {info.label}
                    </p>
                    <p className="text-lg font-black text-slate-800">
                      {info.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 📝 New Form Style (Service Booking Form এর স্টাইলে) */}
          <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
            {/* Form Header - Dark Style */}
            <div className="bg-slate-900 p-8 text-center">
              <h2 className="text-2xl font-black text-red-600 uppercase tracking-tighter">
                Send a <span className="text-white">Message</span>
              </h2>
              <p className="text-slate-400 mt-2 font-medium text-sm">
                We will get back to you shortly
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-4 text-slate-300" />
                    <input
                      type="text"
                      placeholder="Lizan Sarkar"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-bold outline-none focus:border-red-600 transition-all"
                      required
                    />
                  </div>
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-4 text-slate-300" />
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-bold outline-none focus:border-red-600 transition-all"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-2">
                  Subject
                </label>
                <div className="relative">
                  <FaTag className="absolute left-4 top-4 text-slate-300" />
                  <select className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-bold outline-none focus:border-red-600 transition-all appearance-none cursor-pointer">
                    <option>Home Nursing Service</option>
                    <option>Baby Care Support</option>
                    <option>Elderly Care Assistance</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-2">
                  Your Message
                </label>
                <div className="relative">
                  <FaPaperPlane className="absolute left-4 top-4 text-slate-300" />
                  <textarea
                    rows="4"
                    placeholder="How can we help you?"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-bold outline-none focus:border-red-600 transition-all resize-none"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button - Service Button Style */}
              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-red-600 transition-all shadow-xl shadow-slate-200 cursor-pointer flex items-center justify-center gap-3 uppercase tracking-wider"
              >
                Send Message Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
