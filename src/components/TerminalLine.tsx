import { useEffect, useState } from "react";

const LINES: string[] = [
  "currently building AI-native tools & scalable systems",
  "open for software engineering & AI roles",
  "agents, evals, and systems that think",
];

export function TerminalLine() {
  const [index, setIndex] = useState(0);
  const [len, setLen] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = LINES[index] ?? "";
    if (!deleting && len === full.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && len === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % LINES.length);
      return;
    }
    const t = setTimeout(() => setLen((l) => l + (deleting ? -1 : 1)), deleting ? 28 : 55);
    return () => clearTimeout(t);
  }, [len, deleting, index]);

  return (
    <p className="font-mono text-sm text-muted-foreground sm:text-base">
      <span className="text-primary">&gt;</span>{" "}
      <span className="text-foreground">{(LINES[index] ?? "").slice(0, len)}</span>
      <span className="caret-blink ml-0.5 inline-block h-[1em] w-[0.55ch] translate-y-[0.15em] bg-primary" />
    </p>
  );
}