import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="logo" href="/">
          <span className="logo-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          Jesse Beuman Games
        </Link>
        <nav className="site-nav" aria-label="Main">
          <Link href="/#games">Games</Link>
          <Link href="/suguru">Suguru</Link>
          <Link className="hide-sm" href="/suguru/how-to-play">
            How to play
          </Link>
          <Link href="/portfolio">Who makes these?</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <nav className="links" aria-label="Footer">
          <Link href="/suguru">Suguru</Link>
          <Link href="/suguru/how-to-play">How to play Suguru</Link>
          <Link href="/suguru/privacy">Privacy policy</Link>
        </nav>
        <p className="maker">
          Made in the Netherlands by <Link href="/portfolio">Jesse Beuman</Link>. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

/** Stepped line between sections, like a region edge in a Suguru grid. */
export function RegionBreak({ flip = false }: { flip?: boolean }) {
  const d = flip
    ? "M0 24 H180 V4 H460 V24 H700 V4 H1020 V24 H1200"
    : "M0 4 H300 V24 H520 V4 H780 V24 H960 V4 H1200";
  return (
    <svg className="region-break" viewBox="0 0 1200 28" preserveAspectRatio="none" aria-hidden="true">
      <path d={d} fill="none" strokeWidth="3" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
