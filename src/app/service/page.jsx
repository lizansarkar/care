"use client";
import ServiceCard from "@/component/ServiceCard";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceSkeleton from "@/component/skelitons/ServiceSkeleton";
import { getServices } from "@/actions/server/services";

export default function Service() {
  const [filter, setFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [allServices, setAllServices] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const categories = ["All", "Baby Care", "Elderly Care", "Home Nursing"];

  const fetchInitialServices = useCallback(async () => {
    setIsLoading(true);
    const res = await getServices(1, 10, filter);
    if (res.success) {
      setAllServices(res.data);
      setHasMore(res.hasMore);
      setPage(1);
    }
    setIsLoading(false);
  }, [filter]);

  useEffect(() => {
    fetchInitialServices();
  }, [fetchInitialServices]);

  const handleLoadMore = async () => {
    setIsMoreLoading(true);
    const nextPage = page + 1;
    const res = await getServices(nextPage, 10, filter);

    if (res.success) {
      setAllServices((prev) => [...prev, ...res.data]);
      setHasMore(res.hasMore);
      setPage(nextPage);
    }
    setIsMoreLoading(false);
  };

  return (
    <section className="bg-slate-50 min-h-screen py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ১. পেজ হেডার */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-slate-100 text-8xl font-black -z-0 opacity-40 select-none uppercase">
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

        {/* ২. স্মার্ট ফিল্টার বার (আপনার আগের ডিজাইনে ফেরত) */}
        {!isLoading && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                // এখানে আপনার অরিজিনাল ক্লাসগুলো ব্যবহার করা হয়েছে
                className={filter === cat ? "btn-primary" : "btn-outline"}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        )}

        {/* সার্ভিস গ্রিড */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {isLoading
              ? Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <motion.div
                      key={`skeleton-${index}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <ServiceSkeleton />
                    </motion.div>
                  ))
              : allServices.map((service) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={service._id}
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
          </AnimatePresence>
        </motion.div>

        {/* See More বাটন */}
        {hasMore && !isLoading && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
              disabled={isMoreLoading}
              className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black hover:bg-red-600 transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
            >
              {isMoreLoading ? (
                <>
                  <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                  LOADING...
                </>
              ) : (
                "SEE MORE SERVICES"
              )}
            </button>
          </div>
        )}

        {/* নিচে কন্টাক্ট সেকশন */}
        <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between">
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
          <button className="btn-contact cursor-pointer relative z-10">
            Contact Experts
          </button>
        </div>
      </div>
    </section>
  );
}
