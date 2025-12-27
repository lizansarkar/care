"use server";

import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getServices = async (page = 1, limit = 9, category = "All") => {
  try {
    const collection = await dbConnect("services");

    const query = category === "All" ? {} : { category: category };

    const skip = (page - 1) * limit;

    const services = await collection
      .find(query)
      .skip(skip)
      .limit(limit)
      .toArray();

    const totalCount = await collection.countDocuments(query);

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


export const getServiceById = async (id) => {
  try {

    if (!id || id.length !== 24) {
      return { success: false, message: "Invalid ID format" };
    }

    const collection = await dbConnect("services");

    const service = await collection.findOne({ _id: new ObjectId(id) });

    if (!service) {
      return { success: false, message: "Service not found" };
    }

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
