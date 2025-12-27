"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaClock, FaArrowLeft, FaTag } from "react-icons/fa";
import ServiceDetailsSk from "@/component/skelitons/ServiceDetailsSk";
import { notFound, useRouter, usePathname } from "next/navigation";
import { getServiceById } from "@/actions/server/services";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

export default function ServiceDetails({ params }) {
  const { data: session } = useSession();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
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

  const handleBookingClick = (e) => {
    e.preventDefault();

    if (!session) {
      // ১. যদি ইউজার লগইন না থাকে
      Swal.fire({
        title: "Login Required!",
        text: "Please login or register to secure your booking.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc2626",
        cancelButtonColor: "#0f172a",
        confirmButtonText: "Go to Register",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push(`/register?redirect=${pathname}`);
        }
      });
    } else {
      // ২. লগইন থাকলে সরাসরি বুকিং পেজে যাবে
      router.push(`/booking/${service._id}`);
    }
  };

  if (isLoading) return <ServiceDetailsSk />;
  if (hasError || !service) return notFound();

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="relative h-[450px] w-full">
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
          <div className="sticky top-10 overflow-hidden bg-white border border-slate-100 p-8 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center group transition-all duration-500 hover:shadow-[0_20px_60px_rgba(220,38,38,0.1)]">
            <div className="absolute -right-12 top-7 rotate-45 bg-red-600 text-white text-[10px] font-bold py-1 w-44 shadow-lg uppercase tracking-tighter">
              Limited Slots!
            </div>

            <p className="text-slate-400 text-xs font-black uppercase tracking-[3px] mb-4">
              Premium Care Investment
            </p>

            <div className="flex justify-center items-baseline gap-2 mb-2">
              <span className="text-6xl font-black text-slate-900 tracking-tighter">
                ৳{service.price}
              </span>
              <span className="text-slate-500 font-bold text-lg">/hr</span>
            </div>

            <p className="text-green-600 text-sm font-bold mb-8 flex items-center justify-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for immediate booking
            </p>

            <div className="space-y-4 mb-8 text-left bg-slate-50 p-6 rounded-[2rem] border border-dashed border-slate-200">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm text-red-600">
                  <FaCheckCircle className="text-sm" />
                </div>
                <p className="text-xs font-bold text-slate-700">
                  No Hidden Charges
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm text-red-600">
                  <FaClock className="text-sm" />
                </div>
                <p className="text-xs font-bold text-slate-700">
                  24/7 Expert Support
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full shadow-sm text-red-600">
                  <FaTag className="text-sm" />
                </div>
                <p className="text-xs font-bold text-slate-700">
                  Money Back Guarantee
                </p>
              </div>
            </div>

            <button
              onClick={handleBookingClick}
              className="relative inline-flex items-center justify-center w-full px-8 py-4 overflow-hidden font-black text-white transition-all duration-300 bg-slate-900 rounded-2xl group hover:bg-red-600 cursor-pointer"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
              <span className="relative flex items-center gap-2 !text-white">
                BOOK NOW
              </span>
            </button>

            <p className="mt-4 text-[10px] text-slate-400 font-medium">
              * You won t be charged yet. Secure your slot first.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
