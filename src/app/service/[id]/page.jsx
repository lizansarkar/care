import { services } from "@/library/servicesData";
import Link from "next/link";

export default function ServiceDetails({ params }) {
  const { id } = params;

  const service = services.find(item => item.id === id);

  if (!service) {
    return <p className="text-center mt-10">Service not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-64 object-cover rounded"
      />

      <h1 className="text-3xl font-bold mt-6">
        {service.name}
      </h1>

      <p className="text-gray-600 mt-4">
        {service.description}
      </p>

      <p className="mt-4 text-xl font-semibold">
        Price: ৳{service.price} / hour
      </p>

      {/* 🔹 Book Button */}
      <Link
        href={`/booking/${service.id}`}
        className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded"
      >
        Book Service
      </Link>
    </div>
  );
}
