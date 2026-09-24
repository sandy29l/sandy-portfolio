import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const handleClick = () => {
    document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Back to top"
      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wide text-muted hover:text-ink transition-colors duration-300"
    >
      Back to Top <ArrowUp size={14} className="hover:-translate-y-0.5 transition-transform duration-300" />
    </button>
  );
}
