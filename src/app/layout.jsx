import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://care-dun.vercel.app/"),
  title: {
    default: "Care - Professional Home Nursing & Baby Care Services",
    template: "%s | Care",
  },
  description:
    "Get certified home nursing, newborn baby care, and elderly assistance at your doorstep. Reliable, expert, and 24/7 care services.",
  keywords: [
    "Care",
    "Home Nursing",
    "Baby Care",
    "Elderly Care",
    "Physiotherapy at home",
    "Health Care Bangladesh",
  ],
  authors: [{ name: "Your Agency Name" }],
  creator: "Your Agency Name",
  publisher: "Your Agency Name",

  openGraph: {
    title: "Care - Trusted Home Healthcare Solutions",
    description:
      "Providing world-class nursing and caregiver services at the comfort of your home.",
    url: "https://your-website-link.com",
    siteName: "Care Services",
    images: [
      {
        url: "https://your-website-link.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Care - Professional Healthcare Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Care - Best Home Nursing Services",
    description: "Reliable home nursing and caregiver services 24/7.",
    images: ["https://your-website-link.com/twitter-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
