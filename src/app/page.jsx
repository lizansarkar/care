"use client";
import React, { useState, useEffect } from "react"; // এই লাইনটি ঠিক করা হয়েছে
import { CalendarDemo } from "@/component/CalendarDemo";
import About from "@/component/home/About";
import Banner from "@/component/home/Banner";

import Service from "./service/page";
import Testimonials from "@/component/home/Testimonials";
import HomeSkeletons from "@/component/skelitons/HomeSkeletons";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <HomeSkeletons />;

  return (
    <main>
      {/* Banner Section */}
      <Banner />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Service />

      {/* Testimonials */}
      <Testimonials />
    </main>
  );
}
