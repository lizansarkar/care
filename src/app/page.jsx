
import { CalendarDemo } from "@/component/CalendarDemo";
import About from "@/component/home/About";
import Banner from "@/component/home/Banner";
import ServiceCard from "@/component/ServiceCard";
import { services } from "@/library/servicesData";
import Service from "./service/page";

export default function Home() {
  return (
    <main>
      {/* 🔹 Banner Section */}
      <Banner></Banner>

      {/* 🔹 About Section */}
      <About></About>

      {/* 🔹 Services Section */}
      <Service></Service>

      {/* 🔹 Testimonials */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-3xl font-semibold text-center">
          What Our Users Say
        </h2>

        <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-6 px-4">
          <div className="bg-white p-4 rounded shadow">
            "Excellent service! Very professional caregivers."
          </div>
          <div className="bg-white p-4 rounded shadow">
            "Booking was easy and the service was reliable."
          </div>
        </div>
      </section>
    </main>
  );
}
