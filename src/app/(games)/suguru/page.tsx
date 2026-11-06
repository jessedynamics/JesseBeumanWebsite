import type { Metadata } from "next";
import Link from "next/link";
import { RegionBreak } from "@/components/games/SiteChrome";
import { SuguruBoard, TryPuzzleButton } from "@/components/games/SuguruBoard";
import { SUGURU_STORES } from "@/data/games";

const TITLE = "Suguru Puzzle Game: Offline Number Logic";
const DESCRIPTION =
  "Suguru, also known as Tectonic, is an offline number logic puzzle with 100 levels, a daily puzzle and hints that teach. Free, no account.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/suguru" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/suguru" },
};

const faq: { q: string; a: string }[] = [
  {
    q: "What is Suguru?",
    a: "A logic puzzle from Japan, invented by Naoki Inaba. In the Netherlands, Belgium and Germany it's often called Tectonic, and you may also see Number Blocks. The grid is split into shapes, and you fill each one with 1 up to its size. The same number may never touch itself, not even diagonally.",
  },
  {
    q: "How do I start a Suguru puzzle?",
    a: "Look at the one-cell and two-cell shapes first. A one-cell shape is always 1. Then use the touching rule: a number rules itself out of every cell around it, diagonals included.",
  },
  { q: "Is Suguru free?", a: "Yes, Suguru is free to download." },
  {
    q: "Does it work offline?",
    a: "Yes. Every level, the daily puzzle and the hints work without a connection, and you don't need an account.",
  },
  { q: "Where can I get it?", a: SUGURU_STORES },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["VideoGame", "MobileApplication"],
    name: "Suguru",
    alternateName: ["Tectonic", "Number Blocks"],
    description:
      "A number logic puzzle. Fill each shape with 1 up to its size, and keep the same number from touching itself. 100 levels, a daily puzzle and hints that teach. Plays offline.",
    url: "https://jessebeuman.com/suguru",
    image: "https://jessebeuman.com/images/suguru-icon.png",
    applicationCategory: "GameApplication",
    genre: "Puzzle",
    gamePlatform: ["Android", "Windows"],
    operatingSystem: "Android, Windows",
    author: { "@type": "Person", name: "Jesse Beuman" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

export default function SuguruPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <section className="hero">
        <div className="wrap">
          <div className="hero-text">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero-icon" src="/images/suguru-icon.png" alt="Suguru app icon" width={88} height={88} />
            <h1>Suguru: fill the shapes, keep the twins apart.</h1>
            <p className="lead">
              100 hand-picked levels, a fresh puzzle every day, and hints that teach you the trick instead of giving
              the answer away. Plays offline, with no account.
            </p>
            <div className="btns">
              <TryPuzzleButton>Try a puzzle</TryPuzzleButton>
              <Link className="btn btn-plain" href="/suguru/how-to-play">
                Read the rules
              </Link>
            </div>
            <p className="soon">{SUGURU_STORES}</p>
          </div>
          <SuguruBoard />
        </div>
      </section>

      <RegionBreak />

      <section>
        <div className="wrap">
          <h2 style={{ marginBottom: 20 }}>Three rules. That&apos;s the whole game.</h2>
          <div className="rules">
            <div className="rule">
              <div className="mini">
                <span className="ok">1</span>
                <span className="ok">2</span>
                <span className="ok">3</span>
              </div>
              <p>
                <strong>Count up</strong>A shape of three cells holds 1, 2 and 3. A shape of five holds 1 to 5.
              </p>
            </div>
            <div className="rule">
              <div className="mini">
                <span className="x">2</span>
                <span>1</span>
                <span></span>
                <span></span>
                <span className="x">2</span>
                <span></span>
              </div>
              <p>
                <strong>No touching twins</strong>The same number can&apos;t sit next to itself, not even diagonally.
              </p>
            </div>
            <div className="rule">
              <div className="mini">
                <span>?</span>
                <span>?</span>
                <span>?</span>
              </div>
              <p>
                <strong>Never guess</strong>Each puzzle has one answer. If you&apos;re stuck, there is always a next
                step you can find.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap inside">
          <h2>What&apos;s in the box</h2>
          <ul>
            <li>
              <b>100 levels</b>
              <span>From Easy to Expert, 25 each, sorted so every step is a little harder than the last.</span>
            </li>
            <li>
              <b>Daily puzzle</b>
              <span>A new one every day, the same for everyone.</span>
            </li>
            <li>
              <b>Chapters</b>
              <span>Each level you solve reveals one digit of a bigger final puzzle.</span>
            </li>
            <li>
              <b>Hints that teach</b>
              <span>A hint names the technique and points at the cell, so next time you spot it yourself.</span>
            </li>
            <li>
              <b>Your colours</b>
              <span>Twelve themes, light and dark, plus three text sizes.</span>
            </li>
            <li>
              <b>Anywhere</b>
              <span>No sign-in and no connection needed. Your progress stays on your device.</span>
            </li>
          </ul>
        </div>
      </section>

      <RegionBreak flip />

      <section>
        <div className="wrap">
          <div className="faq" id="faq">
            <h2>Questions</h2>
            {faq.map(({ q, a }, i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>
                  {a}
                  {i === 1 && (
                    <>
                      {" "}
                      <Link href="/suguru/how-to-play">Read the full rules and tips</Link>.
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
