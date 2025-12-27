"use server"
import bcrypt from 'bcryptjs';
import { dbConnect } from "@/lib/dbConnect";

export const postUser = async (payload) => {
    const { email, password, fullName } = payload;

    if (!email || !password) {
        return { success: false, message: "Email and Password are required" };
    }

    try {
        const collection = await dbConnect("users");
        const isExist = await collection.findOne({ email });
        if (isExist) {
            return { success: false, message: "User already exists!" };
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = {
            ...payload,
            name: fullName,
            createdAt: new Date().toISOString(),
            role: "user",
            password: hashPassword,
        };

        const result = await collection.insertOne(newUser);
        
        if (result.acknowledged) {
            return { success: true, message: "Registration Successful!" };
        }
    } catch (error) {
        return { success: false, message: error.message };
    }
};