import type { Metadata } from "next";
import Link from "next/link";

// App page for Suguru: the "developer website" in the Play listing points at this site.

export const metadata: Metadata = {
  title: "Suguru - Logic Number Puzzle",
  description: "Calm number puzzles. One solution, no guessing. Offline, no account.",
};

const CONTACT = "jessemakessoftware@gmail.com";

const points = [
  "Every puzzle has exactly one solution and can be solved by logic alone.",
  "100 levels in Easy, Medium, Hard and Expert, plus a daily puzzle and Chapters.",
  "Hints that teach: each one names the technique and shows the next logical step.",
  "Works fully offline. No account, no sign-in.",
  "Ads only between puzzles, never during one. Remove every ad with a one-time purchase of €2.99.",
];

export default function SuguruPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex items-center gap-6 mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/suguru-icon.png" alt="Suguru icon" className="w-20 h-20 md:w-24 md:h-24 rounded-2xl" />
          <h1 className="font-display text-5xl md:text-7xl font-bold">
            Suguru <span className="text-primary">.</span>
          </h1>
        </div>

        <p className="text-xl text-gray-300 leading-relaxed mb-10">
          A calm logic puzzle. Fill every region with the numbers 1 to its size, so that no two
          touching cells hold the same number, not even diagonally.
        </p>

        <ul className="space-y-4 mb-12">
          {points.map((p, i) => (
            <li key={i} className="glass-card rounded-xl px-5 py-4 text-gray-300">{p}</li>
          ))}
        </ul>

        <p className="text-gray-400 mb-12">Coming soon to Google Play and the Microsoft Store.</p>

        <div className="flex flex-wrap gap-4">
          <Link href="/suguru/privacy" className="inline-flex items-center px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 active:scale-95 transition-all">
            Privacy policy
          </Link>
          <a href={`mailto:${CONTACT}`} className="inline-flex items-center px-6 py-3 rounded-full glass-card hover:bg-white/10 font-medium text-white transition-all">
            {CONTACT}
          </a>
        </div>
      </div>
    </main>
  );
}
