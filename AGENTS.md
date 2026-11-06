<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Content rules (owner, 2026-11-06)

The site is the home of Jesse Beuman's games. The old portfolio lives under `/portfolio`.
Same rule as AP-30 in `C:\projecten\games\docs\app-principles.md`.

- **Never mention ads** anywhere on the site: no "ads only between puzzles", no remove-ads
  price, no "no ads" claim. The only exception is `/suguru/privacy`, which must keep its AdMob
  disclosure word for word (source: `C:\projecten\games\suguru\docs\06-privacy-policy.md`).
- **Never reveal how a game is made**: no tech stack, colour values, palettes, tools or
  process. Only advertise the games, explain the rules and features, and show the other games.
- **Contact email only where required** (the privacy policy). No mailto links elsewhere.
- **Fixed URLs**: `/app-ads.txt`, `/suguru` and `/suguru/privacy` are in the Play listing, the
  app and AdMob. Never move them.
- **No fake proof**: no invented ratings, download counts or testimonials.
- **Copy and design must not read as AI slop.** See `docs/DESIGN.md` for the banned words and
  the design tells to avoid.
