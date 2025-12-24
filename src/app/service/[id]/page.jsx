"use client";
import React, { useState, useEffect } from "react";
import { services } from "@/library/servicesData";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaClock, FaTag, FaArrowLeft } from "react-icons/fa";
import ServiceDetailsSk from "@/component/skelitons/ServiceDetailsSk";
import { notFound } from "next/navigation"; // 🔹 এটি ইম্পোর্ট করুন

export default function ServiceDetails({ params }) {
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false); // 🔹 এরর ট্র্যাকিংয়ের জন্য

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      const idFromUrl = resolvedParams.id;

      const foundService = services.find(
        (item) => String(item.id) === String(idFromUrl)
      );

      setTimeout(() => {
        if (!foundService) {
          setHasError(true); // 🔹 যদি সার্ভিস না পায়
        } else {
          setService(foundService);
        }
        setIsLoading(false);
      }, 1000);
    };

    fetchData();
  }, [params]);

  // ১. লোডিং হলে স্কেলিটন দেখাবে
  if (isLoading) {
    return <ServiceDetailsSk />;
  }

  // ২. 🔹 যদি সার্ভিস না পাওয়া যায়, তবে মেইন Error404 পেজে পাঠিয়ে দিবে
  if (hasError) {
    return notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* বাকি সব কোড আগের মতোই থাকবে */}
      <div className="relative h-[450px] w-full">
        <Image
          src={service.image}
          alt={service.title || "Service Image"}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        <div className="absolute bottom-12 left-0 w-full z-10">
          <div className="max-w-6xl mx-auto px-6">
            <Link
              href="/service"
              className="text-white/70 hover:text-white flex items-center gap-2 mb-6 transition-all font-medium"
            >
              <FaArrowLeft /> Return to Gallery
            </Link>
            <div className="flex flex-col gap-4">
              <span className="w-fit bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[2px]">
                {service.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <div className="prose prose-slate max-w-none">
            <h3 className="text-3xl font-black text-slate-900 mb-6">
              Service Overview
            </h3>
            <p className="text-slate-600 text-xl leading-relaxed mb-10">
              {service.description}
            </p>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Key Benefits & Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-red-200 transition-all"
                >
                  <FaCheckCircle className="text-red-600 mt-1 text-lg" />
                  <span className="font-semibold text-slate-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-10 bg-white border-2 border-slate-100 p-8 rounded-[3rem] shadow-2xl shadow-slate-200/50 text-center">
            <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-4">
              Investment
            </p>
            <div className="flex justify-center items-baseline gap-2 mb-8">
              <span className="text-5xl font-black text-slate-900">
                ৳{service.price}
              </span>
              <span className="text-slate-500 font-bold">/hr</span>
            </div>
            <div className="space-y-4 mb-8 text-left bg-slate-50 p-6 rounded-3xl">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 flex items-center gap-2">
                  <FaClock /> Availability
                </span>
                <span className="font-bold text-slate-900">24/7 Support</span>
              </div>
              <div className="h-px bg-slate-200 w-full"></div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500 flex items-center gap-2">
                  <FaCheckCircle /> Verification
                </span>
                <span className="font-bold text-green-600 italic underline">
                  Verified Agency
                </span>
              </div>
            </div>
            <Link
              href={`/booking/${service.id}`}
              className="btn-premium w-full block text-center"
            >
              <span className="!text-white">BOOK NOW</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
