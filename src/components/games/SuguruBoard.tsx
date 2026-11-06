"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DEMO_PUZZLE } from "@/data/games";

const { regions: REG, solution: SOL, givens: GIV } = DEMO_PUZZLE;
const N = 5;
const INTRO = "Tap an empty cell, then a number. Matching numbers may never touch, not even corner to corner.";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Regions ordered by first appearance in reading order (drives the win ripple).
const ORDER: number[] = [];
REG.flat().forEach((id) => {
  if (!ORDER.includes(id)) ORDER.push(id);
});
const LAST = ORDER.length - 1;
const STEP = Math.min(45, 500 / (LAST || 1));

const SIZE: Record<number, number> = {};
REG.flat().forEach((id) => {
  SIZE[id] = (SIZE[id] || 0) + 1;
});

type Pos = [number, number];

export function SuguruBoard({ moreHref }: { moreHref?: string }) {
  const [values, setValues] = useState<number[][]>(() => GIV.map((row) => row.slice()));
  const [sel, setSel] = useState<Pos | null>(null);
  const [solved, setSolved] = useState(false);
  const [pulseId, setPulseId] = useState<number | null>(null);
  const [rippling, setRippling] = useState(false);
  const [showWin, setShowWin] = useState(false);

  const demoRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const timers = useRef<number[]>([]);
  const pulseTimer = useRef<number | null>(null);

  useEffect(() => {
    const list = timers.current;
    return () => {
      list.forEach((t) => window.clearTimeout(t));
      if (pulseTimer.current !== null) window.clearTimeout(pulseTimer.current);
    };
  }, []);

  const select = useCallback((r: number, c: number) => {
    setSel([r, c]);
    cellRefs.current[r * N + c]?.focus();
  }, []);

  const put = useCallback(
    (n: number) => {
      if (!sel || solved) return;
      const [r, c] = sel;
      if (n > SIZE[REG[r][c]]) return;
      const next = values.map((row) => row.slice());
      next[r][c] = n;
      setValues(next);

      if (next.every((row, y) => row.every((v, x) => v === SOL[y][x]))) {
        setSolved(true);
        setSel(null);
        setPulseId(null);
        if (reducedMotion()) {
          setShowWin(true);
          return;
        }
        setRippling(true);
        timers.current.push(
          window.setTimeout(() => {
            setRippling(false);
            setShowWin(true);
          }, LAST * STEP + 500),
        );
        return;
      }

      const id = REG[r][c];
      const done = next.every((row, y) => row.every((v, x) => REG[y][x] !== id || v === SOL[y][x]));
      if (n && done && !reducedMotion()) {
        if (pulseTimer.current !== null) window.clearTimeout(pulseTimer.current);
        setPulseId(id);
        pulseTimer.current = window.setTimeout(() => setPulseId(null), 450);
      }
    },
    [sel, solved, values],
  );

  // "Try the puzzle" buttons dispatch this event.
  useEffect(() => {
    const onFocus = () => {
      const demo = demoRef.current;
      if (!demo) return;
      demo.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "center" });
      const first = GIV.flat().findIndex((v) => !v);
      if (first < 0 || solved) return;
      select(Math.floor(first / N), first % N);
    };
    window.addEventListener("suguru-demo-focus", onFocus);
    return () => window.removeEventListener("suguru-demo-focus", onFocus);
  }, [select, solved]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!sel || solved) return;
    if (/^[1-5]$/.test(e.key)) {
      put(Number(e.key));
      return;
    }
    if (e.key === "Backspace" || e.key === "Delete" || e.key === "0") {
      put(0);
      return;
    }
    const moves: Record<string, Pos> = {
      ArrowUp: [-1, 0],
      ArrowDown: [1, 0],
      ArrowLeft: [0, -1],
      ArrowRight: [0, 1],
    };
    const mv = moves[e.key];
    if (!mv) return;
    e.preventDefault();
    let [r, c] = sel;
    for (let i = 0; i < N * N; i++) {
      r = (r + mv[0] + N) % N;
      c = (c + mv[1] + N) % N;
      if (!GIV[r][c]) break;
    }
    select(r, c);
  };

  const conflicts = (r: number, c: number) => {
    const v = values[r][c];
    if (!v) return false;
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if ((y === r && x === c) || values[y][x] !== v) continue;
        if (Math.abs(y - r) <= 1 && Math.abs(x - c) <= 1) return true;
        if (REG[y][x] === REG[r][c]) return true;
      }
    }
    return false;
  };

  const selSize = sel ? SIZE[REG[sel[0]][sel[1]]] : 0;
  const cells = useMemo(() => Array.from({ length: N * N }, (_, i) => [Math.floor(i / N), i % N] as Pos), []);

  return (
    <div className="demo" id="demo" ref={demoRef} onKeyDown={onKeyDown}>
      <div className="demo-head">
        <strong>Try it</strong>
        <span>Each shape holds 1 to its size</span>
      </div>
      <div className="board" role="grid" aria-label="Suguru puzzle, 5 by 5">
        {cells.map(([r, c]) => {
          const cls = ["cell"];
          if (r > 0 && REG[r - 1][c] !== REG[r][c]) cls.push("edge-top");
          if (c > 0 && REG[r][c - 1] !== REG[r][c]) cls.push("edge-left");
          const style = rippling ? { animationDelay: `${ORDER.indexOf(REG[r][c]) * STEP}ms` } : undefined;
          if (rippling) cls.push("ripple");
          else if (pulseId !== null && REG[r][c] === pulseId) cls.push("pulse");

          if (GIV[r][c]) {
            cls.push("given");
            return (
              <div key={`${r}-${c}`} className={cls.join(" ")} role="gridcell" style={style}>
                {GIV[r][c]}
              </div>
            );
          }

          if (sel && !solved) {
            if (sel[0] === r && sel[1] === c) cls.push("sel");
            else if (REG[r][c] === REG[sel[0]][sel[1]]) cls.push("peer");
          }
          if (conflicts(r, c)) cls.push("bad");
          const v = values[r][c];
          return (
            <button
              key={`${r}-${c}`}
              type="button"
              className={cls.join(" ")}
              role="gridcell"
              style={style}
              aria-label={`Row ${r + 1}, column ${c + 1}, ${v || "empty"}`}
              ref={(el) => {
                cellRefs.current[r * N + c] = el;
              }}
              onClick={() => !solved && select(r, c)}
            >
              {v || ""}
            </button>
          );
        })}
      </div>
      <div className="pad">
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} type="button" disabled={solved || !sel || n > selSize} onClick={() => put(n)}>
            {n}
          </button>
        ))}
        <button type="button" aria-label="Clear" disabled={solved || !sel} onClick={() => put(0)}>
          ⌫
        </button>
      </div>
      <p className={showWin ? "demo-msg win" : "demo-msg"} aria-live="polite">
        {showWin ? (
          <>
            Solved! Suguru has 100 more like this, and they get much harder.
            {moreHref ? (
              <>
                {" "}
                <Link href={moreHref}>See the game</Link>
              </>
            ) : null}
          </>
        ) : solved ? (
          ""
        ) : (
          INTRO
        )}
      </p>
    </div>
  );
}

export function TryPuzzleButton({ children }: { children: React.ReactNode }) {
  return (
    <button type="button" className="btn btn-plain" onClick={() => window.dispatchEvent(new Event("suguru-demo-focus"))}>
      {children}
    </button>
  );
}
