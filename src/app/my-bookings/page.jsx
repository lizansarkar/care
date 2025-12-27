"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {
  FaCalendarAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaTimes,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getMyBookings, deleteBooking } from "@/actions/server/bookings";
import Swal from "sweetalert2";
import BookingSkeleton from "@/component/skelitons/BookingSkeleton";

export default function MyBookings() {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [selectedBooking, setSelectedBooking] = useState(null);

  const loadData = async () => {
    if (session?.user?.email) {
      const res = await getMyBookings(session.user.email);
      if (res.success) {
        setBookings(res.data);
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [session]);

  const handleCancel = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#0f172a",
      confirmButtonText: "Yes, cancel it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteBooking(id);
        if (res.success) {
          Swal.fire("Deleted!", "Your booking has been cancelled.", "success");
          loadData();
        }
      }
    });
  };

  if (loading) return <BookingSkeleton />;

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
            My <span className="text-red-600">Bookings</span>
          </h1>
          <p className="text-slate-500 font-medium mt-2">
            Total {bookings.length} appointments found for{" "}
            {session?.user?.email}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <AnimatePresence>
            {bookings.map((booking, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={booking._id}
                className="bg-white border border-slate-100 rounded-[2rem] p-6 md:py-8 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-8 group hover:border-red-100 transition-all"
              >
                <div className="relative h-32 w-full md:w-48 rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src={booking.serviceImage || "/placeholder.jpg"}
                    alt="Service"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 space-y-3 w-full text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {booking.serviceTitle}
                    </h3>
                    <span
                      className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                        booking.status === "pending"
                          ? "bg-amber-100 text-amber-600"
                          : booking.status === "confirmed"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-slate-500">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <FaCalendarAlt className="text-red-600" /> {booking.date}
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-slate-900 text-lg">
                      ৳{booking.price}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full md:w-fit">
                  <button
                    onClick={() => setSelectedBooking(booking)}
                    className="bg-slate-900 !text-white px-8 py-3 rounded-xl font-black text-sm hover:bg-red-600 transition-all cursor-pointer"
                  >
                    VIEW DETAILS
                  </button>
                  {booking.status === "pending" && (
                    <button
                      onClick={() => handleCancel(booking._id)}
                      className="text-red-600 font-bold text-xs hover:underline cursor-pointer"
                    >
                      Cancel Booking
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* 🚀 Details Modal with Blur Background */}
      <AnimatePresence>
        {selectedBooking && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBooking(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
            ></motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100"
            >
              <button
                onClick={() => setSelectedBooking(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-red-600 transition-colors z-10"
              >
                <FaTimes size={24} />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-16 w-16 relative rounded-2xl overflow-hidden shadow-lg shadow-red-100">
                    <Image
                      src={selectedBooking.serviceImage}
                      fill
                      className="object-cover"
                      alt="img"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
                      Booking Info
                    </span>
                    <h2 className="text-2xl font-black text-slate-900 leading-tight">
                      {selectedBooking.serviceTitle}
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-6">
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <FaUser className="text-red-600" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">
                        Customer Name
                      </p>
                      <p className="font-black">
                        {selectedBooking.userName || session?.user?.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <FaPhoneAlt className="text-red-600" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">
                        Contact Number
                      </p>
                      <p className="font-black">{selectedBooking.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-slate-700">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <FaMapMarkerAlt className="text-red-600" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400">
                        Service Location
                      </p>
                      <p className="font-black">{selectedBooking.address}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center p-6 bg-slate-900 rounded-3xl">
                  <p className="text-white/60 font-bold text-sm">
                    Total Investment
                  </p>
                  <p className="text-2xl font-black text-white">
                    ৳{selectedBooking.price}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
