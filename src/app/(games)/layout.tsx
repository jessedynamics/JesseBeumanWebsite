import "./games.css";
import { SiteFooter, SiteHeader } from "@/components/games/SiteChrome";

export default function GamesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="games">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
