import { motion } from "framer-motion";
import { Github, Linkedin, FileDown, ChevronDown } from "lucide-react";
import { profile } from "../data";

const codeLines = [
  { indent: 0, text: "public class Santhosh {", color: "text-secondary" },
  { indent: 0, text: "" },
  { indent: 1, text: "String role = ", tail: '"Java Developer";', color: "text-muted", tailColor: "text-emerald-400" },
  { indent: 0, text: "" },
  { indent: 1, text: "String passion = ", tail: '"Building Applications";', color: "text-muted", tailColor: "text-emerald-400" },
  { indent: 0, text: "" },
  { indent: 1, text: "String goal = ", tail: '"Continuous Learning";', color: "text-muted", tailColor: "text-emerald-400" },
  { indent: 0, text: "" },
  { indent: 1, text: "boolean coding = ", tail: "true;", color: "text-muted", tailColor: "text-primary" },
  { indent: 0, text: "" },
  { indent: 0, text: "}", color: "text-secondary" },
];

const stack = ["Java", "React", "Node.js", "SQL"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-20 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,#000_40%,transparent_100%)]" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-24 -left-24 w-72 h-72 rounded-full bg-primary/20 blur-[100px]" />
      <div className="absolute bottom-10 -right-16 w-80 h-80 rounded-full bg-accent/20 blur-[110px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center w-full">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-eyebrow mb-5">Hello, I'm</p>

          <h1 className="font-display font-semibold text-5xl sm:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-ink">
            {profile.name}
          </h1>

          <h2 className="mt-4 font-display font-medium text-2xl sm:text-3xl">
            <span className="text-gradient">{profile.title}</span>
            <span className="text-muted"> &amp; {profile.secondaryTitle}</span>
          </h2>

          <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-xl">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink btn-gradient hover:scale-[1.03] active:scale-95"
            >
              <FileDown size={17} />
              View Resume
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink glass hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Github size={17} />
              GitHub
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink glass hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Linkedin size={17} />
              LinkedIn
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            {stack.map((tech, i) => (
              <span key={tech} className="flex items-center gap-2 text-sm text-muted font-mono">
                {i !== 0 && <span className="w-1 h-1 rounded-full bg-muted/40 -ml-4 mr-2" />}
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: code editor visual */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-8 -left-6 z-20 animate-float">
            <Badge label="Java" dot="bg-orange-400" />
          </div>
          <div className="absolute -top-4 right-6 z-20 animate-float-slow">
            <Badge label="React" dot="bg-cyan-400" />
          </div>
          <div className="absolute -bottom-6 left-10 z-20 animate-float">
            <Badge label="Node.js" dot="bg-emerald-400" />
          </div>

          <div className="relative rounded-2xl glass shadow-glow overflow-hidden">
            {/* window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs font-mono text-muted">Santhosh.java</span>
            </div>

            <div className="p-6 font-mono text-[13px] sm:text-sm leading-7">
              {codeLines.map((line, idx) => (
                <div key={idx} style={{ paddingLeft: `${line.indent * 20}px` }}>
                  {line.text && <span className={line.color}>{line.text}</span>}
                  {line.tail && <span className={line.tailColor}> {line.tail}</span>}
                  {idx === codeLines.length - 2 && (
                    <span className="inline-block w-[7px] h-4 bg-primary ml-1 align-middle animate-blink" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* subtle particles */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] animate-spin-slow opacity-30 pointer-events-none">
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full bg-secondary" />
            <div className="absolute bottom-4 right-0 w-1 h-1 rounded-full bg-primary" />
            <div className="absolute bottom-0 left-4 w-1 h-1 rounded-full bg-accent" />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to About section"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted hover:text-ink transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown className="animate-bounce" size={18} />
      </a>
    </section>
  );
}

function Badge({ label, dot }) {
  return (
    <div className="flex items-center gap-2 rounded-full glass px-3.5 py-2 shadow-lg">
      <span className={`w-2 h-2 rounded-full ${dot}`} />
      <span className="text-xs font-mono text-ink">{label}</span>
    </div>
  );
}
