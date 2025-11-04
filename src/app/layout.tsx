import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Footer import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pro Mentor Guild",
  description: "Professional mentoring and design services",
  icons: {
    icon: "/logo.png", // 👈 use your existing logo
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 👇 Explicit favicon link ensures browser picks it up */}
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {/* ✅ Navbar at top */}
        <Navbar />

        {/* ✅ Main content */}
        <main className="pt-[80px]">{children}</main>

        {/* ✅ Footer visible on all pages */}
        <Footer />
      </body>
    </html>
  );
}
