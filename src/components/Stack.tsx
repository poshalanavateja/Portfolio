import { Reveal } from "./Reveal";

const GROUPS: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "JavaScript", "TypeScript", "C", "Java"] },
  {
    label: "AI & ML",
    items: [
      "LangChain",
      "LangGraph",
      "Scikit-learn",
      "TensorFlow",
      "EfficientNet",
      "OpenCV",
      "Random Forest",
      "Multi-Agent Systems",
    ],
  },
  { label: "Backend", items: ["Node.js", "Express.js", "FastAPI", "PostgreSQL", "Prisma ORM"] },
  { label: "Frontend", items: ["React", "React Native", "Expo", "Vite", "Tailwind CSS"] },
  { label: "Concepts", items: ["RBAC", "Cross-Validation", "Feature Engineering", "Model Evaluation"] },
];

export function Stack() {
  return (
    <section id="stack" className="border-y border-border/60 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-none px-6 sm:px-12 lg:px-16">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Stack map</h2>
          <span className="font-mono text-xs text-muted-foreground">what I reach for</span>
        </Reveal>
      </div>

      <div className="mt-12 space-y-6">
        {GROUPS.map((g, i) => (
          <Reveal key={g.label} delay={i * 70}>
            <div className="mx-auto w-full max-w-none px-6 sm:px-12 lg:px-16">
              <div className="grid gap-3 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-start sm:gap-6">
                <div className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {g.label}
                </div>
                <ul className="flex flex-wrap gap-2 overflow-x-auto pb-1">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border px-3 py-1.5 font-mono text-xs whitespace-nowrap text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:text-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}