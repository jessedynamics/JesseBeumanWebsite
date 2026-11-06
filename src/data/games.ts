// Games shown on the site. Content rules: AGENTS.md "Content rules" (no ads, no tech details).

export type GameStatus = "coming-soon" | "workbench" | "live";

export interface Game {
  slug: string;
  name: string;
  status: GameStatus;
  /** One line used on cards and in metadata. */
  tagline: string;
  /** Page path, only for games that have a page. */
  href?: string;
  /** Digits drawn in the small card art, row by row ("" = empty cell). The last one flips in. */
  art: string[];
}

export const games: Game[] = [
  {
    slug: "suguru",
    name: "Suguru",
    status: "coming-soon",
    href: "/suguru",
    tagline:
      "Fill each shape with the numbers 1 up to its size. Two matching numbers may never touch. Easy to learn, and the Expert levels will make you stop and stare.",
    art: ["1", "2", "1", "3", "3", "4", "5", "2", "1", "2", "3", "4", "4", "5", "1", "2"],
  },
  {
    slug: "calcudoku",
    name: "Calcudoku",
    status: "workbench",
    tagline: "Fill the grid so each cage adds, subtracts or multiplies to its target.",
    art: ["6", "", "+", "", "3", "", "×", "", "2"],
  },
  {
    slug: "killer-sudoku",
    name: "Killer Sudoku",
    status: "workbench",
    tagline: "Sudoku with dotted cages that tell you their sum, and almost no given digits.",
    art: ["15", "", "", "", "9", "", "", "", "7"],
  },
  {
    slug: "jigsaw-sudoku",
    name: "Jigsaw Sudoku",
    status: "workbench",
    tagline: "The classic rules, but the boxes are bent into odd shapes, so the usual shortcuts stop working.",
    art: ["4", "", "1", "", "2", "", "3", "", "5"],
  },
];

export const statusLabel: Record<GameStatus, string> = {
  "coming-soon": "Coming soon",
  workbench: "On the workbench",
  live: "Out now",
};

/** Store availability line. Change when the game is live (then use the official badges). */
export const SUGURU_STORES = "Coming soon to Google Play and the Microsoft Store.";

/**
 * 5x5 demo puzzle for the playable board. Unique solution, checked with a solver.
 * REGIONS[r][c] = region id, SOLUTION = the answer, GIVENS = shown at start (0 = empty).
 */
export const DEMO_PUZZLE = {
  regions: [
    [3, 3, 2, 2, 2],
    [3, 3, 2, 2, 5],
    [4, 3, 5, 5, 5],
    [4, 4, 4, 0, 0],
    [1, 1, 1, 1, 0],
  ],
  solution: [
    [1, 2, 1, 2, 4],
    [3, 4, 3, 5, 1],
    [1, 5, 2, 4, 3],
    [2, 4, 3, 1, 2],
    [3, 1, 2, 4, 3],
  ],
  givens: [
    [0, 0, 1, 0, 4],
    [3, 4, 3, 0, 1],
    [1, 5, 2, 4, 3],
    [0, 4, 0, 1, 0],
    [0, 0, 0, 0, 3],
  ],
};
