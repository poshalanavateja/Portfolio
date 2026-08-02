import { useState } from "react";
import { Reveal } from "./Reveal";

const EMAIL = "poshalanavateja@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer id="contact" className="border-t border-border/60">
      <div className="mx-auto w-full max-w-none px-6 py-24 sm:px-12 lg:px-16 sm:py-32">
        <Reveal>
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Contact
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="link-draw mt-8 inline-block text-[clamp(2rem,6vw,4.5rem)] leading-[1.05] font-semibold tracking-tight break-all hover:text-primary"
          >
            {EMAIL}
          </a>
          <p className="mt-3 font-mono text-xs text-muted-foreground">Reach out for research, collaborations & engineering roles</p>

          <div className="mt-10 flex flex-wrap items-center gap-6 font-mono text-xs">
            <button
              onClick={copy}
              className="rounded-full border border-border px-4 py-2 transition-colors duration-200 hover:border-primary hover:text-primary"
            >
              {copied ? "copied ✓" : "copy email"}
            </button>
            <a
              href="https://github.com/poshalanavateja"
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/poshalanavateja/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-wrap justify-between gap-4 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} POSHALA NAVATEJA</span>
          <span>Open to Software Engineering & AI Roles</span>
        </div>
      </div>
    </footer>
  );
}