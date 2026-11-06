import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Values } from "@/components/sections/Values";
import { Interests } from "@/components/sections/Interests";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      <Hero />
      <Values />
      <Skills />
      <Interests />
      <Projects limit={2} />
      <div className="mt-20">
        <Contact />
      </div>
    </main>
  );
}
