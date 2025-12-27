"use server";

import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb"; // ডিলিট করার জন্য ObjectId প্রয়োজন

/**
 * ১. নতুন বুকিং তৈরি করা
 */
export const createBooking = async (bookingData) => {
  try {
    const collection = await dbConnect("bookings");
    const result = await collection.insertOne({
      ...bookingData,
      status: "pending", // ডিফল্ট স্ট্যাটাস
      createdAt: new Date(),
    });
    return { success: true, data: JSON.parse(JSON.stringify(result)) };
  } catch (error) {
    console.error("Error creating booking:", error);
    return { success: false, message: error.message };
  }
};

/**
 * ২. ইউজারের ইমেইল অনুযায়ী সব বুকিং ডাটাবেস থেকে নিয়ে আসা
 */
export const getMyBookings = async (email) => {
  try {
    if (!email) return { success: false, data: [] };

    const collection = await dbConnect("bookings");
    // নতুন বুকিংগুলো আগে দেখানোর জন্য sort({ createdAt: -1 }) ব্যবহার করা হয়েছে
    const data = await collection
      .find({ userEmail: email })
      .sort({ createdAt: -1 })
      .toArray();

    // MongoDB-র ডাটাকে প্লেইন অবজেক্টে রূপান্তর (Next.js 15/16 safe)
    const formattedData = JSON.parse(JSON.stringify(data));

    return { success: true, data: formattedData };
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return { success: false, data: [] };
  }
};

/**
 * ৩. বুকিং ডিলিট বা ক্যান্সেল করা
 */
export const deleteBooking = async (id) => {
  try {
    if (!id) return { success: false, message: "No ID provided" };

    const collection = await dbConnect("bookings");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      return { success: true, message: "Booking cancelled successfully" };
    } else {
      return { success: false, message: "Booking not found" };
    }
  } catch (error) {
    console.error("Error deleting booking:", error);
    return { success: false, message: error.message };
  }
};
