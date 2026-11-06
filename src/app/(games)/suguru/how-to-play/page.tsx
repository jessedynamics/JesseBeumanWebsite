import type { Metadata } from "next";
import Link from "next/link";

const TITLE = "How to Play Suguru: Rules and Tips for Beginners";
const DESCRIPTION =
  "Learn the Suguru (Tectonic) rules and the first moves to try: one-cell shapes, two-cell shapes and the touching rule, with small examples.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/suguru/how-to-play" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/suguru/how-to-play" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to play Suguru (Tectonic)",
  description: DESCRIPTION,
  url: "https://jessebeuman.com/suguru/how-to-play",
  author: { "@type": "Person", name: "Jesse Beuman" },
};

export default function HowToPlayPage() {
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="wrap">
        <article className="prose">
          <p className="crumbs">
            <Link href="/suguru">Suguru</Link> / How to play
          </p>
          <h1>How to play Suguru (Tectonic)</h1>
          <p>
            Suguru is a number puzzle on a grid that is split into shapes. You fill every cell with a number, and
            there is only one right answer. You never need to guess. Every step can be worked out. This page covers
            the rules and the first moves that get most puzzles going.
          </p>

          <h2>The rules</h2>
          <ol>
            <li>Fill each shape with the numbers 1 up to its size. A shape of three cells holds 1, 2 and 3, once each.</li>
            <li>The same number may never touch itself. That includes diagonals, so every cell has up to 8 neighbours to check.</li>
            <li>Each puzzle has exactly one solution, and logic alone will find it.</li>
          </ol>

          <h2>Your first moves</h2>

          <h3>One-cell shapes are always 1</h3>
          <p>A shape with a single cell can only hold a 1. Write those in first.</p>

          <h3>Two-cell shapes hold 1 and 2</h3>
          <p>
            A shape with two cells holds a 1 and a 2. You may not know which way round yet, but you know the pair,
            and that is often enough to rule things out nearby.
          </p>

          <h3>A number rules itself out around it</h3>
          <p>
            Once a cell holds a number, none of the 8 cells around it can hold the same number. Cross that number
            off as an option in all of them.
          </p>
          <div className="mini">
            <span className="x"></span>
            <span className="x"></span>
            <span className="x"></span>
            <span className="x"></span>
            <span className="ok">2</span>
            <span className="x"></span>
            <span className="x"></span>
            <span className="x"></span>
            <span className="x"></span>
          </div>

          <h3>The last number left</h3>
          <p>
            Take a shape of four cells where you have already placed 1, 2 and 4. The empty cell must be 3. Count what
            a shape still needs, and when only one number is missing, you know where it goes.
          </p>

          <h3>The only place left</h3>
          <p>
            Pick a number a shape still needs, then check each empty cell in that shape. If neighbouring numbers
            rule it out everywhere except one cell, it goes in that cell.
          </p>

          <h3>A cell that touches both cells of a two-cell shape</h3>
          <p>
            Say a two-cell shape holds a 1 and a 2, and an empty cell touches both of its cells. Whichever way round
            they end up, that cell sits next to a 1 and next to a 2. So it can be neither. Cross out 1 and 2 in it.
          </p>
          <div className="mini">
            <span className="ok">?</span>
            <span className="ok">?</span>
            <span></span>
            <span></span>
            <span className="x">3+</span>
            <span></span>
          </div>

          <h2>Stuck?</h2>
          <p>
            Suguru never needs a guess. If you cannot see a move, look for the shape with the fewest options left
            and work out what each of its cells can still be. Then check the cells around the numbers you already
            have. Somewhere on the board, one cell has only one option.
          </p>
          <p>
            In the Suguru app, a hint names the technique and points at the cell. Next time you can spot it yourself.
          </p>

          <h2>Other names</h2>
          <p>
            In the Netherlands, Belgium and Germany the puzzle is usually called Tectonic. You may also find it as
            Number Blocks. It was invented by Naoki Inaba in Japan, and the rules are the same under every name.
          </p>

          <div className="callout">
            <p>Ready to try it on a real board?</p>
            <p style={{ marginTop: 12 }}>
              <Link className="btn btn-main" href="/suguru">
                See the Suguru game
              </Link>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
