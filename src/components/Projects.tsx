import { Reveal } from "./Reveal";

type Project = {
  index: string;
  title: string;
  problem: string;
  detail: string;
  stack: string[];
  flagship?: boolean;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Multi-Agent AI Vendor Bid Evaluation",
    problem: "Manual and bias-prone government procurement evaluation processes.",
    detail:
      "GDG Agentathon 2025: Multi-agent LLM system using LangChain, LangGraph, FastAPI, and Gemini-2.0 Flash for clause-level vendor compliance analysis. Features orchestrator, RFP intelligence, compliance, and report-generation agents producing audit-ready PDFs with a real-time React dashboard.",
    stack: ["LangChain", "LangGraph", "FastAPI", "Gemini 2.0", "React"],
    flagship: true,
  },
  {
    index: "02",
    title: "Zordr — Campus Food Ordering Ecosystem",
    problem: "Campus food ordering inefficiencies and fragmented vendor workflows.",
    detail:
      "Architected multi-tenant food ordering ecosystem with RBAC, financial settlements, and real-time inventory tracking (PostgreSQL & Prisma). Built React Native + Expo mobile app and React admin dashboard. Sold MVP to client company for ₹80,000 ($1,000 USD).",
    stack: ["React Native", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
  },
  {
    index: "03",
    title: "Multimodal Parkinson's Disease Prediction",
    problem: "Single-signal screening misses early-stage motor decline.",
    detail:
      "Major Project: Multimodal biomedical prediction combining EfficientNetB0 CNN on handwriting spirals fused with a Random Forest voice classifier. Achieved 92.3% test accuracy and 0.97 recall through 5-fold cross-validation with late-fusion probability. IEEE/Scopus manuscript in prep.",
    stack: ["Python", "TensorFlow", "scikit-learn", "OpenCV", "EfficientNetB0"],
  },
  {
    index: "04",
    title: "Deepfake Video Detection CNN",
    problem: "Targeted AI-generated video misinformation across media platforms.",
    detail:
      "EfficientNetB0-based classifier trained on Celeb-DF (v2) dataset (10K images). Achieved 88.5% validation accuracy, 87.8% test accuracy, F1-score 0.87, and AUC-ROC 0.93 with GPU-accelerated OpenCV preprocessing.",
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
          className={`mt-5 font-semibold tracking-tight ${p.flagship ? "text-3xl sm:text-4xl" : "text-2xl"}`}
        >
          {p.title}
        </h3>
        <p className="mt-3 max-w-prose text-sm text-muted-foreground sm:text-base">{p.problem}</p>
        <p className="mt-5 max-w-prose border-l border-primary/40 pl-4 font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {p.detail}
        </p>
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
          <a
            href="https://github.com/poshalanavateja"
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