import { resumeData } from "@/data/resume";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function generateStaticParams() {
  return resumeData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudy(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const project = resumeData.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        {/* Header */}
        <header className="mb-16">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            {project.title} <span className="text-primary">.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">{project.description}</p>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {project.tech.map((tech, i) => (
              <span key={i} className="text-sm font-mono px-3 py-1.5 bg-primary/10 text-primary rounded-md">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 active:scale-95 transition-all">
                Visit Project <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.link.includes("github.com") && (
              <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card hover:bg-white/10 font-medium hover:scale-105 active:scale-95 transition-all text-white">
                View Source <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </header>

        {/* Main Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden glass-card mb-20 flex items-center justify-center">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-500 font-mono tracking-wider">put main project photo here</span>
          )}
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{project.challenge}</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">The Solution</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{project.solution}</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">The Results</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{project.results}</p>
          </section>
        </div>

        {/* Gallery */}
        <section>
          <h2 className="text-3xl font-display font-bold mb-8">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery?.map((img, index) => (
              <div key={index} className="relative aspect-video rounded-xl overflow-hidden glass-card flex items-center justify-center">
                 {img ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={img} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-500 text-sm font-mono tracking-wider">put gallery photo here</span>
                  )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
