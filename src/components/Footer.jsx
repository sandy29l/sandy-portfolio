import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data";
import ScrollToTop from "./ScrollToTop";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-lg text-ink">{profile.name}</p>
          <p className="text-sm text-muted">
            {profile.title} <span className="mx-1.5 text-white/20">|</span> {profile.secondaryTitle}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <SocialIcon href={profile.social.github} icon={Github} label="GitHub" />
          <SocialIcon href={profile.social.linkedin} icon={Linkedin} label="LinkedIn" />
          <SocialIcon href={`mailto:${profile.social.email}`} icon={Mail} label="Email" />
        </div>

        <ScrollToTop />
      </div>

      <p className="mt-10 text-center text-xs text-muted/70 font-mono">
        © {year} {profile.name}. All Rights Reserved.
      </p>
    </footer>
  );
}

function SocialIcon({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-ink hover:border-primary/40 hover:rotate-6 hover:scale-110 transition-all duration-300"
    >
      <Icon size={16} />
    </a>
  );
}
