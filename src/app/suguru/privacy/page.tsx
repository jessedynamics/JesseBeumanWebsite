import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Source text: docs/06-privacy-policy.md in the suguru repo. Change both together.
// The URL /suguru/privacy is in the Play Store listing and the app: never move it.

export const metadata: Metadata = {
  title: "Suguru - Privacy Policy",
  description: "Privacy policy for the Suguru puzzle game.",
};

const CONTACT = "jessemakessoftware@gmail.com";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-2xl md:text-3xl font-bold mt-12 mb-4 text-white">{children}</h2>;
}

export default function SuguruPrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl text-gray-300 text-lg leading-relaxed">
        <Link href="/suguru" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Suguru
        </Link>

        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 text-white">
          Suguru Privacy Policy <span className="text-primary">.</span>
        </h1>
        <p className="italic text-gray-400 mb-8">Last updated: 6 November 2026</p>

        <p>
          Suguru is a puzzle game that works offline. This policy covers the Suguru app on Google Play,
          the Windows version, and the web version.
        </p>

        <H2>The short version</H2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Suguru has no account or sign-in, and we (the developer) receive no data about you.</li>
          <li>The <strong>Windows and web versions</strong> collect nothing at all.</li>
          <li>
            The <strong>Google Play version</strong> shows ads from Google AdMob. Google may collect some device data
            to show and measure those ads. Buying &quot;Remove ads&quot; turns off all ads.
          </li>
        </ul>

        <H2>What stays on your device</H2>
        <p>
          Your games in progress, your chapter progress, your settings and your statistics (games
          solved, best times) are saved on your device only. They are never sent anywhere. If you
          uninstall the app or clear its data, they are deleted.
        </p>

        <H2>Ads (Google Play version only)</H2>
        <p>
          The Android app uses Google AdMob to show an ad after some solved puzzles, never during one.
          It also shows a video ad when you choose to watch one for a hint. To show and measure ads and
          prevent fraud, Google may collect:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>your device&apos;s advertising ID</li>
          <li>your IP address, and the approximate location derived from it</li>
          <li>device information, such as the model, operating system and language</li>
          <li>how you interact with ads, such as views and taps</li>
        </ul>
        <p>
          This data goes directly to Google. We do not receive it, store it or combine it with anything.
          Google&apos;s use of it is covered by Google&apos;s own policy:{" "}
          <a href="https://policies.google.com/technologies/partner-sites" className="text-primary underline break-all">
            https://policies.google.com/technologies/partner-sites
          </a>.
        </p>
        <p className="mt-4"><strong>Your choices:</strong></p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
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

        <H2>&quot;Remove ads&quot; purchase (Google Play version only)</H2>
        <p>
          Google Play handles the purchase. We never see your name, email address or payment details.
          The app only stores a flag on your device that says you own &quot;Remove ads&quot;, and it asks Google
          Play to confirm that, so that <strong>Restore purchase</strong> works after you reinstall.
        </p>

        <H2>Children</H2>
        <p>
          Suguru is not directed at children under 13, and we do not knowingly collect data from
          children. The Windows and web versions collect no data from anyone.
        </p>

        <H2>Changes</H2>
        <p>If this policy changes, we will publish the new version at this address with a new date.</p>

        <H2>Contact</H2>
        <p>
          Questions about this policy:{" "}
          <a href={`mailto:${CONTACT}`} className="text-primary underline">{CONTACT}</a>
        </p>
      </div>
    </main>
  );
}
