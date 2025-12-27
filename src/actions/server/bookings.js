"use server";

import { dbConnect } from "@/lib/dbConnect";

export const createBooking = async (bookingData) => {
  try {
    const collection = await dbConnect("bookings");
    const result = await collection.insertOne({
      ...bookingData,
      status: "pending",
      createdAt: new Date(),
    });
    return { success: true, data: result };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export const getMyBookings = async (email) => {
  try {
    const collection = await dbConnect("bookings");
    const data = await collection.find({ userEmail: email }).toArray();

    const formattedData = data.map(item => ({...item, _id: item._id.toString()}));
    return { success: true, data: formattedData };
  } catch (error) {
    return { success: false, data: [] };
  }
};