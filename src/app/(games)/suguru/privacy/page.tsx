import type { Metadata } from "next";
import Link from "next/link";

// Source text: C:\projecten\games\suguru\docs\06-privacy-policy.md (suguru repo). Change both together.
// The URL /suguru/privacy is in the Play Store listing and the app: never move it.

export const metadata: Metadata = {
  title: "Suguru Privacy Policy",
  description:
    "Privacy policy for the Suguru puzzle game on Google Play, Windows and the web: what stays on your device and what Google collects.",
  alternates: { canonical: "/suguru/privacy" },
};

const CONTACT = "jessemakessoftware@gmail.com";

export default function SuguruPrivacyPage() {
  return (
    <section>
      <div className="wrap">
        <article className="prose">
          <p className="crumbs">
            <Link href="/suguru">Suguru</Link> / Privacy policy
          </p>

          <h1>Suguru Privacy Policy</h1>
          <p className="meta">Last updated: 6 November 2026</p>

          <p>
            Suguru is a puzzle game that works offline. This policy covers the Suguru app on Google Play,
            the Windows version, and the web version.
          </p>

          <div className="callout">
            <h2 style={{ marginTop: 0 }}>The short version</h2>
            <ul>
              <li>Suguru has no account or sign-in, and we (the developer) receive no data about you.</li>
              <li>The <strong>Windows and web versions</strong> collect nothing at all.</li>
              <li>
                The <strong>Google Play version</strong> shows ads from Google AdMob. Google may collect some device data
                to show and measure those ads. Buying &quot;Remove ads&quot; turns off all ads.
              </li>
            </ul>
          </div>

          <h2>What stays on your device</h2>
          <p>
            Your games in progress, your chapter progress, your settings and your statistics (games
            solved, best times) are saved on your device only. They are never sent anywhere. If you
            uninstall the app or clear its data, they are deleted.
          </p>

          <h2>Ads (Google Play version only)</h2>
          <p>
            The Android app uses Google AdMob to show an ad after some solved puzzles, never during one.
            It also shows a video ad when you choose to watch one for a hint. To show and measure ads and
            prevent fraud, Google may collect:
          </p>
          <ul>
            <li>your device&apos;s advertising ID</li>
            <li>your IP address, and the approximate location derived from it</li>
            <li>device information, such as the model, operating system and language</li>
            <li>how you interact with ads, such as views and taps</li>
          </ul>
          <p>
            This data goes directly to Google. We do not receive it, store it or combine it with anything.
            Google&apos;s use of it is covered by Google&apos;s own policy:{" "}
            <a href="https://policies.google.com/technologies/partner-sites">
              https://policies.google.com/technologies/partner-sites
            </a>.
          </p>
          <p><strong>Your choices:</strong></p>
          <ul>
            <li>
              In the EEA, the UK and Switzerland, the app asks for your consent before it shows
              personalised ads. You can change that choice at any time with the <strong>Privacy</strong> button on the
              home screen.
            </li>
            <li>
              You can reset or delete your advertising ID, or opt out of personalised ads, in your
              Android settings (Settings → Privacy → Ads).
            </li>
            <li>
              Ads need an internet connection. With the device offline, no ads load and no ad data is
              sent.
            </li>
          </ul>

          <h2>&quot;Remove ads&quot; purchase (Google Play version only)</h2>
          <p>
            Google Play handles the purchase. We never see your name, email address or payment details.
            The app only stores a flag on your device that says you own &quot;Remove ads&quot;, and it asks Google
            Play to confirm that, so that <strong>Restore purchase</strong> works after you reinstall.
          </p>

          <h2>Children</h2>
          <p>
            Suguru is not directed at children under 13, and we do not knowingly collect data from
            children. The Windows and web versions collect no data from anyone.
          </p>

          <h2>Changes</h2>
          <p>If this policy changes, we will publish the new version at this address with a new date.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
          </p>
        </article>
      </div>
    </section>
  );
}
