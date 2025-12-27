"use client";
import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl container mx-auto px-6 md:px-2">
        <div className="relative py-20 overflow-hidden bg-white">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
            <div className="absolute top-10 left-[-5%] w-72 h-72 bg-red-50 rounded-full blur-[120px]"></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <span className="text-xs font-black uppercase tracking-[3px]">
                  Who We Are
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                We Are Dedicated To <br />
                <span className="text-red-600 relative">
                  Your Health & Care
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-red-200 -z-10"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      stroke="currentColor"
                      strokeWidth="5"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative w-full lg:w-1/2">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border-b-4 border-red-500">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800"
                alt="Caregiving Mission"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-50/80 -z-0 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50/80 -z-0 rounded-full blur-xl"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 font-bold text-sm mb-4">
              WHO WE ARE
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Our Mission is to Provide{" "}
              <span className="text-red-500 text-glow-small">
                Compassionate
              </span>{" "}
              Care
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At{" "}
              <span className="font-bold text-slate-800 text-red-500">
                Care.xyz
              </span>
              , we believe that every family deserves peace of mind. Our
              platform connects you with highly trained professionals dedicated
              to baby care, elderly support, and home nursing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { title: "24/7 Support", icon: "❤️" },
                { title: "Certified Experts", icon: "🛡️" },
                { title: "Safety First", icon: "✅" },
                { title: "Affordable Care", icon: "💰" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border-l-4 border-red-500 shadow-sm"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-semibold text-slate-700">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/service"
                className="bg-red-500 hover:bg-red-600 !text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-slate-200 hover:border-red-500 text-slate-700 px-8 py-3 rounded-full font-bold transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1536640712247-c575b13c663b?auto=format&fit=crop&q=80&w=800"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Mission"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:via-red-900/40 transition-colors duration-500"></div>

              <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(239,68,68,0.6)] group-hover:rotate-6 transition-transform">
                  {/* <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg> */}

                  <img
                    src="/mission.jpg"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Vision"
                  />
                </div>
                <h3 className="text-4xl font-black text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
                  To bridge the gap between quality healthcare professionals and
                  families in need through technology and trust.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden group shadow-xl border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=800"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Vision"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20 group-hover:from-red-900/60 transition-all duration-500"></div>

              <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-200 text-lg max-w-xs leading-snug">
                  Ensuring safety and professional care for every generation
                  worldwide.
                </p>
              </div>
            </div>

            <div className="bg-red-600 rounded-[2.5rem] p-8 flex flex-col justify-center relative overflow-hidden group cursor-pointer shadow-[0_15px_30px_rgba(220,38,38,0.3)]">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Our Values
                </h3>
                <p className="text-red-100 text-sm font-medium">
                  Empathy, Integrity, and Excellence.
                </p>
              </div>
              <div className="absolute -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-40 group-hover:animate-shine"></div>
            </div>
            <div className="bg-slate-900 rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center border border-white/10 group">
              <span className="text-5xl font-black text-white group-hover:text-red-500 transition-colors duration-300">
                10k+
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-500 mt-2">
                Trusted Families
              </span>
            </div>
          </div>

          <style jsx>{`
            @keyframes shine {
              100% {
                left: 125%;
              }
            }
            .animate-shine {
              animation: shine 0.75s;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
