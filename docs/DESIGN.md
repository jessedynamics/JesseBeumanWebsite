# Design system: games site

Applies to everything outside `/portfolio`. Written down so the site keeps one voice and
generic "AI template" habits don't creep back in.

## Colours (by role)

| Role | Token | Use |
|---|---|---|
| Page | `--paper` | page background (Linen) |
| Ink | `--ink` | text, region lines, frames |
| Action | `--action` | buttons, links, the one strong colour |
| Player | `--pen` | digits the visitor types in the demo, small highlights |
| Mark | `--mark` | selected cell, one highlight per screen at most |
| Quiet | `--quiet` | secondary text, thin lines |

Values live in `src/app/globals.css`. Never print colour values on a page.

## Type

- **Headings:** Bricolage Grotesque. Slightly quirky, used at 600–800 weight. No italics.
- **Body:** Atkinson Hyperlegible Next. Friendly and very readable for all ages.
- Sentence case everywhere. No all-caps labels above headings.

## Signature idea

**Region lines.** Thick ink borders, like the regions of a Suguru grid, frame the hero board,
the game cards and the section breaks. This is the one repeated motif. Everything else stays
quiet.

## Motion (taken from the game)

| Name | What | When |
|---|---|---|
| `pulse` | 0.45 s ease-out, scale 0.9 + inset ring | a region in the demo is filled correctly |
| `ripple` | 0.5 s ease-out, scale 0.88 + highlight, staggered per region (min(45, 500/last) ms) | the demo is solved |
| `flip` | 0.7 s ease-out, rotateY 90° → 0 | a digit appears on a game card when it scrolls into view |
| lift | 150–200 ms, translateY(-2px) | hover on buttons and cards |

Only animate `transform` and `opacity`. All of it is off under `prefers-reduced-motion`.
No confetti, no parallax, no custom cursor, no fade-up on every section.

## Tells we removed (do not bring back)

Design: purple/blue gradients, glow orbs, glass cards, one italic serif word in a headline,
numbered 01/02/03 sections, all-caps eyebrow labels, three identical icon cards, coloured
stripe on a card edge, emoji as icons, fake stats or testimonials, dashed "placeholder" boxes,
the same section rhythm repeated down the page.

Copy: vague hero lines, "not just X, it's Y", "no X, no Y, just Z", groups of three by reflex,
em-dash chains, hedging, superlatives, "Get started" / "Learn more" buttons.

### Banned words

unlock, unleash, elevate, empower, embark, delve, dive into, harness, leverage, supercharge,
revolutionize, streamline, foster, showcase, seamless, robust, cutting-edge, game-changing,
groundbreaking, innovative, next-level, world-class, powerful, vibrant, journey, realm,
landscape, tapestry, ecosystem, testament, "in today's fast-paced world", "whether you're X or Y".

Test every line: would you say it out loud to a friend?
