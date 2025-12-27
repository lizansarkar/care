"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getServiceById } from "@/actions/server/services";
import { createBooking } from "@/actions/server/bookings";
import Swal from "sweetalert2";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";

export default function BookingPage({ params }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resolvedParams, setResolvedParams] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    date: "",
  });

  useEffect(() => {
    const init = async () => {
      const p = await params;
      setResolvedParams(p);
      const res = await getServiceById(p.id);
      if (res.success) setService(res.data);
    };
    init();
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const bookingData = {
      serviceId: service._id,
      serviceTitle: service.title,
      serviceImage: service.image,
      price: service.price,
      userEmail: session?.user?.email,
      userName: session?.user?.name,
      ...formData,
    };

    const res = await createBooking(bookingData);

    if (res.success) {
      Swal.fire({
        title: "Booking Successful!",
        text: "Your service has been scheduled.",
        icon: "success",
        confirmButtonColor: "#dc2626",
      }).then(() => {
        router.push("/my-bookings");
      });
    } else {
      Swal.fire("Error", "Something went wrong!", "error");
    }
    setLoading(false);
  };

  if (!service)
    return (
      <div className="p-20 text-center font-black">Loading Service Info...</div>
    );

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 p-10 text-center">
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
              Confirm Your <span className="text-red-600">Booking</span>
            </h1>
            <p className="text-slate-400 mt-2 font-medium">
              Service: {service.title}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-10 space-y-6">
            {/* User Info (Read Only) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-2">
                  Your Name
                </label>
                <div className="relative">
                  <FaUser className="absolute left-4 top-4 text-slate-300" />
                  <input
                    type="text"
                    disabled
                    value={session?.user?.name || ""}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-500 font-bold outline-none cursor-not-allowed"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-2">
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-4 text-slate-300" />
                  <input
                    required
                    type="tel"
                    placeholder="017XXXXXXXX"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-bold outline-none focus:border-red-600 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400 ml-2">
                Service Date
              </label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-4 top-4 text-slate-300" />
                <input
                  required
                  type="date"
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-bold outline-none focus:border-red-600 transition-all"
                />
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-400 ml-2">
                Full Address
              </label>
              <div className="relative">
                <FaMapMarkerAlt className="absolute left-4 top-4 text-slate-300" />
                <textarea
                  required
                  rows="3"
                  placeholder="Street, House No, Area..."
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 font-bold outline-none focus:border-red-600 transition-all"
                ></textarea>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex justify-between items-center">
              <span className="font-black text-slate-900">
                Total Investment:
              </span>
              <span className="text-2xl font-black text-red-600">
                ৳{service.price}
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-red-600 transition-all shadow-xl shadow-slate-200 cursor-pointer"
            >
              {loading ? "PROCESSING..." : "CONFIRM BOOKING NOW"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
