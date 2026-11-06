import type { Metadata } from "next";
import Link from "next/link";
import "./(games)/games.css";
import { SiteHeader, SiteFooter } from "@/components/games/SiteChrome";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="games">
      <SiteHeader />
      <main>
        <section>
          <div className="wrap">
            <div className="mini" aria-hidden="true">
              <span className="x">4</span>
              <span>0</span>
              <span className="x">4</span>
            </div>
            <h1 style={{ marginTop: 24 }}>This page doesn&apos;t fit the grid.</h1>
            <p className="lead">The page you&apos;re looking for isn&apos;t here. It may have moved.</p>
            <div className="btns">
              <Link className="btn btn-main" href="/">Back to the games</Link>
              <Link className="btn btn-plain" href="/suguru">Go to Suguru</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
