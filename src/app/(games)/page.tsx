import type { Metadata } from "next";
import Link from "next/link";
import { SuguruBoard, TryPuzzleButton } from "@/components/games/SuguruBoard";
import { GameCard } from "@/components/games/GameCard";
import { RegionBreak } from "@/components/games/SiteChrome";
import { games, SUGURU_STORES } from "@/data/games";

const description =
  "Number puzzles with one answer you can always reach by logic. Try a Suguru right here, and see what else is on the workbench.";

export const metadata: Metadata = {
  title: { absolute: "Jesse Beuman Games: Logic Puzzles for Phone and PC" },
  description,
  alternates: { canonical: "/" },
  openGraph: { title: "Jesse Beuman Games: logic puzzles for phone and PC", description, url: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jesse Beuman Games",
  url: "https://jessebeuman.com",
  logo: "https://jessebeuman.com/images/suguru-icon.png",
  founder: { "@type": "Person", name: "Jesse Beuman", url: "https://jessebeuman.com/portfolio" },
};

export default function GamesHome() {
  const [suguru, ...others] = games;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <section className="hero">
        <div className="wrap">
          <div className="hero-text">
            <h1>Puzzles you solve with your head, not with luck.</h1>
            <p className="lead">
              Small number puzzles for your phone and PC. Every one has a single answer, and you can always
              reach it by thinking it through.
            </p>
            <div className="btns">
              <Link className="btn btn-main" href="/suguru">
                Meet Suguru
              </Link>
              <TryPuzzleButton>Try the puzzle</TryPuzzleButton>
            </div>
            <p className="soon">{SUGURU_STORES.replace("Coming soon", "Suguru is coming soon")}</p>
          </div>
          <SuguruBoard moreHref="/suguru" />
        </div>
      </section>

      <RegionBreak />

      <section id="games">
        <div className="wrap">
          <div className="games-head">
            <h2>The games</h2>
            <p>One out soon, three more on the workbench. Each one is a puzzle you can finish on a bus ride.</p>
          </div>
          <div className="games-grid">
            <GameCard game={suguru} variant="main" />
            {others.map((g, i) => (
              <GameCard key={g.slug} game={g} variant={i === others.length - 1 ? "wide" : "wip"} />
            ))}
          </div>
        </div>
      </section>

      <RegionBreak flip />

      <section>
        <div className="wrap">
          <div className="maker-strip">
            <div>
              <h2>Made by one person</h2>
              <p>
                I&apos;m Jesse, an engineer from the Netherlands. I make the puzzles I want to play myself: fair
                ones you can pick up for five minutes or an hour.
              </p>
            </div>
            <Link className="btn btn-plain" href="/portfolio">
              More about me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
