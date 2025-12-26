"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaClock, FaArrowLeft } from "react-icons/fa";
import ServiceDetailsSk from "@/component/skelitons/ServiceDetailsSk";
import { notFound } from "next/navigation";
import { getServiceById } from "@/actions/server/services";

export default function ServiceDetails({ params }) {
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Next.js 15 এ params একটি Promise
        const resolvedParams = await params;
        const idFromUrl = resolvedParams.id;

        const res = await getServiceById(idFromUrl);

        if (!res.success) {
          setHasError(true);
        } else {
          setService(res.data);
        }
      } catch (err) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (isLoading) return <ServiceDetailsSk />;
  if (hasError || !service) return notFound();

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="relative h-[450px] w-full">
        {/* service.image যদি আপনার ডাটাবেসে না থাকে তবে placeholder ব্যবহার হবে */}
        <Image
          src={service.image || "/placeholder.jpg"}
          alt={service.title || "Service"}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        <div className="absolute bottom-12 left-0 w-full z-10">
          <div className="max-w-6xl mx-auto px-6">
            <Link
              href="/service"
              className="text-white/70 hover:text-white flex items-center gap-2 mb-6 font-medium transition-all"
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
                <span className="font-semibold text-slate-800">{feature}</span>
              </div>
            ))}
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
            {/* বুকিং বাটন: এখানে অবশ্যই service._id ব্যবহার করবেন */}
            <Link
              href={`/booking/${service._id}`}
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
