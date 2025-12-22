import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="text-xl font-semibold mt-3">
        {service.name}
      </h2>

      <p className="text-gray-600 text-sm mt-2">
        {service.description}
      </p>

      <p className="mt-2 font-bold">
        Price: ৳{service.price} / hour
      </p>

      <Link
        href={`/service/${service.id}`}
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}
