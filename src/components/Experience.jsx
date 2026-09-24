import { Briefcase } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="max-w-xl">
          <p className="section-eyebrow mb-3">Experience</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
            Where I've worked.
          </h2>
        </ScrollReveal>

        <div className="mt-14 relative pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-primary to-transparent" />

          {experience.map((item, i) => (
            <ScrollReveal key={item.role} delay={i * 0.1} className="relative mb-10 last:mb-0">
              <span className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-base-950 border-2 border-accent shadow-glow-violet" />

              <div className="rounded-2xl glass p-6 sm:p-7 hover:border-accent/30 transition-colors duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Briefcase size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink">{item.role}</h3>
                      <p className="text-sm text-muted">{item.company}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
                    {item.duration}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-primary bg-primary/10 border border-primary/20 rounded-full px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1.5">
                  {item.responsibilities.map((r) => (
                    <li key={r} className="text-sm text-muted flex items-start gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
