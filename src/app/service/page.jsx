"use client";
import ServiceCard from "@/component/ServiceCard";
import React, { useState } from "react";
import { services } from "@/library/servicesData";
import { motion } from "framer-motion";

export default function Service() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Baby Care", "Elderly Care", "Home Nursing"];
  const filteredServices =
    filter === "All" ? services : services.filter((s) => s.category === filter);

  return (
    <section className="bg-slate-50 min-h-screen py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* 🔹 ১. পেজ হেডার (ব্যানারের সাথে মিল রেখে) */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-slate-100 text-8xl font-black -z-0 opacity-40 select-none">
            SERVICES
          </div>
          <h2 className="relative z-10 text-4xl md:text-6xl font-black text-slate-900 mb-4">
            Quality Care <span className="text-red-600">Solutions</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Choose from our wide range of professional healthcare services
            tailored for your family's needs.
          </p>
        </div>

        {/* 🔹 ২. স্মার্ট ফিল্টার বার */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={filter === cat ? "btn-primary" : "btn-outline"}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* 🔹 ৩. সার্ভিস গ্রিড (এনিমেটেড) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={service.id}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-slate-400 text-xl">
                No services found in this category.
              </p>
            </div>
          )}
        </motion.div>

        {/* 🔹 ৪. নিচের সেকশনে একটি হেল্প কার্ড */}
        <div className="mt-24 bg-slate-950 rounded-[3rem] p-12 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px]"></div>
          <div className="relative z-10">
            <h3 className="text-white text-3xl font-bold mb-2">
              Need a custom plan?
            </h3>
            <p className="text-slate-400">
              Our medical experts can help you create a personalized care
              schedule.
            </p>
          </div>
          <button className="btn-contact cursor-pointer">
            Contact Experts
          </button>
        </div>
      </div>
    </section>
  );
}
