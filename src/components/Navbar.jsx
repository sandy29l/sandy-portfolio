import { useEffect, useState } from "react";
import { Menu, X, FileText } from "lucide-react";
import { navLinks, profile } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-base-950/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* scroll progress */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150" style={{ width: `${progress}%` }} />

      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="font-display font-semibold text-lg tracking-tight text-ink"
        >
          <span className="text-gradient">&lt;</span>{profile.name}<span className="text-gradient">/&gt;</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === link.href.slice(1) ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                    active === link.href.slice(1) ? "w-full" : "w-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-ink btn-gradient"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>

        <button
          className="lg:hidden text-ink"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 bg-base-950/95 backdrop-blur-xl border-b border-white/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`block py-3 text-base font-medium border-b border-white/5 ${
                  active === link.href.slice(1) ? "text-ink" : "text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 w-full rounded-full px-5 py-3 text-sm font-semibold text-ink btn-gradient"
            >
              <FileText size={16} />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
