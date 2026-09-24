import * as Icons from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { aboutFacts, whatIDo } from "../data";

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p className="section-eyebrow mb-3">About Me</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink max-w-xl">
            A developer passionate about building meaningful software.
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-start">
          <ScrollReveal delay={0.1}>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              I'm a Computer Science Engineering graduate and an aspiring Java / Full Stack
              Developer with a strong interest in backend systems and web development. I enjoy
              turning ambiguous problems into clean, working software — whether that's designing
              a REST API in Java or shaping a responsive interface in React.
            </p>
            <p className="mt-5 text-muted text-base sm:text-lg leading-relaxed">
              I'm most energized by problem solving: tracing a bug to its root cause, refactoring
              a messy function into something readable, or learning a new tool well enough to use
              it with intention. I'm currently focused on deepening my full stack skill set and
              building real-world applications I'm proud to show.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {aboutFacts.map((fact) => {
                const Icon = Icons[fact.icon];
                return (
                  <span
                    key={fact.label}
                    className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-ink/90 hover:border-primary/40 transition-colors duration-300"
                  >
                    {Icon && <Icon size={15} className="text-secondary" />}
                    {fact.label}
                  </span>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl glass p-7 sm:p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-primary/10 blur-3xl" />
              <h3 className="relative font-display font-semibold text-lg text-ink mb-6">
                What I Do
              </h3>
              <div className="relative grid sm:grid-cols-2 gap-4">
                {whatIDo.map((item) => {
                  const Icon = Icons[item.icon];
                  return (
                    <div
                      key={item.title}
                      className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.05] hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        {Icon && <Icon size={17} className="text-secondary" />}
                      </div>
                      <h4 className="text-sm font-semibold text-ink mb-1">{item.title}</h4>
                      <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
