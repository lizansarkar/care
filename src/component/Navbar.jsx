"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import LoginButton from "./LoginButton";
import NavLink from "./buttons/NavLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Service", href: "/service" },
    { name: "My Bookings", href: "/my-bookings" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full bg-white/50 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* 🔹 Logo (Left Side) */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Care.xyz"
                className="h-8 md:h-10 w-auto"
              />
            </Link>
          </div>

          {/* 🔹 Desktop Menu (Center) */}
          <div className="hidden lg:flex items-center space-x-4">
            <ul className="flex space-x-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink href={link.href}>{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 Desktop Auth (Right Side) */}
          <div className="hidden lg:flex items-center gap-4">
            <LoginButton />
            <Link href="/register" className="btn-primary text-sm">
              Register
            </Link>
          </div>

          {/* 🔹 Mobile Menu Button (Right Side) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-500 transition-colors p-2"
            >
              {isOpen ? (
                <HiX className="text-3xl" />
              ) : (
                <HiMenuAlt3 className="text-3xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Menu (Full Width with Slide Down Effect) */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-t border-gray-50 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 shadow-inner">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setIsOpen(false)}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-500 rounded-xl transition-all"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="divider opacity-50"></div>

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col gap-3 px-4">
            <LoginButton></LoginButton>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center py-3 rounded-xl shadow-md"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
