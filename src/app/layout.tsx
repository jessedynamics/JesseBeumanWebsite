import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesse Beuman - Portfolio",
  description: "Full-Stack Developer & UI/UX Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}>
        <Navbar />
        {children}
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 mt-20">
          <p>© {new Date().getFullYear()} Jesse Beuman. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
