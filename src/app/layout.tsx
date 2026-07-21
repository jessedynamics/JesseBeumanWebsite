import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

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
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground relative`}>
        {/* Global Ambient Background */}
        <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] translate-x-1/2" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
          
          {/* Global Noise Overlay */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        </div>

        <SmoothScrollProvider>
          <Navbar />
          {children}
          <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 mt-20">
            <p>© {new Date().getFullYear()} Jesse Beuman. All rights reserved.</p>
          </footer>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
