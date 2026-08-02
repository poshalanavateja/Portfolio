import { MagneticButton } from "./MagneticButton";
import { TerminalLine } from "./TerminalLine";

export function Hero() {
  return (
    <section className="grain relative mx-auto w-full max-w-none px-6 pt-28 pb-24 sm:px-12 lg:px-16 sm:pt-40 sm:pb-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            POSHALA NAVATEJA — software engineer
          </p>
          <h1 className="mt-8 text-[clamp(2.5rem,7vw,5.25rem)] leading-[0.98] font-semibold tracking-tight text-balance">
            Software engineer building things that think
            <span className="text-muted-foreground">
              {" "}
              — turning ideas into scalable AI-powered products.
            </span>
          </h1>
          <div className="mt-10">
            <TerminalLine />
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <MagneticButton href="#work">View Work</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Get in Touch
            </MagneticButton>
          </div>
        </div>

        <aside className="font-mono text-xs leading-relaxed text-muted-foreground lg:col-span-3 lg:pt-4">
          <div className="border-t border-border pt-4">
            <div className="text-foreground">focus</div>
            <div className="mt-1">AI/ML · applied engineering · agentic systems</div>
          </div>
          <div className="mt-6 border-t border-border pt-4">
            <div className="text-foreground">status</div>
            <div className="mt-1">Open to work · Building scalable AI & software projects</div>
          </div>
        </aside>
      </div>
    </section>
  );
}