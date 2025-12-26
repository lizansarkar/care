"use server";

import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

/**
 * ১. সকল সার্ভিস ডাটাবেস থেকে নিয়ে আসার ফাংশন (Pagination সহ)
 */
export const getServices = async (page = 1, limit = 9, category = "All") => {
  try {
    const collection = await dbConnect("services");

    // ফিল্টার কুয়েরি তৈরি
    const query = category === "All" ? {} : { category: category };

    // কতগুলো ডাটা বাদ দিতে হবে (Skip)
    const skip = (page - 1) * limit;

    // ডাটাবেস থেকে ডাটা ফেচ করা
    const services = await collection
      .find(query)
      .skip(skip)
      .limit(limit)
      .toArray();

    // মোট কতগুলো ডাটা আছে তা চেক করা
    const totalCount = await collection.countDocuments(query);

    // MongoDB-র ObjectId-কে String-এ রূপান্তর করা
    const formattedServices = services.map((s) => ({
      ...s,
      _id: s._id.toString(),
    }));

    return {
      success: true,
      data: formattedServices,
      hasMore: skip + services.length < totalCount,
    };
  } catch (error) {
    console.error("Error fetching services:", error);
    return { success: false, message: "Failed to fetch services" };
  }
};

/**
 * ২. একটি নির্দিষ্ট সার্ভিস আইডি দিয়ে খুঁজে বের করার ফাংশন
 */
export const getServiceById = async (id) => {
  try {
    // যদি আইডি না থাকে বা ভুল ফরম্যাট হয়
    if (!id || id.length !== 24) {
      return { success: false, message: "Invalid ID format" };
    }

    const collection = await dbConnect("services");

    // MongoDB থেকে ডাটা খোঁজা
    const service = await collection.findOne({ _id: new ObjectId(id) });

    if (!service) {
      return { success: false, message: "Service not found" };
    }

    // ডাটা ফরম্যাট করা (Next.js এ ব্যবহারের জন্য)
    const formattedService = {
      ...service,
      _id: service._id.toString(),
    };

    return {
      success: true,
      data: formattedService,
    };
  } catch (error) {
    console.error("Error fetching service by ID:", error);
    return { success: false, message: "Internal Server Error" };
  }
};
