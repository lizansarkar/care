"use client";

import { SessionProvider } from "next-auth/react";

// import { SessionProvider } from "next-auth/next";

export default function AuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}