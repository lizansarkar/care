"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { FaCalendarAlt, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getMyBookings, deleteBooking } from "@/actions/server/bookings";
import Swal from "sweetalert2";

export default function MyBookings() {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // ডাটা লোড করার ফাংশন
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

  // ডিলিট হ্যান্ডলার
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
          loadData(); // ডাটা রিফ্রেশ করা
        }
      }
    });
  };

  if (loading)
    return (
      <div className="p-20 text-center font-black text-slate-400">
        LOADING YOUR BOOKINGS...
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
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
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={booking._id}
                  className="bg-white border border-slate-100 rounded-[2rem] p-6 md:p-8 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center gap-8 group hover:border-red-100 transition-all"
                >
                  {/* Service Image */}
                  <div className="relative h-32 w-full md:w-48 rounded-2xl overflow-hidden bg-slate-100">
                    <Image
                      src={booking.serviceImage || "/placeholder.jpg"} // আপনার ডাটাবেস ফিল্ড চেক করুন
                      alt="Service"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
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
                        <FaCalendarAlt className="text-red-600" />{" "}
                        {booking.date}
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <FaPhoneAlt className="text-red-600" /> {booking.phone}
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-slate-900 text-lg">
                        ৳{booking.price}
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-xs">
                        <FaMapMarkerAlt className="text-red-600" />{" "}
                        {booking.address}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-3 w-full md:w-fit">
                    <button className="bg-slate-900 !text-white px-8 py-3 rounded-xl font-black text-sm hover:bg-red-600 transition-all">
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
              ))
            ) : (
              <div className="bg-white rounded-[3rem] p-20 text-center border-2 border-dashed border-slate-200">
                <h2 className="text-2xl font-black text-slate-300 uppercase">
                  No Bookings Found
                </h2>
                <Link
                  href="/service"
                  className="mt-6 inline-block bg-red-600 text-white px-10 py-4 rounded-2xl font-black"
                >
                  EXPLORE SERVICES
                </Link>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
