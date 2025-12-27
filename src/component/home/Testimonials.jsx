"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahat Chowdhury",
    role: "Member",
    image: "https://i.pravatar.cc/150?u=1",
    comment: "Outstanding service quality! The process was incredibly smooth.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sumi Akter",
    role: "Patient",
    image: "https://i.pravatar.cc/150?u=2",
    comment: "Highly professional doctors and great support throughout.",
    rating: 5,
  },
  {
    id: 3,
    name: "Arifur Rahman",
    role: "Client",
    image: "https://i.pravatar.cc/150?u=3",
    comment: "The UI is premium and their care is even better. Amazing!",
    rating: 5,
  },
  {
    id: 4,
    name: "Jannat Ferdous",
    role: "Member",
    image: "https://i.pravatar.cc/150?u=4",
    comment: "Most reliable platform for medical appointments. 10/10!",
    rating: 5,
  },
  {
    id: 5,
    name: "Tahmid Hasan",
    role: "VIP",
    image: "https://i.pravatar.cc/150?u=5",
    comment: "Clean interface and very responsive team. Loved it.",
    rating: 5,
  },
  {
    id: 6,
    name: "Nabila Islam",
    role: "Patient",
    image: "https://i.pravatar.cc/150?u=6",
    comment: "Extremely satisfied with the service. Everything was perfect.",
    rating: 5,
  },
  {
    id: 7,
    name: "Fahim Ahmed",
    role: "Member",
    image: "https://i.pravatar.cc/150?u=7",
    comment: "The booking system is very fast and easy to navigate.",
    rating: 5,
  },
  {
    id: 8,
    name: "Mehedi Hasan",
    role: "Client",
    image: "https://i.pravatar.cc/150?u=8",
    comment: "Top-notch care and professional behavior from everyone.",
    rating: 5,
  },
  {
    id: 9,
    name: "Sadia Afrin",
    role: "Patient",
    image: "https://i.pravatar.cc/150?u=9",
    comment: "A life-changing platform for managing health records easily.",
    rating: 5,
  },
  {
    id: 10,
    name: "Tanvir Hossain",
    role: "VIP Member",
    image: "https://i.pravatar.cc/150?u=10",
    comment: "Superb experience! Highly recommended for all medical needs.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-full h-20 bg-gradient-to-r from-red-50 via-slate-50 to-red-50 -z-10 blur-2xl" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-100 rounded-full blur-[80px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-100 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-6">
        <div className="flex flex-col items-center text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-[3px]">
              Happy Clients
            </span>
          </div>

          {/* Heading with Curvy SVG Underline */}
          <h1 className="md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
            <span className="text-red-600 relative text-5xl">
              Our Happy Patients
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

      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {testimonials.map((user) => (
          <div
            key={user.id}
            className="mx-4 w-[280px] md:w-[320px] relative group py-5"
          >
            <div className="h-48 p-6 rounded-[2rem] bg-white/20 backdrop-blur-2xl border border-white/60 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all duration-300 group-hover:border-red-200 group-hover:shadow-lg">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-xl overflow-hidden shadow-sm border border-white">
                  <Image
                    src={user.image}
                    alt={user.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-800 tracking-tight leading-none">
                    {user.name}
                  </h4>
                  <p className="text-red-600 text-[9px] font-bold uppercase tracking-widest mt-1">
                    {user.role}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-xs font-medium leading-relaxed italic mt-3">
                "{user.comment}"
              </p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-0.5">
                  {[...Array(user.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-[10px]" />
                  ))}
                </div>
                <div className="h-1 w-8 bg-red-100 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
