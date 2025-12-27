"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"; // NextAuth signIn
import { signInWithPopup } from "firebase/auth"; // Firebase signIn
import {
  FaEnvelope,
  FaLock,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";
import { postUser } from "@/actions/server/auth";
import { auth, googleProvider } from "@/library/firebase";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        alert("ভুল ইমেল বা পাসওয়ার্ড দেওয়া হয়েছে!");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userData = {
        fullName: user.displayName,
        email: user.email,
        image: user.photoURL,
        password: "google-auth-user",
      };
      await postUser(userData);


      await signIn("credentials", {
        email: user.email,
        password: "google-auth-user",
        redirect: false,
      });

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("গুগল লগইন ব্যর্থ হয়েছে!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[40%] bg-red-100 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-slate-200 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-12 relative z-10"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
            Welcome <span className="text-red-600">Back</span>
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Please enter your details to login
          </p>
        </div>

        <form onSubmit={handleEmailLogin} className="space-y-5">
          {/* Email */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-red-600 transition-colors">
              <FaEnvelope size={18} />
            </div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-red-600 focus:bg-white transition-all text-slate-900 font-medium"
            />
          </div>

          {/* Password */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-red-600 transition-colors">
              <FaLock size={18} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-red-600 focus:bg-white transition-all text-slate-900 font-medium"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-red-600 transition-colors cursor-pointer"
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>

          <div className="text-right">
            <Link
              href="#"
              className="text-xs font-bold text-slate-400 hover:text-red-600 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-red-600 py-4 rounded-2xl shadow-xl shadow-red-100 hover:bg-slate-950 transition-all duration-300 flex items-center justify-center group ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            <span className="text-white font-black text-lg flex items-center gap-3">
              {loading ? "LOGGING IN..." : "SIGN IN"}{" "}
              {!loading && <FaArrowRight className="group-hover:translate-x-1 transition-transform" />}
            </span>
          </button>
        </form>

        <div className="flex items-center my-8">
          <div className="flex-1 h-[1px] bg-slate-100"></div>
          <span className="px-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
            OR
          </span>
          <div className="flex-1 h-[1px] bg-slate-100"></div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="bg-white hover:bg-slate-50 text-black border border-slate-200 w-full rounded-2xl py-4 flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-600"></span>
          ) : (
            <>
              <FaGoogle className="text-red-500 text-lg" />
              <span className="font-bold text-slate-700">
                Login with Google
              </span>
            </>
          )}
        </button>

        <div className="mt-10 text-center text-slate-600 font-medium">
          Do not have an account?
          <Link
            href="/register"
            className="text-red-600 font-black hover:underline underline-offset-4 ml-1"
          >
            Register Now
          </Link>
        </div>
      </motion.div>

      <div className="absolute top-10 right-10 text-8xl font-black text-slate-200/30 -z-0 hidden lg:block select-none uppercase">
        Login
      </div>
    </div>
  );
}