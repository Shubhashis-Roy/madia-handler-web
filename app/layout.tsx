import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Media Handler - Manage & Schedule Your Media Effortlessly",
  description: "Simple social media management for creators & brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
