import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="grain mx-auto w-full max-w-none px-6 py-24 sm:px-12 lg:px-16 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-3">
          <h2 className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            About / Journey
          </h2>
        </Reveal>
        <Reveal delay={80} className="lg:col-span-8 lg:col-start-5">
          <p className="text-2xl leading-snug tracking-tight text-balance sm:text-3xl">
            Software engineer building full-stack and machine learning applications engineered for real-world impact — from multi-agent AI systems to scalable production ecosystems.
          </p>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-muted-foreground">
            I am actively shipping high-performance projects across multi-agent LLM systems, multimodal ML models,
            and full-stack web/mobile applications. Equipped with hands-on experience in building audit-ready tools
            and commercial products, I am ready to join the software industry and contribute to high-growth engineering teams.
          </p>
          <ul className="mt-10 grid gap-4 font-mono text-xs text-muted-foreground sm:grid-cols-3">
            <li className="border-t border-border pt-4">
              <span className="block text-foreground">Education</span>Kakatiya Institute of Tech & Science (2022–2026)
            </li>
            <li className="border-t border-border pt-4">
              <span className="block text-foreground">Focus</span>Multi-Agent AI · Full-Stack & ML Systems
            </li>
            <li className="border-t border-border pt-4">
              <span className="block text-foreground">Availability</span>Open to Software Engineering Roles
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}