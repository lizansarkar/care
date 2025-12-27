"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaUserCircle, FaSignOutAlt, FaUser } from "react-icons/fa";
import { motion } from "framer-motion"; 
import LoginButton from "./LoginButton";
import NavLink from "./buttons/NavLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "My Bookings", href: "/my-bookings" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="Care.xyz" className="h-8 md:h-10 w-auto" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <ul className="flex space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`relative px-3 py-2 text-sm font-bold transition-all duration-300 ${
                        isActive ? "text-red-600" : "text-gray-600 hover:text-red-500"
                      }`}
                    >
                      {link.name}
                      {/* Active Indicator Dot or Underline */}
                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 🔹 Desktop Auth (Dynamic Profile) */}
          <div className="hidden lg:flex items-center gap-4">
            {status === "authenticated" ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 p-1 pr-3 bg-slate-100 rounded-full hover:bg-slate-200 transition-all border border-slate-200"
                >
                  <img
                    src={session.user?.image || "/user-placeholder.png"}
                    alt="profile"
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                  />
                  <span className="text-sm font-bold text-slate-700">{session.user?.name?.split(' ')[0]}</span>
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-[60] animate-in fade-in zoom-in duration-200">
                    <div className="p-3 border-b border-slate-50 mb-2">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Signed in as</p>
                      <p className="text-sm font-black text-slate-800 truncate">{session.user?.email}</p>
                    </div>
                    <Link href="/profile" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all">
                      <FaUser /> My Profile
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-all"
                    >
                      <FaSignOutAlt /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <LoginButton />
                <Link href="/register" className="btn-primary w-full text-center rounded-3xl shadow-md px-6 py-2.5">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* 🔹 Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-2">
              {isOpen ? <HiX className="text-3xl" /> : <HiMenuAlt3 className="text-3xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pt-4 pb-8 space-y-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setIsOpen(false)}>
                <Link
                  href={link.href}
                  className={`block px-5 py-4 text-base font-black rounded-2xl transition-all ${
                    pathname === link.href ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-[1px] bg-slate-100 mx-4"></div>

          {status === "authenticated" ? (
            <div className="px-4 flex items-center gap-4 py-4 bg-slate-50 rounded-2xl">
              <img src={session.user?.image || "/user-placeholder.png"} className="w-12 h-12 rounded-full border-2 border-red-500" alt="" />
              <div>
                <p className="font-black text-slate-900">{session.user?.name}</p>
                <button onClick={() => signOut()} className="text-sm font-bold text-red-600">Logout</button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 px-2">
              <LoginButton />
              <Link href="/register" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center py-4 rounded-2xl font-black">
                Register Now
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}