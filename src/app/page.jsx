
import { CalendarDemo } from "@/component/CalendarDemo";
import Banner from "@/component/home/Banner";
import ServiceCard from "@/component/ServiceCard";
import { services } from "@/library/servicesData";

export default function Home() {
  return (
    <main>
      {/* 🔹 Banner Section */}
      <Banner></Banner>

      {/* 🔹 About Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center">About Care.xyz</h2>
        <p className="text-center mt-4 text-gray-600">
          Care.xyz helps families find reliable and trusted caregivers for
          children, elderly, and sick family members.
        </p>
      </section>

      {/* 🔹 Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

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
