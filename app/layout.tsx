import type { Metadata } from "next";
import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/components/navbar";
import { Toaster } from "@/app/components/ui/toaster";
import { AppProviders } from "./Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Media Manager",
  description: "Manage & schedule media effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 🔥 All client components go inside this wrapper */}
        <AppProviders>
          <Navbar />
          {children}
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
