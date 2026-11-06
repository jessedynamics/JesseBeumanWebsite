"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { statusLabel, type Game } from "@/data/games";

export function GameCard({ game, variant }: { game: Game; variant: "main" | "wip" | "wide" }) {
  const artRef = useRef<HTMLSpanElement>(null);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const el = artRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        setFlipped(true);
        io.disconnect();
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const lastIndex = game.art.length - 1;
  const inner = (
    <>
      <span className="game-art" aria-hidden="true" ref={artRef}>
        {game.art.map((digit, i) => (
          <span key={i} className={flipped && i === lastIndex ? "flip" : undefined}>
            {digit}
          </span>
        ))}
      </span>
      <span className="status">{statusLabel[game.status]}</span>
      <h3>{game.name}</h3>
      <p>{game.tagline}</p>
      {game.href ? <span className="more">See the game →</span> : null}
    </>
  );

  if (game.href) {
    return (
      <Link className="game main" href={game.href}>
        {inner}
      </Link>
    );
  }
  return <div className={variant === "wide" ? "game wip wide" : "game wip"}>{inner}</div>;
}
