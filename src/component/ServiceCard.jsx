import Link from "next/link";
import Image from "next/image"; // Image ইমপোর্ট নিশ্চিত করুন
import { FaStar, FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ service }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
            {service.category}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs flex items-center gap-1.5 z-10">
          <FaStar className="text-yellow-400" /> {service.rating}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors duration-300">
          {service.title}
        </h2>

        <p className="text-slate-500 text-sm mt-3 line-clamp-2 leading-relaxed">
          {service.description}
        </p>

        <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-50">
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
              Price per hour
            </p>
            <p className="text-lg font-black text-slate-900">
              ৳{service.price}
            </p>
          </div>

          <Link
            href={`/service/${service._id}`}
            className="flex items-center justify-center gap-3 px-6 h-12 bg-slate-100 rounded-2xl transition-all duration-300 shadow-sm group-hover:bg-red-600 group-hover:shadow-lg group-hover:shadow-red-500/40"
          >
            <span className="text-slate-900 font-bold text-sm transition-colors duration-300 group-hover:text-white">
              View Details
            </span>
            <FaArrowRight className="text-slate-900 transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
