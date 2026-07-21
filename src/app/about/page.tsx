import { Experience } from "@/components/sections/Experience";
import { resumeData } from "@/data/resume";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-12">
          About Me <span className="text-primary">.</span>
        </h1>
        
        <div className="prose prose-invert max-w-none mb-24">
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            {resumeData.detailedAbout.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <Experience />

      {/* Education Summary */}
      <section className="py-24 relative bg-white/[0.02]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display text-4xl font-bold mb-12">
            Education <span className="text-primary">.</span>
          </h2>
          <div className="space-y-8">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl border-l-4 border-l-primary">
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 font-medium mb-4">
                  <span>{edu.school}</span>
                  <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-500" />
                  <span>{edu.location}</span>
                  <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-500" />
                  <span className="text-primary">{edu.duration}</span>
                </div>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
