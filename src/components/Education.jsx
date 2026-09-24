import { GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="relative py-28 lg:py-36">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="max-w-xl">
          <p className="section-eyebrow mb-3">Education</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
            Academic background.
          </h2>
        </ScrollReveal>

        <div className="mt-14 relative pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          {education.map((item, i) => (
            <ScrollReveal key={item.degree} delay={i * 0.1} className="relative mb-10 last:mb-0">
              <span className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-base-950 border-2 border-secondary shadow-glow-cyan" />

              <div className="rounded-2xl glass p-6 sm:p-7 hover:border-secondary/30 transition-colors duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <GraduationCap size={18} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink">{item.degree}</h3>
                      <p className="text-sm text-muted">{item.field}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-secondary bg-secondary/10 border border-secondary/20 rounded-full px-3 py-1">
                    {item.duration}
                  </span>
                </div>
                <p className="text-sm text-ink/80 font-medium">{item.institution}</p>
                {item.achievements?.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {item.achievements.map((a) => (
                      <li key={a} className="text-sm text-muted flex items-start gap-2">
                        <span className="mt-2 w-1 h-1 rounded-full bg-secondary/60 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
