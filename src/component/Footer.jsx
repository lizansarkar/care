import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import { SiX } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="footer sm:footer-horizontal justify-between gap-10">
          {/* 🔹 Logo & Description Section */}
          <aside className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Care.xyz" className="h-10 w-auto" />
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Providing trusted care services for your loved ones. Specialized
              in baby care, elderly support, and professional home nursing.
            </p>
          </aside>

          {/* 🔹 Quick Links */}
          <nav>
            <h6 className="footer-title text-white opacity-100 border-b-2 border-red-500 mb-4">
              Services
            </h6>
            <Link
              href="/service"
              className="link link-hover hover:text-red-500 transition-colors"
            >
              Baby Sitting
            </Link>
            <Link
              href="/service"
              className="link link-hover hover:text-red-500 transition-colors"
            >
              Elderly Care
            </Link>
            <Link
              href="/service"
              className="link link-hover hover:text-red-500 transition-colors"
            >
              Home Care
            </Link>
            <Link
              href="/service"
              className="link link-hover hover:text-red-500 transition-colors"
            >
              Nursing Support
            </Link>
          </nav>

          {/* 🔹 Company */}
          <nav>
            <h6 className="footer-title text-white opacity-100 border-b-2 border-red-500 mb-4">
              Company
            </h6>
            <Link
              href="/about"
              className="link link-hover hover:text-red-500 transition-colors"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="link link-hover hover:text-red-500 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/jobs"
              className="link link-hover hover:text-red-500 transition-colors"
            >
              Become a Carer
            </Link>
            <Link
              href="/privacy"
              className="link link-hover hover:text-red-500 transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* 🔹 Social Media (Fixed) */}
          <nav>
            <h6 className="footer-title text-white opacity-100 border-b-2 border-red-500 mb-4">
              Social
            </h6>
            <div className="flex gap-4">
              {" "}
              {/* grid এর বদলে flex দিলে অনেক সময় সহজ হয় */}
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <SiX size={16} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </nav>
        </div>

        {/* 🔹 Copyright Section */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} Care.xyz - All right reserved by ACME
            Industries Ltd.
          </p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              Made with <span className="text-red-500 italic">❤</span>{" "}
              @lizan-sarkar
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
