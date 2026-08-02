import { Reveal } from "./Reveal";

type Project = {
  index: string;
  title: string;
  description: string;
  stack: string[];
  flagship?: boolean;
  liveUrl?: string;
  githubUrl?: string;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Multi-Agent AI Vendor Bid Evaluation",
    description:
      "GDG Agentathon 2025: Multi-agent LLM system built with LangChain & FastAPI for automated clause-level procurement analysis.",
    stack: ["LangChain", "LangGraph", "FastAPI", "Gemini 2.0", "React"],
    flagship: true,
  },
  {
    index: "02",
    title: "Zordr — Campus Food Ordering Ecosystem",
    description:
      "Multi-tenant food ordering ecosystem with RBAC & real-time inventory tracking; sold MVP to client for ₹80,000 ($1,000 USD).",
    stack: ["React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
  },
  {
    index: "03",
    title: "Multimodal Parkinson's Disease Prediction",
    description:
      "Biomedical ML system fusing EfficientNetB0 handwriting CNN & Random Forest voice classifier (92.3% test accuracy).",
    stack: ["Python", "TensorFlow", "scikit-learn", "OpenCV", "EfficientNetB0"],
    liveUrl: "https://parkinsons-disease-prediction-ml.vercel.app",
  },
  {
    index: "04",
    title: "Deepfake Video Detection CNN",
    description:
      "EfficientNetB0-based classifier trained on Celeb-DF (v2) dataset with 88.5% validation accuracy & OpenCV preprocessing.",
    stack: ["Python", "EfficientNetB0", "CNN", "OpenCV", "PyTorch"],
  },
];

function Card({ p }: { p: Project }) {
  return (
    <article
      className="grain group flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-primary/40 sm:p-8"
    >
      <div>
        <div className="flex items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <span>{p.index}</span>
          {p.flagship && <span className="text-primary font-semibold">flagship · GDG Agentathon 2025</span>}
        </div>
        <h3
          className={`mt-4 font-semibold tracking-tight ${p.flagship ? "text-2xl sm:text-3xl" : "text-xl"}`}
        >
          {p.liveUrl ? (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
            >
              {p.title}
              <span className="text-sm font-normal text-muted-foreground">↗</span>
            </a>
          ) : (
            p.title
          )}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed sm:text-base">{p.description}</p>
      </div>

      <div className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-6 font-mono text-xs">
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw text-primary font-semibold flex items-center gap-1"
            >
              Live Demo ↗
            </a>
          )}
          <a
            href={p.githubUrl || "https://github.com/poshalanavateja"}
            target="_blank"
            rel="noopener noreferrer"
            className="link-draw text-foreground hover:text-primary"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="work" className="mx-auto w-full max-w-none px-6 py-24 sm:px-12 lg:px-16 sm:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Selected work</h2>
        <span className="font-mono text-xs text-muted-foreground">04 projects</span>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal
            key={p.index}
            delay={i * 80}
            className={p.flagship ? "lg:col-span-2" : "lg:col-span-1"}
          >
            <div className="h-full">
              <Card p={{ ...p }} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}