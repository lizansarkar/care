"use server";

import { dbConnect } from "@/lib/dbConnect";

export const getServices = async (page = 1, limit = 9, category = "All") => {
  try {
    const collection = await dbConnect("services");
    
    const query = category === "All" ? {} : { category: category };
    
    const skip = (page - 1) * limit;
    
    const services = await collection.find(query)
      .skip(skip)
      .limit(limit)
      .toArray();

    const totalCount = await collection.countDocuments(query);

    const formattedServices = services.map(s => ({
      ...s,
      _id: s._id.toString()
    }));

    return { 
      success: true, 
      data: formattedServices, 
      hasMore: skip + services.length < totalCount 
    };
  } catch (error) {
    return { success: false, message: "Failed to fetch services" };
  }
};