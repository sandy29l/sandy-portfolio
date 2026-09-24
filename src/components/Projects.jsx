import { Github, ExternalLink, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="max-w-xl">
          <p className="section-eyebrow mb-3">Featured Projects</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
            A few things I've built.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {featured && (
            <ScrollReveal className="lg:col-span-2">
              <ProjectCard project={featured} large />
            </ScrollReveal>
          )}
          {rest.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, large }) {
  return (
    <div
      className={`group relative h-full rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow transition-all duration-500 ${large ? "lg:grid lg:grid-cols-[1.1fr_1fr]" : ""
        }`}
    >
      {/* visual */}
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-base-900 to-accent/10 ${large ? "p-10 lg:p-14" : "p-10"
          }`}
      >
        <div className="absolute inset-0 grid-bg opacity-30 group-hover:scale-110 transition-transform duration-700" />
        {large && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-[11px] font-mono uppercase tracking-wide text-primary">
            <Sparkles size={12} /> Featured
          </span>
        )}
        {/* <span className="relative font-display font-semibold text-3xl text-white/10 group-hover:text-white/20 transition-colors duration-500 select-none">
          {project.title
            .split(" ")
            .map((w) => w[0])
            .slice(0, 3)
            .join("")}
        </span> */}
        <img
          src={project.image}
          alt={`${project.title} project`}
          className="relative w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* content */}
      <div className="relative p-7 flex flex-col">
        <h3 className="font-display font-semibold text-xl text-ink mb-2">{project.title}</h3>
        <p className="text-sm text-muted leading-relaxed flex-1">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-secondary bg-secondary/10 border border-secondary/20 rounded-full px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-primary transition-colors"
          >
            <Github size={16} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-secondary transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
