import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: { default: "Jesse Beuman - Portfolio", template: "%s | Jesse Beuman" },
  description: "Portfolio of Jesse Beuman: software, robotics and vision projects.",
};

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="theme-portfolio dark relative min-h-screen bg-background text-foreground font-sans">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] translate-x-1/2" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <SmoothScrollProvider>
        <Navbar />
        {children}
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 mt-20">
          <p>© {new Date().getFullYear()} Jesse Beuman. All rights reserved.</p>
        </footer>
      </SmoothScrollProvider>
    </div>
  );
}
