"use server"
import bcrypt from 'bcryptjs';
import { dbConnect } from "@/lib/dbConnect"; // অবশ্যই ইম্পোর্ট করতে হবে

export const postUser = async (payload) => {
    const { email, password, fullName } = payload;

    // ১. চেক পেলোড
    if (!email || !password) {
        return { success: false, message: "Email and Password are required" };
    }

    try {
        const collection = await dbConnect("users");

        // ২. চেক ইউজার অলরেডি আছে কি না
        const isExist = await collection.findOne({ email });
        if (isExist) {
            return { success: false, message: "User already exists!" };
        }

        // ৩. পাসওয়ার্ড হ্যাশ করা
        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = {
            ...payload,
            name: fullName, // ডাটাবেজে name হিসেবে সেভ করা ভালো
            createdAt: new Date().toISOString(),
            role: "user",
            password: hashPassword,
        };

        // ৪. ইনসার্ট ইউজার
        const result = await collection.insertOne(newUser);
        
        if (result.acknowledged) {
            return { success: true, message: "Registration Successful!" };
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
};