import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next, Bricolage_Grotesque, Inter, Outfit } from "next/font/google";
import "./globals.css";

// Portfolio fonts (used under /portfolio).
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });

// Games site fonts.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});
const atkinson = Atkinson_Hyperlegible_Next({
  variable: "--font-atkinson",
  subsets: ["latin"],
  adjustFontFallback: false, // next/font has no fallback metrics for this font
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jessebeuman.com"),
  title: {
    default: "Jesse Beuman Games: logic puzzles for phone and PC",
    template: "%s | Jesse Beuman Games",
  },
  description:
    "Number puzzles with one answer you can always reach by logic. Suguru is coming soon to Google Play and the Microsoft Store.",
  openGraph: { siteName: "Jesse Beuman Games", type: "website", locale: "en" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} ${bricolage.variable} ${atkinson.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
