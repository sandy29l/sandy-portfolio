import * as Icons from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { skillCategories } from "../data";

const levelStyles = {
  Primary: "text-primary border-primary/40 bg-primary/10",
  Advanced: "text-secondary border-secondary/40 bg-secondary/10",
  Intermediate: "text-accent border-accent/40 bg-accent/10",
  Familiar: "text-muted border-white/15 bg-white/5",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 lg:py-36">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_0%,transparent_80%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal className="max-w-xl">
          <p className="section-eyebrow mb-3">Technical Skills</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink">
            Tools I use to build things end to end.
          </h2>
        </ScrollReveal>

        <div className="mt-14 space-y-12">
          {skillCategories.map((cat, ci) => (
            <ScrollReveal key={cat.category} delay={ci * 0.05}>
              <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-5">
                {cat.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.skills.map((skill) => {
                  const Icon = Icons[skill.icon];
                  return (
                    <div
                      key={cat.category + skill.name}
                      className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-gradient-to-br hover:from-primary/[0.06] hover:to-secondary/[0.06] transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                          {Icon && <Icon size={18} className="text-ink" />}
                        </div>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wide border rounded-full px-2 py-1 ${levelStyles[skill.level]}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-ink">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
